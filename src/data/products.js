// Import Front Images
import alooBhujiaFront from '../assets/front/aloo-bhujia.png'
import besanLadooFront from '../assets/front/besan-ladoo.png'
import bhakarwadiFront from '../assets/front/bhakarwadi.png'
import bombayMixtureFront from '../assets/front/bombay-mixture.png'
import chatpateSticksMastMasalaFront from '../assets/front/chatpate-sticks-mast-masala.png'
import chatpateSticksRasilaTomatoFront from '../assets/front/chatpate-sticks-rasila-tomato.png'
import chatpatiChanaDalFront from '../assets/front/chatpati-chana-dal.png'
import crispyLiteRuskFront from '../assets/front/crispy-lite-rusk.png'
import dalBijiFront from '../assets/front/dal-biji.png'
import delightAssortedCookiesFront from '../assets/front/delight-assorted-cookies.png'
import gulabJamunFront from '../assets/front/gulab-jamun.png'
import hingChanaFront from '../assets/front/hing-chana.png'
import kajuMixtureFront from '../assets/front/kaju-mixture.png'
import kanpuriMixtureFront from '../assets/front/kanpuri-mixture.png'
import kashmiriMixtureFront from '../assets/front/kashmiri-mixture.png'
import khattaMeethaFront from '../assets/front/khatta-meetha.png'
import lehsanSevFront from '../assets/front/lehsan-sev.png'
import malaiSevFront from '../assets/front/malai-sev.png'
import mastBaharFront from '../assets/front/mast-bahar.png'
import mattarMasalaLaddiFront from '../assets/front/mattar-masala-laddi.png'
import mixtureAllInOneFront from '../assets/front/mixture-all-in-one.png'
import moongDalFront from '../assets/front/moong-dal.png'
import navratanMixtureFront from '../assets/front/navratan-mixture.png'
import nutChanaFront from '../assets/front/nut-chana.png'
import nutCrackerFront from '../assets/front/nut-cracker.png'
import panjabiTadkaFront from '../assets/front/panjabi-tadka.png'
import panjiriLadooFront from '../assets/front/panjiri-ladoo.png'
import popcornButterSaltedFront from '../assets/front/popcorn-butter-salted.png'
import raitaBoondiFront from '../assets/front/raita-boondi.png'
import rasgullaFront from '../assets/front/rasgulla.png'
import rasmolFront from '../assets/front/rasmol.png'
import saltyPeanutFront from '../assets/front/salty-peanut.png'
import soanPapdiDesiGheeFront from '../assets/front/soan-papdi-desi-ghee.png'
import soanPapdiFront from '../assets/front/soan-papdi.png'
import teekhaMixtureFront from '../assets/front/teekha-mixture.png'

// Import Back Images
import alooBhujiaBack from '../assets/back/aloo-bhujia.png'
import bhakarwadiBack from '../assets/back/bhakarwadi.png'
import bombayMixtureBack from '../assets/back/bombay-mixture.png'
import chatpateSticksMastMasalaBack from '../assets/back/chatpate-sticks-mast-masala.png'
import chatpateSticksRasilaTomatoBack from '../assets/back/chatpate-sticks-rasila-tomato.png'
import chatpatiChanaDalBack from '../assets/back/chatpati-chana-dal.png'
import crispyLiteRuskBack from '../assets/back/crispy-lite-rusk.png'
import dalBijiBack from '../assets/back/dal-biji.png'
import delightAssortedCookiesBack from '../assets/back/delight-assorted-cookies.png'
import gulabJamunBack from '../assets/back/gulab-jamun.png'
import hingChanaBack from '../assets/back/hing-chana.jpg'
import kajuMixtureBack from '../assets/back/kaju-mixture.png'
import kanpuriMixtureBack from '../assets/back/kanpuri-mixture.png'
import kashmiriMixtureBack from '../assets/back/kashmiri-mixture.png'
import khattaMeethaBack from '../assets/back/khatta-meetha.png'
import lehsanSevBack from '../assets/back/lehsan-sev.png'
import malaiSevBack from '../assets/back/malai-sev.png'
import mastBaharBack from '../assets/back/mast-bahar.png'
import mattarMasalaLaddiBack from '../assets/back/matar-masala-laddi.png'
import mixtureAllInOneBack from '../assets/back/mixture-all-in-one.png'
import moongDalBack from '../assets/back/moong-dal.png'
import navratanMixtureBack from '../assets/back/navratan-mixture.png'
import nutChanaBack from '../assets/back/nut-chana.png'
import nutCrackerBack from '../assets/back/nut-cracker.png'
import panjabiTadkaBack from '../assets/back/panjabi-tadka.png'
import panjiriLadooBack from '../assets/back/panjiri-ladoo.png'
import popcornButterSaltedBack from '../assets/back/popcorn-butter-salted.png'
import raitaBoondiBack from '../assets/back/raita-boondi.png'
import rasgullaBack from '../assets/back/rasgulla.png'
import saltyPeanutBack from '../assets/back/salted-peanuts.jpg'
import soanPapdiDesiGheeBack from '../assets/back/soan-papdi-desi-ghee.png'
import soanPapdiBack from '../assets/back/soan-papdi.png'
import teekhaMixtureBack from '../assets/back/teekha-mixture.png'

