function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const categories = {
  sp: [
    "they’re already pulled in. you’re the one acting confused.",
    "you do not need to beg for attention you already own.",
    "stop reading silence like rejection. you’re still the prize.",
    "they were never hard to get. you just got impatient.",
    "you are not chasing. they are aligning.",
    "your presence lingers. that’s your real text message.",
    "they’re not moving on from you. be serious.",
    "they can feel your energy before they can explain it.",
    "you don’t audition for love. you get chosen.",
    "their focus drifts back to you naturally.",
    "you are unforgettable on accident.",
    "they keep circling your energy because it feels like home."
  ],
  money: [
    "money sticks to you because you know how to hold it.",
    "you are not broke. you are reorganizing the flow.",
    "your bank account responds well to standards.",
    "wealth likes people who stop panicking around numbers.",
    "you always have enough and then some.",
    "money trusts you more when you stop acting scared of it.",
    "abundance is your baseline, not a lucky accident.",
    "financial peace looks better on you than panic ever did.",
    "your income expands when your identity does.",
    "wealth grows where standards stay high.",
    "money returns to people who expect it.",
    "your reality keeps proving that you are supported."
  ],
  career: [
    "you are not waiting to be discovered. you are becoming unavoidable.",
    "people with less talent and less aura do this every day. stand up.",
    "your career moves the second you move like you belong there.",
    "opportunities find you because you look expensive and competent.",
    "your name belongs in rooms you haven’t entered yet.",
    "your work speaks loudly before you do.",
    "you are building a reputation, not begging for a chance.",
    "being booked suits you.",
    "your talent deserves visibility and structure.",
    "serious opportunities love serious self-concept.",
    "people remember your presence and your work.",
    "your career likes decisive people."
  ],
  family: [
    "you do not need chaos to prove a bond is real.",
    "peace in your relationships is allowed to be normal now.",
    "stop expecting old patterns to outrank your new standards.",
    "you can love people without shrinking around them.",
    "your energy teaches people how to treat you.",
    "respect comes easier when you stop apologizing for existing.",
    "you are allowed to be soft and still have boundaries.",
    "your relationships calm down when you stop feeding old dynamics.",
    "love does not require self-abandonment.",
    "your boundaries are structure, not cruelty.",
    "you are allowed to feel safe with people you love.",
    "peace is your new family language."
  ],
  appearance: [
    "your face card is offensive at this point.",
    "you do not need permission to be devastating.",
    "people notice you before they decide how to feel about it.",
    "your beauty has range, menace, and precision.",
    "you don’t need more validation. mirrors already told you.",
    "you look expensive because your energy is.",
    "your presence edits the room.",
    "your features are working overtime in your favor.",
    "being stared at is not your problem.",
    "you are visually unfair.",
    "you wear beauty like a threat.",
    "your look lands before you even speak."
  ],
  detachment: [
    "detachment is not giving up. it’s finally acting like the prize.",
    "stop gripping the outcome like it owes you rent.",
    "let it land. your job is identity, not obsession.",
    "you’re attached because you keep checking. stop that.",
    "the result works faster when you stop poking at it.",
    "relaxed certainty beats desperate effort every time.",
    "you do not need to hover over what is already yours.",
    "hold the standard, drop the panic.",
    "certainty is quiet.",
    "detachment is self-respect in motion.",
    "stop petting the problem.",
    "your power returns the second you unclench."
  ],
  discipline: [
    "discipline is just self-respect with a schedule.",
    "you do not need motivation. you need fewer negotiations.",
    "stop asking how to feel like doing it. do it hot and annoyed.",
    "consistency builds results faster than dramatic little mood swings.",
    "your future is built by boring repetition. tragic, but useful.",
    "do the thing before your excuses put on makeup.",
    "you said this mattered. act like it.",
    "being iconic is mostly maintenance.",
    "less overthinking. more execution.",
    "self-trust is built through repetition.",
    "showing up counts even when it’s not glamorous.",
    "you are too available for excuses."
  ],
  socialmedia: [
    "post it. nobody cares about your fake perfectionism.",
    "visibility likes bold people, not hidden drafts.",
    "you are not cringey. you are underposted.",
    "the algorithm responds to consistency and nerve.",
    "people cannot obsess over what you refuse to show them.",
    "post first, tweak later. nobody died.",
    "attention finds people who act like they can hold it.",
    "your audience cannot gather around silence.",
    "hiding is not curation.",
    "consistency is hotter than perfection.",
    "you do not need another draft. you need publish.",
    "stop ghosting your own brand."
  ],
  celebrity: [
    "fame is just repetition plus identity plus nerve.",
    "being known suits you. stop acting startled.",
    "your name travels well. let it.",
    "you do not need to feel ready to be iconic.",
    "public success belongs to people who can tolerate being seen.",
    "celebrity starts as self-concept before it becomes optics.",
    "you were not built for a tiny life.",
    "recognition finds people who stop apologizing for wanting it.",
    "your image deserves scale.",
    "visibility is not vanity. it’s reach.",
    "your future audience is looking for someone exactly like you.",
    "famous looks natural on you."
  ],
  glowup: [
    "this is not a glow-up. it’s a reveal.",
    "you were always that hot. now you’re organized about it.",
    "beauty loves routine, standards, and water. groundbreaking.",
    "you do not chase pretty. you maintain power.",
    "your glow-up is getting rude now.",
    "beauty compounds when your habits do.",
    "small rituals create violent results over time.",
    "your maintenance is starting to look expensive.",
    "you are curating impact, not just aesthetics.",
    "you look like you take yourself seriously.",
    "the difference is showing because you kept going.",
    "your glow-up moves like a quiet threat."
  ],
  body: [
    "your body listens when you stop speaking to it like an enemy.",
    "results love repetition, not panic.",
    "you are getting toned, defined, and stronger because that is the plan.",
    "stop checking for overnight changes and go finish the routine.",
    "your body is always responding, even when you’re dramatic about timing.",
    "your shape is refining because you keep showing up.",
    "definition comes from standards, not spirals.",
    "your body likes structure and calm leadership.",
    "you do not need punishment. you need consistency.",
    "your body is not resisting you. it’s adapting.",
    "every repetition counts, even the annoying ones.",
    "your body is building exactly what you asked for."
  ],
  hair: [
    "your hair grows like it has something to prove.",
    "your length is catching up to your attitude.",
    "your hair is growing past old limits because you said so.",
    "length comes easier when you stop stalking every inch.",
    "your hair is thick, healthy, and committed to the mission.",
    "every day your hair gets longer, stronger, and harder to ignore.",
    "your hair is literally obsessed with reaching your goals.",
    "your crown responds beautifully to consistency.",
    "your hair loves your routines and rewards them fast.",
    "healthy growth is your default now.",
    "your hair keeps choosing expansion.",
    "your hair behaves like it knows you’re iconic."
  ],
  morning: [
    "good morning. act like the version of you who already won.",
    "do not start your day in lack. that’s ugly.",
    "today responds to your identity. choose wisely.",
    "wake up hotter. think cleaner. move faster.",
    "set the tone before the world tries anything stupid.",
    "you do not need chaos to feel productive.",
    "begin like someone who expects things to work out.",
    "wake up in self-command.",
    "certainty before scrolling.",
    "move like the day was built to favor you.",
    "carry your standards into the sunrise.",
    "the morning belongs to whoever grabs the narrative first."
  ],
  night: [
    "go to sleep like it’s already handled.",
    "nighttime is not for spiraling. it’s for letting reality catch up.",
    "stop rehearsing fear before bed. weird hobby.",
    "sleep in certainty and let the subconscious do its job.",
    "close the day without begging the universe for crumbs.",
    "nothing needs your emergency commentary tonight.",
    "rest is part of manifestation, not a delay.",
    "release the day without dragging fear into tomorrow.",
    "you don’t need another sign before sleep.",
    "peace looks better on you at night.",
    "tomorrow arrives faster when you stop wrestling tonight.",
    "bedtime is for certainty, not chaos."
  ],
  realitycheck: [
    "you are not stuck. you are just checking too much.",
    "nothing is wrong except your habit of doubting progress.",
    "the spiral is not intuition. it’s bad discipline.",
    "stop turning a delay into a tragedy.",
    "you do not need another sign. you need better posture.",
    "you are closer than your attitude suggests.",
    "panic is not perception.",
    "your fear is loud, not accurate.",
    "nothing collapsed. you just got theatrical.",
    "breathe and stop assigning doom to silence.",
    "you need steadiness, not another dramatic conclusion.",
    "your problem is mostly checking in a prettier outfit."
  ],
  delusioncheck: [
    "good news: the delusion is not the issue. the inconsistency is.",
    "you’re allowed to believe big. just stop collapsing every six minutes.",
    "the fantasy works better when your habits match it.",
    "dream bigger, but stop moving like a side character.",
    "the vision is correct. your panic is the only off-brand part.",
    "believe whatever you want. then act like you meant it.",
    "you do not need smaller dreams. you need a stronger identity.",
    "keep the vision. lose the wobbling.",
    "you can want huge things without acting helpless.",
    "the life you want is not impossible. it just hates inconsistency.",
    "delusion becomes strategy when you embody it.",
    "your vision is fine. your waffling is the ugly part."
  ]
};

