/// <reference types="vite/client" />
import { Product, Review, CategoryItem } from './types';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'Haircare',
    name: 'Haircare',
    icon: 'content_cut',
    subCategories: [
      'Hair Colour',
      'Hair Mask',
      'Shampoo',
      'Conditioner',
      'Hair Oil',
      'Silicon Free Serum',
      'Serum and Tonic',
      'Hair Kit',
      'Hair Gel'
    ],
  },
  {
    id: 'Skincare',
    name: 'Skincare',
    icon: 'spa',
    subCategories: [
      'Face Wash',
      'Gel',
      'Treatment Gel',
      'Gel Body Polishing Scrub',
      'Creamy Scrub',
      'Serum',
      'Cream',
      'Treatment Cream',
      'Wet Pack',
      'Dry Face Pack',
      'Body Lotion',
      'Body Butter',
      'Ubtan'
    ],
  },
  {
    id: 'Personal Care',
    name: 'Personal Care',
    icon: 'face',
    subCategories: [
      'Under Eye Roller',
      'Eyebrow Growth Oil',
      'Lip Balm',
      'Bath Salt',
      'Wax Powder',
      'Face Wax & Bikini Wax',
      'Soap',
      'Facial Bomb',
      'Korean Capsule',
      'Manicure & Pedicure Kit',
      'Makeup Products',
      'Facial Kit',
      'Cleansing Milk',
      'Rose Water'
    ],
  },
];

const REAL_IMAGES = {
  avocadoBodyLotion: new URL('./assests/products/SkinCare/ body lotion/AVOCADO BODY LOTION1.png', import.meta.url).href,
  aloeveraGel: new URL('./assests/products/SkinCare/Gel/ALOE VERA GEL1.png', import.meta.url).href,
  antiPigmentGel: new URL('./assests/products/SkinCare/Gel/ANTI-PIGMENT GEL1.png', import.meta.url).href,
  antiAcneGel: new URL('./assests/products/SkinCare/Gel/ANTI ACNE GEL1.png', import.meta.url).href,
  avocadoDayCream: new URL('./assests/products/SkinCare/Cream/AVOCADO DAY CREAM1.png', import.meta.url).href,
  totalRepairOil: new URL('./assests/products/HairCare/Hair oil/TOTAL REPAIR HAIR OIL2.png', import.meta.url).href,
  roseBathSalt: new URL('./assests/products/PersonalCare/ bath salt/ROSE BATH SALT1.png', import.meta.url).href,
  antiBacterialBathSalt: new URL('./assests/products/PersonalCare/ bath salt/ANTI BACTERIAL BATH SALT2.png', import.meta.url).href,
  muscleReliefSalt: new URL('./assests/products/PersonalCare/ bath salt/MUSCLE RELIEF SALT1.png', import.meta.url).href,
};

const IMAGES = {
  faceWash: REAL_IMAGES.aloeveraGel,
  vitC: REAL_IMAGES.antiPigmentGel,
  serum: REAL_IMAGES.antiAcneGel,
  goldWash: REAL_IMAGES.avocadoDayCream,
  bodyButter: REAL_IMAGES.avocadoBodyLotion,
  ubtan: REAL_IMAGES.avocadoBodyLotion,
  hairOil: REAL_IMAGES.totalRepairOil,
  shampoo: REAL_IMAGES.totalRepairOil,
  hairMask: REAL_IMAGES.totalRepairOil,
  soap: REAL_IMAGES.roseBathSalt,
  bathSalt: REAL_IMAGES.roseBathSalt,
  roseWater: REAL_IMAGES.antiBacterialBathSalt,
  giftBasket: REAL_IMAGES.avocadoDayCream
};

