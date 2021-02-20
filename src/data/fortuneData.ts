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
      female: ["test data test data test data female under 20 career"],
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

type FortuneCategory3dModelsType = {
  [key in FortuneCategory]: string;
};

const FortuneCategory3dModels: FortuneCategory3dModelsType = {
  career: "spikes.glb",
  fortune: "spikes.glb",
  marriage: "spikes.glb",
  health: "spikes.glb",
  wealth: "spikes.glb",
  children: "spikes.glb",
  popularity: "spikes.glb",
  assets: "spikes.glb",
};

export { FortuneData, FortuneCategory3dModels };
