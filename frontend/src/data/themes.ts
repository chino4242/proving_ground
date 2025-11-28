export interface RankDetails {
    name: string;
    image: string; // Placeholder for now (e.g., "dragon.png")
    description: string;
  }
  
  export interface Theme {
    displayName: string;
    ranks: {
      [key: string]: RankDetails; // e.g., "level5": { ... }
    };
  }
  
  export const THEMES: { [key: string]: Theme } = {
    // --- THEME 1: DRAGON (Fantasy, Epic) ---
    dragon: {
      displayName: "Draconic",
      ranks: {
        level5: {
          name: "Archdragon",
          image: "archdragon.png",
          description: "A FORCE OF NATURE. Ancient, massive, and practically invincible.",
        },
        level4: {
          name: "Elder Dragon",
          image: "elder.png",
          description: "LEGENDARY BEAST. Your scales are iron and your breath is fire.",
        },
        level3: {
          name: "Dragon",
          image: "dragon.png",
          description: "TERRIFYING. A fully grown predator of the skies.",
        },
        level2: {
          name: "Drake",
          image: "drake.png",
          description: "DANGEROUS. Wingless but strong. You are a threat, but grounded.",
        },
        level1: {
          name: "Whelp",
          image: "whelp.png",
          description: "JUST HATCHED. Small, fragile, and full of potential.",
        },
        level0: {
          name: "Egg",
          image: "egg.png",
          description: "DORMANT. Waiting to wake up.",
        },
      },
    },
  
    // --- THEME 2: ESPIONAGE (Modern, Stealthy) ---
    espionage: {
      displayName: "Covert Ops",
      ranks: {
        level5: {
          name: "Spymaster",
          image: "spymaster.png",
          description: "THE UNSEEN HAND. You control the network. Your capabilities are legendary and absolute.",
        },
        level4: {
          name: "Phantom",
          image: "phantom.png",
          description: "A MYTH. You strike without warning and vanish without a trace. Elite status.",
        },
        level3: {
          name: "Ghost",
          image: "ghost.png",
          description: "UNTRACEABLE. You can handle yourself in any situation. A specialist who leaves no trail.",
        },
        level2: {
          name: "Agent",
          image: "agent.png",
          description: "OPERATIONAL. You are field-ready and trusted, but you lack the elite conditioning of the top tiers.",
        },
        level1: {
          name: "Initiate",
          image: "initiate.png",
          description: "THE RECRUIT. You have entered the world of shadows, but you are not yet ready for the field.",
        },
        level0: {
          name: "Civilian",
          image: "civilian.png",
          description: "NO CLEARANCE. You are unaware and unprepared for what lies ahead.",
        },
      },
    },
  
    // --- THEME 3: NAVAL (Structured, Powerful) ---
    naval: {
      displayName: "Armada",
      ranks: {
        level5: {
          name: "Dreadnought",
          image: "dreadnought.png",
          description: "RULER OF THE SEAS. Heavily armored, distinct, and feared by all who encounter you.",
        },
        level4: {
          name: "Destroyer",
          image: "destroyer.png",
          description: "OVERWHELMING FORCE. You project power and speed. A primary asset to the fleet.",
        },
        level3: {
          name: "Frigate",
          image: "frigate.png",
          description: "THE BACKBONE. Versatile, reliable, and capable of independent operation.",
        },
        level2: {
          name: "Corvette",
          image: "corvette.png",
          description: "PATROL CLASS. Agile and active, but you lack the heavy armor for deep water conflict.",
        },
        level1: {
          name: "Sloop",
          image: "sloop.png",
          description: "COASTAL RUNNER. A small vessel finding its way. Not fit for the open ocean.",
        },
        level0: {
          name: "Landlubber",
          image: "landlubber.png",
          description: "STUCK ON SHORE. You haven't earned your sea legs yet.",
        },
      },
    },
  
    // --- THEME 4: VIKING (The Original) ---
    viking: {
      displayName: "Viking",
      ranks: {
        level5: {
          name: "Vikingur",
          image: "vikingur.png",
          description: "THE MOST ELITE—WORLD CLASS. Rare, respected, and highly difficult to achieve.",
        },
        level4: {
          name: "Fullsterkur",
          image: "fullsterkur.png",
          description: "FULLY PREPARED—A MAN AMONGST MEN. Reflects a complete, consistent, and elite level of general physical preparedness.",
        },
        level3: {
          name: "Sterkur",
          image: "sterkur.png",
          description: "A CAPABLE MAN—HOLDS HIS OWN. Reliable across strength and conditioning domains.",
        },
        level2: {
          name: "Halfsterkur",
          image: "halfsterkur.png",
          description: "STRONG ENOUGH TO GET NOTICED. You have a foundation, but gaps remain.",
        },
        level1: {
          name: "Lazy Bones",
          image: "lazybones.png",
          description: "UNFIT FOR THE SEA. Marks the starting line. Represents minimal load-bearing ability.",
        },
        level0: {
          name: "Thrall",
          image: "thrall.png",
          description: "UNTESTED. You have not yet proven your worth.",
        },
      },
    },
  };