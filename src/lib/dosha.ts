export type Dosha = "vata" | "pitta" | "kapha";

export interface QuizOption {
  label: string;
  hindi: string;
  dosha: Dosha;
}

export interface QuizQuestion {
  question: string;
  hindi: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "How would you describe your body frame?",
    hindi: "आपकी शारीरिक बनावट कैसी है?",
    options: [
      { label: "Thin, light, hard to gain weight", hindi: "पतला और हल्का", dosha: "vata" },
      { label: "Medium, muscular, well proportioned", hindi: "मध्यम और सुडौल", dosha: "pitta" },
      { label: "Broad, solid, gains weight easily", hindi: "भारी और मजबूत", dosha: "kapha" },
    ],
  },
  {
    question: "How is your appetite through the day?",
    hindi: "आपकी भूख कैसी रहती है?",
    options: [
      { label: "Irregular — sometimes I forget to eat", hindi: "अनियमित", dosha: "vata" },
      { label: "Strong and sharp — I get irritable if late", hindi: "तेज़ भूख", dosha: "pitta" },
      { label: "Steady but low — I can skip meals easily", hindi: "कम लेकिन स्थिर", dosha: "kapha" },
    ],
  },
  {
    question: "How does your skin usually feel?",
    hindi: "आपकी त्वचा कैसी रहती है?",
    options: [
      { label: "Dry and rough, especially in winter", hindi: "रूखी त्वचा", dosha: "vata" },
      { label: "Warm, sensitive, prone to redness", hindi: "संवेदनशील त्वचा", dosha: "pitta" },
      { label: "Soft, oily, thick and smooth", hindi: "चिकनी त्वचा", dosha: "kapha" },
    ],
  },
  {
    question: "How do you handle weather?",
    hindi: "मौसम आप पर कैसा असर करता है?",
    options: [
      { label: "I dislike cold and wind", hindi: "ठंड पसंद नहीं", dosha: "vata" },
      { label: "Heat and humidity drain me", hindi: "गर्मी सहन नहीं", dosha: "pitta" },
      { label: "Damp, cool weather makes me sluggish", hindi: "नमी में सुस्ती", dosha: "kapha" },
    ],
  },
  {
    question: "What is your sleep like?",
    hindi: "आपकी नींद कैसी है?",
    options: [
      { label: "Light, easily disturbed", hindi: "हल्की नींद", dosha: "vata" },
      { label: "Moderate but sound, I wake up alert", hindi: "गहरी पर कम", dosha: "pitta" },
      { label: "Deep and long, hard to get up", hindi: "लंबी और गहरी", dosha: "kapha" },
    ],
  },
  {
    question: "How do you usually think and speak?",
    hindi: "आप कैसे सोचते और बोलते हैं?",
    options: [
      { label: "Fast, creative, jumping between ideas", hindi: "तेज़ और रचनात्मक", dosha: "vata" },
      { label: "Sharp, precise, persuasive", hindi: "स्पष्ट और तार्किक", dosha: "pitta" },
      { label: "Calm, slow, thoughtful", hindi: "शांत और धीमा", dosha: "kapha" },
    ],
  },
  {
    question: "How is your digestion after a heavy meal?",
    hindi: "भारी भोजन के बाद पाचन कैसा रहता है?",
    options: [
      { label: "Gas and bloating are common", hindi: "गैस और सूजन", dosha: "vata" },
      { label: "Acidity or heartburn", hindi: "अम्लता", dosha: "pitta" },
      { label: "Heaviness and drowsiness", hindi: "भारीपन और आलस्य", dosha: "kapha" },
    ],
  },
  {
    question: "How do you respond to stress?",
    hindi: "तनाव में आपकी प्रतिक्रिया?",
    options: [
      { label: "Anxious and restless", hindi: "बेचैनी", dosha: "vata" },
      { label: "Irritated and impatient", hindi: "चिड़चिड़ापन", dosha: "pitta" },
      { label: "Withdrawn, I avoid the situation", hindi: "चुप्पी", dosha: "kapha" },
    ],
  },
  {
    question: "What is your energy pattern?",
    hindi: "आपकी ऊर्जा का स्तर?",
    options: [
      { label: "Bursts of energy, then tired", hindi: "उतार-चढ़ाव", dosha: "vata" },
      { label: "Intense and goal driven all day", hindi: "तीव्र ऊर्जा", dosha: "pitta" },
      { label: "Steady and enduring, slow to start", hindi: "स्थिर ऊर्जा", dosha: "kapha" },
    ],
  },
  {
    question: "Which tastes do you naturally crave?",
    hindi: "आपको कौन-सा स्वाद पसंद है?",
    options: [
      { label: "Warm, sweet, salty comfort food", hindi: "मीठा और नमकीन", dosha: "vata" },
      { label: "Cool, sweet, slightly bitter foods", hindi: "ठंडा और कड़वा", dosha: "pitta" },
      { label: "Spicy, light, pungent foods", hindi: "तीखा और चटपटा", dosha: "kapha" },
    ],
  },
];

