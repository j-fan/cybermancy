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
        "At this stage in life, you may not have your career figured out, but that is fine. Make sure to keep studying hard so that you can maximise the opportunities later on, especially in entrance exams. There is no harm in asking for additional help in the form of private tutoring. You might also be struggling with finding your own identity and fitting in at the same time in school. It is worth learning how to improve your appearance and to dress well, as this will give you a social advantage in your early adulthood - whether it be in job interviews or dating.",
      ],
      male: [
        "Spend the time to think about your career if you have no yet. Make sure to keep studying hard so that you can maximise the opportunities later on, especially in entrance exams. There is no harm in asking for additional help in the form of private tutoring. You might also be struggling with finding your own identity and fitting in at the same time in school. Its a good idea to engage in friendly competition like sports and debating, as this is great practice for your first job.",
      ],
    },
    "20-30": {
      female: [
        "You are early in your career or looking to start it. In this day and age, finding a job that suits you can be difficult. Aim to be a reliable and steadfast worker. If you are looking for a husband or are already married, you do not need to spend excess effort in improving this aspect of your life.",
      ],
      male: [
        "You are early in your career or looking to start it. In this day and age, finding a job that suits you can be difficult. Remember to persevere and work hard, so that success can come to you. Embrace your ambition now as actions in your early career can set you up for life.",
      ],
    },
    "30-40": {
      female: [
        "If you are still working, perhaps consider if other parts your life needs attention, such as your family. If you have not started one yet, give it some thought as your biological clock is running out of time.",
      ],
      male: [
        "You are likely in the middle of your career. If you have taken successful risks in your early career you are probably enjoying it now. Otherwise it is not too late. Perhaps try re-skilling with further education so that you can move upwards or transition into a different but better compensated profession.",
      ],
    },
    "50-60": {
      female: [
        "You are hopefully heading towards retirement or have already done so. If you can, remember to care for your family so that they will care for you in your old age.",
      ],
      male: [
        "You are hopefully heading towards retirement or have already done so. Now is not the time to make risky career choices, it is better to be a reliable and steadfast worker so that you can continue to take care if your family.",
      ],
    },
    "over-60": {
      female: [
        "You are hopefully retired or will be soon. Enjoy the rest of your life with your family and friends. If you have any grandchildren, it is not a bad idea to care for them so that your children can focus on building their career.",
      ],
      male: [
        "You are hopefully retired or will be soon. Enjoy the rest of your life with your family and friends. If you have any grandchildren, it is not a bad idea to care for them so that your children can focus on building their career.",
      ],
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
    "over-60": {
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
    "over-60": {
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
    "over-60": {
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
    "over-60": {
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
    "over-60": {
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
    "over-60": {
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
    "over-60": {
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