const HAIRCARE_PRODUCTS_CONFIG = {
  'Hair Colour': [
    { name: 'Black Hair Colour', price: 449, tag: 'Bestseller' as const },
    { name: 'Brown Hair Colour', price: 449, tag: 'Bestseller' as const },
    { name: 'Burgundy Hair Colour', price: 479, tag: 'New Arrival' as const },
    { name: 'Dark Brown Hair Colour', price: 449, tag: undefined }
  ],
  'Hair Mask': [
    { name: '5 Protein Mask', price: 599, tag: 'Bestseller' as const },
    { name: 'Hibiscus Dandruff Mask', price: 549, tag: undefined },
    { name: 'Avocado Butter (Hair)', price: 625, tag: 'Handcrafted' as const },
    { name: 'Total Repair Mask', price: 599, tag: undefined },
    { name: 'Deep Conditioner Masque', price: 649, tag: 'Limited Edition' as const }
  ],
  'Shampoo': [
    { name: '35 Herbs Shampoo', price: 499, tag: 'Bestseller' as const },
    { name: '3 in 1 Shikakai Shampoo', price: 425, tag: undefined },
    { name: 'Hibiscus Shampoo', price: 450, tag: undefined },
    { name: 'Onion Shampoo', price: 399, tag: 'Bestseller' as const },
    { name: 'Keratin Shampoo', price: 549, tag: 'New Arrival' as const },
    { name: 'Anti Lice Shampoo', price: 375, tag: undefined },
    { name: 'Anti Dandruff Shampoo', price: 450, tag: undefined }
  ],
  'Conditioner': [
    { name: 'Rice Conditioner', price: 425, tag: 'New Arrival' as const },
    { name: 'Tea Tree Conditioner', price: 450, tag: undefined },
    { name: 'Spa Conditioner with Morocco Oil & Argan Oil', price: 599, tag: 'Bestseller' as const }
  ],
  'Hair Oil': [
    { name: 'Hair Fall Control Oil', price: 399, tag: 'Bestseller' as const },
    { name: 'Rosemary Hair Oil', price: 399, tag: 'New Arrival' as const },
    { name: 'Rosemary Hibiscus Oil', price: 450, tag: 'New Arrival' as const },
    { name: 'Anti Lice Oil', price: 325, tag: undefined },
    { name: 'Total Repair Oil', price: 425, tag: undefined },
    { name: 'Anti Dandruff Oil', price: 399, tag: undefined },
    { name: 'Abhyang Body Massage Oil', price: 699, tag: 'Handcrafted' as const },
    { name: 'Body Moisture Oil', price: 599, tag: undefined }
  ],
  'Silicon Free Serum': [
    { name: 'After wash serum', price: 549, tag: 'Bestseller' as const }
  ],
  'Serum and Tonic': [
    { name: 'Hair Booster Serum', price: 599, tag: 'New Arrival' as const },
    { name: 'Hair Fall Control Serum', price: 549, tag: 'Bestseller' as const },
    { name: 'Rosemary Vetiver Hair Tonic', price: 499, tag: 'Handcrafted' as const }
  ],
  'Hair Kit': [
    { name: 'Hair Revive Kit', price: 1299, tag: 'Limited Edition' as const }
  ],
  'Hair Gel': [
    { name: 'Anti Dandruff Gel', price: 299, tag: undefined },
    { name: 'Hair Growth Gel', price: 349, tag: 'New Arrival' as const }
  ]
};