const callouts = {
  general: [
    "you already have your results, so why do you keep checking for help?",
    "refreshing for reassurance is not a personality trait.",
    "you’ve asked enough. now believe yourself.",
    "this is getting clingy. let the result breathe.",
    "stop checking like the answer changes every six minutes.",
    "asking again in a different mood is still checking.",
    "you’re doing a little too much for someone who already gets what they want."
  ],
  byCategory: {
    sp: [
      "still spiraling on sp? boring. they’re still drawn to you.",
      "asking about sp five times in a row is not romance. it’s checking.",
      "you do not need another sp answer. you need composure."
    ],
    detachment: [
      "asking for detachment advice repeatedly is the opposite of detachment.",
      "you cannot cling to detachment. do you hear yourself?",
      "this category should not be your emotional support category."
    ],
    hair: [
      "your hair is still growing. stop interrogating it.",
      "checking every twelve seconds does not make it grow faster.",
      "put the obsession down and moisturize."
    ],
    body: [
      "your body responds to consistency, not repeated bot visits.",
      "stop asking and go finish the routine.",
      "you do not need a new answer. you need another set."
    ],
    socialmedia: [
      "the post is still sitting in drafts, isn’t it?",
      "asking about social media again instead of posting is very transparent.",
      "open the app and hit post. revolutionary."
    ],
    realitycheck: [
      "you already got the reality check. now apply it.",
      "another reality check? stand up.",
      "the situation did not get more tragic since the last command."
    ]
  }
};

