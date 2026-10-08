export const BRAND = { name: "Psychic Dev", whatsapp: "14049804449", tel: "+19295953559", phone: "+1 929-595-3559", email: "hello@example.com", location: "India · Consultations worldwide", mapQuery: "Atlanta, GA, USA" /* change to your real address */ };
export const waLink = (m = "Hello, I would like to book a private consultation.") => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(m)}`;
export const nav = ["About","Services","Pooja Rituals","Astrology","Testimonials","FAQ","Contact"];
export const services = [
 {t:"Love & Relationship Guidance",d:"Calm perspective on commitment, communication and the questions of the heart.",img:"/images/services/relationship.png"},
 {t:"Marriage & Compatibility",d:"Chart-based insight into compatibility and timing, offered as perspective.",img:"/images/astrology/zodiac-wheel.png"},
 {t:"Career & Business Guidance",d:"Reflect on direction, timing and decisions with a clear head.",img:"/images/services/career.png"},
 {t:"Financial & Life Challenges",d:"Supportive guidance during uncertain periods. Not financial advice.",img:"/images/services/career.png"},
 {t:"Energy Cleansing",d:"Traditional practices intended to restore a sense of calm and balance.",img:"/images/services/protection.png"},
 {t:"Spiritual Protection",d:"Traditional protective practices explained respectfully and without fear.",img:"/images/services/protection.png"},
 {t:"Pooja & Spiritual Rituals",d:"Guidance on traditional rituals and their meaning for your situation.",img:"/images/services/pooja.png"},
 {t:"Breakup & Reconciliation",d:"Gentle support for processing change and thinking about next steps.",img:"/images/services/relationship.png"},
];
export const testimonials = [
 {q:"I came looking for clarity during a difficult period in my relationship. The consultation gave me a completely different perspective and helped me think calmly about my next steps.",name:"Placeholder A.",city:"Mumbai",service:"Relationship Guidance"},
 {q:"Warm, unhurried and respectful. I left with questions I had never thought to ask myself about my career.",name:"Placeholder R.",city:"London",service:"Career Guidance"},
 {q:"The birth chart reading was thoughtful and grounded. It felt like a conversation, not a prediction.",name:"Placeholder S.",city:"Dubai",service:"Astrology"},
];
export const faqs = [
 ["What happens during a consultation?","We begin with your question and any birth details you wish to share, then talk through it together and close with practical, reflective guidance."],
 ["How long does a consultation take?","Most sessions run 30 to 60 minutes depending on the service you choose."],
 ["Is the consultation private?","Yes. Your conversation and details are kept confidential."],
 ["Can I consult about relationships, career or business?","Yes. These are among the most common topics we discuss."],
 ["How do I book, and can I use WhatsApp?","Use the form below or message us on WhatsApp. We reply with available times."],
 ["What should I share beforehand?","Your name, a short description of your question, and if relevant your birth date, time and place."],
];
export const zodiac = [["Aries","Driven by courage and action."],["Taurus","Grounded, steady and sensual."],["Gemini","Curious, quick and communicative."],["Cancer","Intuitive and deeply caring."],["Leo","Radiant, generous and bold."],["Virgo","Thoughtful, precise and helpful."],["Libra","Seeking harmony and fairness."],["Scorpio","Intense, perceptive and transformative."],["Sagittarius","Exploring truth and freedom."],["Capricorn","Disciplined and quietly ambitious."],["Aquarius","Original and future-minded."],["Pisces","Dreamy, empathic and imaginative."]];
export const disclaimer = "Spiritual guidance is not a substitute for professional medical, legal or financial advice. No outcome is guaranteed.";
// Replace "#" with your real social page links.
export const social = { facebook: "#", twitter: "#", instagram: "#", youtube: "#" };