const SKINCARE_PRODUCTS_CONFIG = {
  'Face Wash': [
    { name: 'Vitamin-C Face Wash', price: 425, tag: 'New Arrival' as const },
    { name: 'Aloe Neem Tulsi Face Wash', price: 399, tag: 'Bestseller' as const },
    { name: 'Gold with Hyaluronic Face Wash', price: 599, tag: 'Bestseller' as const },
    { name: 'Kumkumadi Pearly Face Wash', price: 549, tag: 'Handcrafted' as const },
    { name: 'Skin Brightening Face Wash', price: 425, tag: undefined },
    { name: 'Rice Face Wash', price: 399, tag: undefined },
    { name: 'Anti Acne Face Wash', price: 399, tag: undefined },
    { name: 'Anti Pigment Face Wash', price: 425, tag: undefined },
    { name: 'Hyal. D-Tan Face Wash', price: 449, tag: undefined },
    { name: 'Redwine Face Wash', price: 499, tag: 'New Arrival' as const }
  ],
  'Gel': [
    { name: 'Aloevera Gel', price: 249, tag: 'Bestseller' as const },
    { name: 'Rose Gel', price: 299, tag: undefined },
    { name: 'Sunscreen Gel', price: 399, tag: 'New Arrival' as const }
  ],
  'Treatment Gel': [
    { name: 'Anti Acne Gel', price: 349, tag: 'Bestseller' as const },
    { name: 'Anti Pigment Gel', price: 349, tag: undefined },
    { name: 'Redwine Gel', price: 399, tag: 'New Arrival' as const },
    { name: 'Anti Stretchmark Gel', price: 449, tag: 'Handcrafted' as const },
    { name: 'Hyaluronic Gel', price: 399, tag: undefined }
  ],
  'Gel Body Polishing Scrub': [
    { name: 'D-Tan Papaya Gel Body Polishing Scrub', price: 499, tag: 'Bestseller' as const },
    { name: 'Saffron Honey Gel Body Polishing Scrub', price: 549, tag: 'Handcrafted' as const }
  ],
  'Creamy Scrub': [
    { name: 'Skin Whitening Creamy Scrub', price: 399, tag: undefined },
    { name: 'Charcoal Creamy Scrub', price: 349, tag: undefined },
    { name: 'Pomegranate Creamy Scrub', price: 399, tag: 'New Arrival' as const }
  ],
  'Serum': [
    { name: 'Vitamin-C Serum', price: 599, tag: 'Bestseller' as const },
    { name: 'Niacinamide Serum', price: 599, tag: 'New Arrival' as const },
    { name: 'Salicylic Serum', price: 549, tag: undefined },
    { name: 'Anti Pigment Serum', price: 599, tag: undefined },
    { name: 'All Purpose Serum', price: 499, tag: undefined },
    { name: 'Kumkumadi Oil', price: 899, tag: 'Handcrafted' as const },
    { name: '24k Gold with Hyaluronic Acid Serum', price: 999, tag: 'Limited Edition' as const }
  ],
  'Cream': [
    { name: 'Under Eye Coffee Cream', price: 399, tag: 'Bestseller' as const },
    { name: 'Kumkumadi Cream', price: 599, tag: 'Handcrafted' as const },
    { name: 'D-Tan Cream Mask', price: 449, tag: undefined },
    { name: 'Yellow D-Tan Cream', price: 449, tag: 'New Arrival' as const }
  ],
  'Treatment Cream': [
    { name: 'Day Cream with SPF', price: 499, tag: 'Bestseller' as const },
    { name: 'Avocado Cream with SPF', price: 499, tag: 'New Arrival' as const },
    { name: 'Night Cream Avocado', price: 549, tag: 'New Arrival' as const },
    { name: 'Korean Whitening Cream', price: 599, tag: undefined },
    { name: 'Bridal Cream', price: 699, tag: 'Limited Edition' as const },
    { name: 'Pearl Pigment Cream', price: 599, tag: undefined },
    { name: 'Black Part Whitening Cream', price: 499, tag: 'Bestseller' as const },
    { name: 'Foot Cream with Butter', price: 349, tag: undefined },
    { name: 'Lip Lightening Cream', price: 299, tag: undefined }
  ],
  'Wet Pack': [
    { name: 'D-Tan Mud Pack', price: 425, tag: 'Bestseller' as const },
    { name: 'Korean Whitening Pack', price: 499, tag: 'New Arrival' as const }
  ],
  'Dry Face Pack': [
    { name: 'Anti Pigment Dry Face Pack', price: 349, tag: undefined },
    { name: 'Anti Acne Dry Face Pack', price: 349, tag: undefined },
    { name: 'Charcoal Dry Face Pack', price: 299, tag: undefined },
    { name: 'Skin Whitening Clay', price: 399, tag: 'Bestseller' as const },
    { name: 'Anti Wrinkle Dry Face Pack', price: 399, tag: undefined },
    { name: 'Skin Whitening Body Scrub', price: 499, tag: 'Handcrafted' as const }
  ],
  'Body Lotion': [
    { name: 'Avocado Body Lotion with SPF', price: 449, tag: 'Bestseller' as const },
    { name: 'Skin Whitening Body Lotion', price: 399, tag: undefined },
    { name: 'Kumkumadi Body Lotion', price: 499, tag: 'New Arrival' as const }
  ],
  'Body Butter': [
    { name: 'Rose Coconut Body Butter', price: 599, tag: 'Bestseller' as const },
    { name: 'Skin Whitening Body Butter', price: 549, tag: undefined }
  ],
  'Ubtan': [
    { name: 'Royal Ubtan', price: 499, tag: 'Handcrafted' as const }
  ]
};

