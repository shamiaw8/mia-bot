function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const categories = {
  sp: [
    "they’re still drawn to you. nothing about your value changed.",
    "you do not need to force attention that already wants to find you.",
    "silence does not automatically mean rejection.",
    "you are not chasing. you are allowing things to come together.",
    "your energy stays with people longer than you think.",
    "you are easy to remember and hard to replace.",
    "things can still be moving even when you cannot see every detail.",
    "you are still the prize, even on emotional days."
  ],
  money: [
    "money responds better when you stay calm and clear.",
    "you are allowed to feel supported while building more stability.",
    "your finances can improve without panic running the show.",
    "abundance grows faster when you stop speaking fear over everything.",
    "you are becoming more secure, steady, and well-resourced.",
    "money can come in cleanly and consistently for you.",
    "you are learning how to hold more, not just ask for more.",
    "financial peace belongs in your life too."
  ],
  career: [
    "you are becoming more visible, more capable, and more undeniable.",
    "your work deserves structure and follow-through.",
    "opportunities meet people who are willing to be seen.",
    "you do not need to shrink while waiting for your next level.",
    "your name belongs in bigger rooms too.",
    "you are building something real, even if it is still unfolding.",
    "consistency will carry your talent farther.",
    "your work can speak for you before you say a word."
  ],
  family: [
    "you are allowed to want peace in your relationships.",
    "love does not require you to abandon your boundaries.",
    "you can care deeply without carrying everything alone.",
    "healthier dynamics start with the standards you hold.",
    "you are allowed to feel safe, respected, and understood.",
    "peace can become more normal for you now.",
    "your relationships do not need chaos to feel meaningful.",
    "you can be soft and still have limits."
  ],
  appearance: [
    "you are already striking. let yourself believe it more often.",
    "your beauty lands before you even explain yourself.",
    "people notice you. that part is not the issue.",
    "your look is getting sharper because your self-concept is too.",
    "you carry a lot of presence without trying.",
    "you look expensive because your energy feels intentional.",
    "you do not need constant validation to be attractive.",
    "your features are doing you a lot of favors."
  ],
  detachment: [
    "detachment is really just calm trust in motion.",
    "you do not need to grip the outcome so tightly.",
    "things often move best when you stop hovering over them.",
    "your job is to return to your identity, not monitor every second.",
    "you can care and still be relaxed.",
    "letting go of the panic helps you hear yourself again.",
    "certainty is usually quieter than fear.",
    "you are safe to release some control here."
  ],
  discipline: [
    "discipline gets easier when you stop debating every little action.",
    "you do not need to feel perfect to stay consistent.",
    "small repeated effort will take you farther than mood-based motivation.",
    "you can start messy and still get results.",
    "self-trust grows when you keep showing up.",
    "consistency is often simple, even when it is not exciting.",
    "you said this matters, so let your habits support that.",
    "you can do the next right thing without a whole performance."
  ],
  socialmedia: [
    "your visibility grows when you let yourself be seen more often.",
    "you do not need to wait until everything feels perfect to post.",
    "consistency usually beats perfection online.",
    "your audience cannot connect with what never gets shared.",
    "posting more often would probably help more than overthinking it.",
    "you have enough to say right now.",
    "your brand gets clearer through action, not hiding.",
    "you can take up space online too."
  ],
  celebrity: [
    "being seen on a bigger scale can actually fit you really well.",
    "recognition starts with being willing to let people notice you.",
    "your life does not have to stay small.",
    "you can want visibility without apologizing for it.",
    "your image and ideas deserve more reach.",
    "people connect with confidence they can feel.",
    "you are allowed to build something iconic.",
    "your audience can find you faster when you stop dimming yourself."
  ],
  glowup: [
    "this is less a glow-up and more a return to yourself.",
    "your habits are starting to show on you in a good way.",
    "beauty grows where routine and care are consistent.",
    "small maintenance adds up more than you think.",
    "you look better when you treat yourself like someone worth caring for.",
    "your upgrade is happening through repetition.",
    "you are becoming more polished because you are paying attention.",
    "the results are building, even if they feel subtle today."
  ],
  body: [
    "your body responds really well to patience and consistency.",
    "progress usually comes from repetition, not panic.",
    "you are getting stronger, more defined, and more in sync with yourself.",
    "your body is listening, even when changes feel gradual.",
    "you do not need to fight your body to work with it.",
    "consistency will always do more than spiraling.",
    "your shape is allowed to refine over time.",
    "treat your body like something you are on the same team with."
  ],
  hair: [
    "your hair is growing, even when you cannot measure every second of it.",
    "length comes easier when you trust your routine.",
    "your hair responds beautifully to care and consistency.",
    "your growth is still happening.",
    "your crown is doing what it needs to do.",
    "healthy hair loves patience and support.",
    "your hair can absolutely keep getting longer, stronger, and prettier.",
    "you are not stuck at one length forever."
  ],
  morning: [
    "start the day by returning to who you are, not what you fear.",
    "you set the tone more than you think.",
    "your morning goes smoother when you choose calm first.",
    "you do not need to begin the day in lack.",
    "today can still go well for you.",
    "your first thoughts matter, so be a little kinder with them.",
    "move through the morning like things can work out in your favor.",
    "you can choose steadiness before scrolling."
  ],
  night: [
    "you can let the day end without dragging every fear into tomorrow.",
    "rest helps more than late-night spiraling ever will.",
    "nothing needs to be solved in a panic right before sleep.",
    "you are allowed to close the day gently.",
    "peace looks good on you at night.",
    "sleeping in certainty is still productive.",
    "you can put this down for tonight.",
    "tomorrow will be easier if you stop wrestling with tonight."
  ],
  realitycheck: [
    "nothing may actually be wrong here — you might just be overwhelmed.",
    "fear can get loud without being accurate.",
    "a delay does not automatically mean failure.",
    "you may be checking too much and trusting yourself too little.",
    "you are probably closer than your nervous system thinks.",
    "take a breath before you decide this is a disaster.",
    "you do not need a new conclusion every time you feel triggered.",
    "calm often shows you the truth faster."
  ],
  delusioncheck: [
    "wanting more is not the problem. staying steady is the real skill.",
    "your vision is allowed to be big.",
    "the goal is not too much just because it feels far away today.",
    "belief works best when your habits support it.",
    "you can expect a lot without becoming frantic.",
    "your standards are fine. your consistency just matters too.",
    "you are not crazy for wanting bigger things.",
    "the vision gets easier to trust when you keep returning to it calmly."
  ]
};

