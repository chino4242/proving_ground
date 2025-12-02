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
  // --- DRAGON ---
    samurai: {
    displayName: "Samurai",
    ranks: {
      level5: { 
        name: "Shogun", 
        image: "/themes/samurai/level5.png", 
        description: "THE SUPREME RULER. Your word is law. Unmatched power and command over the empire." 
      },
      level4: { 
        name: "Daimyo", 
        image: "/themes/samurai/level4.png", 
        description: "WARLORD. You command armies and shape the battlefield. Your strength inspires thousands." 
      },
      level3: { 
        name: "Samurai", 
        image: "/themes/samurai/level3.png", 
        description: "WARRIOR. Sworn to duty. Your blade is an extension of your soul. You fight with precision." 
      },
      level2: { 
        name: "Ronin", 
        image: "/themes/samurai/level2.png", 
        description: "WANDERER. Masterless and free. You have skill, but rely only on your own strength to survive." 
      },
      level1: { 
        name: "Ashigaru", 
        image: "/themes/samurai/level1.png", 
        description: "FOOT SOLDIER. One of many. Your spear is sharp, but your discipline is tested daily." 
      },
      level0: { 
        name: "Peasant", 
        image: "/themes/samurai/level0.png", 
        description: "VILLAGER. Humble beginnings. You work the land, unaware of the warrior's path ahead." 
      },
    },
  },
  dragon: {
    displayName: "Draconic",
    ranks: {
      level5: {
        name: "Archdragon",
        image: "/themes/dragon/level5.png", // <--- Updated Path
        description: "A FORCE OF NATURE. Ancient, massive, and practically invincible.",
      },
      level4: {
        name: "Elder Dragon",
        image: "/themes/dragon/level4.png",
        description: "LEGENDARY BEAST. Your scales are iron and your breath is fire.",
      },
      level3: {
        name: "Dragon",
        image: "/themes/dragon/level3.png",
        description: "TERRIFYING. A fully grown predator of the skies.",
      },
      level2: {
        name: "Drake",
        image: "/themes/dragon/level2.png",
        description: "DANGEROUS. Wingless but strong. You are a threat, but grounded.",
      },
      level1: {
        name: "Whelp",
        image: "/themes/dragon/level1.png",
        description: "JUST HATCHED. Small, fragile, and full of potential.",
      },
      level0: {
        name: "Egg",
        image: "/themes/dragon/level0.png",
        description: "DORMANT. Waiting to wake up.",
      },
    },
  },

  // --- ESPIONAGE ---
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

  // --- NAVAL ---
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

  // --- VIKING ---
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
}
;