const reassuranceClosers = [
  "you’re fine.",
  "it’s still working.",
  "nothing is going wrong.",
  "your result is still yours.",
  "you didn’t lose anything.",
  "reality is still catching up.",
  "calm down. it’s handled.",
  "relax. it’s done."
];

const modeOpeners = {
  affirm: [
    "affirm this:",
    "here. take the obvious:",
    "say this:",
    "repeat this:"
  ],
  embody: [
    "embody this:",
    "move like this:",
    "this is who you are now:",
    "the version of you with the result does this:"
  ],
  loop: [
    "loop this:",
    "repeat this until it lands:",
    "here. use this loop:",
    "say this like you mean it:"
  ],
  dragme: [
    "since we’re being honest:",
    "here’s the problem:",
    "let me simplify this mess:",
    "bluntly:"
  ],
  script: [
    "script this:",
    "write this down:",
    "put this in your notes:",
    "copy this:"
  ],
  oracle: [
    "the reading:",
    "the truth underneath the drama:",
    "from the dark little altar of certainty:",
    "oracle says:"
  ],
  receipts: [
    "receipts:",
    "here’s what you keep ignoring:",
    "evidence for your dramatic little brain:",
    "let’s review the obvious:"
  ],
  antispiral: [
    "anti-spiral order:",
    "enough. do this instead:",
    "interrupting the nonsense:",
    "spiral blocked:"
  ],
  routine: [
    "your move:",
    "routine order:",
    "do this next:",
    "simple. follow this:"
  ],
  villain: [
    "villain mode:",
    "now say it with menace:",
    "the dangerous version sounds like this:",
    "dark little reminder:"
  ]
};