const callouts = {
  general: [
    "okay, you’re checking again.",
    "hey, i think you might be looking for reassurance instead of returning to your standard.",
    "you’ve asked a few times now, so let’s slow this down.",
    "this feels more like anxiety than a real problem.",
    "you do not need a brand new answer every five minutes.",
    "i think you already know what to do here.",
    "let’s not turn a temporary wobble into a whole storyline."
  ],
  byCategory: {
    sp: [
      "you’re checking on sp again, which usually means you need grounding more than another answer.",
      "i know this matters to you, but asking again will not make it move faster.",
      "let’s come back to your self-concept instead of chasing reassurance."
    ],
    detachment: [
      "if you keep checking whether you’re detached, that’s usually your clue to pause.",
      "you do not need to perform detachment perfectly.",
      "let’s make this simpler: breathe, reset, and come back to yourself."
    ],
    hair: [
      "your hair is still growing. you do not need to monitor it every second.",
      "checking constantly can make you feel worse, not help more.",
      "trust your routine a little more here."
    ],
    body: [
      "your body is still responding, even if you feel impatient today.",
      "you probably need consistency more than another pep talk right now.",
      "let’s bring this back to the routine."
    ],
    socialmedia: [
      "i think you might be overthinking posting again.",
      "your content probably needs action more than another round of stress.",
      "you can post without over-polishing every detail."
    ],
    realitycheck: [
      "you already know the answer underneath the panic.",
      "let’s not feed the spiral more than necessary.",
      "take this as your sign to ground yourself, not dig deeper."
    ]
  }
};

const reassuranceClosers = [
  "you’re okay.",
  "it’s still working.",
  "nothing is ruined.",
  "your result is still yours.",
  "you are still on track.",
  "take a breath. it’s handled.",
  "you did not lose progress.",
  "things can still move in your favor."
];

const modeOpeners = {
  embody: [
    "embody this:",
    "move like this:",
    "try this version of you:",
    "the version of you with the result acts like this:"
  ],
  loop: [
    "loop this:",
    "repeat this:",
    "use this affirmation:",
    "say this back to yourself:"
  ],
  dragme: [
    "okay, honest moment:",
    "here’s the loving truth:",
    "let’s be real for a second:",
    "gentle call-out:"
  ],
  script: [
    "script this:",
    "write this down:",
    "put this in your notes:",
    "copy this:"
  ],
  oracle: [
    "little intuitive read:",
    "here’s the deeper truth:",
    "oracle mode says:",
    "underneath the noise:"
  ],
  receipts: [
    "receipts:",
    "here’s what you may be overlooking:",
    "let’s look at the evidence:",
    "important reminder:"
  ],
  antispiral: [
    "anti-spiral reset:",
    "pause here:",
    "do this instead:",
    "reset the energy like this:"
  ],
  routine: [
    "your next steps:",
    "keep it simple:",
    "try this routine:",
    "do this next:"
  ],
  villain: [
    "villain mode:",
    "confident reminder:",
    "say it like you mean it:",
    "power move:"
  ]
};

