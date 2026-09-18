// Central, editable content for the site.
// Values wrapped in [SQUARE BRACKETS] are placeholders the teacher must replace
// with real information before selling.

export const TEACHER_NAME = "Kemuel Matias de Jesus";
export const SUPPORT_EMAIL_PLACEHOLDER = "[ADD REAL SUPPORT EMAIL]";
export const PAYMENT_LINK_PLACEHOLDER = "[INSERT PAYMENT LINK]";
export const TAGLINE =
  "Online Brazilian Portuguese lessons and courses for English and Spanish speakers.";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/private-lessons", label: "Private Lessons" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const legalItems = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/refunds", label: "Refund Policy" },
] as const;

export const lessonTopics = [
  "Conversation practice",
  "Brazilian Portuguese pronunciation",
  "Grammar",
  "Vocabulary",
  "Listening comprehension",
  "Reading and writing",
  "Portuguese for travel",
  "Everyday communication",
];

export const lessonInformation = [
  { label: "Lesson duration", value: "[ADD ACTUAL DURATION]" },
  { label: "Price", value: "[ADD ACTUAL PRICE]" },
  { label: "Currency", value: "[ADD CURRENCY]" },
  { label: "Platform", value: "[ADD ACTUAL PLATFORM]" },
  { label: "Scheduling", value: "[ADD ACTUAL SCHEDULING PROCESS]" },
  { label: "Delivery method", value: "Online, live one-on-one lesson" },
  { label: "Customer support", value: SUPPORT_EMAIL_PLACEHOLDER },
];

export type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
  format: string;
  includes: string[];
  price: string;
  currency: string;
  access: string;
};

export const courses: Course[] = [
  {
    slug: "portuguese-foundations",
    title: "Portuguese Foundations",
    description:
      "Build a strong foundation in Brazilian Portuguese, including essential vocabulary, grammar, pronunciation, and everyday expressions.",
    level: "[ADD LEVEL]",
    format: "[ADD COURSE FORMAT]",
    includes: ["[ADD WHAT IS INCLUDED]", "[ADD LESSON OR MODULE COUNT]", "[ADD MATERIALS INCLUDED]"],
    price: "[ADD ACTUAL PRICE]",
    currency: "[ADD CURRENCY]",
    access: "[ADD ACCESS INFORMATION]",
  },
  {
    slug: "brazilian-portuguese-conversation",
    title: "Brazilian Portuguese Conversation",
    description:
      "Develop confidence with practical vocabulary and conversation-focused Portuguese lessons.",
    level: "[ADD LEVEL]",
    format: "[ADD COURSE FORMAT]",
    includes: ["[ADD WHAT IS INCLUDED]", "[ADD LESSON OR MODULE COUNT]", "[ADD MATERIALS INCLUDED]"],
    price: "[ADD ACTUAL PRICE]",
    currency: "[ADD CURRENCY]",
    access: "[ADD ACCESS INFORMATION]",
  },
  {
    slug: "portuguese-for-everyday-life",
    title: "Portuguese for Everyday Life",
    description:
      "Learn useful Portuguese for common situations, communication, travel, and daily interactions.",
    level: "[ADD LEVEL]",
    format: "[ADD COURSE FORMAT]",
    includes: ["[ADD WHAT IS INCLUDED]", "[ADD LESSON OR MODULE COUNT]", "[ADD MATERIALS INCLUDED]"],
    price: "[ADD ACTUAL PRICE]",
    currency: "[ADD CURRENCY]",
    access: "[ADD ACCESS INFORMATION]",
  },
];

export const audiences = [
  { title: "Complete Beginners", text: "Start Portuguese from the basics." },
  {
    title: "English Speakers",
    text: "Learn Brazilian Portuguese with explanations designed for English-speaking students.",
  },
  {
    title: "Spanish Speakers",
    text: "Understand the similarities and differences between Spanish and Portuguese.",
  },
  { title: "Travelers", text: "Build useful Portuguese for trips and everyday situations." },
  {
    title: "Future Brazil Residents",
    text: "Develop practical communication skills for life in Brazil.",
  },
  {
    title: "Conversation Learners",
    text: "Practice speaking and improve everyday communication.",
  },
];

export const steps = [
  {
    title: "Choose Your Learning Option",
    text: "Choose a private lesson or an online course based on your learning goals.",
  },
  {
    title: "Complete Your Purchase",
    text: "Complete your purchase securely using the available payment method.",
  },
  {
    title: "Receive Your Instructions",
    text: "Receive the information needed to access your course or schedule your lesson.",
  },
  {
    title: "Start Learning",
    text: "Begin learning Brazilian Portuguese online from wherever you are.",
  },
];

export const faqs = [
  {
    q: "Do you teach Brazilian Portuguese?",
    a: "Yes. All lessons, courses, and materials focus on Brazilian Portuguese.",
  },
  {
    q: "Are the lessons completely online?",
    a: "Yes. Private lessons, courses, and digital materials are delivered 100% online, so you can learn from anywhere.",
  },
  {
    q: "Do you teach beginners?",
    a: "Yes. Lessons can start from the very basics and are adapted to your current level.",
  },
  {
    q: "Can Spanish speakers learn Portuguese with you?",
    a: "Yes. Lessons for Spanish speakers can focus on the similarities and differences between Spanish and Portuguese.",
  },
  {
    q: "Can English speakers learn Portuguese with you?",
    a: "Yes. Explanations can be given in a way designed for English-speaking students.",
  },
  {
    q: "How do private lessons work?",
    a: "Private lessons are one-on-one online sessions adapted to your level and goals. Lesson duration, platform, and price: [Add your actual policy/information here]",
  },
  {
    q: "How do I schedule a lesson?",
    a: "[Add your actual policy/information here]",
  },
  {
    q: "How do I access an online course?",
    a: "[Add your actual policy/information here]",
  },
  {
    q: "What happens after I purchase?",
    a: "You receive the information needed to access your course or schedule your lesson. Exact delivery timing and instructions: [Add your actual policy/information here]",
  },
  {
    q: "What is your refund policy?",
    a: "The refund policy is published on the Refund Policy page. Refund period and conditions: [Add your actual policy/information here]",
  },
  {
    q: "How can I contact Kemuel?",
    a: `You can use the contact form on the Contact page, or write to ${SUPPORT_EMAIL_PLACEHOLDER}.`,
  },
];