const modeBuilders = {
  affirm: {
    sp: [
      "i am always chosen, prioritized, and pursued.",
      "they always return focused on me.",
      "i am unforgettable and impossible to replace."
    ],
    money: [
      "money always comes to me and stays with me.",
      "i am financially secure, supported, and increasing.",
      "wealth is normal for me."
    ],
    career: [
      "my work is seen, valued, and paid well.",
      "opportunities find me quickly and naturally.",
      "my name belongs in powerful rooms."
    ],
    appearance: [
      "i am devastatingly attractive without trying.",
      "my presence changes the room instantly.",
      "i look expensive, magnetic, and unforgettable."
    ],
    glowup: [
      "my glow-up is obvious and continuous.",
      "i get hotter every day.",
      "my maintenance always pays off."
    ],
    body: [
      "my body is toned, strong, and responsive.",
      "my body changes beautifully in my favor.",
      "my consistency shows on my body fast."
    ],
    hair: [
      "my hair grows fast, long, healthy, and beautifully.",
      "my hair is obsessed with reaching my goals.",
      "my hair gets longer and prettier every day."
    ],
    celebrity: [
      "visibility is natural for me.",
      "people notice me, remember me, and talk about me.",
      "my image scales easily."
    ],
    default: [
      "everything is always working out for me.",
      "i get what i want naturally and consistently.",
      "my reality always moves in my favor."
    ]
  },

  embody: {
    sp: [
      "the version of you who is already chosen does not stalk silence. they assume devotion and go live beautifully.",
      "the version of you with the relationship moves like they are remembered, prioritized, and pursued.",
      "the version of you who is already loved does not beg. they receive."
    ],
    money: [
      "the version of you with money checks in calmly, pays things cleanly, and expects overflow.",
      "the version of you who is financially secure moves like support is normal.",
      "the wealthy version of you treats money like a tool, not a threat."
    ],
    career: [
      "the version of you with the career sends the email, posts the work, and stops hiding.",
      "the booked version of you treats visibility like a job requirement, not a personal attack.",
      "the successful version of you produces before they panic."
    ],
    default: [
      "the version of you with the result is calmer, cleaner, and less available for nonsense.",
      "the version of you who already has it does not wobble this much.",
      "the real shift is acting like your desire already knows where to find you."
    ]
  },

  loop: {
    sp: [
      "i am always chosen, prioritized, pursued, and remembered.",
      "they always return focused on me.",
      "i do not chase. i am naturally obsessed over."
    ],
    money: [
      "money comes to me, stays with me, and grows around me.",
      "i am financially secure, supported, and increasing.",
      "my reality always makes room for more money."
    ],
    career: [
      "my work is seen, valued, and paid well.",
      "opportunities find me fast and naturally.",
      "my name belongs in powerful rooms."
    ],
    hair: [
      "my hair grows fast, long, healthy, and beautifully every day.",
      "my hair is obsessed with reaching my goals.",
      "my hair gets longer, stronger, and prettier daily."
    ],
    body: [
      "my body is toned, defined, strong, and responsive.",
      "my body changes quickly and beautifully in my favor.",
      "my body loves consistency and rewards it fast."
    ],
    default: [
      "everything is always working out for me.",
      "i get what i want naturally and consistently.",
      "my reality moves in my favor fast."
    ]
  },

  dragme: {
    sp: [
      "you keep checking because doubt has better access to you than certainty. fix that.",
      "you’re acting like attention is rare. embarrassing. you’re the standard.",
      "your problem is not sp. it’s your addiction to monitoring."
    ],
    money: [
      "panic is not a budgeting strategy.",
      "you cannot affirm wealth and then romance scarcity all day.",
      "money does not trust people who act terrified of it."
    ],
    discipline: [
      "your habits are weak because you keep negotiating with yourself.",
      "you do not need a new routine every three business days.",
      "stop performing productivity and actually do the task."
    ],
    default: [
      "you are not confused. you are checking too much and calling it intuition.",
      "the issue is not the desire. it’s the wobbling.",
      "you keep asking for certainty while feeding panic."
    ]
  },

  script: {
    sp: [
      "of course i’m always chosen. i naturally take up space in their mind, heart, and attention. i don’t chase affection because affection comes to me.",
      "i am the easiest person to love, prioritize, and pursue. our connection keeps deepening naturally because i am unforgettable.",
      "everything about me invites devotion. i am always the one they come back to."
    ],
    money: [
      "money is safe with me and i am safe with money. i always have more than enough, and financial support keeps finding me in expected and unexpected ways.",
      "i am becoming more stable, more secure, and more abundant every day. my income, savings, and standards are all increasing together.",
      "wealth fits me naturally. i am fully available for overflow."
    ],
    hair: [
      "my hair grows quickly, beautifully, and continuously. every day my length increases, my ends stay strong, and my hair keeps proving me right.",
      "my hair is healthy, thriving, and committed to reaching every goal i set for it. growth is my default now.",
      "my crown expands easily. my hair loves me back through length, softness, and visible progress."
    ],
    default: [
      "everything in my reality is reorganizing around the version of me who already has it all. i do not need to force outcomes because my identity naturally creates them.",
      "i hold my standards without panic. i move through the day as the version of me who is already chosen, supported, attractive, and successful.",
      "my reality responds to who i am being, and i am being the version of me who gets exactly what they want."
    ]
  },

  oracle: {
    sp: [
      "the bond is not fragile. your nervous system is just loud.",
      "what is meant for your field keeps circling until you let it land.",
      "desire recognizes its owner. stop acting like it got lost."
    ],
    money: [
      "wealth enters through the door certainty leaves open.",
      "money moves fastest where fear is no longer worshipped.",
      "support expands around the identity that expects to be held."
    ],
    celebrity: [
      "visibility waits for the self who can hold witness without flinching.",
      "the audience forms around identity before it forms around output.",
      "fame begins as energetic permission."
    ],
    default: [
      "reality follows the self you stabilize in, not the mood you panic in.",
      "the outcome is less delayed than your trust is inconsistent.",
      "what you call waiting is often just embodiment catching up."
    ]
  },

  receipts: {
    sp: [
      "you are still thinking about them because the connection matters, but that does not mean it is gone. your attention proves desire, not failure.",
      "you keep returning to the same person because your mind knows the story is unfinished, not impossible.",
      "if you were truly forgotten, you would not feel this much movement every time you calm down."
    ],
    money: [
      "you have survived every money phase so far, which means support has never actually left you.",
      "you keep finding ways through, which means your life already has a pattern of provision.",
      "the fact that you care about money differently now is already evidence of identity change."
    ],
    glowup: [
      "you are already more aware, more intentional, and more disciplined than before. that counts.",
      "your standards have risen, which means your results are already in motion.",
      "you notice more because you are paying attention now, not because nothing is changing."
    ],
    default: [
      "you are more self-aware than before, which means the identity shift already started.",
      "you have already survived versions of this fear and still moved forward.",
      "the fact that you keep returning to the standard means the standard is sticking."
    ]
  },

  antispiral: {
    sp: [
      "put the phone down. stop checking the 3d. breathe once and return to the version of you who is already wanted.",
      "nothing changed except your cortisol. leave the situation alone for an hour and act chosen.",
      "silence is not rejection. stop assigning meaning and go do something that reminds you who you are."
    ],
    night: [
      "close the app, drink water, and stop narrating doom into the dark.",
      "you are tired, not psychic. go to sleep.",
      "bedtime is not for detective work. it’s for certainty."
    ],
    realitycheck: [
      "your fear is having a costume party as logic. ignore it.",
      "this is a checking episode, not a collapse.",
      "stop asking for more proof while actively disturbing your own peace."
    ],
    default: [
      "step away from the obsession, unclench your jaw, and return to your identity.",
      "nothing is ruined. you are overstimulated and dramatic right now.",
      "pause the checking. the outcome did not disappear because your mood twitched."
    ]
  },

  routine: {
    glowup: [
      "drink water, moisturize, stretch, and stop speaking to yourself like an afterthought.",
      "do your maintenance, fix your posture, and move like you expect to be looked at.",
      "one beauty task, one body task, one mindset task. daily. no speeches."
    ],
    discipline: [
      "pick one task, finish it, and do not reward yourself for almost starting.",
      "set a timer, begin ugly, and let consistency do the seduction.",
      "make the checklist shorter and your excuses shorter too."
    ],
    socialmedia: [
      "post one thing, engage for ten minutes, and stop disappearing.",
      "choose one idea, make it, publish it, leave it alone.",
      "document something today instead of waiting to become more perfect."
    ],
    default: [
      "one mindset action, one body action, one practical action. that’s enough. repeat tomorrow.",
      "keep it simple: decide, act, stop checking.",
      "do one thing that proves your identity and leave the rest alone."
    ]
  },

  villain: {
    sp: [
      "they orbit me because my energy leaves teeth marks.",
      "i do not chase devotion. devotion hunts for me.",
      "my presence lingers like perfume and a bad decision."
    ],
    money: [
      "money gathers around me like it knows better than to leave.",
      "wealth fits me like black leather and good lighting.",
      "my standards are expensive and reality pays up."
    ],
    appearance: [
      "i look like consequences and good taste.",
      "my beauty arrives first and my silence finishes the job.",
      "i wear my face like a loaded weapon."
    ],
    celebrity: [
      "my image scales because it was never meant to stay small.",
      "attention behaves around me because it knows i can hold it.",
      "fame looks less like luck and more like obedience in my field."
    ],
    default: [
      "reality reorganizes itself when i stop acting like a civilian.",
      "i move like a final boss in lip gloss.",
      "my identity lands like a threat and a promise."
    ]
  }
};

