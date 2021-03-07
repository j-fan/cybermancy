import { FaceLandmarks68, Gender, Point } from "@vladmandic/face-api";
import { FortuneCategoryData, FortuneData } from "./fortuneData";

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
  AGE_OVER_60 = "over-60",
}

const mapAgeToAgeGroup = (age: number): AgeGroups => {
  if (age < 20) return AgeGroups.AGE_UNDER_20;
  if (age >= 20 && age < 30) return AgeGroups.AGE_20_TO_30;
  if (age >= 30 && age < 40) return AgeGroups.AGE_30_TO_40;
  if (age >= 40 && age < 50) return AgeGroups.AGE_40_TO_50;
  if (age >= 50 && age < 60) return AgeGroups.AGE_50_TO_60;
  if (age >= 60) return AgeGroups.AGE_OVER_60;

  return AgeGroups.AGE_20_TO_30;
};

// Look up face landmarks 68 for the map of the points
const mapFortuneCategoryToFacePoint = (
  category: FortuneCategory,
  faceLandmarks?: FaceLandmarks68
): Point[] => {
  if (!faceLandmarks) {
    return [];
  }

  const facePoints: Point[] = [];
  switch (category) {
    // Temples
    case FortuneCategory.FORTUNE:
      facePoints.push(faceLandmarks.positions[18].sub(new Point(0, 30)));
      facePoints.push(faceLandmarks.positions[25].sub(new Point(0, 30)));
      break;
    // Nose
    case FortuneCategory.CAREER:
      facePoints.push(faceLandmarks.positions[28].sub(new Point(0, 100)));
      break;
    case FortuneCategory.HEALTH:
      facePoints.push(faceLandmarks.positions[28]);
      break;
    case FortuneCategory.WEALTH:
      facePoints.push(faceLandmarks.positions[34]);
      break;
    // Eyes
    case FortuneCategory.ASSETS:
      facePoints.push(faceLandmarks.positions[37].sub(new Point(0, 15)));
      facePoints.push(faceLandmarks.positions[44].sub(new Point(0, 15)));
      break;
    case FortuneCategory.MARRIAGE:
      facePoints.push(faceLandmarks.positions[36].sub(new Point(20, 0)));
      facePoints.push(faceLandmarks.positions[45].add(new Point(20, 0)));
      break;
    case FortuneCategory.CHILDREN:
      facePoints.push(faceLandmarks.positions[40].add(new Point(0, 15)));
      facePoints.push(faceLandmarks.positions[47].add(new Point(0, 15)));
      break;
    // Chin
    case FortuneCategory.POPULARITY:
      facePoints.push(faceLandmarks.positions[6]);
      facePoints.push(faceLandmarks.positions[10]);
      break;
  }
  return facePoints;
};

const getFaceReading = (
  category: FortuneCategory,
  age: number,
  gender: Gender
): { categoryDescription: string; reading: string } => {
  const categoryDescription = FortuneCategoryData[category].description;
  const readings = FortuneData[category][mapAgeToAgeGroup(age)][gender];
  const reading = readings[Math.floor(Math.random() * readings.length)];
  return { categoryDescription, reading };
};

export {
  FortuneCategory,
  AgeGroups,
  mapFortuneCategoryToFacePoint,
  getFaceReading,
};