export interface DoshaProfile {
  key: Dosha;
  name: string;
  hindi: string;
  elements: string;
  summary: string;
  eat: string[];
  avoid: string[];
  meals: { time: string; hindi: string; dish: string }[];
  habits: string[];
}

export const doshaProfiles: Record<Dosha, DoshaProfile> = {
  vata: {
    key: "vata",
    name: "Vata",
    hindi: "वात",
    elements: "Air + Ether · वायु और आकाश",
    summary:
      "You are quick, creative and light by nature. Vata thrives on warmth, routine and grounding, nourishing food.",
    eat: [
      "Warm cooked grains — khichdi, dalia, soft rice",
      "Ghee, sesame oil and soaked almonds",
      "Sweet fruits: banana, mango, stewed apple",
      "Warming spices: ginger, ajwain, hing, cinnamon",
    ],
    avoid: [
      "Raw salads and cold drinks",
      "Dry snacks, crackers, popcorn",
      "Excess caffeine and irregular meal timings",
      "Beans without soaking and spicing",
    ],
    meals: [
      { time: "Breakfast", hindi: "सुबह का नाश्ता", dish: "Warm dalia with ghee, jaggery and soaked almonds" },
      { time: "Lunch", hindi: "दोपहर का भोजन", dish: "Moong dal khichdi, ghee, steamed lauki and curd" },
      { time: "Snack", hindi: "शाम का नाश्ता", dish: "Masala chai with roasted makhana" },
      { time: "Dinner", hindi: "रात का भोजन", dish: "Soft phulka, palak sabzi and warm milk with haldi" },
    ],
    habits: [
      "Eat at the same times every day",
      "Warm sesame oil self-massage (abhyanga) before bath",
      "Sleep by 10 pm; avoid screens late at night",
    ],
  },
  pitta: {
    key: "pitta",
    name: "Pitta",
    hindi: "पित्त",
    elements: "Fire + Water · अग्नि और जल",
    summary:
      "You are focused, sharp and driven. Pitta stays balanced with cooling, calming foods and a slower pace.",
    eat: [
      "Cooling grains — rice, barley, oats",
      "Sweet fruits: pomegranate, pear, coconut water",
      "Bitter greens: methi, karela, lauki",
      "Coriander, fennel, mint and cardamom",
    ],
    avoid: [
      "Very spicy, fried and sour food",
      "Excess tea, coffee and alcohol",
      "Fermented pickles and vinegar",
      "Skipping meals when hungry",
    ],
    meals: [
      { time: "Breakfast", hindi: "सुबह का नाश्ता", dish: "Coconut poha with curry leaves and a glass of coconut water" },
      { time: "Lunch", hindi: "दोपहर का भोजन", dish: "Rice, tuvar dal, lauki sabzi and cucumber raita" },
      { time: "Snack", hindi: "शाम का नाश्ता", dish: "Saunf water and a handful of sweet pomegranate" },
      { time: "Dinner", hindi: "रात का भोजन", dish: "Jowar roti, methi sabzi and mint chutney" },
    ],
    habits: [
      "Avoid working through lunch — eat at a fixed hour",
      "Cooling pranayama (sheetali) for 5 minutes daily",
      "Take a walk in moonlight or early morning, not harsh sun",
    ],
  },
  kapha: {
    key: "kapha",
    name: "Kapha",
    hindi: "कफ",
    elements: "Earth + Water · पृथ्वी और जल",
    summary:
      "You are steady, patient and strong. Kapha stays bright with light, warm, spiced food and daily movement.",
    eat: [
      "Light grains — millets, bajra, jowar, barley",
      "Plenty of steamed vegetables and sprouts",
      "Warming spices: black pepper, ginger, turmeric, mustard",
      "Honey in warm (not hot) water",
    ],
    avoid: [
      "Heavy dairy, cheese and sweets",
      "Fried food and refined flour (maida)",
      "Daytime naps and late heavy dinners",
      "Excess salt and cold drinks",
    ],
    meals: [
      { time: "Breakfast", hindi: "सुबह का नाश्ता", dish: "Ginger honey water and moong sprout chaat" },
      { time: "Lunch", hindi: "दोपहर का भोजन", dish: "Bajra roti, chana dal and dry-spiced cabbage sabzi" },
      { time: "Snack", hindi: "शाम का नाश्ता", dish: "Tulsi ginger tea with roasted chana" },
      { time: "Dinner", hindi: "रात का भोजन", dish: "Light vegetable soup with pepper and a small jowar roti" },
    ],
    habits: [
      "Move daily — brisk walk or surya namaskar",
      "Make lunch the largest meal, keep dinner light",
      "Wake before 6 am to avoid heaviness",
    ],
  },
};

export function scoreQuiz(answers: Dosha[]): { winner: Dosha; scores: Record<Dosha, number> } {
  const scores: Record<Dosha, number> = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach((a) => {
    scores[a] += 1;
  });
  const winner = (Object.keys(scores) as Dosha[]).reduce((a, b) => (scores[b] > scores[a] ? b : a));
  return { winner, scores };
}
