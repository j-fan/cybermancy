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
        "Your forehead shape indicates that you are young and have not started your career yet. At this stage in life, you may not have your career figured out, but that is fine. Make sure to keep studying hard so that you can maximise the opportunities later on, especially in entrance exams. There is no harm in asking for additional help in the form of private tutoring. You might also be struggling with finding your own identity and fitting in at the same time in school. It is worth learning how to improve your appearance and to dress well, as this will give you a social advantage in your early adulthood - whether it be in job interviews or dating.",
      ],
      male: [
        "Your forehead shape indicates that you are young and have not started your career yet. Spend the time to think about your career if you have no yet. Make sure to keep studying hard so that you can maximise the opportunities later on, especially in entrance exams. There is no harm in asking for additional help in the form of private tutoring. You might also be struggling with finding your own identity and fitting in at the same time in school. Its a good idea to engage in friendly competition like sports and debating, as this is great practice for your first job.",
      ],
    },
    "20-30": {
      female: [
        "Your forehead shape indicates that you are early in your career or looking to start it. In this day and age, finding a job that suits you can be difficult. Aim to be a reliable and steadfast worker. If you are looking for a husband or are already married, you do not need to spend excess effort in improving this aspect of your life.",
      ],
      male: [
        "Your forehead shape indicates that you are early in your career or looking to start it. In this day and age, finding a job that suits you can be difficult. Remember to persevere and work hard, so that success can come to you. Embrace your ambition now as actions in your early career can set you up for life.",
      ],
    },
    "30-40": {
      female: [
        "Based on the shape of your forehead, you are likely in the middle of your career or getting close. If you are still working, perhaps consider if other parts your life needs attention, such as your family. If you have not started one yet, give it some thought as your biological clock is running out of time.",
      ],
      male: [
        "Based on the shape of your forehead, you are likely in the middle of your career or getting close. If you have taken successful risks in your early career you are probably enjoying it now. Otherwise it is not too late. Perhaps try re-skilling with further education so that you can move upwards or transition into a different but better compensated profession.",
      ],
    },
    "50-60": {
      female: [
        "Based on the shape of your forehead, you are hopefully heading towards retirement or have already done so. If you can, remember to care for your family so that they will care for you in your old age.",
      ],
      male: [
        "Based on the shape of your forehead, you are hopefully heading towards retirement or have already done so. Now is not the time to make risky career choices, it is better to be a reliable and steadfast worker so that you can continue to take care if your family.",
      ],
    },
    "over-60": {
      female: [
        "Based on the shape of your forehead, you are hopefully retired or will be soon. Enjoy the rest of your life with your family and friends. If you have any grandchildren, it is not a bad idea to care for them so that your children can focus on building their career.",
      ],
      male: [
        "Based on the shape of your forehead, you are hopefully retired or will be soon. Enjoy the rest of your life with your family and friends. If you have any grandchildren, it is not a bad idea to care for them so that your children can focus on building their career.",
      ],
    },
  },
  fortune: {
    "under-20": {
      female: [
        "Your forehead shape indicates that you are young and full of potential. Be grateful for the good opportunities that come your way.",
      ],
      male: [
        "Your forehead shape indicates that you are young and full of potential. Do not hesitate and squander good opportunities that come your way.",
      ],
    },
    "20-30": {
      female: [
        'Your forehead shape indicates that you have a decent chance to attract good fortune for yourself or your partner. However this region of the face only indicates your luck "sent from heaven", or in other words - your luck in youth. If things are going well for you, do not take it for granted and make the most of it.',
      ],
      male: [
        'Your forehead shape indicates that you have a decent chance to attract good fortune for yourself. However this region of the face only indicates your luck "sent from heaven", or in other words - your luck in youth. If things are going well for you, do not take it for granted and make the most of it.',
      ],
    },
    "30-40": {
      female: [
        "Your forehead is beginning to show signs of lines or other blemishes which can indicate troubles with your luck. It is recommended to maintain a good skincare routine or use makeup to keep the forehead bright and clear, to attract good fortune.",
      ],
      male: [
        "Your forehead is beginning to show signs of lines or other blemishes which can indicate troubles with your luck. It is recommended to maintain a good skincare routine to keep the forehead bright and clear, to attract good fortune.",
      ],
    },
    "50-60": {
      female: [
        "Your forehead has signs of lines or other blemishes which can interfere with good fortune. However since this area of the face mainly governs your luck in youth, other positive facial features can make up for this. Continue to maintain a skin care routine or employ cosmetics so that you can keep the skin bright and clear, to attract good fortune.",
      ],
      male: [
        "Your forehead has signs of lines or other blemishes which can interfere with good fortune. However since this area of the face mainly governs your luck in youth, other positive facial features can make up for this. Continue to maintain a skin care routine so that you can keep the skin bright and clear, to attract good fortune.",
      ],
    },
    "over-60": {
      female: [
        "Your forehead has signs of lines or other blemishes which can interfere with good fortune. However since this area of the face mainly governs your luck in youth, other positive facial features can make up for this.",
      ],
      male: [
        "Your forehead has signs of lines or other blemishes which can interfere with good fortune. However since this area of the face mainly governs your luck in youth, other positive facial features can make up for this.",
      ],
    },
  },
  marriage: {
    "under-20": {
      female: [
        "The shape of your eyebrows indicate that you are too young to consider marriage yet. However you should keep on the lookout for boys that might make an ideal husband.",
      ],
      male: [
        "The shape of your eyebrows indicate that you are too young to consider marriage yet. However you should still work hard so that you can secure a career to attract a good wife.",
      ],
    },
    "20-30": {
      female: [
        "The shape of your eyebrows indicate that you might be newly married or considering it. You should not leave the decision too late otherwise the ideal partners will have been chosen by others already.",
      ],
      male: [
        "The shape of your eyebrows indicate that you might be newly married or considering it. If you are not happily partnered yet, keep working on your career and yourself so that you can attract an ideal wife.",
      ],
    },
    "30-40": {
      female: [
        "The shape of your eyebrows indicate that you are having increasing struggle in your dating life, if you are not already partnered. If you desire a marriage or long term relationship, this will be difficult to achieve with your youthful days behind you.",
      ],
      male: [
        "The shape of your eyebrows indicate that you are having increasing struggle in your dating life, if you are not already partnered. There is still time to attract an ideal partner if you keep working on your career and yourself.",
      ],
    },
    "50-60": {
      female: [
        "Judging by the shape and form of your eyebrows, marriage is not a primary concern for you, either because you are already married or decided that you do not need it in your life. If you are not partnered, perhaps consider if you have lived the best life that you could.",
      ],
      male: [
        "Judging by the shape and form of your eyebrows, marriage is not a primary concern for you, either because you are already married or decided that you do not need it in your life.",
      ],
    },
    "over-60": {
      female: [
        "Judging by the shape and form of your eyebrows, marriage is not a primary concern for you, either because you are already married or decided that you do not need it in your life. If you are not partnered, perhaps consider if you have lived the best life that you could.",
      ],
      male: [
        "Judging by the shape and form of your eyebrows, marriage is not a primary concern for you, either because you are already married or decided that you do not need it in your life.",
      ],
    },
  },
  health: {
    "under-20": {
      female: [
        "The shape of your nose indicates that you are mostly healthy and youthful. You should maintain that health though good diet and exercise you that you can preserve your beauty for longer.",
      ],
      male: [
        "The shape of your nose indicates that you are mostly healthy and youthful. You should maintain that health though good diet and exercise so that keep your strength and vitality for longer.",
      ],
    },
    "20-30": {
      female: [
        "The shape of your nose indicates that you are in the prime of life. You should aim to maintain that health though good diet and exercise you that you can preserve your beauty for longer, and to be prepared for any child you might have.",
      ],
      male: [
        "The shape of your nose indicates that you are in the prime of life. You should maintain that health though good diet and exercise so that keep your strength and vitality for longer.",
      ],
    },
    "30-40": {
      female: [
        "The shape of your nose indicates that you are beginning to age. You should keep taking care of your body and skin, especially your face, so that your can maintain your looks for longer.",
      ],
      male: [
        "The shape of your nose indicates that you are beginning to age. You should keep taking care of your body so that avoid illnesses and pain in your later life.",
      ],
    },
    "50-60": {
      female: [
        "The features of your nose suggest that you are aging. Keep working on your health with good diet and exercise so that you can age gracefully.",
      ],
      male: [
        "The features of your nose suggest that you are aging. Keep working on your health with good diet and exercise so that you can preserve your strength.",
      ],
    },
    "over-60": {
      female: [
        "The features of your nose suggest that you are aging. Keep working on your health with good diet and exercise before it is too late.",
      ],
      male: [
        "The features of your nose suggest that you are aging. Keep working on your health with good diet and exercise before it is too late.",
      ],
    },
  },
  wealth: {
    "under-20": {
      female: [
        "Your nose shape indicates that you have a fair opportunity to bring wealth in your life. However your nose should be luminous with no blemishes or spots. Spots mean that blockages to attaining wealth exists. You can make up for this by using cosmetics.",
      ],
      male: [
        "Your nose shape indicates that you have a fair opportunity to bring wealth to your life. It should be free of blemishes as they indicate impediments to attaining wealth. Keep it clean and adopt a skincare routine if necessary.",
      ],
    },
    "20-30": {
      female: [
        "Your nose shape indicates that you have a fair opportunity to bring wealth to your husband or partner. Your nose should be luminous with no blemishes or spots. Spots mean that blockages to attaining wealth exists. You can make up for this by using cosmetics.",
      ],
      male: [
        "Your nose shape indicates that you have a fair opportunity to bring wealth to your life. It should be free of blemishes as they indicate impediments to attaining wealth. Keep it clean and adopt a skincare routine if necessary. If you are frugal and ambitious in your career now, you can amass wealth in your middle age.",
      ],
    },
    "30-40": {
      female: [
        "Your nose shape indicates that you have a good opportunity to bring wealth to your husband or partner. Your nose should not have any blemishes or spots as they indicate problems in attaining wealth. It is a good investment to spend some money on a house or children now, so that you can be taken care of in old age.",
      ],
      male: [
        "Your nose shape indicates that you have a good opportunity to bring wealth to your life. Invest your money well and keep working hard and you can gain wealth in your middle age. Keep it clean and free of blemishes to increase your luck in attaining wealth.",
      ],
    },
    "50-60": {
      female: [
        "Your nose shape indicates that you have a good opportunity to bring wealth to your husband or partner. It is a good idea to take care of the home so that your partner has the best chance to succeed.",
      ],
      male: [
        "Your nose shape indicates that you have a good opportunity to bring wealth to your life. Invest your money well and keep working hard and you can gain wealth in your middle age.  Keep it clean and free of blemishes to increase your luck in attaining wealth.",
      ],
    },
    "over-60": {
      female: [
        "Your nose shape indicates that you have a fair opportunity to bring wealth to your husband or partner. However at this age, the nose plays a lesser part in your general fortunes. Desirable traits in your lower face can make up for the lack of luck in this area. If you have invested in your husband or any children, you will be taken care of in old age.",
      ],
      male: [
        "our nose shape indicates that you have a fair opportunity to bring wealth to yourself. However at this age, the nose plays a lesser part in your general fortunes. Desirable traits in your lower face can make up for the lack of luck in this area. It is time to make smart investments to secure your retirement.",
      ],
    },
  },
  children: {
    "under-20": {
      female: [
        "Your eyes and the features around it suggest that you are too young to consider children yet. However keep on the lookout for a ideal partner that you could settle down with.",
      ],
      male: [
        "Your eyes and the features around it suggest that you are too young to consider children yet.",
      ],
    },
    "20-30": {
      female: [
        "Based on the shape of your eyes, you are at the best age to have children. Although you might be preoccupied with your career, friends and other things, do not let your best ages go by.",
      ],
      male: [
        "Based on the shape of your eyes, you should start thinking about whether you want children. However this is also the best time to make advancements in your career, so that should take precedence so that you can provide for your family.",
      ],
    },
    "30-40": {
      female: [
        "Your eyes and the features around it indicate that you are running out of time to have children if you have not done so already. If that is the case, spend more time and effort in this area rather than being distracted by career and friends.",
      ],
      male: [
        "Your eyes and the features around it indicate that you are at a good point to start a family if you have not done so. You are probably well established in your career now and should choose",
      ],
    },
    "50-60": {
      female: [
        "The shape of your eyes indicate that having children is not possible at your stage of life. Either because you chosen not to have them or they are almost grown. If you don't have any, consider whether or not you have lived your life to its fullest potential.",
      ],
      male: [
        "The shape of your eyes indicate that having children is not primary concern for you at your stage of life. Either because you chosen not to have them or they are almost grown.",
      ],
    },
    "over-60": {
      female: [
        "The shape of your eyes indicate that having children is not possible at your stage of life. Either because you chosen not to have them or they are almost grown. If you don't have any, consider whether or not you have lived your life to its potential.",
      ],
      male: [
        "The shape of your eyes indicate that having children is not primary concern for you at your stage of life. Either because you chosen not to have them or they are almost grown.",
      ],
    },
  },
  popularity: {
    "under-20": {
      female: [
        "The features of your lower face indicate that you have some problems with your popularity. You are trying to find your authentic self but not stand out too much at the same time. Do not worry, you will be able to develop your own style in time.",
      ],
      male: [
        "The features of your lower face indicate that you have some problems with your popularity. You are trying to find your authentic self but not stand out too much at the same time. Do not worry, you will be able to express yourself comfortably in time.",
      ],
    },
    "20-30": {
      female: [
        "The features of your lower face indicate that this is a time of great change in your life. You may be losing and gaining different sets of friends as you move through life stages - from highschool to university or university to the workplace. Do not worry, you social circle will settle in time.",
      ],
      male: [
        "The features of your lower face indicate that this is a time of great change in your life. You may be losing and gaining different sets of friends as you move through life stages - from highschool to university or university to the workplace. Take care of your friendships, they may open doors in your career or other parts of life if you treat them well.",
      ],
    },
    "30-40": {
      female: [
        "The features of your lower face show that you might be having some trouble maintaining the same amount of friendships as in your youth. They may be withdrawing because they are preoccupied with partners or careers. Remember to take of your friendships, as it is easy to become isolated or withdrawn yourself.",
      ],
      male: [
        "The features of your lower face show that you might be having some trouble maintaining the same amount of friendships as in your youth. They may be withdrawing because they are preoccupied with partners or careers. Remember to take care of your friendships, they may open doors in your career or other parts of life if you treat them well.",
      ],
    },
    "50-60": {
      female: [
        "Your lower face shows that you might have some trouble commanding respect from others, whether that be strangers, children or other coworkers, compared to your younger days. Improving your appearance though posture and attire may help with this.",
      ],
      male: [
        "Your lower face indicates that you are respected, mainly to your age and experience. Perhaps consider being a mentor to another so that you that you can pass on your knowledge. Remember to take care of your friendships as they may become fewer as you age.",
      ],
    },
    "over-60": {
      female: [
        "Your lower face shows that you might have some trouble commanding respect from others, whether that be strangers, children or other coworkers, compared to your younger days. Improving your appearance though posture and attire may help with this.",
      ],
      male: [
        "Your lower face indicates that you are respected, mainly to your age and experience. Perhaps consider being a mentor to another so that you that you can pass on your knowledge. Remember to take care of your friendships as they may become fewer as you age.",
      ],
    },
  },
  assets: {
    "under-20": {
      female: [
        "The features of your eyes indicate that you are young and do not have many assets to your name yet. If you don't intend to work during your best years to get a comfortable life, start thinking about finding a partner that can provide well for you.",
      ],
      male: [
        "The features of your eyes indicate that you are young and do not have many assets to your name yet.  Work hard and stay competitive in school so that you set yourself up for a successful career later.",
      ],
    },
    "20-30": {
      female: [
        "The features of your eyes indicate that you are young and starting to accumulate some assets. As a young person you are feeling the pressure of a competitive economy. It is hard to acquire large assets like property in this day and age. It will help to share that burden with a life partner.",
      ],
      male: [
        "The features of your eyes indicate that you are young and starting to accumulate some assets. As a young person you are feeling the pressure of a competitive economy. It is hard to acquire large assets like property in this day and age. You will have to work hard and smart. Taking care of your finances will help you attract a good partner.",
      ],
    },
    "30-40": {
      female: [
        "The features of your eyes suggest that you had some mixed success in trying to grow your own assets. It might help to combine forces with a partner to help you achieve financial milestones like buying a house.",
      ],
      male: [
        "The features of your eyes suggest that you had some mixed success in trying to grow your own assets. You will have to work hard and make good investments.  Perhaps starting your own business is the way to go if you are having difficulties progressing fast enough in your career.",
      ],
    },
    "50-60": {
      female: [
        "The features of your eyes suggest that you are heading towards retirement or have already started it. If you have chosen a good spouse, you are living comfortably with a good amount of shared assets to last. If not, you should make sure that you have enough retirement funds or downscale your lifestyle to be manageable.",
      ],
      male: [
        "The features of your eyes suggest that you are heading towards retirement or have already started it. Although a little late, you should make sure that you have enough retirement funds or downscale your lifestyle to be manageable.",
      ],
    },
    "over-60": {
      female: [
        "The features of your eyes suggest that you are heading towards retirement or have already started it. If you have chosen a good spouse, you are living comfortably with a good amount of shared assets to last. If not, you should make sure that you have enough retirement funds or downscale your lifestyle to be manageable.",
      ],
      male: [
        "The features of your eyes suggest that you are heading towards retirement or have already started it. Although a little late, you should make sure that you have enough retirement funds or downscale your lifestyle to be manageable.",
      ],
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
