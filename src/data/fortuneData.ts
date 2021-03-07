import { Gender } from "@vladmandic/face-api";
import { FortuneCategory, AgeGroups } from "./fortuneDataMappers";

type FortuneDataType = {
  [key in FortuneCategory]: {
    [key in AgeGroups]: {
      [key in Gender]: string[];
    };
  };
};

const FortuneData: FortuneDataType = {
  career: {
    "under-20": {
      female: [
        "test data test data test data female under 20 career",
        "test data test data test data female under 20 career 2",
        "test data test data test data female under 20 career 3",
      ],
      male: ["test data test data test data career default"],
    },
    "20-30": {
      female: ["test data test data test data female 20-30 career"],
      male: ["test data test data test data male 20-30 career"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  fortune: {
    "under-20": {
      female: ["test data test data test data female under 20 fortune"],
      male: ["test data test data test data fortune default"],
    },
    "20-30": {
      female: ["test data test data test data female 20-30 fortune"],
      male: ["test data test data test data male 20-30 fortune"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  marriage: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  health: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  wealth: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  children: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  popularity: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
  assets: {
    "under-20": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "20-30": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "30-40": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "50-60": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "60-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
    "over-70": {
      female: ["test data test data test data"],
      male: ["test data test data test data"],
    },
  },
};

type FortuneCategoryDataType = {
  [key in FortuneCategory]: {
    model: string[];
    description: string;
  };
};

const FortuneCategoryData: FortuneCategoryDataType = {
  career: {
    model: ["career.glb"],
    description:
      "The forehead represents your luck in youth (15-30 years old), as well as career prospects, analytical ability and general fortune. Any lines, scars and moles on the forehead indicate reduced luck. A dragon was chosen to represent this category because it possessing strong yang energy that governs wealth & power.",
  },
  fortune: {
    model: ["fortune.glb", "fortune2.glb"],
    description:
      "The forehead represents your luck in youth (15-30 years old), as well as career prospects, analytical ability and general fortune. A orange was chosen as the symbol here because its golden colour and shape resemble gold coins, so they attract wealth when placed in the home or at a shrine.",
  },
  marriage: {
    model: ["marriage.glb", "marriage2.glb"],
    description:
      "The eyes and eyebrows can tell us about your social status, family and romantic relationships. Together with the nose, the middle region of your face determines your luck in middle age (30-50 years old). An eternal knot was chosen to represent this category, as it is a ornament usually given at weddings to wish them a long and happy relationship.",
  },
  health: {
    model: ["health.glb"],
    description:
      "The nose can reveal insights about your health and wealth. Together with the nose, the middle region of your face determines your luck in middle age (30-50 years old). The peach, a popularity symbol of longevity was chosen to represent health.",
  },
  wealth: {
    model: ["wealth.glb"],
    description:
      "The nose can reveal insights about your health and wealth. Together with the nose, the middle region of your face determines your luck in middle age (30-50 years old). The Chinese ingot or sycee was chosen as the symbol to represent wealth here.",
  },
  children: {
    model: ["children.glb", "children2.glb"],
    description:
      "The area under the eyes relate to success in having children. Dark eye circles or any skin problems can affect the chances of having healthy children. The orchid, which is a symbol of fertility was chosen to represent this category.",
  },
  popularity: {
    model: ["popularity.glb", "popularity2.glb"],
    description:
      "The lower part of the face below the nose can reveal insights about older age (after 50 years old). Features of the area on either side of the mouth are related to your popularity or luck with friends. A rooster, an auspicious bird with the power to fight off enemies was chosen as a symbol for popularity here.",
  },
  assets: {
    model: ["assets.glb", "assets2.glb"],
    description:
      "The eyes and eyebrows can tell us about your social status, family and romantic relationships. Together with the nose, the middle region of your face determines your luck in middle age (30-50 years old). The region between the eyes and eyebrows tells us about your luck in owning and developing assets. An ancient Chinese coin, a popular object in lucky decorations was chosen to be the symbol for this category.",
  },
};

export { FortuneData, FortuneCategoryData };
