const PRODUCTS = [

  // ══════════════════════════════════════════
  // COLLECTION 1 — LOCAL HEROES (15 jerseys)
  // ══════════════════════════════════════════

  // Orlando Pirates (6)
  { id: 1,  name: "Ghost Away Kit",          club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-01.jpeg", price: "TBD" },
  { id: 2,  name: "Home Vodacom Kit",        club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-05.jpeg", price: "TBD" },
  { id: 3,  name: "Black & Red Classic",     club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-06.jpeg", price: "TBD" },
  { id: 4,  name: "Blue Diagonal Kit",       club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-02.jpeg", price: "TBD" },
  { id: 5,  name: "Pink Brushstroke Kit",    club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-04.jpeg", price: "TBD" },
  { id: 6,  name: "Long Sleeve Classic",     club: "Orlando Pirates",   collection: "collection1", type: "jersey",    image: "products/collection1/pirates-03.jpeg", price: "TBD" },

  // Kaizer Chiefs (3)
  { id: 8,  name: "Orange Kombat Kit",       club: "Kaizer Chiefs",     collection: "collection1", type: "jersey",    image: "products/collection1/chiefs-02.jpeg",  price: "TBD" },
  { id: 9,  name: "White Kappa Kit",         club: "Kaizer Chiefs",     collection: "collection1", type: "jersey",    image: "products/collection1/chiefs-01.jpeg",  price: "TBD" },
  { id: 10, name: "Dark Grey Camo Kit",      club: "Kaizer Chiefs",     collection: "collection1", type: "jersey",    image: "products/collection1/chiefs-03.jpeg",  price: "TBD" },

  // Bafana Bafana (2)
  { id: 11, name: "SA Football Association", club: "Bafana Bafana",     collection: "collection1", type: "jersey",    image: "products/collection1/bafana-01.jpeg",  price: "TBD" },
  { id: 12, name: "Retro SA Strip",          club: "Bafana Bafana",     collection: "collection1", type: "jersey",    image: "products/collection1/bafana-02.jpeg",  price: "TBD" },

  // Springboks (2)
  { id: 13, name: "Home FNB Green Kit",      club: "Springboks",        collection: "collection1", type: "jersey",    image: "products/collection1/springboks-01.jpeg", price: "TBD" },
  { id: 14, name: "Away FNB White Kit",      club: "Springboks",        collection: "collection1", type: "jersey",    image: "products/collection1/springboks-02.jpeg", price: "TBD" },

  // Mamelodi Sundowns (1)
  { id: 15, name: "Ubuntu-Botho Away Kit",   club: "Mamelodi Sundowns", collection: "collection1", type: "jersey",    image: "products/collection1/sundowns-01.jpeg", price: "TBD" },


  // ══════════════════════════════════════════
  // COLLECTION 2 — WORLD STAGE (23 jerseys)
  // ══════════════════════════════════════════

  // Real Madrid (5)
  { id: 16, name: "Home Emirates Kit",       club: "Real Madrid",       collection: "collection2", type: "jersey",    image: "products/collection2/madrid-02.jpeg",   price: "TBD" },
  { id: 17, name: "Away Blue Kit",           club: "Real Madrid",       collection: "collection2", type: "jersey",    image: "products/collection2/madrid-01.jpeg",   price: "TBD" },
  { id: 18, name: "Blue Long Sleeve",        club: "Real Madrid",       collection: "collection2", type: "jersey",    image: "products/collection2/madrid-03.jpeg",   price: "TBD" },
  { id: 19, name: "White Long Sleeve",       club: "Real Madrid",       collection: "collection2", type: "jersey",    image: "products/collection2/madrid-04.jpeg",   price: "TBD" },
  { id: 20, name: "Dark Navy Long Sleeve",   club: "Real Madrid",       collection: "collection2", type: "jersey",    image: "products/collection2/madrid-05.jpeg",   price: "TBD" },

  // Manchester City (5)
  { id: 21, name: "Away Dark Etihad Kit",    club: "Manchester City",   collection: "collection2", type: "jersey",    image: "products/collection2/mancity-01.jpeg",  price: "TBD" },
  { id: 22, name: "Sky Blue Home Kit",       club: "Manchester City",   collection: "collection2", type: "jersey",    image: "products/collection2/mancity-04.jpeg",  price: "TBD" },
  { id: 23, name: "Grey Neon Third Kit",     club: "Manchester City",   collection: "collection2", type: "jersey",    image: "products/collection2/mancity-05.jpeg",  price: "TBD" },
  { id: 24, name: "Sky Blue Long Sleeve",    club: "Manchester City",   collection: "collection2", type: "jersey",    image: "products/collection2/mancity-02.jpeg",  price: "TBD" },
  { id: 25, name: "Black Long Sleeve",       club: "Manchester City",   collection: "collection2", type: "jersey",    image: "products/collection2/mancity-03.jpeg",  price: "TBD" },

  // Arsenal (4)
  { id: 26, name: "Away Lightning Kit",      club: "Arsenal",           collection: "collection2", type: "jersey",    image: "products/collection2/arsenal-02.jpeg",  price: "TBD" },
  { id: 27, name: "Home Red Kit",            club: "Arsenal",           collection: "collection2", type: "jersey",    image: "products/collection2/arsenal-03.jpeg",  price: "TBD" },
  { id: 28, name: "Lightning Long Sleeve",   club: "Arsenal",           collection: "collection2", type: "jersey",    image: "products/collection2/arsenal-01.jpeg",  price: "TBD" },
  { id: 29, name: "Cream Away Kit",          club: "Arsenal",           collection: "collection2", type: "jersey",    image: "products/collection2/arsenal-04.jpeg",  price: "TBD" },

  // Liverpool (3)
  { id: 30, name: "Home Standard Chartered", club: "Liverpool",         collection: "collection2", type: "jersey",    image: "products/collection2/liverpool-01.jpeg", price: "TBD" },
  { id: 31, name: "Red Long Sleeve",         club: "Liverpool",         collection: "collection2", type: "jersey",    image: "products/collection2/liverpool-02.jpeg", price: "TBD" },
  { id: 32, name: "White Away Long Sleeve",  club: "Liverpool",         collection: "collection2", type: "jersey",    image: "products/collection2/liverpool-03.jpeg", price: "TBD" },

  // Manchester United (3)
  { id: 33, name: "Home Snapdragon Kit",     club: "Manchester United", collection: "collection2", type: "jersey",    image: "products/collection2/manutd-01.jpeg",   price: "TBD" },
  { id: 34, name: "Away White Kit",          club: "Manchester United", collection: "collection2", type: "jersey",    image: "products/collection2/manutd-02.jpeg",   price: "TBD" },
  { id: 35, name: "Red Long Sleeve",         club: "Manchester United", collection: "collection2", type: "jersey",    image: "products/collection2/manutd-03.jpeg",   price: "TBD" },

  // Chelsea (2)
  { id: 36, name: "Blue Geometric Kit",      club: "Chelsea",           collection: "collection2", type: "jersey",    image: "products/collection2/chelsea-01.jpeg",  price: "TBD" },
  { id: 37, name: "White Stripe Kit",        club: "Chelsea",           collection: "collection2", type: "jersey",    image: "products/collection2/chelsea-02.jpeg",  price: "TBD" },

  // Barcelona (1)
  { id: 38, name: "Home Spotify Long Sleeve",club: "Barcelona",         collection: "collection2", type: "jersey",    image: "products/collection2/barcelona-01.jpeg", price: "TBD" },


  // ══════════════════════════════════════════
  // COLLECTION 3 — TRACKSUITS (23 sets)
  // ══════════════════════════════════════════

  // Orlando Pirates (4)
  { id: 39, name: "Grey Geometric Set",      club: "Orlando Pirates",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-pirates-02.jpeg", price: "TBD" },
  { id: 40, name: "Pink Brushstroke Set",    club: "Orlando Pirates",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-pirates-03.jpeg", price: "TBD" },
  { id: 41, name: "Dark Grey & Red Set",     club: "Orlando Pirates",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-pirates-01.jpeg", price: "TBD" },
  { id: 42, name: "White & Grey Set",        club: "Orlando Pirates",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-pirates-04.jpeg", price: "TBD" },

  // Kaizer Chiefs (3)
  { id: 43, name: "Orange & Black Set",      club: "Kaizer Chiefs",     collection: "collection3", type: "tracksuit", image: "products/collection3/track-chiefs-01.jpeg",  price: "TBD" },
  { id: 44, name: "Dark Grey & Gold Set",    club: "Kaizer Chiefs",     collection: "collection3", type: "tracksuit", image: "products/collection3/track-chiefs-02.jpeg",  price: "TBD" },
  { id: 45, name: "Cream & Black Set",       club: "Kaizer Chiefs",     collection: "collection3", type: "tracksuit", image: "products/collection3/track-chiefs-03.jpeg",  price: "TBD" },

  // Manchester City (2)
  { id: 46, name: "Sky Blue MCFC Set",       club: "Manchester City",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-mancity-01.jpeg", price: "TBD" },
  { id: 47, name: "Dark Grey MCFC Set",      club: "Manchester City",   collection: "collection3", type: "tracksuit", image: "products/collection3/track-mancity-02.jpeg", price: "TBD" },

  // Barcelona (2)
  { id: 49, name: "Blue & Red Spotify Set",  club: "Barcelona",         collection: "collection3", type: "tracksuit", image: "products/collection3/track-barcelona-01.jpeg", price: "TBD" },
  { id: 50, name: "Cream Spotify Set",       club: "Barcelona",         collection: "collection3", type: "tracksuit", image: "products/collection3/track-barcelona-02.jpeg", price: "TBD" },

  // Chelsea (2)
  { id: 51, name: "All Blue Training Set",   club: "Chelsea",           collection: "collection3", type: "tracksuit", image: "products/collection3/track-chelsea-01.jpeg",   price: "TBD" },
  { id: 52, name: "White & Grey Set",        club: "Chelsea",           collection: "collection3", type: "tracksuit", image: "products/collection3/track-chelsea-02.jpeg",   price: "TBD" },

  // Liverpool (2)
  { id: 53, name: "Cream Standard Chartered",club: "Liverpool",         collection: "collection3", type: "tracksuit", image: "products/collection3/track-liverpool-01.jpeg", price: "TBD" },
  { id: 54, name: "Red Standard Chartered",  club: "Liverpool",         collection: "collection3", type: "tracksuit", image: "products/collection3/track-liverpool-02.jpeg", price: "TBD" },

  // Real Madrid (2)
  { id: 55, name: "Navy Emirates Set",       club: "Real Madrid",       collection: "collection3", type: "tracksuit", image: "products/collection3/track-madrid-01.jpeg",    price: "TBD" },
  { id: 56, name: "White & Black Set",       club: "Real Madrid",       collection: "collection3", type: "tracksuit", image: "products/collection3/track-madrid-02.jpeg",    price: "TBD" },

  // Manchester United (2)
  { id: 57, name: "Red Snapdragon Set",      club: "Manchester United", collection: "collection3", type: "tracksuit", image: "products/collection3/track-manutd-01.jpeg",    price: "TBD" },
  { id: 58, name: "White Snapdragon Set",    club: "Manchester United", collection: "collection3", type: "tracksuit", image: "products/collection3/track-manutd-02.jpeg",    price: "TBD" },

  // Arsenal (1)
  { id: 59, name: "Navy Lightning Set",      club: "Arsenal",           collection: "collection3", type: "tracksuit", image: "products/collection3/track-arsenal-01.jpeg",   price: "TBD" },

  // Bafana Bafana (1)
  { id: 60, name: "Green & Gold SA Set",     club: "Bafana Bafana",     collection: "collection3", type: "tracksuit", image: "products/collection3/track-bafana-01.jpeg",    price: "TBD" },

  // Mamelodi Sundowns (1)
  { id: 61, name: "Yellow Ubuntu-Botho Set", club: "Mamelodi Sundowns", collection: "collection3", type: "tracksuit", image: "products/collection3/track-sundowns-01.jpeg",  price: "TBD" },

];