const modeBuilders = {
  embody: {
    sp: [
      "the version of you who already feels chosen does not chase every little sign. they trust the connection and keep living.",
      "the version of you with the relationship moves like they are remembered, wanted, and prioritized.",
      "the version of you who feels loved does not beg for proof all day."
    ],
    money: [
      "the version of you with money handles it calmly, clearly, and with better standards.",
      "the financially secure version of you expects support and makes wise moves with it.",
      "the version of you with abundance treats money like a normal part of life, not a crisis."
    ],
    career: [
      "the version of you with the career posts the work, follows up, and lets themselves be seen.",
      "the successful version of you does not hide behind perfectionism.",
      "the booked version of you moves like their work deserves attention."
    ],
    default: [
      "the version of you with the result is steadier, softer, and more self-led.",
      "the version of you who already has it trusts themselves more than the spiral.",
      "the shift is usually in how you carry yourself before anything else."
    ]
  },

  loop: {
    sp: [
      "i am always chosen, loved, and remembered.",
      "what is meant for me stays drawn to me.",
      "i do not chase love. i allow it."
    ],
    money: [
      "money supports me more every day.",
      "i am financially secure, steady, and increasing.",
      "money flows to me and stays with me well."
    ],
    career: [
      "my work is seen, valued, and well received.",
      "opportunities find me naturally.",
      "my name belongs in bigger rooms."
    ],
    hair: [
      "my hair grows long, healthy, and beautifully every day.",
      "my hair responds well to everything i do for it.",
      "my hair gets stronger and longer with ease."
    ],
    body: [
      "my body responds beautifully to consistency.",
      "my body is strong, defined, and getting better every day.",
      "my body works with me, not against me."
    ],
    default: [
      "everything is still working in my favor.",
      "i am steady, supported, and on track.",
      "my reality responds to the version of me i keep returning to."
    ]
  },

  dragme: {
    sp: [
      "you may be reading too much into every tiny shift. come back to your worth first.",
      "you do not need to monitor this so closely to be chosen.",
      "the more you trust yourself here, the easier this gets."
    ],
    money: [
      "fear is making this louder than it needs to be.",
      "you need calm structure here more than panic.",
      "money responds better when you lead with steadiness."
    ],
    discipline: [
      "you may be overcomplicating something that really needs repetition.",
      "you do not need a perfect mood to follow through.",
      "start smaller if needed, but do start."
    ],
    default: [
      "you might be trusting your nerves more than your standard.",
      "this looks more like a wobble than a real emergency.",
      "come back to what you know instead of feeding the panic."
    ]
  },

  script: {
    sp: [
      "of course i am always remembered, prioritized, and chosen. i do not need to chase what is already drawn to me. i move through life knowing i am deeply wanted and naturally valued.",
      "i am easy to love, easy to prioritize, and impossible to forget. i trust what is unfolding for me because i know my presence leaves a lasting impression.",
      "everything about me supports love, closeness, and devotion. i let myself relax into being chosen."
    ],
    money: [
      "money is becoming a more peaceful and supportive part of my life. i handle it with more calm, more wisdom, and more confidence every day. i am financially supported and steadily expanding what i can hold.",
      "i am building a life that feels secure, abundant, and well-managed. money comes to me in clean ways, stays with me well, and helps me create more freedom.",
      "i trust myself to grow my finances with consistency, clarity, and better standards."
    ],
    hair: [
      "my hair is healthy, supported, and always growing. every day it becomes longer, stronger, and more beautiful. my routines are working, and my hair responds well to the care i give it.",
      "my crown keeps thriving under my attention and consistency. i trust the process of my hair growth because it is already happening.",
      "my hair loves everything i do for it, and the results keep showing."
    ],
    default: [
      "everything in my reality is responding to the version of me that feels grounded, supported, and certain. i do not need to panic to create movement. i return to my standard and let reality catch up.",
      "i hold my standards with more calm now. i trust what i am building, and i allow things to unfold in my favor.",
      "my identity is becoming steadier, and my reality reflects that more every day."
    ]
  },

  oracle: {
    sp: [
      "the connection does not become fragile just because your emotions got loud for a moment.",
      "what belongs in your field will not be pushed away by one anxious night.",
      "your desire is not lost. you just need to return to yourself."
    ],
    money: [
      "support often arrives more easily when fear is no longer steering.",
      "wealth grows best where trust and structure meet.",
      "money tends to follow the self that expects to be supported."
    ],
    celebrity: [
      "visibility begins with the willingness to let yourself be witnessed.",
      "the audience usually gathers around the version of you that feels safe to be seen.",
      "recognition follows the self that stops dimming."
    ],
    default: [
      "reality responds to your steadier identity more than your temporary mood.",
      "what feels delayed may simply be catching up to your consistency.",
      "the answer is often simpler than the spiral makes it seem."
    ]
  },

  receipts: {
    sp: [
      "you still care, you are still focused, and you are still returning to the standard. that already matters.",
      "the fact that you keep coming back to the desire means it still has life in your story.",
      "not seeing everything at once does not mean nothing is happening."
    ],
    money: [
      "you have made it through every financial season so far. that is evidence of support already.",
      "you are paying more attention to stability now, which means change is already happening.",
      "every better decision you make around money counts."
    ],
    glowup: [
      "you are already more intentional than before, and that does show.",
      "your standards have risen, and your habits are starting to match them.",
      "small improvements are still real improvements."
    ],
    default: [
      "you are more self-aware than before, and that is part of the shift.",
      "you keep coming back to your standard, which means it is getting stronger.",
      "progress does not disappear just because you had a hard moment."
    ]
  },

  antispiral: {
    sp: [
      "put the phone down, take one deep breath, and come back to your own energy.",
      "nothing needs to be solved this second. step away and return to your standard.",
      "do not let one anxious thought turn into a whole story."
    ],
    night: [
      "close the app, drink some water, and let your mind settle.",
      "you are probably tired, not doomed.",
      "bedtime is for rest, not detective work."
    ],
    realitycheck: [
      "this may be anxiety talking louder than truth.",
      "pause before you decide this means something terrible.",
      "you do not need to dig for proof while you are overwhelmed."
    ],
    default: [
      "step away from the checking for a minute and come back to yourself.",
      "nothing is ruined. you are just activated right now.",
      "pause, breathe, and let the moment pass before you make it mean too much."
    ]
  },

  routine: {
    glowup: [
      "drink water, do one beauty task, and speak to yourself with more intention today.",
      "choose one maintenance task, one body task, and one mindset task. keep it simple.",
      "do the basics well and let them build."
    ],
    discipline: [
      "pick one task, finish it, and let that be enough for now.",
      "set a timer, start small, and focus on follow-through over perfection.",
      "keep the routine simple enough that you will actually repeat it."
    ],
    socialmedia: [
      "post one thing, engage a little, and stop over-editing everything.",
      "choose one idea, make it, and share it before you can overthink it.",
      "show up today in a way your audience can actually see."
    ],
    default: [
      "do one mindset action, one practical action, and one self-care action.",
      "keep it simple: decide, act, then stop circling it.",
      "choose the next right step and let that carry the day."
    ]
  },

  villain: {
    sp: [
      "i do not chase love. i carry the kind of energy people come back to.",
      "my presence lingers, and that works in my favor.",
      "i am too memorable to be overlooked for long."
    ],
    money: [
      "money looks good around me.",
      "i am learning to hold wealth with confidence and style.",
      "my standards invite a better financial reality."
    ],
    appearance: [
      "my beauty speaks clearly before i ever need to.",
      "i carry myself like i know exactly who i am.",
      "my presence does a lot of the work for me."
    ],
    celebrity: [
      "i am growing into visibility that actually fits me.",
      "attention feels safer when i remember i can hold it.",
      "my image is allowed to expand."
    ],
    default: [
      "i move like someone who trusts their own energy.",
      "my identity is stronger than one emotional moment.",
      "i carry myself like things can still go my way."
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
    "wavering is not the disaster people make it out to be. one emotional moment does not cancel your dominant identity.",
    "wavering is usually just a temporary reaction, not a final outcome. what matters most is what you return to.",
    "you do not lose progress because you had a human moment. the key is not building a home inside the wobble.",
    "one spiral does not undo the standard. come back to yourself and keep moving."
  ];

  return randomItem(lines);
}

module.exports = {
  categories,
  modes,
  buildResponse,
  buildWaveringResponse
};
