const fs = require("fs");
const path = require("path");

const usageFilePath = path.join(__dirname, "usageData.json");
const profileFilePath = path.join(__dirname, "profileData.json");

function ensureFile(filePath, defaultData = {}) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), "utf8");
    }
  } catch (error) {
    console.error(`failed to ensure file ${filePath}:`, error);
  }
}

function loadJson(filePath, defaultData = {}) {
  try {
    ensureFile(filePath, defaultData);
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error(`failed to load ${filePath}:`, error);
    return defaultData;
  }
}

function saveJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error(`failed to save ${filePath}:`, error);
  }
}

const usageData = loadJson(usageFilePath, {});
const profileData = loadJson(profileFilePath, {});

function getNow() {
  return Date.now();
}

function getOrCreateUserUsage(userId) {
  if (!usageData[userId]) {
    usageData[userId] = {
      totalCount: 0,
      lastUsedAt: null,
      lastCategory: null,
      sameCategoryStreak: 0,
      recentUses: []
    };
  }
  return usageData[userId];
}

function getOrCreateUserProfile(userId) {
  if (!profileData[userId]) {
    profileData[userId] = {
      favoriteCategory: null,
      categoryCounts: {},
      customAffirmations: []
    };
  }

  if (!Array.isArray(profileData[userId].customAffirmations)) {
    profileData[userId].customAffirmations = [];
  }

  return profileData[userId];
}

function recordUsage(userId, category) {
  const userUsage = getOrCreateUserUsage(userId);
  const userProfile = getOrCreateUserProfile(userId);
  const now = getNow();

  userUsage.totalCount += 1;
  userUsage.lastUsedAt = now;

  if (userUsage.lastCategory === category) {
    userUsage.sameCategoryStreak += 1;
  } else {
    userUsage.sameCategoryStreak = 1;
  }

  userUsage.lastCategory = category;

  userUsage.recentUses.push({
    category,
    timestamp: now
  });

  userUsage.recentUses = userUsage.recentUses.filter(
    entry => now - entry.timestamp <= 10 * 60 * 1000
  );

  if (!userProfile.categoryCounts[category]) {
    userProfile.categoryCounts[category] = 0;
  }

  userProfile.categoryCounts[category] += 1;

  const favoriteCategory = Object.entries(userProfile.categoryCounts)
    .sort((a, b) => b[1] - a[1])[0];

  userProfile.favoriteCategory = favoriteCategory ? favoriteCategory[0] : category;

  saveJson(usageFilePath, usageData);
  saveJson(profileFilePath, profileData);

  return {
    totalCount: userUsage.totalCount,
    sameCategoryStreak: userUsage.sameCategoryStreak,
    recentUsesInTenMinutes: userUsage.recentUses.length,
    favoriteCategory: userProfile.favoriteCategory,
    lastCategory: userUsage.lastCategory
  };
}

function getUserUsage(userId) {
  return getOrCreateUserUsage(userId);
}

function getUserProfile(userId) {
  return getOrCreateUserProfile(userId);
}

function resetUserMemory(userId) {
  usageData[userId] = {
    totalCount: 0,
    lastUsedAt: null,
    lastCategory: null,
    sameCategoryStreak: 0,
    recentUses: []
  };

  profileData[userId] = {
    favoriteCategory: null,
    categoryCounts: {},
    customAffirmations: []
  };

  saveJson(usageFilePath, usageData);
  saveJson(profileFilePath, profileData);
}

function addCustomAffirmation(userId, text) {
  const profile = getOrCreateUserProfile(userId);
  profile.customAffirmations.push(text);
  saveJson(profileFilePath, profileData);
  return profile.customAffirmations;
}

function getCustomAffirmations(userId) {
  const profile = getOrCreateUserProfile(userId);
  return profile.customAffirmations;
}

function deleteCustomAffirmation(userId, index) {
  const profile = getOrCreateUserProfile(userId);

  if (index < 0 || index >= profile.customAffirmations.length) {
    return {
      success: false,
      affirmations: profile.customAffirmations
    };
  }

  const removed = profile.customAffirmations.splice(index, 1);
  saveJson(profileFilePath, profileData);

  return {
    success: true,
    removed: removed[0],
    affirmations: profile.customAffirmations
  };
}

module.exports = {
  recordUsage,
  getUserUsage,
  getUserProfile,
  resetUserMemory,
  addCustomAffirmation,
  getCustomAffirmations,
  deleteCustomAffirmation
};