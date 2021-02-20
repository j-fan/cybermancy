import { FaceLandmarks68, Gender, Point } from "@vladmandic/face-api";
import { FortuneData } from "./fortuneData";

enum FortuneCategory {
  CAREER = "career",
  FORTUNE = "fortune",
  MARRIAGE = "marriage",
  HEALTH = "health",
  WEALTH = "wealth",
  CHILDREN = "children",
  POPULARITY = "popularity",
  ASSETS = "assets",
}

enum AgeGroups {
  AGE_UNDER_20 = "under-20",
  AGE_20_TO_30 = "20-30",
  AGE_30_TO_40 = "30-40",
  AGE_40_TO_50 = "50-60",
  AGE_50_TO_60 = "50-60",
  AGE_60_TO_70 = "60-70",
  AGE_OVER_70 = "over-70",
}

const mapAgeToAgeGroup = (age: number): AgeGroups => {
  if (age < 20) return AgeGroups.AGE_UNDER_20;
  if (age >= 20 && age < 30) return AgeGroups.AGE_20_TO_30;
  if (age >= 30 && age < 40) return AgeGroups.AGE_30_TO_40;
  if (age >= 40 && age < 50) return AgeGroups.AGE_40_TO_50;
  if (age >= 50 && age < 60) return AgeGroups.AGE_50_TO_60;
  if (age >= 60 && age < 70) return AgeGroups.AGE_60_TO_70;
  if (age >= 70) return AgeGroups.AGE_OVER_70;

  return AgeGroups.AGE_20_TO_30;
};

// refer to this map for the positions of the 68 points on the face
// https://www.researchgate.net/figure/The-68-facial-landmarks-extracted-from-a-frontal-face-view_fig3_320979643
const mapFaceToFortuneCategory = (
  faceLandmarks: FaceLandmarks68,
  category: FortuneCategory
): Point[] => {
  const facePoints: Point[] = [];
  switch (category) {
    // Temples
    case FortuneCategory.FORTUNE:
      facePoints.push(faceLandmarks.positions[18].sub(new Point(0, 30)));
      facePoints.push(faceLandmarks.positions[27].sub(new Point(0, 30)));
      break;
    // Nose
    case FortuneCategory.CAREER:
      facePoints.push(faceLandmarks.positions[28].sub(new Point(0, 50)));
      break;
    case FortuneCategory.HEALTH:
      facePoints.push(faceLandmarks.positions[28]);
      break;
    case FortuneCategory.WEALTH:
      facePoints.push(faceLandmarks.positions[34]);
      break;
    // Eyes
    case FortuneCategory.ASSETS:
      facePoints.push(faceLandmarks.positions[39]);
      facePoints.push(faceLandmarks.positions[44]);
      break;
    case FortuneCategory.MARRIAGE:
      facePoints.push(faceLandmarks.positions[1]);
      facePoints.push(faceLandmarks.positions[17]);
      break;
    case FortuneCategory.CHILDREN:
      facePoints.push(faceLandmarks.positions[42]);
      facePoints.push(faceLandmarks.positions[47]);
      break;
    // Chin
    case FortuneCategory.POPULARITY:
      facePoints.push(faceLandmarks.positions[9]);
      break;
  }
  return facePoints;
};

const getFaceReading = (
  category: FortuneCategory,
  age: number,
  gender: Gender
): string[] => {
  return FortuneData[category][mapAgeToAgeGroup(age)][gender];
};

export { FortuneCategory, AgeGroups, mapFaceToFortuneCategory, getFaceReading };