const PERSONALCARE_PRODUCTS_CONFIG = {
  'Under Eye Roller': [
    { name: 'Under Eye Roller', price: 499, tag: 'Bestseller' as const }
  ],
  'Eyebrow Growth Oil': [
    { name: 'Eyebrow Growth Oil', price: 399, tag: 'New Arrival' as const }
  ],
  'Lip Balm': [
    { name: 'Beet Root Lip Balm', price: 199, tag: 'Bestseller' as const },
    { name: 'Green Apple Lip Balm', price: 199, tag: undefined },
    { name: 'Strawberry Lip Balm', price: 199, tag: undefined },
    { name: 'Kumkumadi Less Lip Balm', price: 249, tag: 'Handcrafted' as const }
  ],
  'Bath Salt': [
    { name: 'Lavender Bath Salt', price: 349, tag: 'Bestseller' as const },
    { name: 'Rose Bath Salt', price: 349, tag: undefined },
    { name: 'Anti Bacterial Neem Bath Salt', price: 399, tag: undefined },
    { name: 'Stress Relief Bath Salt', price: 449, tag: 'New Arrival' as const },
    { name: 'Muscle Pain Bath Salt', price: 449, tag: 'Limited Edition' as const }
  ],
  'Wax Powder': [
    { name: 'Sandalwood Wax Powder', price: 299, tag: 'Bestseller' as const },
    { name: 'Orange Wax Powder', price: 299, tag: undefined }
  ],
  'Face Wax & Bikini Wax': [
    { name: 'Haldi Chandan Flavour Face & Bikini Wax', price: 349, tag: 'Handcrafted' as const }
  ],
  'Soap': [
    { name: 'D-Tan Soap', price: 149, tag: undefined },
    { name: 'Shea Butter with Kesar Soap', price: 199, tag: 'Bestseller' as const },
    { name: 'Beet Root Soap', price: 149, tag: undefined },
    { name: 'Kesuda Flower Soap', price: 149, tag: undefined },
    { name: 'Anti Pigmentation Soap', price: 179, tag: undefined },
    { name: 'Milk & Papaya Soap', price: 149, tag: undefined },
    { name: 'Neem & Tulsi Soap', price: 149, tag: 'Bestseller' as const },
    { name: 'Loofah Soap', price: 199, tag: 'Handcrafted' as const },
    { name: 'Masoor Dal Soap (Kids)', price: 149, tag: undefined },
    { name: 'Eraser Soap (Kids)', price: 149, tag: undefined },
    { name: 'Multani Mitti Soap', price: 149, tag: undefined },
    { name: 'Shea Butter Soap', price: 149, tag: undefined },
    { name: 'Skin Brightening Soap', price: 179, tag: undefined },
    { name: 'Kumkumadi Soap', price: 225, tag: 'Limited Edition' as const }
  ],
  'Facial Bomb': [
    { name: 'Gold Facial Bomb', price: 249, tag: 'Bestseller' as const },
    { name: 'Kesuda Facial Bomb', price: 199, tag: undefined },
    { name: 'D-Tan Facial Bomb', price: 199, tag: undefined },
    { name: 'Kumkumadi Facial Bomb', price: 249, tag: 'Handcrafted' as const },
    { name: 'Shea Butter Facial Bomb', price: 199, tag: undefined }
  ],
  'Korean Capsule': [
    { name: 'Korean Capsule', price: 599, tag: 'New Arrival' as const }
  ],
  'Manicure & Pedicure Kit': [
    { name: 'D-Tan Manicure & Pedicure Kit', price: 699, tag: undefined },
    { name: 'Skin Brightening Manicure & Pedicure Kit', price: 799, tag: 'Bestseller' as const },
    { name: 'Hydra Manicure & Pedicure Kit (Shampoo, Bath Salt, Scrub, Cream, Pack)', price: 999, tag: 'Limited Edition' as const }
  ],
  'Makeup Products': [
    { name: 'Organic Makeup Primer', price: 499, tag: 'Bestseller' as const },
    { name: 'Herbal Kajal', price: 249, tag: undefined },
    { name: 'HD Powder with Sponge', price: 399, tag: undefined },
    { name: 'BB Cream with SPF', price: 449, tag: 'New Arrival' as const },
    { name: '5 in 1 Foundation', price: 599, tag: 'Limited Edition' as const },
    { name: 'Jelly Lipstick', price: 349, tag: undefined },
    { name: 'Magnetic Vegan Lipstick', price: 499, tag: 'Handcrafted' as const }
  ],
  'Facial Kit': [
    { name: 'D-Tan Facial Kit', price: 499, tag: undefined },
    { name: 'Korean Facial Kit', price: 599, tag: 'New Arrival' as const },
    { name: 'Skin Brightening Facial Kit (Instant Glow)', price: 549, tag: 'Bestseller' as const },
    { name: 'Hydra Gel Based Facial Kit', price: 699, tag: 'Handcrafted' as const }
  ],
  'Cleansing Milk': [
    { name: 'Botanical Cleansing Milk', price: 349, tag: 'Bestseller' as const }
  ],
  'Rose Water': [
    { name: 'Pure Kannauj Rose Water', price: 299, tag: 'Bestseller' as const }
  ]
};