export const products = [
  // ==================== NAMKEEN ====================
  {
    id: 'aloo-bhujia',
    name: 'Aloo Bhujia',
    category: 'Namkeen',
    description: 'A crispy, crunchy potato-infused noodle snack with a perfect blend of spices. An absolute classic in every Indian household.',
    ingredients: 'Potato (44%), Edible Vegetable Oil, Gram Flour, Tepary Beans Flour, Starch, Iodised Salt, Mixed Spices (Coriander, Cumin, Black Pepper, Dry Mango Powder, Ginger, Clove).',
    storage: 'Store in a cool, dry place. Keep away from direct sunlight. Once opened, store in an airtight container to retain crispness.',
    additionalInfo: '100% Vegetarian. Trans-fat free. Made using premium quality groundnut oil.',
    inStock: true,
    stockCount: 110,
    frontImage: alooBhujiaFront,
    backImage: alooBhujiaBack,
    variants: [
      { name: '70gm', price: 20 },
      { name: '140gm', price: 45, mrp: 50 },
      { name: 'Laddi pack (10x15gm)', price: 90, mrp: 100 }
    ]
  },
  {
    id: 'hing-chana',
    name: 'Hing Chana',
    category: 'Namkeen',
    description: 'Roasted green chickpeas seasoned with rich asafoetida (Hing) and dry spices. A delicious and nutritious protein-packed snack.',
    ingredients: 'Roasted Chickpeas (85%), Edible Vegetable Oil, Asafoetida (Hing) (0.5%), Salt, Red Chilli Powder, Dry Mango Powder, Spices.',
    storage: 'Store in a cool, dry and hygienic place. Protect from moisture.',
    additionalInfo: 'High Protein. Gluten-free. Excellent snack option for diet-conscious individuals.',
    inStock: true,
    stockCount: 85,
    frontImage: hingChanaFront,
    backImage: hingChanaBack,
    variants: [
      { name: '150gm', price: 40, mrp: 45 },
      { name: '400gm', price: 99, mrp: 110 }
    ]
  },
  {
    id: 'nut-cracker',
    name: 'Nut Cracker',
    category: 'Namkeen',
    description: 'Crispy peanuts coated in a spicy gram flour crust. Perfectly fried to a satisfying golden crunch with robust traditional spices.',
    ingredients: 'Peanuts (55%), Gram Flour (25%), Edible Vegetable Oil, Corn Starch, Red Chilli Powder, Salt, Turmeric, Clove, Nutmeg.',
    storage: 'Store in an airtight container in a cool, dry place.',
    additionalInfo: 'Rich in healthy fats and proteins. Zero cholesterol.',
    inStock: true,
    stockCount: 120,
    frontImage: nutCrackerFront,
    backImage: nutCrackerBack,
    variants: [
      { name: '70gm', price: 20 },
      { name: '140gm', price: 45, mrp: 50 },
      { name: '400gm', price: 90, mrp: 100 }
    ]
  },
  {
    id: 'bombay-mixture',
    name: 'Bombay Mixture',
    category: 'Namkeen',
    description: 'A lively, sweet and spicy blend of gram flour sev, boondi, puffed rice, peanuts, and dry fruits. A true taste of Bombay.',
    ingredients: 'Gram Flour, Edible Vegetable Oil, Puffed Rice, Peanuts, Cashew Nuts, Raisins, Lentils, Salt, Spices.',
    storage: 'Store in a cool, dry place. Keep sealed.',
    additionalInfo: 'Contains premium dry fruits. Authentic sweet & spicy flavour profile.',
    inStock: true,
    stockCount: 65,
    frontImage: bombayMixtureFront,
    backImage: bombayMixtureBack,
    variants: [
      { name: '150gm', price: 45, mrp: 50 },
      { name: '400gm', price: 110, mrp: 120 }
    ]
  },
  {
    id: 'mast-bahar',
    name: 'Mast Bahar',
    category: 'Namkeen',
    description: 'A special spicy mixture loaded with puffed rice, corn flakes, sev, and rich traditional spices for a tangy kick.',
    ingredients: 'Puffed Rice, Corn Flakes, Gram Flour Sev, Peanuts, Edible Vegetable Oil, Citric Acid, Spices.',
    storage: 'Keep in dry place. Store in airtight container.',
    additionalInfo: 'Tangy masala mix. Low in calories, rich in taste.',
    inStock: true,
    stockCount: 95,
    frontImage: mastBaharFront,
    backImage: mastBaharBack,
    variants: [
      { name: '150gm', price: 35 },
      { name: '350gm', price: 75, mrp: 80 }
    ]
  },
  {
    id: 'salty-peanut',
    name: 'Salty Peanut',
    category: 'Namkeen',
    description: 'Perfectly roasted, crunchy peanuts tossed in subtle iodized salt. A timeless companion for beverages and dynamic snacking.',
    ingredients: 'Peanuts, Edible Vegetable Oil, Salt.',
    storage: 'Store in cool and dry environment. Prevent moisture exposure.',
    additionalInfo: 'Naturally gluten-free. Packed with nutrition.',
    inStock: true,
    stockCount: 140,
    frontImage: saltyPeanutFront,
    backImage: saltyPeanutBack,
    variants: [
      { name: '100gm', price: 30 },
      { name: '200gm', price: 55, mrp: 60 }
    ]
  },
  {
    id: 'kashmiri-mixture',
    name: 'Kashmiri Mixture',
    category: 'Namkeen',
    description: 'A royal, mild mixture featuring potato sticks, dry fruits, split yellow peas, and flavored with a delicate cardamom-infused masala.',
    ingredients: 'Potato, Split Peas, Cashew Nuts, Melon Seeds, Edible Vegetable Oil, Cardamom Powder, Spices, Salt.',
    storage: 'Store in airtight containers in a cool and dry space.',
    additionalInfo: 'Mildly spiced. Packed with almonds and cashews.',
    inStock: true,
    stockCount: 70,
    frontImage: kashmiriMixtureFront,
    backImage: kashmiriMixtureBack,
    variants: [
      { name: '150gm', price: 55, mrp: 60 },
      { name: '350gm', price: 120, mrp: 135 }
    ]
  },
  {
    id: 'kanpuri-mixture',
    name: 'Kanpuri Mixture',
    category: 'Namkeen',
    description: 'A classic, highly spiced namkeen mixture from the heart of Kanpur. Rich, spicy, and perfectly crunch-balanced.',
    ingredients: 'Gram Flour, Lentils, Flaked Rice, Edible Vegetable Oil, Salt, Black Salt, Mango Powder, Cloves, Spices.',
    storage: 'Store in cool dry place inside an airtight container.',
    additionalInfo: 'Hot and spicy taste profile. Authentic UP flavour.',
    inStock: true,
    stockCount: 80,
    frontImage: kanpuriMixtureFront,
    backImage: kanpuriMixtureBack,
    variants: [
      { name: '150gm', price: 40 },
      { name: '400gm', price: 95, mrp: 100 }
    ]
  },
  {
    id: 'chatpati-channa-dal',
    name: 'Chatpati Channa Dal',
    category: 'Namkeen',
    description: 'Fried split Bengal gram (Chana Dal) seasoned with sour and hot spices. High on crunch, spice, and protein.',
    ingredients: 'Split Bengal Gram, Edible Vegetable Oil, Dry Mango Powder, Red Chilli Powder, Black Salt, Spices.',
    storage: 'Keep in dry environment in airtight jar.',
    additionalInfo: 'Rich protein snack. Ideal dietary side.',
    inStock: true,
    stockCount: 100,
    frontImage: chatpatiChanaDalFront,
    backImage: chatpatiChanaDalBack,
    variants: [
      { name: '100gm', price: 20 },
      { name: '250gm', price: 45, mrp: 50 }
    ]
  },
  {
    id: 'navratan-mixture',
    name: 'Navratan Mixture',
    category: 'Namkeen',
    description: 'A classic mix of nine premium ingredients including lentils, nuts, potato sticks, and gram flour sev, toasted in royal spices.',
    ingredients: 'Gram Flour, Lentils, Cashews, Peanuts, Potato, Rice Flakes, Spinach Powder, Edible Vegetable Oil, Salt, Spices.',
    storage: 'Store in cool and dry place in sealed bags.',
    additionalInfo: 'A true blend of nine signature crunch profiles.',
    inStock: true,
    stockCount: 130,
    frontImage: navratanMixtureFront,
    backImage: navratanMixtureBack,
    variants: [
      { name: '150gm', price: 45, mrp: 50 },
      { name: '400gm', price: 110, mrp: 125 }
    ]
  },
  {
    id: 'teekha-mixture',
    name: 'Teekha Mixture',
    category: 'Namkeen',
    description: 'A fiery, hot spice-packed blend of gram flour sev, lentils, and spices. Made for those who enjoy authentic Indian heat.',
    ingredients: 'Gram Flour, Edible Vegetable Oil, Peanuts, Red Chilli Powder, Garlic, Black Salt, Spices.',
    storage: 'Store in cool and dry conditions. Keep airtight.',
    additionalInfo: 'Our absolute best seller! Spicy and robust.',
    inStock: true,
    stockCount: 150,
    frontImage: teekhaMixtureFront,
    backImage: teekhaMixtureBack,
    variants: [
      { name: '150gm', price: 45 },
      { name: '400gm', price: 110, mrp: 120 }
    ]
  },
  {
    id: 'kaju-mixture',
    name: 'Kaju Mixture',
    category: 'Namkeen',
    description: 'A luxury blend of fried cashew nuts, potato sticks, raisins, and mild spices. Perfect for festive sharing and celebration.',
    ingredients: 'Cashew Nuts (35%), Potato Sticks, Raisins, Edible Vegetable Oil, Salt, Cardamom, Black Pepper.',
    storage: 'Store in cool dry conditions inside an airtight jar.',
    additionalInfo: 'Premium festive snack. Contain highest cashew ratio.',
    inStock: true,
    stockCount: 50,
    frontImage: kajuMixtureFront,
    backImage: kajuMixtureBack,
    variants: [
      { name: '150gm', price: 80, mrp: 90 },
      { name: '350gm', price: 175, mrp: 195 }
    ]
  },
  {
    id: 'raita-boondi',
    name: 'Raita Boondi',
    category: 'Namkeen',
    description: 'Tiny, crispy fried gram flour spheres. A absolute must-have ingredient for cool, refreshing yogurt raitas.',
    ingredients: 'Gram Flour (Besan), Edible Vegetable Oil, Salt, Asafoetida.',
    storage: 'Store in dry place. Keep sealed.',
    additionalInfo: 'Zero soda. Crispy, non-greasy texture.',
    inStock: true,
    stockCount: 90,
    frontImage: raitaBoondiFront,
    backImage: raitaBoondiBack,
    variants: [
      { name: '150gm', price: 30 },
      { name: '350gm', price: 65, mrp: 75 }
    ]
  },
  {
    id: 'khatta-meetha',
    name: 'Khatta Meetha',
    category: 'Namkeen',
    description: 'A delicious blend of sweet puffed rice, salty sev, peanuts, sago, and green peas. Hits the sweet and sour sweet spots perfectly.',
    ingredients: 'Gram Flour, Edible Vegetable Oil, Sugar (6%), Peanuts, Sago, Flaked Rice, Lentils, Salt, Spices.',
    storage: 'Keep in cool, dry place. Keep sealed.',
    additionalInfo: 'Light and highly digestible. Sweeter profile.',
    inStock: true,
    stockCount: 160,
    frontImage: khattaMeethaFront,
    backImage: khattaMeethaBack,
    variants: [
      { name: '70gm', price: 20 },
      { name: '120gm', price: 40 },
      { name: '950gm', price: 200, mrp: 220 }
    ]
  },
  {
    id: 'mattar-masala-laddi',
    name: 'Mattar Masala Laddi',
    category: 'Namkeen',
    description: 'Crunchy dry peas coated in spicy chatpata masala. Packaged in single-serve laddi packs for ultimate convenience.',
    ingredients: 'Dry Peas, Edible Vegetable Oil, Red Chilli Powder, Black Salt, Mango Powder, Spices.',
    storage: 'Store in dry place.',
    additionalInfo: 'Perfect for retail display and portion control.',
    inStock: true,
    stockCount: 115,
    frontImage: mattarMasalaLaddiFront,
    backImage: mattarMasalaLaddiBack,
    variants: [
      { name: '10x18gm Pack', price: 50 }
    ]
  },
  {
    id: 'mixture-all-in-one',
    name: 'Mixture All In One',
    category: 'Namkeen',
    description: 'An expansive medley of sev, lentils, corn flakes, peanuts, cashews, and gathiya. The final word in Indian mixtures.',
    ingredients: 'Gram Flour, Lentils, Corn Flakes, Peanuts, Cashews, Rice Flakes, Edible Vegetable Oil, Salt, Spices.',
    storage: 'Store in cool and dry place.',
    additionalInfo: 'A multi-texture delight. Ideal for large family gatherings.',
    inStock: true,
    stockCount: 105,
    frontImage: mixtureAllInOneFront,
    backImage: mixtureAllInOneBack,
    variants: [
      { name: '150gm', price: 45, mrp: 50 },
      { name: '400gm', price: 110, mrp: 125 }
    ]
  },
  {
    id: 'dal-biji',
    name: 'Dal Biji',
    category: 'Namkeen',
    description: 'A traditional delicacy consisting of fried musk melon seeds, gram flour noodles, and spicy black lentils. Rich and deep.',
    ingredients: 'Gram Flour, Musk Melon Seeds, Lentils, Edible Vegetable Oil, Salt, Black Pepper, Spices.',
    storage: 'Keep airtight in dry location.',
    additionalInfo: 'Authentic Uttar Pradesh speciality.',
    inStock: true,
    stockCount: 60,
    frontImage: dalBijiFront,
    backImage: dalBijiBack,
    variants: [
      { name: '150gm', price: 45, mrp: 50 },
      { name: '400gm', price: 110, mrp: 120 }
    ]
  },
  {
    id: 'lehsan-sev',
    name: 'Lehsan Sev',
    category: 'Namkeen',
    description: 'Crispy gram flour sev infused with strong, aromatic garlic juice and spicy red chillies. Bold and savory.',
    ingredients: 'Gram Flour, Garlic Extract (3%), Edible Vegetable Oil, Chilli Powder, Salt, Spices.',
    storage: 'Store in cool, dry environment.',
    additionalInfo: 'Made with fresh organic garlic. Spicy and pungent.',
    inStock: true,
    stockCount: 85,
    frontImage: lehsanSevFront,
    backImage: lehsanSevBack,
    variants: [
      { name: '150gm', price: 35 },
      { name: '350gm', price: 75, mrp: 80 }
    ]
  },
  {
    id: 'malai-sev',
    name: 'Malai Sev',
    category: 'Namkeen',
    description: 'Mild, melt-in-mouth gram flour sev enriched with milk cream. Super light and suitable for children.',
    ingredients: 'Gram Flour, Milk Cream (Malai) (5%), Edible Vegetable Oil, Salt, Mild Spices.',
    storage: 'Store airtight in cool dry place.',
    additionalInfo: 'Extremely mild spice level. Rich buttery undertones.',
    inStock: true,
    stockCount: 90,
    frontImage: malaiSevFront,
    backImage: malaiSevBack,
    variants: [
      { name: '150gm', price: 40 },
      { name: '350gm', price: 80, mrp: 90 }
    ]
  },
  {
    id: 'nut-chana',
    name: 'Nut Chana',
    category: 'Namkeen',
    description: 'A nutritious mix of roasted peanuts and salted whole chickpeas. Highly satiating and perfect for dietary energy boost.',
    ingredients: 'Roasted Chickpeas (50%), Roasted Peanuts (48%), Oil, Salt.',
    storage: 'Prevent humidity exposure. Store airtight.',
    additionalInfo: 'High-protein diet friendly snack.',
    inStock: true,
    stockCount: 75,
    frontImage: nutChanaFront,
    backImage: nutChanaBack,
    variants: [
      { name: '150gm', price: 35 },
      { name: '350gm', price: 75, mrp: 80 }
    ]
  },
  {
    id: 'punjabi-tadka',
    name: 'Punjabi Tadka',
    category: 'Namkeen',
    description: 'Crisp coriander-infused potato and gram flour sticks seasoned with tangy red chilli, tomato, and dry mango powders.',
    ingredients: 'Potato, Gram Flour, Edible Vegetable Oil, Tomato Powder, Mango Powder, Salt, Spices.',
    storage: 'Keep in dry airtight packaging.',
    additionalInfo: 'Lively Punjabi flavours. Highly addictive taste.',
    inStock: true,
    stockCount: 110,
    frontImage: panjabiTadkaFront,
    backImage: panjabiTadkaBack,
    variants: [
      { name: '150gm', price: 40 },
      { name: '350gm', price: 80, mrp: 90 }
    ]
  },
  {
    id: 'moong-dal',
    name: 'Moong Dal',
    category: 'Namkeen',
    description: 'Crispy fried split yellow moong lentils seasoned with pure salt. The cleanest, most refreshing crunch in Indian snacking.',
    ingredients: 'Split Yellow Moong Dal, Edible Vegetable Oil, Salt.',
    storage: 'Store in dry place. Keep sealed.',
    additionalInfo: 'Rich in fiber and protein. Very low spice profile.',
    inStock: true,
    stockCount: 130,
    frontImage: moongDalFront,
    backImage: moongDalBack,
    variants: [
      { name: '100gm', price: 25 },
      { name: '250gm', price: 55, mrp: 60 }
    ]
  },
  {
    id: 'bhakarwadi',
    name: 'Bhakarwadi',
    category: 'Namkeen',
    description: 'A sweet, spicy and tangy Maharashtrian fried spiral snack stuffed with coconut, poppy seeds, and sesame masala.',
    ingredients: 'Wheat Flour, Gram Flour, Edible Vegetable Oil, Grated Coconut, Fennel Seeds, Sugar, Tamarind, Salt, Spices.',
    storage: 'Store in cool, dry place. Seal tightly.',
    additionalInfo: 'Authentic Maharashtrian recipe. Crunchy texture.',
    inStock: true,
    stockCount: 100,
    frontImage: bhakarwadiFront,
    backImage: bhakarwadiBack,
    variants: [
      { name: '200gm', price: 40 },
      { name: '400gm', price: 80, mrp: 90 }
    ]
  },

  // ==================== SWEETS ====================
  {
    id: 'besan-ladoo',
    name: 'Besan Ladoo',
    category: 'Sweets',
    description: 'Traditional Indian sweet balls made of slow-roasted gram flour, pure desi ghee, and sugar, flavored with cardamom.',
    ingredients: 'Gram Flour (Besan), Pure Desi Ghee (35%), Sugar, Cardamom Powder, Almond Slivers.',
    storage: 'Store in cool and dry place. Do not refrigerate. Consumption within 30 days recommended.',
    additionalInfo: 'Made with 100% pure Desi Ghee. Melt-in-mouth texture.',
    inStock: true,
    stockCount: 90,
    frontImage: besanLadooFront,
    backImage: besanLadooFront, // Fallback to front image
    variants: [
      { name: '400gm', price: 149, mrp: 165 },
      { name: '800gm', price: 290, mrp: 320 }
    ]
  },
  {
    id: 'rasmol',
    name: 'Rasmol',
    category: 'Sweets',
    description: 'Delicate, sweet chenna dumplings soaked in rich, saffron-infused milk cream. Soft and absolutely delightful.',
    ingredients: 'Milk Solids (Chenna), Sugar, Milk Cream, Saffron, Cardamom, Almonds.',
    storage: 'Keep refrigerated. Consume cold within 3 days of purchase.',
    additionalInfo: 'Fresh dairy product. Made in micro-batches.',
    inStock: false, // Out of stock example
    stockCount: 0,
    frontImage: rasmolFront,
    backImage: rasmolFront, // Fallback
    variants: [
      { name: '500gm Pack', price: 180, mrp: 200 }
    ]
  },
  {
    id: 'panjiri-ladoo',
    name: 'Panjiri Ladoo',
    category: 'Sweets',
    description: 'Nutritious ladoos made with whole wheat flour, ghee, dry fruits, and edible gum (Gond). Excellent for winter warmth.',
    ingredients: 'Whole Wheat Flour, Pure Ghee, Edible Gum (Gond), Almonds, Cashews, Pistachios, Sugar, Cardamom.',
    storage: 'Store in clean, dry place inside an airtight jar.',
    additionalInfo: 'Highly energizing sweet. Traditional recipe.',
    inStock: true,
    stockCount: 60,
    frontImage: panjiriLadooFront,
    backImage: panjiriLadooBack,
    variants: [
      { name: '400gm', price: 199, mrp: 220 }
    ]
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    category: 'Sweets',
    description: 'Soft, spongy cottage cheese balls soaked in clear sugar syrup. A classic Bengali sweet that melts in every bite.',
    ingredients: 'Milk Solids (Chenna), Sugar, Water, Rose Water.',
    storage: 'Refrigerate after opening. Best served chilled.',
    additionalInfo: 'Traditionally made. Spongy and juicy.',
    inStock: true,
    stockCount: 80,
    frontImage: rasgullaFront,
    backImage: rasgullaBack,
    variants: [
      { name: '1kg Tin', price: 140, mrp: 160 }
    ]
  },
  {
    id: 'soan-papdi',
    name: 'Soan Papdi',
    category: 'Sweets',
    description: 'Flaky, crisp-layered gram flour sweet infused with cardamom and topped with dry melon seeds and almonds.',
    ingredients: 'Sugar, Gram Flour, Wheat Flour, Edible Vegetable Oil, Ghee, Cardamom, Pistachio, Almonds.',
    storage: 'Store in dry place. Keep sealed to maintain flaky structure.',
    additionalInfo: 'Classic Indian festive gift. Flaky multi-layered texture.',
    inStock: true,
    stockCount: 150,
    frontImage: soanPapdiFront,
    backImage: soanPapdiBack,
    variants: [
      { name: '250gm', price: 69 },
      { name: '500gm', price: 130, mrp: 140 },
      { name: '1kg Box', price: 260, mrp: 280 }
    ]
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    category: 'Sweets',
    description: 'Golden fried milk-solid balls soaked in warm, cardamom and rose-water flavoured sugar syrup. Pure indulgence.',
    ingredients: 'Milk Solids (Khoya), Wheat Flour, Ghee, Sugar, Water, Cardamom, Rose Water.',
    storage: 'Refrigerate after opening. Warm slightly before serving for best experience.',
    additionalInfo: 'Extremely soft dairy sweet. Classic celebration favorite.',
    inStock: true,
    stockCount: 100,
    frontImage: gulabJamunFront,
    backImage: gulabJamunBack,
    variants: [
      { name: '1kg Tin', price: 160, mrp: 180 }
    ]
  },
  {
    id: 'soan-papdi-desi-ghee',
    name: 'Soan Papdi Desi Ghee',
    category: 'Sweets',
    description: 'Premium version of the flaky Soan Papdi sweet, prepared using 100% pure desi ghee for a luxurious melt-in-mouth texture.',
    ingredients: 'Sugar, Pure Desi Ghee (28%), Gram Flour, Wheat Flour, Cardamom, Pistachio, Almonds.',
    storage: 'Keep in cool dry place. Keep tightly closed.',
    additionalInfo: 'Premium festive gift edition. Made in desi ghee.',
    inStock: true,
    stockCount: 75,
    frontImage: soanPapdiDesiGheeFront,
    backImage: soanPapdiDesiGheeBack,
    variants: [
      { name: '500gm', price: 199, mrp: 220 }
    ]
  },

  // ==================== READY TO EAT ====================
  {
    id: 'chatpate-sticks-rasila-tomato',
    name: 'Chatpate Sticks Rasila Tomato',
    category: 'Ready To Eat',
    description: 'Tangy, tomato-flavoured cereal sticks that offer a perfect tangy crunch in every bite.',
    ingredients: 'Corn Meal, Rice Meal, Edible Vegetable Oil, Sugar, Salt, Tomato Powder (1.2%), Spices.',
    storage: 'Keep in cool, dry place.',
    additionalInfo: 'Tangy tomato flavor. Perfect crunch for kids and youngsters.',
    inStock: true,
    stockCount: 120,
    frontImage: chatpateSticksRasilaTomatoFront,
    backImage: chatpateSticksRasilaTomatoBack,
    variants: [
      { name: '60gm', price: 20 },
      { name: '150gm', price: 45, mrp: 50 }
    ]
  },
  {
    id: 'popcorn-butter-salted',
    name: 'Popcorn Butter Salted',
    category: 'Ready To Eat',
    description: 'Light, fluffy popped corn kernels tossed in rich butter and salt. A perfect theater-style snack at home.',
    ingredients: 'Popped Corn Kernels, Edible Vegetable Oil, Butter Powder, Salt, Beta Carotene.',
    storage: 'Store in dry place. Keep sealed to avoid dampness.',
    additionalInfo: 'High dietary fiber. Theater-style taste.',
    inStock: true,
    stockCount: 110,
    frontImage: popcornButterSaltedFront,
    backImage: popcornButterSaltedBack,
    variants: [
      { name: '50gm', price: 20 },
      { name: '120gm', price: 45, mrp: 50 }
    ]
  },
  {
    id: 'chatpate-sticks-mast-masala',
    name: 'Chatpate Sticks Mast Masala',
    category: 'Ready To Eat',
    description: 'Spicy, masala-loaded crunch sticks made of corn and rice meal. Perfect savory snack with soda or tea.',
    ingredients: 'Corn Meal, Rice Meal, Edible Vegetable Oil, Mixed Masala Spices, Onion Powder, Garlic Powder, Salt.',
    storage: 'Store in cool dry place.',
    additionalInfo: 'Fiery masala blast. Dynamic snack crunch.',
    inStock: true,
    stockCount: 130,
    frontImage: chatpateSticksMastMasalaFront,
    backImage: chatpateSticksMastMasalaBack,
    variants: [
      { name: '60gm', price: 20 },
      { name: '150gm', price: 45, mrp: 50 }
    ]
  },

  // ==================== COOKIES & BAKERY ====================
  {
    id: 'crispy-lite-rusk',
    name: 'Crispy Lite Rusk',
    category: 'Cookies & Bakery',
    description: 'Double-baked, crispy suji (semolina) rusks infused with aromatic fennel (Saunf). An absolute teatime essential.',
    ingredients: 'Semolina (Suji) (65%), Wheat Flour, Sugar, Edible Vegetable Oil, Yeast, Fennel Seeds (Saunf) (0.8%), Salt.',
    storage: 'Keep dry. Store in an airtight container once opened.',
    additionalInfo: 'Made with premium semolina. Low sugar profile.',
    inStock: true,
    stockCount: 95,
    frontImage: crispyLiteRuskFront,
    backImage: crispyLiteRuskBack,
    variants: [
      { name: '300gm Pack', price: 50, mrp: 55 },
      { name: '600gm Pack', price: 95, mrp: 110 }
    ]
  },
  {
    id: 'delight-assorted-cookies',
    name: 'Delight Assorted Cookies',
    category: 'Cookies & Bakery',
    description: 'An premium assortment of butter, almond, and cashew cookies baked to a crumbly perfection.',
    ingredients: 'Wheat Flour, Butter (22%), Sugar, Cashew Bits, Almond Slivers, Milk Solids, Raising Agents.',
    storage: 'Store in clean dry place. Seal tightly.',
    additionalInfo: 'Premium cookies assortment. Contains rich dry fruits.',
    inStock: true,
    stockCount: 65,
    frontImage: delightAssortedCookiesFront,
    backImage: delightAssortedCookiesBack,
    variants: [
      { name: '400gm Pack', price: 120, mrp: 135 }
    ]
  }
]