function getModeLine(mode, category) {
  const builder = modeBuilders[mode];
  if (!builder) return null;

  const pool = builder[category] || builder.default;
  if (!pool) return null;

  const opener = randomItem(modeOpeners[mode]);
  return `${opener} ${randomItem(pool)}`;
}

function getBaseCategoryLine(category) {
  const pool = categories[category] || categories.realitycheck;
  return randomItem(pool);
}

function getGeneralCallout() {
  return randomItem(callouts.general);
}

function getCategoryCallout(category) {
  const pool = callouts.byCategory[category] || callouts.general;
  return randomItem(pool);
}

function getReassurance() {
  return randomItem(reassuranceClosers);
}

function buildResponse({ category, mode = null, responseStyle = "standard" }) {
  const baseLine = getBaseCategoryLine(category);
  const modeLine = mode ? getModeLine(mode, category) : null;

  if (responseStyle === "sameCategorySpam") {
    if (modeLine) {
      return `${getCategoryCallout(category)} ${modeLine} ${getReassurance()}`;
    }
    return `${getCategoryCallout(category)} ${baseLine} ${getReassurance()}`;
  }

  if (responseStyle === "generalSpam") {
    if (modeLine) {
      return `${getGeneralCallout()} ${modeLine} ${getReassurance()}`;
    }
    return `${getGeneralCallout()} ${baseLine} ${getReassurance()}`;
  }

  if (modeLine) {
    return modeLine;
  }

  return baseLine;
}

