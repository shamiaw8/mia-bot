function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const topicGroups = {
  relationships: ["sp", "family", "friendships", "texting", "attraction"],
  appearance: ["appearance", "glowup", "body", "hair"],
  mindset: ["selfconcept", "mindset", "confidence", "detachment", "realitycheck", "delusioncheck"],
  success: ["money", "career", "celebrity", "school", "goals", "socialmedia"],
  lifestyle: ["discipline", "energy", "lifestyle", "morning", "night", "timing"],
  revision: ["revision"]
};

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
    "they keep circling your energy because it feels like home.",
    "you are the person they compare everyone else to.",
    "your absence gets loud very fast.",
    "they do not forget people like you."
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
    "your boundaries are structure, not cruelty."
  ],

  friendships: [
    "you are not hard to connect with. you’ve just been carrying old stories.",
    "friendship gets easier when you stop assuming rejection first.",
    "you are worthy of reciprocal, easy, warm connections.",
    "people enjoy being around someone who is not secretly bracing for abandonment.",
    "your social life improves when your self concept does.",
    "you are allowed to be chosen platonically too.",
    "not every quiet moment means exclusion.",
    "you can be liked without performing.",
    "healthy friendship feels lighter than what you’ve normalized.",
    "you belong in good rooms with good people."
  ],

  texting: [
    "a text delay is not a character assassination.",
    "communication means what you decide it means first.",
    "stop reading one message like it’s a sacred scroll.",
    "dry texting is not always disinterest. sometimes it is just a phone.",
    "you do not need to decode everything to be chosen.",
    "texting gets easier when you stop treating every pause like doom.",
    "not every message requires a forensic investigation.",
    "your worth is not measured in typing bubbles.",
    "the conversation is not dead just because your fear is loud.",
    "let people respond without building a funeral in the meantime."
  ],

  attraction: [
    "attraction gets easier when you stop trying so hard to be wanted.",
    "you are naturally desirable when you stop doubting your effect.",
    "people pick up on your self-concept before your looks finish the job.",
    "magnetism is certainty in good lighting.",
    "you pull more when you stop begging energetically.",
    "attraction belongs to people who expect to be wanted.",
    "you are not trying to be magnetic. you already are.",
    "desire follows identity.",
    "people notice the one who notices their own value.",
    "you do not need to chase attention. your energy collects it."
  ],

  appearance: [
    "your face card is offensive at this point.",
    "you do not need permission to be devastating.",
    "people notice you before they decide how to feel about it.",
    "your beauty has range, menace, and precision.",
    "you don’t need more validation. mirrors already told you.",
    "you look expensive because your energy is.",
    "your presence edits the room.",
    "being stared at is not your problem.",
    "you are visually unfair.",
    "you wear beauty like a threat."
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
    "you look like you take yourself seriously."
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
    "your body is not resisting you. it’s adapting."
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
    "healthy growth is your default now."
  ],

  selfconcept: [
    "self concept is the root, not the decoration.",
    "everything changes faster when you stop identifying as the one who struggles.",
    "you do not get different results while worshipping the same old identity.",
    "your self concept decides what feels normal.",
    "becoming the version of you who has it is the whole game.",
    "you are not fixing circumstances. you are stabilizing identity.",
    "what you believe you deserve keeps leaking into everything.",
    "raise the self concept and the rest follows.",
    "you need less obsession with outcomes and more obsession with who you are.",
    "your identity is the real manifestation technique."
  ],

  mindset: [
    "your thoughts need better management, not more drama.",
    "a bad thought is not a prophecy.",
    "mindset is just what you repeatedly agree with.",
    "stop rehearsing what you hate and calling it awareness.",
    "your inner language is building your normal.",
    "the thought can happen without getting the throne.",
    "not every feeling deserves to become a belief.",
    "you are allowed to interrupt yourself.",
    "mental discipline is hotter than emotional chaos.",
    "you do not need perfect thoughts, just better dominance."
  ],

  confidence: [
    "confidence is not loud. it is settled.",
    "you do not need to prove yourself in every room.",
    "your presence improves when you stop apologizing with your posture.",
    "confidence looks like fewer internal arguments.",
    "you become more magnetic when you stop monitoring yourself.",
    "people trust the energy that trusts itself.",
    "you are allowed to take up space without performing for it.",
    "confidence is repetition without self-betrayal.",
    "stop shrinking and calling it humility.",
    "you look better the second you decide not to flinch."
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
    "detachment is self-respect in motion."
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
    "you need steadiness, not another dramatic conclusion."
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
    "delusion becomes strategy when you embody it."
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
    "wealth grows where standards stay high."
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
    "serious opportunities love serious self-concept."
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
    "visibility is not vanity. it’s reach."
  ],

  school: [
    "you are not bad at school. you are too identified with old evidence.",
    "your brain works better when you stop insulting it.",
    "you learn quickly, recall cleanly, and perform well under pressure.",
    "you are fully capable of understanding difficult material.",
    "academic success looks very natural on you.",
    "your intelligence is not up for debate.",
    "you do better when you stop panicking and start deciding.",
    "your mind catches on faster than your fear admits.",
    "good grades belong to people who stop rehearsing failure.",
    "school gets easier when your identity stops fighting you."
  ],

  goals: [
    "your goals need commitment, not another mood swing.",
    "stop rethinking the target every time execution gets annoying.",
    "goals are clearer when you stop being emotionally slippery.",
    "you know what to do. now do it more than once.",
    "your goals deserve more structure and less talking.",
    "direction gets easier when you stop entertaining every distraction.",
    "finish more things. your confidence will thank you.",
    "you do not need a new dream every week.",
    "goals are identity with deadlines.",
    "pick the target and stop flirting with excuses."
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
    "you do not need another draft. you need publish."
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
    "self-trust is built through repetition."
  ],

  energy: [
    "your energy gets cleaner when you stop leaking it into panic.",
    "restoring your energy is not laziness. it is maintenance.",
    "you feel off because you keep entertaining what drains you.",
    "protect your energy like it has somewhere important to be.",
    "your energy sharpens when your standards do.",
    "stop scattering yourself over things that do not matter.",
    "being tired does not mean being doomed.",
    "your field responds better when you are not internally screaming.",
    "pull your energy back and watch how different everything feels.",
    "calm energy is still powerful energy."
  ],

  lifestyle: [
    "your lifestyle is just your standards wearing a schedule.",
    "romanticize the routine and your life gets better fast.",
    "you need fewer random habits and more intentional ones.",
    "lifestyle is identity made visible.",
    "your daily life should reflect what you say you want.",
    "stop wanting a better life while maintaining worse habits.",
    "your environment should support the version of you you claim to be.",
    "luxury starts in standards before it shows up in objects.",
    "how you live teaches reality what you expect.",
    "build a life that agrees with your self-concept."
  ],

  morning: [
    "good morning. act like the version of you who already won.",
    "do not start your day in lack. that’s ugly.",
    "today responds to your identity. choose wisely.",
    "wake up hotter. think cleaner. move faster.",
    "set the tone before the world tries anything stupid.",
    "you do not need chaos to feel productive.",
    "begin like someone who expects things to work out.",
    "certainty before scrolling.",
    "move like the day was built to favor you.",
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
    "peace looks better on you at night."
  ],

  timing: [
    "timing is not punishment. calm down.",
    "things are allowed to unfold without being wrong.",
    "your impatience is louder than the delay.",
    "divine timing is cute, but stable identity is faster.",
    "you are not late. you are reacting.",
    "timing feels cruel when you keep checking the clock.",
    "what is yours is not missing. it is moving.",
    "delay is not denial, and panic is not acceleration.",
    "you do not need to force the hour.",
    "the more secure you are, the less dramatic timing feels."
  ],

  revision: [
    "revision is not lying. it is choosing the version that serves you now.",
    "the past is not a prison. it is a story you are allowed to update.",
    "stop worshipping old evidence like it outranks your present decision.",
    "you decide what that event means now.",
    "unfavorable memories do not get final authority.",
    "revision works when you stop arguing for the old version.",
    "you are allowed to remember things in a way that supports you.",
    "the past responds to identity too.",
    "you do not need to keep emotional loyalty to a bad outcome.",
    "rewrite it cleanly and move on."
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
  harsherGeneral: [
    "you have already been told. at this point you are choosing not to listen.",
    "this is not needing help anymore. this is indulging doubt on purpose.",
    "you keep asking the bot the same thing like obsession is going to make you special. enough.",
    "if you ask again without changing your state, you are just rehearsing desperation.",
    "you do not need another answer. you need self-control.",
    "still here? then the problem is not the outcome. it is your refusal to hold your nerve."
  ],
  byTopic: {
    sp: [
      "still spiraling on sp? boring. they’re still drawn to you.",
      "asking about sp five times in a row is not romance. it’s checking.",
      "you do not need another sp answer. you need composure."
    ],
    texting: [
      "another texting spiral? your self concept should be embarrassed.",
      "stop reading between lines that barely exist.",
      "one slow reply and suddenly you’re a detective. enough."
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
    detachment: [
      "asking for detachment advice repeatedly is the opposite of detachment.",
      "you cannot cling to detachment. do you hear yourself?",
      "this topic should not be your emotional support crutch."
    ],
    revision: [
      "asking about revision while clinging to the old story is embarrassing.",
      "you cannot revise and worship the original version at the same time.",
      "pick the new story and stop dragging the corpse around."
    ]
  },
  harsherByTopic: {
    sp: [
      "you are not manifesting sp right now. you are just babysitting your panic.",
      "if you ask about sp again without calming down, you’re choosing the version of you that gets nothing.",
      "obsessing over sp this hard is not devotion. it’s bad self-concept in a prettier outfit."
    ],
    texting: [
      "you do not need another texting answer. you need to stop acting like a typing bubble controls your worth.",
      "one delayed reply and you turn into a crime investigator. deeply unserious.",
      "if a phone notification can wreck you this badly, the issue is not communication."
    ],
    hair: [
      "your hair cannot grow in peace if you keep stalking it like this.",
      "touching your patience every five minutes is not a hair routine.",
      "you need less obsession and more leave-in conditioner."
    ],
    revision: [
      "you keep reviving the old story and calling it revision. be serious.",
      "if you are still emotionally kneeling to the original event, you have not revised anything.",
      "you do not need more revision advice. you need loyalty to the new version."
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
  affirm: ["affirm this:", "say this:", "repeat this:", "take this:"],
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
    hair: [
      "my hair grows fast, long, healthy, and beautifully.",
      "my hair is obsessed with reaching my goals.",
      "my hair gets longer and prettier every day."
    ],
    school: [
      "i learn quickly, remember easily, and perform brilliantly.",
      "my mind is sharp, calm, and capable.",
      "school works in my favor."
    ],
    revision: [
      "the past supports me now.",
      "every old event is rewritten in my favor.",
      "my chosen version is the only version that matters."
    ],
    selfconcept: [
      "i am the version of me who always gets what they want.",
      "my identity naturally creates better outcomes.",
      "i am chosen, secure, and powerful by default."
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
    revision: [
      "the version of you who revised it successfully does not keep explaining the old story.",
      "the version of you who changed the past emotionally treats the new version as final.",
      "the version of you who revised it stops revisiting the old evidence for comfort."
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
    hair: [
      "my hair grows fast, long, healthy, and beautifully every day.",
      "my hair is obsessed with reaching my goals.",
      "my hair gets longer, stronger, and prettier daily."
    ],
    revision: [
      "i only accept the revised version now.",
      "the past supports my desire perfectly.",
      "my current story overrides all old evidence."
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
    revision: [
      "you keep saying you revised it and then retelling the old version for sport.",
      "revision does not work while you stay emotionally married to the original mess.",
      "pick the new memory and stop cheating on it with the old one."
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
    revision: [
      "that old event now unfolded in my favor. the conversation, outcome, and emotional meaning all support what i want now. i no longer identify with the old version because it no longer belongs to me.",
      "i revise the past cleanly and completely. every detail that once felt unfavorable now confirms my desired outcome. i accept the revised version as the only real one for me.",
      "my mind now holds the version of the past that serves my present identity. i do not return to old stories because i have already chosen the one that benefits me."
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
    revision: [
      "the past is softer than you think. it reshapes around the meaning you give it now.",
      "memory bends toward identity when resistance loosens.",
      "the old event survives only through the story you keep feeding."
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
    revision: [
      "the fact that the old event still bothers you means you are aware it never got final emotional authority.",
      "you are already changing the story every time you refuse to emotionally bow to the original version.",
      "the moment you can imagine a better version, you are no longer trapped in the old one."
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
    revision: [
      "stop replaying the old event like it deserves another performance. choose the revised version and leave.",
      "you are not revising if you keep emotionally re-entering the original scene.",
      "interrupt the old story now. the new version gets the throne."
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
    revision: [
      "name the old event, rewrite it in one clean sentence, repeat the new version, and refuse to revisit the old meaning.",
      "write the revised version once, read it back like it is obvious, then move on with your day.",
      "replace the old scene immediately when it shows up. no debate, no nostalgia."
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
    revision: [
      "the past answers to me now.",
      "i rewrite old outcomes like they were drafts.",
      "memory behaves when i decide what stays."
    ],
    default: [
      "reality reorganizes itself when i stop acting like a civilian.",
      "i move like a final boss in lip gloss.",
      "my identity lands like a threat and a promise."
    ]
  }
};

function normalizeInput(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function isTopicInCategory(category, topic) {
  const normalizedCategory = normalizeInput(category);
  const normalizedTopic = normalizeInput(topic);
  const validTopics = topicGroups[normalizedCategory] || [];
  return validTopics.includes(normalizedTopic);
}

function getModeLine(mode, topic) {
  const builder = modeBuilders[mode];
  if (!builder) return null;
  const pool = builder[topic] || builder.default;
  if (!pool) return null;
  const opener = randomItem(modeOpeners[mode]);
  return `${opener} ${randomItem(pool)}`;
}

function getBaseTopicLine(topic) {
  const pool = categories[topic] || categories.realitycheck;
  return randomItem(pool);
}

function getGeneralCallout(harsher = false) {
  return harsher ? randomItem(callouts.harsherGeneral) : randomItem(callouts.general);
}

function getTopicCallout(topic, harsher = false) {
  if (harsher) {
    const harsherPool = callouts.harsherByTopic[topic];
    if (harsherPool) return randomItem(harsherPool);
    return randomItem(callouts.harsherGeneral);
  }

  const pool = callouts.byTopic[topic] || callouts.general;
  return randomItem(pool);
}

function getReassurance(harsher = false) {
  if (harsher) {
    return "good. now stop spiraling and hold the line.";
  }
  return randomItem(reassuranceClosers);
}

function buildResponse({ topic, mode = null, responseStyle = "standard", harsher = false }) {
  const baseLine = getBaseTopicLine(topic);
  const modeLine = mode ? getModeLine(mode, topic) : null;

  if (responseStyle === "sameTopicSpam") {
    if (modeLine) return `${getTopicCallout(topic, harsher)} ${modeLine} ${getReassurance(harsher)}`;
    return `${getTopicCallout(topic, harsher)} ${baseLine} ${getReassurance(harsher)}`;
  }

  if (responseStyle === "generalSpam") {
    if (modeLine) return `${getGeneralCallout(harsher)} ${modeLine} ${getReassurance(harsher)}`;
    return `${getGeneralCallout(harsher)} ${baseLine} ${getReassurance(harsher)}`;
  }

  if (modeLine) return modeLine;
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
        "fix it like this: they always reach out when it matters, and i am always on their mind.",
        "fix it like this: communication flows to me naturally and consistently.",
        "fix it like this: silence never means rejection in my reality."
      ]
    },
    {
      test: /(third party|someone else|another girl|another guy|competition)/i,
      responses: [
        "fix it like this: there is no competition when i am the standard.",
        "fix it like this: i am the only one who truly matters in this situation.",
        "fix it like this: my presence naturally outweighs every other option."
      ]
    },
    {
      test: /(money|broke|can'?t afford|poor|debt)/i,
      responses: [
        "fix it like this: money always finds me in ways that support, secure, and expand me.",
        "fix it like this: i am financially supported and my circumstances improve quickly.",
        "fix it like this: my reality always makes room for more money."
      ]
    },
    {
      test: /(ugly|unattractive|not pretty|not hot|look bad)/i,
      responses: [
        "fix it like this: i am deeply attractive, magnetic, and impossible to ignore.",
        "fix it like this: my beauty is obvious, growing, and undeniable.",
        "fix it like this: people notice me immediately because i carry rare presence."
      ]
    },
    {
      test: /(hair|length|growth|edges)/i,
      responses: [
        "fix it like this: my hair grows quickly, beautifully, and continuously.",
        "fix it like this: my hair is healthy, thriving, and obsessed with length.",
        "fix it like this: my crown expands easily and visibly."
      ]
    },
    {
      test: /(grade|school|exam|test|class|college|assignment|study)/i,
      responses: [
        "fix it like this: i learn quickly, remember easily, and perform brilliantly.",
        "fix it like this: my mind is sharp, calm, and fully capable.",
        "fix it like this: school always works in my favor."
      ]
    },
    {
      test: /(past|before|happened|old story|old version|memory|revision)/i,
      responses: [
        "fix it like this: the past supports me now, and the revised version is the only one i accept.",
        "fix it like this: old events no longer define me because i have chosen the version that serves me.",
        "fix it like this: my current story overrides all old evidence."
      ]
    }
  ];

  for (const pattern of patterns) {
    if (pattern.test.test(cleaned)) return randomItem(pattern.responses);
  }

  return "fix it like this: even if i had a weird thought, i still get exactly what i want because my dominant identity wins.";
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
    },
    {
      test: /(exam|test|grade|assignment|school|class)/i,
      responses: [
        "the situation is not final unless you keep emotionally crowning it.",
        "one academic moment does not define your intelligence.",
        "respond like someone who still expects success."
      ]
    },
    {
      test: /(past|old story|memory|before|revision)/i,
      responses: [
        "the old version only survives if you keep dragging it forward.",
        "you are allowed to stop honoring the original event.",
        "choose the revised meaning and let the old one starve."
      ]
    }
  ];

  for (const pattern of patterns) {
    if (pattern.test.test(cleaned)) return randomItem(pattern.responses);
  }

  return "the situation is not the story. your reaction is just loud right now. decide what it means in your favor and move on.";
}

module.exports = {
  topicGroups,
  categories,
  modes,
  normalizeInput,
  isTopicInCategory,
  buildResponse,
  buildWaveringResponse,
  buildFixResponse,
  buildSituationResponse
};
