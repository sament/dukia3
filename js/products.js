//alert("called");

const products = { 
  items: [
    { 
      id: 1,
      title: "1 Gram Philoro Gold Minted Bar of 999.9 fineness",
      heading: "1 Gram Philoro Gold Minted Bar of 999.9 fineness",
      image: "https://dukia.netlify.app/Images/1gram.JPG",
      fineWeight: "1g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi S.A.",
      grade: "999.9",
      certificate: "Yes",
      packaging: "Tamper-evident packaging",
      description: "The 1 Gram minted gold bar from Philoro is a 999.9 fine gold bar with a high-lustre finish and rounded edges. The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. <br/>The front face also shows the bar's weight of 1 Gram, fine gold content of 999.9, and a unique serial number imprinted on it. The gold bar is VAT free if the secure storage option with Brink’s is opted for. Storage fee is free for the first 12 months of storage. <br /> Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault. All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request."
    },
    { 
      id: 2,
      title: "10 Gram Minted Gold Bar",
      heading: "10 Gram Minted Gold Bar",
      image: "https://dukia.netlify.app/Images/10gram.JPG",
      fineWeight: "10g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi",
      grade: "999.9",
      certificate: "Yes",
      packaging: "Assayed Card"
    },
    { 
      id: 11,
      title: "1 oz Gold Coin",
      heading: "1 oz Gold Coin",
      image: "https://dukia.netlify.app/Images/philharmonic.JPG",
      fineWeight: "1 oz",
      countryOfOrigin: "Austria",
      manufacturer: "Austrian Mint",
      grade: "999.9",
      certificate: "No",
      packaging: "Plastic Flip"
    },
    { 
      id: 9,
      title: "1 oz Gold Maple Leaf Coin",
      heading: "1 oz Gold Maple Leaf Coin",
      image: "https://dukia.netlify.app/Images/goldmaple.JPG",
      fineWeight: "1 oz",
      countryOfOrigin: "Canada",
      manufacturer: "Royal Canadian Mint",
      grade: "999.9",
      certificate: "No",
      packaging: "Plastic Flip",
      excerpt: "The one-ounce (1 oz) Gold Maple Leaf Coin is a Canadian coin which has been minted by Royal Canadian Mint since 1979."
    },
    { 
      id: 5,
      title: "100 Gram Minted Gold Bar",
      heading: "100 Gram Minted Gold Bar",
      image: "https://dukia.netlify.app/Images/100gram.JPG",
      fineWeight: "100g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi",
      grade: "999.9",
      certificate: "Yes",
      packaging: "Assayed Card"
    },
    { 
      id: 7,
      title: "1,000Gram Minted Gold Bar",
      heading: "1,000Gram Minted Gold Bar",
      image: "https://dukia.netlify.app/Images/1kggold.JPG",
      fineWeight: "1,000g",
      countryOfOrigin: "Switzerland",
      manufacturer: "Valcambi",
      grade: "999.9",
      certificate: "Yes",
      packaging: "Assayed Card"
    },
  ],

  getAllProducts: function() {
    return this.items;
  },

  getProductById: function(id) {
    return this.items.find(item => item.id === id);
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
  }
};
