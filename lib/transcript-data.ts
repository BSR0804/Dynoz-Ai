export type TranscriptLine = {
  speaker: "Guest" | "Dynoz";
  lang: string;
  langLabel: string;
  text: string;
  phase: "Before Arrival" | "During Stay" | "After Checkout";
};

export const transcriptSequences: TranscriptLine[][] = [
  [
    {
      speaker: "Guest",
      lang: "en-IN",
      langLabel: "EN",
      text: "Hi, I'd like to book a sea-view room for the 14th.",
      phase: "Before Arrival",
    },
    {
      speaker: "Dynoz",
      lang: "en-IN",
      langLabel: "EN",
      text: "Of course — a Deluxe Sea View is available. Shall I confirm with your saved preferences?",
      phase: "Before Arrival",
    },
    {
      speaker: "Guest",
      lang: "en-IN",
      langLabel: "EN",
      text: "Yes please, and early check-in if possible.",
      phase: "Before Arrival",
    },
    {
      speaker: "Dynoz",
      lang: "en-IN",
      langLabel: "EN",
      text: "Done. Early check-in at 11 AM is confirmed. A summary is on its way to you.",
      phase: "Before Arrival",
    },
  ],
  [
    {
      speaker: "Guest",
      lang: "es-ES",
      langLabel: "ES",
      text: "¿Pueden traer toallas extra a la habitación 412?",
      phase: "During Stay",
    },
    {
      speaker: "Dynoz",
      lang: "es-ES",
      langLabel: "ES",
      text: "Por supuesto, envío housekeeping ahora mismo. ¿Necesita algo más?",
      phase: "During Stay",
    },
    {
      speaker: "Guest",
      lang: "es-ES",
      langLabel: "ES",
      text: "No, gracias. Muy rápido.",
      phase: "During Stay",
    },
    {
      speaker: "Dynoz",
      lang: "es-ES",
      langLabel: "ES",
      text: "¡Con gusto! Llegará en menos de 10 minutos.",
      phase: "During Stay",
    },
  ],
  [
    {
      speaker: "Guest",
      lang: "fr-FR",
      langLabel: "FR",
      text: "Le séjour était parfait, merci beaucoup.",
      phase: "After Checkout",
    },
    {
      speaker: "Dynoz",
      lang: "fr-FR",
      langLabel: "FR",
      text: "Merci infiniment pour votre retour. Nous espérons vous revoir bientôt.",
      phase: "After Checkout",
    },
  ],
];
