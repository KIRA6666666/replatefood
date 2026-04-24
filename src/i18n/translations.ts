export type Lang = "fr" | "ar";

const fr = {
  // Header
  nav_home: "Accueil",
  nav_offers: "Offres",
  nav_partner: "Zakaria",
  nav_restaurant: "Restaurant",

  // Hero
  hero_title: "Donnez une seconde vie aux bons repas.",
  hero_subtitle: "Commandez les invendus à prix réduit près de chez vous.",
  cta_see_offers: "Voir les offres",
  cta_become_partner: "Devenir partenaire",

  // Food grid
  food_title: "Des repas près de chez vous",
  food_subtitle: "Sandwichs, pizzas, viennoiseries, desserts… une variété d'invendus chaque jour.",

  // How it works
  how_title: "Comment ça marche",
  how_subtitle: "Trois étapes simples, rien de plus.",
  step_label: "Étape",
  step1_title: "Les restaurants publient",
  step1_text: "Chaque jour, les restaurants partenaires mettent en ligne leurs invendus à prix réduit.",
  step2_title: "Vous commandez",
  step2_text: "Parcourez les offres près de chez vous et passez commande en quelques clics.",
  step3_title: "Récupération ou livraison",
  step3_text: "Choisissez le retrait sur place ou la livraison à domicile, selon ce qui vous convient.",

  // Featured
  featured_title: "Offres du moment",
  see_all: "Tout voir →",

  // Why
  why_title: "Pourquoi RePlate",
  why_subtitle: "Une bonne action pour vous, les restaurants et la planète.",
  why1_title: "Réduire le gaspillage",
  why1_text: "Chaque repas sauvé, c'est moins de nourriture jetée et moins d'impact sur la planète.",
  why2_title: "Manger à petit prix",
  why2_text: "Profitez de bons repas de restaurants jusqu'à -60% sur le prix initial.",
  why3_title: "Aider les restaurants",
  why3_text: "Soutenez les commerçants locaux qui valorisent leurs invendus au lieu de les jeter.",

  // Impact
  impact_title: "Notre impact",
  impact_subtitle: "Ensemble, nous changeons la manière de consommer au Maroc.",
  stat1: "Repas sauvés",
  stat2: "Restaurants partenaires",
  stat3: "Villes au Maroc",
  stat4: "Prix moyen vs. carte",

  cta_ready_title: "Prêt à sauver votre premier repas ?",
  cta_ready_text: "Découvrez les offres disponibles aujourd'hui dans votre ville.",
  cta_browse: "Parcourir les offres",

  // Footer
  footer_text: "Réduisons le gaspillage alimentaire au Maroc.",
};

const ar: typeof fr = {
  nav_home: "الرئيسية",
  nav_offers: "العروض",
  nav_partner: "زكرياء",
  nav_restaurant: "مطعم",

  hero_title: "امنح وجبات شهية حياة ثانية.",
  hero_subtitle: "اطلب الوجبات غير المباعة بأسعار مخفضة بالقرب منك.",
  cta_see_offers: "تصفح العروض",
  cta_become_partner: "كن شريكاً",

  food_title: "وجبات بالقرب منك",
  food_subtitle: "ساندويتشات، بيتزا، معجنات، حلويات… تشكيلة متنوعة كل يوم.",

  how_title: "كيف تعمل المنصة",
  how_subtitle: "ثلاث خطوات بسيطة فقط.",
  step_label: "الخطوة",
  step1_title: "المطاعم تنشر العروض",
  step1_text: "كل يوم، يقوم المطاعم الشريكة بنشر الوجبات غير المباعة بأسعار مخفضة.",
  step2_title: "أنت تطلب",
  step2_text: "تصفح العروض القريبة منك واطلب ببضع نقرات فقط.",
  step3_title: "الاستلام أو التوصيل",
  step3_text: "اختر الاستلام من المطعم أو التوصيل إلى المنزل حسب ما يناسبك.",

  featured_title: "عروض اللحظة",
  see_all: "← عرض الكل",

  why_title: "لماذا RePlate",
  why_subtitle: "عمل جيد لك وللمطاعم وللكوكب.",
  why1_title: "الحد من الهدر",
  why1_text: "كل وجبة يتم إنقاذها تعني طعاماً أقل في النفايات وأثراً أقل على الكوكب.",
  why2_title: "تناول الطعام بأسعار منخفضة",
  why2_text: "استمتع بوجبات شهية من المطاعم بتخفيضات تصل إلى 60% من السعر الأصلي.",
  why3_title: "ادعم المطاعم",
  why3_text: "ادعم التجار المحليين الذين يثمنون منتجاتهم بدل رميها.",

  impact_title: "تأثيرنا",
  impact_subtitle: "معاً، نغير طريقة الاستهلاك في المغرب.",
  stat1: "وجبات تم إنقاذها",
  stat2: "مطاعم شريكة",
  stat3: "مدن في المغرب",
  stat4: "متوسط السعر مقابل القائمة",

  cta_ready_title: "جاهز لإنقاذ أول وجبة؟",
  cta_ready_text: "اكتشف العروض المتاحة اليوم في مدينتك.",
  cta_browse: "تصفح العروض",

  footer_text: "لنحد من هدر الطعام في المغرب.",
};

export const translations = { fr, ar };
export type TranslationKey = keyof typeof fr;