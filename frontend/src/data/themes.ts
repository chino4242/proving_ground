export interface RankDetails {
  name: string;
  image: string; 
  description: string;
}

export interface Theme {
  displayName: string;
  ranks: {
    [key: string]: RankDetails;
  };
}

export const THEMES: { [key: string]: Theme } = {
  // --- THEME 1: DRAGON ---
  dragon: {
    displayName: "Draconic",
    ranks: {
      level5: { name: "Archdragon", image: "/themes/dragon/level5.png", description: "A FORCE OF NATURE. Ancient, massive, and practically invincible." },
      level4: { name: "Elder Dragon", image: "/themes/dragon/level4.png", description: "LEGENDARY BEAST. Your scales are iron and your breath is fire." },
      level3: { name: "Dragon", image: "/themes/dragon/level3.png", description: "TERRIFYING. A fully grown predator of the skies." },
      level2: { name: "Drake", image: "/themes/dragon/level2.png", description: "DANGEROUS. Wingless but strong. You are a threat, but grounded." },
      level1: { name: "Whelp", image: "/themes/dragon/level1.png", description: "JUST HATCHED. Small, fragile, and full of potential." },
      level0: { name: "Egg", image: "/themes/dragon/level0.png", description: "DORMANT. Waiting to wake up." },
    },
  },

  // --- THEME 2: CYBERPUNK (New!) ---
  cyberpunk: {
    displayName: "Cyberpunk",
    ranks: {
      level5: { name: "Architect", image: "/themes/cyberpunk/level5.png", description: "OMNIPOTENT. You built the system. Reality bends to your code." },
      level4: { name: "Cypher", image: "/themes/cyberpunk/level4.png", description: "AN ANOMALY. You are a ghost in the machine. Security systems can't track you." },
      level3: { name: "Netrunner", image: "/themes/cyberpunk/level3.png", description: "CONNECTED. You live in the stream. Walls are just suggestions." },
      level2: { name: "White Hat", image: "/themes/cyberpunk/level2.png", description: "OPERATOR. You understand the systems and can defend yourself." },
      level1: { name: "Script Kiddie", image: "/themes/cyberpunk/level1.png", description: "NOVICE. You make noise, but lack true understanding." },
      level0: { name: "User", image: "/themes/cyberpunk/level0.png", description: "OFFLINE. Just another face in the crowd." },
    },
  },

  // --- THEME 3: SAMURAI (New!) ---
  samurai: {
    displayName: "Samurai",
    ranks: {
      level5: { name: "Shogun", image: "/themes/samurai/level5.png", description: "SUPREME RULER. Your word is law. Unmatched power and command." },
      level4: { name: "Daimyo", image: "/themes/samurai/level4.png", description: "WARLORD. You command armies and shape the battlefield." },
      level3: { name: "Samurai", image: "/themes/samurai/level3.png", description: "WARRIOR. Sworn to duty. Your blade is an extension of your soul." },
      level2: { name: "Ronin", image: "/themes/samurai/level2.png", description: "WANDERER. Masterless and free. You rely only on your own strength." },
      level1: { name: "Ashigaru", image: "/themes/samurai/level1.png", description: "FOOT SOLDIER. One of many. Your spear is sharp, but untested." },
      level0: { name: "Peasant", image: "/themes/samurai/level0.png", description: "VILLAGER. Humble beginnings. Unaware of the warrior's path." },
    },
  },

  // --- THEME 4: MAGE (New!) ---
  mage: {
    displayName: "Arcane",
    ranks: {
      level5: { name: "Sorcerer Supreme", image: "/themes/mage/level5.png", description: "MAGIC INCARNATE. You do not cast spells; you ARE the spell." },
      level4: { name: "Archmage", image: "/themes/mage/level4.png", description: "KEEPER OF SECRETS. You have delved into mysteries that break lesser minds." },
      level3: { name: "Mage", image: "/themes/mage/level3.png", description: "ELEMENTALIST. You command fire, ice, and lightning with a thought." },
      level2: { name: "Adept", image: "/themes/mage/level2.png", description: "SKILLED. You have mastered the basics and the academy recognizes you." },
      level1: { name: "Apprentice", image: "/themes/mage/level1.png", description: "STUDENT. Sparks fly from your fingertips, dangerous and uncontrolled." },
      level0: { name: "Novice", image: "/themes/mage/level0.png", description: "DORMANT. You have felt the spark, but cannot use it." },
    },
  },

  // --- THEME 5: DINOSAUR (New!) ---
  dinosaur: {
    displayName: "Apex Predator",
    ranks: {
      level5: { name: "Titanosaur", image: "/themes/dinosaur/level5.png", description: "EARTH SHAKER. A mountain of muscle. Nothing in history has been stronger." },
      level4: { name: "T-Rex", image: "/themes/dinosaur/level4.png", description: "TYRANT KING. Your bite force crushes bone. When you roar, the world listens." },
      level3: { name: "Triceratops", image: "/themes/dinosaur/level3.png", description: "LIVING TANK. Your defense is impenetrable. You hold your ground against anyone." },
      level2: { name: "Raptor", image: "/themes/dinosaur/level2.png", description: "CLEVER GIRL. Fast, aggressive, and lethal in a pack." },
      level1: { name: "Compy", image: "/themes/dinosaur/level1.png", description: "SCAVENGER. Small, fast, and unnoticed. You survive by staying out of the way." },
      level0: { name: "Fossil", image: "/themes/dinosaur/level0.png", description: "BURIED. Waiting to be discovered." },
    },
  },

  // --- THEME 6: ESPIONAGE ---
  espionage: {
    displayName: "Covert Ops",
    ranks: {
      level5: { name: "Spymaster", image: "/themes/espionage/level5.png", description: "THE UNSEEN HAND. You control the network." },
      level4: { name: "Phantom", image: "/themes/espionage/level4.png", description: "A MYTH. You strike without warning." },
      level3: { name: "Ghost", image: "/themes/espionage/level3.png", description: "UNTRACEABLE. A specialist who leaves no trail." },
      level2: { name: "Agent", image: "/themes/espionage/level2.png", description: "OPERATIONAL. Field-ready and trusted." },
      level1: { name: "Initiate", image: "/themes/espionage/level1.png", description: "THE RECRUIT. Entering the world of shadows." },
      level0: { name: "Civilian", image: "/themes/espionage/level0.png", description: "NO CLEARANCE. Unaware and unprepared." },
    },
  },

  // --- THEME 7: NAVAL ---
  naval: {
    displayName: "Armada",
    ranks: {
      level5: { name: "Dreadnought", image: "/themes/naval/level5.png", description: "RULER OF THE SEAS. Heavily armored and feared." },
      level4: { name: "Destroyer", image: "/themes/naval/level4.png", description: "OVERWHELMING FORCE. Power and speed." },
      level3: { name: "Frigate", image: "/themes/naval/level3.png", description: "THE BACKBONE. Versatile and reliable." },
      level2: { name: "Corvette", image: "/themes/naval/level2.png", description: "PATROL CLASS. Agile but light." },
      level1: { name: "Sloop", image: "/themes/naval/level1.png", description: "COASTAL RUNNER. A small vessel finding its way." },
      level0: { name: "Landlubber", image: "/themes/naval/level0.png", description: "STUCK ON SHORE. Haven't earned your sea legs." },
    },
  },

  // --- THEME 8: VIKING ---
  viking: {
    displayName: "Viking",
    ranks: {
      level5: { name: "Vikingur", image: "/themes/viking/level5.png", description: "THE MOST ELITE. Rare and respected." },
      level4: { name: "Fullsterkur", image: "/themes/viking/level4.png", description: "A MAN AMONGST MEN. Fully prepared." },
      level3: { name: "Sterkur", image: "/themes/viking/level3.png", description: "A CAPABLE MAN. Holds his own." },
      level2: { name: "Halfsterkur", image: "/themes/viking/level2.png", description: "STRONG ENOUGH TO GET NOTICED." },
      level1: { name: "Lazy Bones", image: "/themes/viking/level1.png", description: "UNFIT FOR THE SEA. Starting line." },
      level0: { name: "Thrall", image: "/themes/viking/level0.png", description: "UNTESTED. Not yet proven." },
    },
  },
};