const globbedImages = import.meta.glob('./assests/products/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>;

const MANUAL_OVERRIDES: Record<string, string> = {
  'Muscle Pain Bath Salt': './assests/products/PersonalCare/ bath salt/MUSCLE RELIEF SALT1.png',
  'Under Eye Roller': './assests/products/SkinCare/Serum/COFFEE INFUSED UNDER EYE SERUM1.png',
  'Eyebrow Growth Oil': './assests/products/SkinCare/Serum/Kumkumadi Oil Serum1.png',
  'HD Powder with Sponge': './assests/products/PersonalCare/organic makeup/SKIN FOUNDATION POWDER1.png',
  'Organic Makeup Primer': './assests/products/PersonalCare/organic makeup/4 IN 1 MAKEUP INSTANT GLOW1.png',
  '5 in 1 Foundation': './assests/products/PersonalCare/organic makeup/4 IN 1 MAKEUP INSTANT GLOW2.png',
  'Magnetic Vegan Lipstick': './assests/products/PersonalCare/organic makeup/MATTE LIPSTICK1.png',
  'Jelly Lipstick': './assests/products/PersonalCare/organic makeup/JELLY LIPSTICK1.png',
  'Rosemary Vetiver Hair Tonic': './assests/products/HairCare/Hair serum /Rosemary Vetilizer1.png',
  'Hair Fall Control Serum': './assests/products/HairCare/Hair serum /Anti-Hairfall Prewash Serum1.png',
  'Hair Booster Serum': './assests/products/HairCare/Hair serum /Hair Growth Booster Serum1.png',
  'After wash serum': './assests/products/HairCare/Silicon free serum/Keratin Infused Hair Serum1.png',
  'D-Tan Manicure & Pedicure Kit': './assests/products/PersonalCare/ manicure and pedicure kit/SKIN POLISHING PEDICURE KIT1.png',
  'Skin Brightening Manicure & Pedicure Kit': './assests/products/PersonalCare/ manicure and pedicure kit/SKIN POLISHING PEDICURE KIT2.png',
  'Hydra Manicure & Pedicure Kit (Shampoo, Bath Salt, Scrub, Cream, Pack)': './assests/products/PersonalCare/ manicure and pedicure kit/SKIN POLISHING PEDICURE KIT1.png',
  'Gold Facial Bomb': './assests/products/PersonalCare/ facial bomb/FACIAL BOMB1.png',
  'Kesuda Facial Bomb': './assests/products/PersonalCare/ facial bomb/FACIAL BOMB2.png',
  'D-Tan Facial Bomb': './assests/products/PersonalCare/ facial bomb/FACIAL BOMB1.png',
  'Kumkumadi Facial Bomb': './assests/products/PersonalCare/ facial bomb/FACIAL BOMB2.png',
  'Shea Butter Facial Bomb': './assests/products/PersonalCare/ facial bomb/FACIAL BOMB1.png',
  'Avocado Butter (Hair)': './assests/products/HairCare/Hair mask/5 Protein Hair Mask2.png'
};

function normalize(str: string): string {
  return str.toLowerCase().replace(/\d+$/, '').replace(/[^a-z0-9]/g, '');
}

function getWords(str: string): string[] {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/[0-9]/g, ' ').split(/\s+/).filter(Boolean);
}

