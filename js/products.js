/*
spa products.js
logic for fetching and filtering products
*/
const products = { 
  getAllProducts: function() {
    return this.items;
  },

  getProductById: function(id) {
    return this.items.find(item => item.id === id);
  },
  getByType: function (type) {
  return this.items.filter(item => item.type === type);
 },

getCoins: function() {
     const coins = this.items.find(item => item.id > 7);
  //console.log(coins);
  return coins;
  },
  addProduct: function(product) {
    this.items.push(product);
  },

  updateProduct: function(id, updatedProduct) {
    const itemIndex = this.items.findIndex(item => item.id === id);
    this.items[itemIndex] = { ...this.items[itemIndex], ...updatedProduct };
  },

  deleteProduct: function(id) {
    this.items = this.items.filter(item => item.id !== id);
  },

  getRandomProducts: function(numberOfProducts) {
    const shuffledItems = this.items.sort(() => Math.random() - 0.5);
    return shuffledItems.slice(0, numberOfProducts);
  },

 reduceString: function(str, size) {
  let words = str.split(" ");
  if (words.length <= size) return str;
  let reducedWords = words.slice(0, size);
  return reducedWords.join(" ") + "...";
},

 convertToGrams: function(weight) {
  // Check if the weight argument is undefined
  if (weight === undefined) {
    return null;
  }

  // Extract the float and the unit using a regular expression
  let match = weight.match(/(\d+(?:\.\d+)?)\s*(\w+)/);
  if (!match) {
    return null;
  }

  let float = parseFloat(match[1]);
  let unit = match[2].toLowerCase();

  // Convert the weight to grams
  switch (unit) {
    case "g":
      return float;
    case "oz":
      return float * 31.1035;
    case "kg":
      return float * 1000;
    default:
      return null;
  }
},

//let weight = "31.61 g";
//let grams = convertToGrams(weight);
//console.log(grams); // Output: 31.61https://res.cloudinary.com/dcu3hr3eo/image/upload/v1677004772/1oz-philoro-bar_mw75ef.png

  items: [
    { 
      sell: -1.40,
      buy: 32.46,
      id: 1,
      title: "1 Gram Philoro Gold Minted Bar of 999.9 fineness",
      type: "bar",
      heading: "1 Gram Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675706558/1-Gram-Philoro-Gold-Minted-Bar_xdylig.jpg",
      fineWeight: "1 g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
      fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
      description: "The 1 Gram minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. \n \n The front face also shows the bar's weight of 1 Gram, fine gold content of 999.9, and a unique serial number imprinted on it. The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. \n \n Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
    { 
      sell: -1.40,
      buy: 32.46,
      id: 2,
      title: "10 Grams Philoro Gold Minted Bar of 999.9 fineness",
      type: "bar",
      heading: "10 Grams Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675706843/10-Grams-Philoro-Gold-Minted-Bar_erqlo3.jpg",
      fineWeight: "10 g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
      fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
      description: "The 10 Grams minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 10 Grams, fine gold content of 999.9, and a unique serial number imprinted on it. \n \n The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
 { 
   sell: -1,
      buy: 11.14,
      id: 5,
      title: "100 Grams Philoro Gold Minted Bar of 999.9 fineness",
   type: "bar",
      heading: "100 Grams Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675707888/100-Grams-Philoro-Gold-Minted-Bar_gn2iau.jpg",
  fineWeight: "100g",
   countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
     fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
   description: "The 100 Grams minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 100 Grams, fine gold content of 999.9, and a unique serial number imprinted on it. \n \n The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
 { 
   sell: -1,
      buy: 11.14,
      id: 6,
      title: "50 Grams Philoro Gold Minted Bar of 999.9 fineness",
   type: "bar",
      heading: "50 Grams Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1677004797/50g-philoro-gold-bar_xt9lem.png",
fineWeight: "50 g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
     fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
   description: "The 50 Grams minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 50 Grams, fine gold content of 999.9, and a unique serial number imprinted on it. \n \n The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
    { 
      sell: -1,
      buy: 6,
      id: 7,
      title: "1 Kilogram Philoro Gold Minted Bar of 999.9 fineness",
      type: "bar",
      heading: "1 Kilogram Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675708280/1-Kilogram-Philoro-Gold-Minted-Bar_nznbsd.jpg",
      fineWeight: "1000.00 g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
     fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
      description: "The 1 Kilogram minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 1 Kilogram, fine gold content of 999.9, and a unique serial number imprinted on it. \n \n The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
  { 
      sell: -1,
      buy: 11.14,
      id: 65,
      title: "1 oz Philoro Gold Minted Bar of 999.9 fineness",
      type: "bar",
      heading: "1 oz Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675708280/1-Kilogram-Philoro-Gold-Minted-Bar_nznbsd.jpg",
      fineWeight: "1.00 oz",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
     fineness: "999.9",
      grade: "New",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
      description: "The 1 ounce minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 1 oz, fine gold content of 999.9, and a unique serial number imprinted on it. \n \n The gold bar is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
//https://res.cloudinary.com/dcu3hr3eo/image/upload/v1677004772/1oz-philoro-bar_mw75ef.png
    //https://res.cloudinary.com/dcu3hr3eo/image/upload/v1677004797/50g-philoro-gold-bar_xt9lem.png

    //https://res.cloudinary.com/dcu3hr3eo/image/upload/v1677004809/1oz-american-eagle-coin_erl8rl.png
    
    //**# COINS
    { 
      sell: -1,
      buy: 11.14,
      id: 8,
      type: "coin",
      title: "Gold Philharmonic 1 oz Coin",
      heading: "Gold Philharmonic 1 oz Coin",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667595/dukia-Gold-Philharmonic-1-oz-Coin_qrpcgh.jpg",
      image2: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667596/dukia-Gold-Philharmonic-1-oz-Coin-2_ikmd4y.jpg",
      fineWeight: "1.00 oz",
      grossWeight: "31.1 g",
      countryOfOrigin: "Austria",
      manufacturer: "M??nze ??sterreich",
      fineness: "999.9",
      grade: 'New',
      certificate: null,
      packaging: null,
      description: "The one-ounce (1 oz) Vienna Philharmonic Gold Coin is an Austrian gold coin with a fineness of 999.9, first issued by M??nze ??sterreich in 1989. The Gold Philharmonic is the second bullion coin made of gold after the Gold Britannia and is legal tender. Since the currency change in 2002, the coin is no longer tagged in Schilling, but in Euro. This coin remains the only bullion coin in Europe with a nominal value in Euro (100 Euro). \n \n The gold coin is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
    { 
      sell: -1,
      buy: 11.14,
      id: 9,
      type: "coin",
      title: "Gold Maple Leaf 1 oz Coin",
      heading: "Gold Maple Leaf 1 oz Coin",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667595/dukia-Gold-Maple-Leaf-1-oz-Coin_bslgny.jpg",
      image2: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667595/dukia-Gold-Maple-Leaf-1-oz-Coin-2_hepqbi.jpg",
      fineWeight: "1 oz",
      grossWeight: "31.1 g",
      countryOfOrigin: "Canada",
      manufacturer: "Royal Canadian Mint",
      fineness: "999.9",
      grade: 'New',
      certificate: null,
      packaging: null,

      description: "The one-ounce (1 oz) Gold Maple Leaf Coin is a Canadian coin which has been minted by Royal Canadian Mint since 1979. Therefore, it is one of the oldest gold bullion coins in the world. Next to the Krugerrand, the Maple Leaf gold coin is the most widespread gold coin. \n \n The front of the coin shows a maple leaf which is also depicted on the national flag of Canada. On the back, like on all coins of the Commonwealth, the portrait of Queen Elizabeth II is visible. Since 2013, the 1 ounce version of the Maple Leaf gold coin bears an additional security feature: a small maple leaf with the last two digits of the year of mint. Inscriptions on the coin are written in the two national Canadian languages, English and French. \n \n The gold coin is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
 { 
   sell: -1,
      buy: 11.14,
      id: 10,
      type: "coin",
      title: "Gold Britannia 1 oz Coin",
      heading: "Gold Britannia 1 oz Coin",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667596/dukia-Gold-Britannia-1-oz-Coin_qpux3w.jpg",
      image2: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667595/dukia-Gold-Britannia-1-oz-Coin-2_plwpvv.jpg",
      fineWeight: "1.00 oz",
   grossWeight: "31.1 g",
      countryOfOrigin: "United Kingdom",
      manufacturer: "The Royal Mint",
      fineness: "999.9",
      grade: 'New',
      certificate: null,
      packaging: null,
      description: "The one-ounce (1 oz) Gold Britannia Coin is a British gold coin which has been minted since 1987 by The Royal Mint and was the first European bullion coin. The value of the Britannia gold coin is marked in British Pound and is legal tender in Great Britain. Since 1987, the coin is available in units of 1/10 ounce, 1/2 ounce and 1 ounce. \n \n Since 2013, the Gold Britannia has a fineness of 999,9. Before that, it was 916,7 ??? equaling 22 Karat. Until 1989, an alloy of copper (1/12) was used, which gave the coin a reddish colour. Afterwards, copper and silver were used in the same ratio. Since 1997, the Britannia is also available in silver. \n \n The front image of the Britannia gold coin is the Roman goddess and personification of the country ???Britannia??? as a standing figure with helmet, shield and trident. The motif remained unchanged up to the Millennium. Since 2001, the motif of the Gold Britannia changes in years with uneven numbers and remains the same in years with even numbers. The portrait of Queen Elizabeth II, which is updated irregularly according to the current appearance of the regent, is pictured on the reverse. \n \n The gold coin is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
 { 
   sell: -1,
      buy: 11.14,
      id: 11,
      type: "coin",
      title: "Gold Krugerrand 1 oz Coin",
      heading: "Gold Krugerrand 1 oz Coin",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667597/dukia-Gold-Krugerrand-1-oz-Coin_sknvui.jpg",
      image2: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667596/dukia-Gold-Krugerrand-1-oz-Coin-2_y4xugd.jpg",
      fineWeight: "1.00 oz",
   grossWeight: "31.93 g",
      countryOfOrigin: "South Africa",
      manufacturer: "The Rand Refinery",
      fineness: "916.7",
      grade: 'New',
      certificate: null,
      packaging: null,
      description: "The one-ounce (1 oz) Gold Krugerrand Coin is a South African gold coin which has been minted at Rand Refinery in Germiston close to Johannesburg since 1967. It is the most widespread bullion coin in gold. It is available in units of 1 ounce, 1/2 ounce, 1/4 ounce and 1/10 ounce. \n The fineness of the Krugerrand gold coin is at 916.7. The alloy with copper gives the coin a reddish colour and enhances the scratch resistance. \n The Gold Krugerrand is named after the South African president Paul Kruger (1882-1902) and the South African currency 'Rand'.  The front shows Paul Kruger???s portrait. On the back is a springbock-antelope, the heraldic animal of the Republic of South Africa. Despite the Gold Krugerrand not having any currency indicator it is considered legal tender. The value is determined according to the price of gold on every business day. The London Gold fixing functions as value indicator. \n \n During the first three years of mint, the batch of Krugerrand gold coins was under 50,000 ounces per year. After that, production increased four times and reached its peak of up to 6 million ounces during the oil crisis. In 1986, the apartheid???s imposition of sanctions led to a sharp decline in production which lasted until the abolition of embargo on imports in 1999. \n \n The gold coin is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
},
    { 
      sell: -1,
      buy: 11.14,
      id: 12,
      type: "coin",
      title: "Gold Sovereign Coin",
      heading: "Gold Sovereign Coin",
      image: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667597/dukia-Gold-Sovereign-Coin_e58oqv.jpg",
      image2: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667596/dukia-Gold-Sovereign-Coin-2_fdickg.jpg",
      fineWeight: "7.32 g",
   grossWeight: "7.98 g",
      countryOfOrigin: "United Kingdom",
      manufacturer: "The Royal Mint",
      fineness: "916.7",
      grade: 'New',
      certificate: null,
      packaging: null,
      description: "The 7.98 Grams Gold Sovereign Coin is a very popular English gold coin, which was first minted in 1489 by Henry VII. Coinage resumed in 1817 and functioned as a means of payment in Britain until 1917. It has been minted again as a bullion coin since 1957 and is also very popular outside of Great Britain. \n \n The design of the Sovereign is classic and has changed little since it was first minted. The obverse of the sovereign is reserved for the reigning monarch. On the reverse of the Sovereign, Saint George (St. George) is depicted slaying the dragon. \n \n The sovereign is issued as a 1 pound gold coin (weight: 7.98 grams and fineness: 916.67/1000) and as a ?? pound gold coin (weight: 3.99 fineness: 916.67/1000). Additionally, ??2 and ??5 Sovereign versions are available, but were primarily issued in coin sets. \n \n The gold coin is VAT free if the secure storage option with Brink???s is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. \n All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
}
  ]

};
