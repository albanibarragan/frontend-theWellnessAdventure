const plansData = [
  {
    id: 1,
    value: "plan-Inicial",
    planName: "Plan Inicial",
    startDate: "01/01/2022",
    endDate: "31/12/2022",
    monto: {
      currency: "$",
      amount: 15,
      paymentFrequency: "mensual", // Add payment frequency
    },
    description: "Plan de retiro de bienestar para adultos mayores que incluye las siguientes actividades:",
    activities: ["Yoga", "Tai Chi", "Paseos al aire libre"],
    benefits: [
      "Mejora la postura y la fuerza muscular",
      "Estimula la coordinación y el equilibrio",
      "Fomenta una alimentación saludable y socialización",
    ],
  },
  {
    id: 2,
    value: "plan-ProI",
    planName: "Pro Plan Inicial",
    startDate: "01/01/2022",
    endDate: "31/12/2022",
    monto: {
      currency: "$",
      amount: 25,
      paymentFrequency: "mensual", // Add payment frequency
    },
    description: "Plan de retiro de bienestar para adultos mayores que incluye las siguientes actividades:",
    activities: ["Natación", "Gimnasia suave", "Jardinería"],
    benefits: [
      "Mejora la flexibilidad y equilibrio",
      "Reduce el estrés y la ansiedad",
      "Fomenta la relajación y el bienestar emocional",
    ],
  },
  {
    id: 3,
    value: "bienestar-esencial",
    planName: "Plan Inicial Bienestar Esencial",
    startDate: "01/01/2022",
    endDate: "31/12/2022",
    monto: {
      currency: "$",
      amount: 20,
      paymentFrequency: "mensual", // Add payment frequency
    },
    description: "Plan de retiro de bienestar para adultos mayores que incluye las siguientes actividades:",
    activities: ["Pilates", "Baile", "Talleres de cocina"],
    benefits: [
      "Fortalece los músculos y las articulaciones",
      "Mejora la resistencia cardiovascular",
      "Estimula la creatividad y el contacto con la naturaleza",
    ],
  },
];
  export default plansData;