function resolveProductImage(name: string, category: string, subCategory: string): string {
  if (MANUAL_OVERRIDES[name]) {
    const overridePath = MANUAL_OVERRIDES[name];
    if (globbedImages[overridePath]) {
      return globbedImages[overridePath];
    }
  }

  const normName = normalize(name);
  const prodWords = getWords(name);
  
  let bestMatchKey: string | null = null;
  let bestScore = -1;
  
  Object.keys(globbedImages).forEach(fPath => {
    const fileName = fPath.split('/').pop()?.replace(/\.[^/.]+$/, "") || "";
    const normFile = normalize(fileName);
    const fileWords = getWords(fileName);
    
    let score = 0;
    
    if (normName === normFile) {
      score += 10000;
    }
    
    // Exact word matches score highly
    let commonWords = 0;
    const genericWords = new Set(['soap', 'gel', 'cream', 'oil', 'shampoo', 'conditioner', 'mask', 'pack', 'scrub', 'kit', 'spray', 'water', 'dry', 'wet', 'face', 'body', 'hair', 'skin', 'care', 'with', 'and', 'for', 'the', 'herbal', 'organic', 'natural', 'pure', 'handcrafted', 'handmade']);
    
    prodWords.forEach(pw => {
      if (fileWords.includes(pw)) {
        commonWords++;
      } else if (!genericWords.has(pw) && pw.length >= 3) {
        // Sub-word matching for non-generic words of length >= 3 (e.g. "beet" or "root" inside "beetroot")
        const subMatch = fileWords.some(fw => fw.length >= 3 && !genericWords.has(fw) && (fw.includes(pw) || pw.includes(fw)));
        if (subMatch) {
          score += 80;
        }
      }
    });
    score += commonWords * 100;
    
    // Match folder category
    const fPathLower = fPath.toLowerCase();
    const catNorm = category.toLowerCase().replace(/[^a-z]/g, '');
    if (fPathLower.replace(/\s+/g, '').includes(catNorm)) {
      score += 500;
    } else {
      score -= 1000; // heavy penalty for wrong category folder
    }
    
    // Subcategory matching
    const subCatNorm = subCategory.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (fPathLower.replace(/\s+/g, '').includes(subCatNorm)) {
      score += 300;
    }
    
    // Normalized substring / superstring containment check (stripped digits)
    if (normName && normFile && (normName.includes(normFile) || normFile.includes(normName))) {
      score += 1500;
    }
    
    // Preferred file suffix: prefer "1.png" over others if scores are equal
    if (fileName.endsWith('1')) {
      score += 10;
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatchKey = fPath;
    }
  });
  
  if (bestMatchKey && bestScore > 0) {
    return globbedImages[bestMatchKey];
  }
  
  return Object.values(globbedImages)[0] || '';
}