const modes = [
  "affirm",
  "embody",
  "loop",
  "dragme",
  "script",
  "oracle",
  "receipts",
  "antispiral",
  "routine",
  "villain"
];

function buildWaveringResponse() {
  const lines = [
    "wavering is not real in the dramatic way you think it is. one anxious moment does not cancel a dominant identity.",
    "wavering is just a temporary reaction, not a final decision. reality responds to the identity you return to most.",
    "you do not lose your desire because you had a human moment. the problem is only when you start worshipping the wobble.",
    "one spiral does not undo the standard. stop romanticizing setbacks and return to the version of you who already gets what they want."
  ];

  return randomItem(lines);
}

function sanitizeThought(text) {
  return text
    .trim()
    .replace(/^that\s+/i, "")
    .replace(/^i\s+think\s+/i, "")
    .replace(/^i\s+feel\s+like\s+/i, "");
}

function buildFixResponse(thought) {
  const cleaned = sanitizeThought(thought);

  const patterns = [
    {
      test: /(not texting|didn'?t text|hasn'?t texted|no text)/i,
      responses: [
        "they always reach out when it matters, and i am always on their mind.",
        "communication flows to me naturally and consistently.",
        "silence never means rejection in my reality."
      ]
    },
    {
      test: /(third party|someone else|another girl|another guy|competition)/i,
      responses: [
        "there is no competition when i am the standard.",
        "i am the only one who truly matters in this situation.",
        "my presence naturally outweighs every other option."
      ]
    },
    {
      test: /(money|broke|can'?t afford|poor|debt)/i,
      responses: [
        "money always finds me in ways that support, secure, and expand me.",
        "i am financially supported and my circumstances improve quickly.",
        "my reality always makes room for more money."
      ]
    },
    {
      test: /(ugly|unattractive|not pretty|not hot|look bad)/i,
      responses: [
        "i am deeply attractive, magnetic, and impossible to ignore.",
        "my beauty is obvious, growing, and undeniable.",
        "people notice me immediately because i carry rare presence."
      ]
    },
    {
      test: /(hair|length|growth|edges)/i,
      responses: [
        "my hair grows quickly, beautifully, and continuously.",
        "my hair is healthy, thriving, and obsessed with length.",
        "my crown expands easily and visibly."
      ]
    }
  ];

  for (const pattern of patterns) {
    if (pattern.test.test(cleaned)) {
      return `fix it like this: ${randomItem(pattern.responses)}`;
    }
  }

  return `fix it like this: even if i had a weird thought, i still get exactly what i want because my dominant identity wins.`;
}

function buildSituationResponse(text) {
  const cleaned = text.trim();

  const patterns = [
    {
      test: /(viewed my story|watched my story|seen my story)/i,
      responses: [
        "they’re paying attention. you’re just being dramatic about the format.",
        "interest does not stop counting because it showed up quietly.",
        "they noticed you. now stop performing a tragedy over the timeline."
      ]
    },
    {
      test: /(no contact|silent|ghost|disappeared)/i,
      responses: [
        "silence is not the same thing as absence of movement.",
        "just because you can’t see motion yet does not mean reality is idle.",
        "you keep treating quiet like rejection. that habit is uglier than the situation."
      ]
    },
    {
      test: /(liked my post|liked my story|reacted)/i,
      responses: [
        "obvious interest is still interest. stop acting confused.",
        "they engaged because your presence pulls attention naturally.",
        "they’re watching. act less startled."
      ]
    },
    {
      test: /(money|bill|expense|payment)/i,
      responses: [
        "this is a circumstance, not your identity. respond cleanly and keep your standards.",
        "numbers are temporary. your self-concept is the real authority here.",
        "handle the bill, not a breakdown."
      ]
    }
  ];

  for (const pattern of patterns) {
    if (pattern.test.test(cleaned)) {
      return randomItem(pattern.responses);
    }
  }

  return "the situation is not the story. your reaction is just loud right now. decide what it means in your favor and move on.";
}

module.exports = {
  categories,
  modes,
  buildResponse,
  buildWaveringResponse,
  buildFixResponse,
  buildSituationResponse
};