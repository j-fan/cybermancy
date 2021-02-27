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
    model: ["spikes.glb"],
    description: "career base description",
  },
  fortune: {
    model: ["spikes2.glb", "spikes2a.glb"],
    description: "fortune base description",
  },
  marriage: {
    model: ["spikes3.glb", "spikes3a.glb"],
    description: "marriage base description",
  },
  health: {
    model: ["spikes4.glb"],
    description: "health base description",
  },
  wealth: {
    model: ["spikes5.glb"],
    description: "wealth base description",
  },
  children: {
    model: ["spikes6.glb", "spikes6a.glb"],
    description: "children base description",
  },
  popularity: {
    model: ["spikes7.glb", "spikes7a.glb"],
    description: "popularity base description",
  },
  assets: {
    model: ["assets.glb", "assets2.glb"],
    description: "assets base description",
  },
};

export { FortuneData, FortuneCategoryData };