function generateProduct(
  name: string,
  price: number,
  category: 'Haircare' | 'Skincare' | 'Personal Care',
  subCategory: string,
  tag?: 'New Arrival' | 'Bestseller' | 'Limited Edition' | 'Handcrafted'
): Product {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const image = resolveProductImage(name, category, subCategory);

  let description = `Premium handcrafted ${name.toLowerCase()} enriched with pure natural extracts and active organic botanicals to nurture your body.`;
  if (name.includes('Aloe') || name.includes('Aloevera')) {
    description = `Soothes, hydrates, and deeply cools with 100% organic Aloe Vera pulp and nutrient-rich herbal infusions.`;
  } else if (name.includes('Vitamin-C') || name.includes('Brightening') || name.includes('Whitening')) {
    description = `Revitalizes and illuminates your natural skin tone with powerful botanical antioxidants and rich fruit extracts.`;
  } else if (name.includes('Rose')) {
    description = `Infused with handpicked wild roses to tone, hydrate, and refresh your senses with a delicate floral aroma.`;
  } else if (name.includes('Gold') || name.includes('Kumkumadi')) {
    description = `An ultra-luxury traditional Ayurvedic recipe designed to restore youthful luster, reduce fine lines, and impart a royal glow.`;
  } else if (name.includes('Onion') || name.includes('Hair Fall')) {
    description = `Purifies the scalp and fortifies hair roots with organic red onion seed extracts and natural botanical conditioners.`;
  } else if (name.includes('Dandruff')) {
    description = `Targeted herbal formula designed to gently clear dandruff flakes, soothe itchy scalps, and prevent future build-up.`;
  } else if (name.includes('D-Tan') || name.includes('Papaya')) {
    description = `Enriched with organic papaya enzymes and soothing clay to gently remove tan, restore original complexion, and clear skin pores.`;
  } else if (name.includes('Shea Butter') || name.includes('Avocado')) {
    description = `Intensely moisturizing recipe whipped with raw organic butter to provide long-lasting hydration and absolute softness.`;
  }

  const features = [
    '100% Organic & Wild-harvested',
    'No Synthetic Colorants or Paraben',
    'MSME Certified Handcrafted',
    'Ethically Sourced Botanicals'
  ];
  if (name.includes('Ayurvedic') || name.includes('Kumkumadi')) {
    features[0] = 'Traditional Ayurvedic Recipe';
  }
  if (name.includes('Kajal') || name.includes('Makeup') || name.includes('Lipstick')) {
    features[1] = 'No Lead, Lead-free Vegan Formulation';
  }

  const sumCharCodes = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rating = Number((4.6 + (sumCharCodes % 5) * 0.1).toFixed(1));

  let variants: string[] | undefined = undefined;
  let variantColors: Record<string, string> | undefined = undefined;
  if (subCategory === 'Hair Colour' || name.toLowerCase().includes('hair colour')) {
    variants = ['Brown', 'Dark Brown', 'Black', 'Burgundy'];
  } else if (subCategory === 'Lip Balm' || name.toLowerCase().includes('lip balm')) {
    variants = ['Beet Root', 'Green Apple', 'Strawberry', 'Kumkumadi'];
  } else if (subCategory === 'Facial Bomb' || name.toLowerCase().includes('facial bomb') || name.toLowerCase().includes('facial balm')) {
    variants = ['Gold', 'Kesuda', 'D-Tan', 'Kumkumadi', 'Shea Butter'];
  } else if (name.toLowerCase().includes('lipstick')) {
    variants = ['Espresso', 'Mojito', 'Lime Soda', 'Margarita', 'Tequila', 'Red Snapper', 'Americano', 'Pina Colada', 'Whisky Sour', 'Aqua Velva', 'Bellini', 'Irish Coffee'];
    variantColors = {
      Espresso: '#a34b5b',
      Mojito: '#855251',
      'Lime Soda': '#a82242',
      Margarita: '#a81832',
      Tequila: '#751946',
      'Red Snapper': '#c4615f',
      Americano: '#ba1731',
      'Pina Colada': '#913d4d',
      'Whisky Sour': '#ae2037',
      'Aqua Velva': '#8f5148',
      Bellini: '#87174f',
      'Irish Coffee': '#a0647d'
    };
  } else if (subCategory === 'Face Wash' || name.toLowerCase().includes('face wash')) {
    variants = ['Vitamin-C', 'Aloe Neem Tulsi', 'Gold with Hyaluronic', 'Kumkumadi Pearly', 'Redwine'];
  } else if (subCategory === 'Body Lotion' || name.toLowerCase().includes('body lotion')) {
    variants = ['Avocado with SPF', 'Skin Whitening', 'Kumkumadi'];
  }

  return {
    id,
    name,
    description,
    price,
    category,
    subCategory,
    image,
    tag,
    rating,
    inStock: true,
    features,
    variants,
    variantColors
  };
}

const generatedHaircare = Object.entries(HAIRCARE_PRODUCTS_CONFIG).flatMap(([subCat, list]) =>
  list.map(p => generateProduct(p.name, p.price, 'Haircare', subCat, p.tag))
);

const generatedSkincare = Object.entries(SKINCARE_PRODUCTS_CONFIG).flatMap(([subCat, list]) =>
  list.map(p => generateProduct(p.name, p.price, 'Skincare', subCat, p.tag))
);

const generatedPersonalcare = Object.entries(PERSONALCARE_PRODUCTS_CONFIG).flatMap(([subCat, list]) =>
  list.map(p => generateProduct(p.name, p.price, 'Personal Care', subCat, p.tag))
);

export const PRODUCTS: Product[] = [
  ...generatedHaircare,
  ...generatedSkincare,
  ...generatedPersonalcare
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Dhrumi Gaglani • 96197*****',
    rating: 5,
    text: "As someone who works closely with the brand and the daughter of one of Aranya Organic's founders, I may be a little biased, but I genuinely use and love our products. Knowing the care and thought behind every formulation makes me proud to recommend products I truly enjoy using myself.",
    avatar: '',
  },
  {
    id: 'rev-2',
    author: 'Moksh Jani • 85919*****',
    rating: 5,
    text: "I've had a great experience with Aranya Organic. Their organic and natural hair and beauty products are high quality, gentle on the skin and hair, and made with ingredients that feel genuinely nourishing. The products are effective, beautifully packaged, and definitely worth trying if you're looking for a natural self-care routine. Highly recommended!",
    avatar: '',
  },
  {
    id: 'rev-3',
    author: 'Hina Rathord • 93724*****',
    rating: 5,
    text: "Hey, thank you so much for the Hair Root Revive kit. Amazing change in my daughter's hair. I have been using your product for the last 3 months. Strongly recommend.",
    avatar: '',
  },
  {
    id: 'rev-4',
    author: 'Dhara Shah • 98677*****',
    rating: 5,
    text: "I used Aranya Organic's facial bomb, and I loved the result so much. It gives a facial look instantly, and that too without so much effort. I also used anti-dandruff shampoo as I was having itching on my scalp, but after using it, my itching went away. Loved the product; will definitely recommend others to give it a try.",
    avatar: '',
  },
  {
    id: 'rev-5',
    author: 'Niddhi Shah • 98760*****',
    rating: 5,
    text: "I had pigmentation on my back; it has become quite light. I just started using products about 20 days back. Highly recommend her products. Keep it up. Niddhi is too good with the knowledge; each of her products is amazing.",
    avatar: '',
  },
  {
    id: 'rev-6',
    author: 'Sneha Shah • 98332*****',
    rating: 5,
    text: "I've been using your creams daily. The day and night creams are amazing, all made with natural ingredients and no smell. Alongside this, I'm making sure I'm hydrating well. I've already seen a difference within 2 months. My skin feels so clear and fresh.",
    avatar: '',
  },
  {
    id: 'rev-7',
    author: 'Varsha Shah • 83693*****',
    rating: 5,
    text: 'I tried it yesterday. It was awesome, very smooth and fast waxing. No itching, even my daughter-in-law loved it too. Your cream and facial bomb are superb. Thanks beta for introducing natural products.',
    avatar: '',
  },
  {
    id: 'rev-8',
    author: 'Vaibhavi Dagli • 93242*****',
    rating: 5,
    text: 'Hi, I am repeating my order. Results are super se bhi uper. No frizziness in my hair, no hair fall. Your all-in-1 shampoo and repair oil are magic; my hair is smooth and shiny with no roughness. God bless you.',
    avatar: '',
  },
  {
    id: 'rev-9',
    author: 'Ashita Mehta • 88904*****',
    rating: 5,
    text: "Rosemary and hibiscus oil result is very nice. Hair fall bhi kam hua and hair volume mai bhi notice kiya. Last 3 months hua but it's really helpful for my hair. Thx dear.",
    avatar: '',
  },
  {
    id: 'rev-10',
    author: 'Vijaya Kapasi • 77382*****',
    rating: 5,
    text: 'Hair colour and D-tan face wash mast che. My face is glowing. Hair colour is perfect now, dye effect. It looks like a natural brown effect.',
    avatar: '',
  },
  {
    id: 'rev-11',
    author: 'Tina Doshi • 90290*****',
    rating: 5,
    text: 'Niacinamide serum and avocado night cream super che. Skin tight lage che, glow thay che. I am using continuously for the last 2 months. Skin ma improvements che dear.',
    avatar: '',
  },
  {
    id: 'rev-12',
    author: 'Ekta Panchal • 99136*****',
    rating: 5,
    text: 'Wanted to share that your sun safe lotion and D-tan were very nice. I applied it to my daughter during summer, and she has no tan.',
    avatar: '',
  },
  {
    id: 'rev-13',
    author: 'Meenal Desai • 98192*****',
    rating: 5,
    text: 'Till December usually my lips are chapped due to winter. Now I daily use your organic lipstick, so my lips are still smooth and moisturized. Thank you.',
    avatar: '',
  },
  {
    id: 'rev-14',
    author: 'Grishma • 98765*****',
    rating: 5,
    text: "I use the product by this company, and the result is absolutely stunning and glowing. My skin is more glowing now; tanning, pores and patches are completely faded, and it's giving me a soft, shiny look. My favorite products have been my night cream and vitamin C serum. It's the best serum I have used. Thank you for this glow up. I recommend you give these products a try.",
    avatar: '',
  },
];
