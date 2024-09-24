export const CABINET = 'cabinet';
export const CHAIR = 'chair';
export const SOFA = 'sofa';
export const TABLE = 'table';
export const VASE = 'vase';
export const CATEGORIES = [CABINET, CHAIR, SOFA, TABLE, VASE];

export const FURNITURES = [
  {
    id: 1,
    name: 'Wooden Hole Table',
    price: 1500,
    category: TABLE,
    image: '/furniture/table_wooden_hole.png',
    description: 'A perfect blend of contemporary elegance and natural beauty. The table features a crystal-clear, tempered glass top that provides a sleek, minimalist aesthetic, allowing the beauty of the wooden base to shine through.',
    reviews: [
      {
        rate: 5,
        from: 'Sophia M.',
        review: 'The glass and ashwood combo looks amazing in my dining room.'
      },
      {
        rate: 4,
        from: 'David L.',
        review: 'Exceeded expectations!'
      },
      {
        rate: 5,
        from: 'Emily R.',
        review: 'Love this table! It makes the room feel open and cozy at the same time.'
      }
    ]
  },
  {
    id: 2,
    name: 'Slim Glass Cabinet',
    price: 499,
    category: CABINET,
    image: '/furniture/cabinet_slim_wood_glass.png',
    description: 'A sleek, glass-fronted cabinet with slim wooden framing, perfect for displaying items while saving space. Its minimalist design seamlessly integrates into any room, providing a stylish solution for storage. The glass panels allow for easy visibility of your cherished items, while the wooden frame adds warmth and a touch of elegance. This cabinet is perfect for showcasing your favorite decor or collectibles, making it a functional and beautiful addition to your home.',
    reviews: [
      {
        rate: 4,
        from: 'Jessica T.',
        review: 'Stylish and functional, fits well in my hallway. It holds more than I expected!'
      },
      {
        rate: 5,
        from: 'Michael B.',
        review: 'Perfect for small spaces and looks high-end. I love the minimalist design!'
      },
      {
        rate: 4,
        from: 'Kara P.',
        review: 'Great value for the price, and it adds a modern touch to any room.'
      }
    ]
  },
  {
    id: 3,
    name: 'Wooden Glass Cabinet',
    price: 1200,
    category: CABINET,
    image: '/furniture/cabinet_wooden_glass.jpg',
    description: 'A sturdy wooden cabinet with glass panels for elegant storage and display. This cabinet not only provides ample storage space but also showcases your items beautifully. The rich texture of the wood combined with the clarity of the glass creates a striking visual contrast, elevating your interior design. Whether used in a living room, dining area, or hallway, this cabinet is both a practical storage solution and a stylish statement piece.',
    reviews: [
      {
        rate: 5,
        from: 'Sara H.',
        review: 'This cabinet is beautiful! The wood and glass combo gives it a luxurious feel.'
      },
      {
        rate: 4,
        from: 'Henry K.',
        review: 'Looks amazing in my dining room, though assembly took a little longer than expected.'
      },
      {
        rate: 5,
        from: 'Laura F.',
        review: 'Great quality and provides ample storage space. Highly recommended!'
      }
    ]
  },
  {
    id: 4,
    name: 'Soft Brown Seat Chair',
    price: 1100,
    category: CHAIR,
    image: '/furniture/chair_brown_seat.jpg',
    description: 'A plush brown chair designed for maximum comfort and style. Its soft upholstery and supportive cushioning make it perfect for long hours of sitting, whether you’re reading a book or enjoying a conversation with friends. The elegant design complements various decor styles, from modern to traditional, while the rich brown color adds warmth to any space. This chair is a must-have for creating a cozy corner in your home.',
    reviews: [
      {
        rate: 5,
        from: 'Adam G.',
        review: 'Super comfortable and looks great in my living room!'
      },
      {
        rate: 4,
        from: 'Olivia M.',
        review: 'Really cozy, but the color is slightly darker than the picture.'
      },
      {
        rate: 5,
        from: 'Rachel S.',
        review: 'Absolutely love this chair. It’s my new favorite reading spot!'
      }
    ]
  },
  {
    id: 5,
    name: 'Classic Chair',
    price: 1000,
    category: CHAIR,
    image: '/furniture/chair_circle_back.jpg',
    description: 'A timeless wooden chair with a curved backrest, perfect for any classic interior. Its traditional design is complemented by sturdy construction, ensuring durability and comfort. The subtle curves of the backrest provide excellent support, making it an ideal choice for dining or lounging. Available in rich wood tones, this chair will enhance your space with a touch of sophistication and elegance, while remaining versatile enough to fit various decor themes.',
    reviews: [
      {
        rate: 4,
        from: 'John D.',
        review: 'Solid and comfortable, though I wish it was a bit wider.'
      },
      {
        rate: 5,
        from: 'Emma J.',
        review: 'A perfect fit for my dining room set. Classic design never goes out of style.'
      },
      {
        rate: 5,
        from: 'Sophie V.',
        review: 'Elegant and sturdy, exactly what I wanted for my vintage-themed space.'
      }
    ]
  },
  {
    id: 6,
    name: 'Green Comfy Chair',
    price: 1400,
    category: CHAIR,
    image: '/furniture/chair_green.jpg',
    description: 'A vibrant green chair with extra padding for supreme comfort and style. The bold color adds a lively touch to any room, while the plush cushioning ensures you can relax in comfort. Perfect for a reading nook or as a statement piece in your living room, this chair combines fun and functionality. Its ergonomic design promotes good posture, making it ideal for both leisure and work. Add a pop of color to your space with this delightful chair!',
    reviews: [
      {
        rate: 5,
        from: 'Bella K.',
        review: 'This chair is so comfortable and brightens up my room. Great purchase!'
      },
      {
        rate: 4,
        from: 'Kevin L.',
        review: 'Love the color and comfort, but it’s a bit bulky for small spaces.'
      },
      {
        rate: 5,
        from: 'Sarah W.',
        review: 'Perfect! Super comfy and the green color is exactly as pictured.'
      }
    ]
  },
  {
    id: 8,
    name: 'Grey Office Chair',
    price: 999,
    category: CHAIR,
    image: '/furniture/chair_no_back.jpg',
    description: 'A modern office chair featuring an ergonomic design that promotes good posture and comfort during long hours of work. The sleek grey fabric not only enhances its contemporary look but also provides a clean and professional appearance suitable for any office environment. With adjustable height and supportive seating, this chair is designed to accommodate various body types and preferences, making it a practical choice for your workspace.',
    reviews: [
      {
        rate: 4,
        from: 'Tom F.',
        review: 'Stylish and supportive, but the seat could be a bit softer.'
      },
      {
        rate: 5,
        from: 'Lucy P.',
        review: 'Very comfortable for long workdays. The grey color goes well with any decor.'
      },
      {
        rate: 4,
        from: 'Mark S.',
        review: 'Good chair overall, though the armrests are a bit low for me.'
      }
    ]
  },
  {
    id: 10,
    name: 'Wooden Chair',
    price: 999,
    category: CHAIR,
    image: '/furniture/chair_wooden.jpg',
    description: 'A simple yet durable wooden chair crafted from high-quality materials with a natural finish. This chair is perfect for any room, providing a timeless and versatile look that complements various styles, from rustic to modern. Its sturdy construction ensures longevity, while the clean lines and organic texture make it an inviting seat for dining, lounging, or additional seating in any space.',
    reviews: [
      {
        rate: 5,
        from: 'Nancy Q.',
        review: 'Perfect for my rustic kitchen. It’s sturdy and looks great.'
      },
      {
        rate: 4,
        from: 'Edward L.',
        review: 'Solid wood, though the finish is a bit lighter than expected.'
      },
      {
        rate: 5,
        from: 'Paul G.',
        review: 'Excellent craftsmanship. Comfortable and stylish!'
      }
    ]
  },
  {
    id: 12,
    name: 'Leather Yellow Chair',
    price: 1100,
    category: CHAIR,
    image: '/furniture/chair_yellow.jpg',
    description: 'A bold yellow leather chair that adds a vibrant pop of color to any room. This chair is designed not only for style but also for comfort, featuring plush seating that invites you to sit back and relax. Its eye-catching hue brightens up spaces and serves as a statement piece in your home decor. Ideal for a modern living room or home office, it combines aesthetics with functionality, ensuring you can enjoy both comfort and flair.',
    reviews: [
      {
        rate: 5,
        from: 'Alex N.',
        review: 'The yellow leather is beautiful and makes my space feel vibrant.'
      },
      {
        rate: 4,
        from: 'Linda T.',
        review: 'Great chair, though it’s a bit stiff at first.'
      },
      {
        rate: 5,
        from: 'Tim B.',
        review: 'Adds a nice touch of color to my home office. Really happy with it.'
      }
    ]
  },
  {
    id: 13,
    name: 'Indigo Sofa',
    price: 2000,
    category: SOFA,
    image: '/furniture/sofa_blue.jpg',
    description: 'A stunning indigo sofa that combines both comfort and style, making it an ideal centerpiece for any living space. The rich, deep color provides a luxurious feel, while the plush cushions offer the ultimate in relaxation. Its spacious seating accommodates family and friends comfortably, making it perfect for gatherings. Whether you’re curling up with a book or hosting a movie night, this sofa adds elegance and coziness to your home.',
    reviews: [
      {
        rate: 5,
        from: 'Mia C.',
        review: 'Absolutely love this sofa! The color is gorgeous, and it’s so comfortable.'
      },
      {
        rate: 4,
        from: 'James R.',
        review: 'Very stylish, though it took a bit of time to break in.'
      },
      {
        rate: 5,
        from: 'Olivia S.',
        review: 'Perfect addition to my living room. It’s spacious and looks amazing!'
      }
    ]
  },
  {
    id: 14,
    name: 'Checkered Sofa',
    price: 4000,
    category: SOFA,
    image: '/furniture/sofa_checkered.jpg',
    description: 'A bold checkered sofa that adds a unique flair to your home decor, combining contemporary style with timeless design. The striking pattern and high-quality upholstery not only elevate the aesthetics of any room but also provide comfort and support. With ample seating space, this sofa is perfect for entertaining guests or enjoying family time. Its distinctive design makes it a statement piece that complements a variety of interior styles, from eclectic to modern.',
    reviews: [
      {
        rate: 5,
        from: 'Ethan L.',
        review: 'This sofa is a statement piece! The quality is fantastic and so comfortable.'
      },
      {
        rate: 4,
        from: 'Samantha W.',
        review: 'Great design and comfort, but a bit bigger than I expected.'
      },
      {
        rate: 5,
        from: 'Natalie F.',
        review: 'Love the checkered pattern! It fits perfectly in my eclectic living room.'
      }
    ]
  },
  {
    id: 15,
    name: 'Colorful Sofa',
    price: 3200,
    category: SOFA,
    image: '/furniture/sofa_colorful.jpg',
    description: 'A vibrant and colorful sofa that brings energy and personality to any space. Its eye-catching hues are perfect for those looking to make a bold statement in their home decor. Crafted with high-quality materials, this sofa combines style with comfort, making it an ideal choice for relaxing or entertaining. The plush cushions provide support for lounging, while the unique design adds a fun and creative touch to your living room, studio, or play area.',
    reviews: [
      {
        rate: 5,
        from: 'Jack D.',
        review: 'This sofa brightens up my room! So comfy and well-made.'
      },
      {
        rate: 4,
        from: 'Chloe H.',
        review: 'Beautiful colors, but the fabric is a bit delicate.'
      },
      {
        rate: 5,
        from: 'Ava K.',
        review: 'Absolutely love it! It’s perfect for my creative space.'
      }
    ]
  },
  {
    id: 16,
    name: 'Cream Sofa',
    price: 3500,
    category: SOFA,
    image: '/furniture/sofa_cream.jpg',
    description: 'A luxurious cream sofa that exudes elegance and comfort, making it a sophisticated addition to any living room. The soft, plush upholstery invites you to sink in and relax, while the neutral color complements a wide range of decor styles. Its timeless design and high-quality craftsmanship ensure that this sofa will remain a cherished piece in your home for years to come, perfect for both formal and casual settings.',
    reviews: [
      {
        rate: 5,
        from: 'Liam J.',
        review: 'Gorgeous sofa! It adds a touch of class to my living room.'
      },
      {
        rate: 4,
        from: 'Emma T.',
        review: 'Comfortable and stylish, but I wish it was a bit deeper.'
      },
      {
        rate: 5,
        from: 'Sophia R.',
        review: 'So happy with this purchase! It’s perfect for relaxing.'
      }
    ]
  },
  {
    id: 17,
    name: 'White Curved Sofa',
    price: 6800,
    category: SOFA,
    image: '/furniture/sofa_curved.jpg',
    description: 'An elegant white curved sofa that offers a modern and chic look, ideal for contemporary interiors. The flowing lines and smooth silhouette create a sense of spaciousness while providing ample seating for family and friends. Its striking design is not only aesthetically pleasing but also functional, as the comfortable cushions make it perfect for lounging or entertaining guests. A true centerpiece that enhances the beauty of your living space.',
    reviews: [
      {
        rate: 5,
        from: 'Noah P.',
        review: 'This sofa is stunning! It’s the centerpiece of my living room.'
      },
      {
        rate: 4,
        from: 'Isabella N.',
        review: 'Very stylish, but I was worried about stains with a white sofa.'
      },
      {
        rate: 5,
        from: 'Evelyn M.',
        review: 'Comfortable and beautiful! I get compliments all the time.'
      }
    ]
  },
  {
    id: 18,
    name: 'Grey Black Sofa',
    price: 4300,
    category: SOFA,
    image: '/furniture/sofa_grey_black.png',
    description: 'A sophisticated grey and black sofa that suits modern decor perfectly, adding a touch of elegance to your living space. The sleek color combination creates a stylish contrast, while the soft upholstery provides comfort for everyday use. Designed with both aesthetics and functionality in mind, this sofa offers a comfortable seating experience for family gatherings or quiet nights in front of the TV, making it a versatile addition to your home.',
    reviews: [
      {
        rate: 5,
        from: 'Lily T.',
        review: 'Very sleek and stylish. It fits perfectly in my contemporary home.'
      },
      {
        rate: 4,
        from: 'Mason H.',
        review: 'Great quality, but the cushions are firmer than I expected.'
      },
      {
        rate: 5,
        from: 'Jackson W.',
        review: 'Amazing sofa! It’s both stylish and comfortable for movie nights.'
      }
    ]
  },
  {
    id: 19,
    name: 'Black Leather Sofa',
    price: 3000,
    category: SOFA,
    image: '/furniture/sofa_leather_black.jpg',
    description: 'A sleek black leather sofa that offers luxury and comfort, perfect for those who appreciate refined style. The premium leather upholstery not only enhances the aesthetic appeal but also ensures durability and easy maintenance. This sofa provides ample seating space, making it ideal for hosting guests or unwinding after a long day. Its timeless design fits seamlessly into any decor, from modern to classic, providing a touch of sophistication to your living area.',
    reviews: [
      {
        rate: 5,
        from: 'Charlotte R.',
        review: 'Beautiful leather sofa! Very comfortable and easy to clean.'
      },
      {
        rate: 4,
        from: 'Oliver S.',
        review: 'Looks great in my living room. Just a bit stiff initially.'
      },
      {
        rate: 5,
        from: 'Ella G.',
        review: 'Excellent quality and luxurious feel! Worth every penny.'
      }
    ]
  },
  {
    id: 21,
    name: 'Classic Leather Sofa',
    price: 3300,
    category: SOFA,
    image: '/furniture/sofa_leather.jpg',
    description: 'A timeless classic leather sofa that offers both comfort and style, designed to complement any home decor. With its elegant lines and high-quality leather, this sofa provides a luxurious seating experience that is both inviting and sophisticated. The durable construction ensures that it will be a long-lasting centerpiece in your living room, making it perfect for both everyday use and special occasions. A great investment for those who appreciate quality and design.',
    reviews: [
      {
        rate: 5,
        from: 'Abigail J.',
        review: 'So comfortable and elegant! A great investment for my home.'
      },
      {
        rate: 4,
        from: 'Lucas B.',
        review: 'Fantastic quality, but it takes time to break in.'
      },
      {
        rate: 5,
        from: 'Avery K.',
        review: 'Classic design that fits well with my traditional decor.'
      }
    ]
  },
  {
    id: 22,
    name: 'Mini Grey Sofa',
    price: 2300,
    category: SOFA,
    image: '/furniture/sofa_small.jpg',
    description: 'A compact grey sofa perfect for smaller spaces without compromising style. Its sleek design makes it an excellent choice for apartments or cozy nooks, providing a comfortable seating option that fits seamlessly into any decor. The soft grey fabric is not only stylish but also easy to maintain, ensuring this sofa remains a chic addition to your home for years to come. Whether you’re curling up with a book or entertaining guests, this mini sofa offers both functionality and flair.',
    reviews: [
      {
        rate: 5,
        from: 'Daniel F.',
        review: 'Perfect for my apartment! It’s stylish and cozy.'
      },
      {
        rate: 4,
        from: 'Zoe C.',
        review: 'Great for small spaces, but a bit less cushion than expected.'
      },
      {
        rate: 5,
        from: 'Chloe D.',
        review: 'Absolutely love it! It fits perfectly and looks chic.'
      }
    ]
  },
  {
    id: 24,
    name: 'Wooden Sofa',
    price: 3000,
    category: SOFA,
    image: '/furniture/sofa_wooden.jpg',
    description: 'A stylish wooden sofa with plush cushions, ideal for comfort and aesthetics. The beautiful wooden frame adds a natural touch to your living space, while the soft cushions invite you to relax and unwind. This sofa is perfect for both casual gatherings and elegant entertaining, making it a versatile choice for any home. With its combination of sturdy construction and inviting design, it enhances the warmth and beauty of your living area.',
    reviews: [
      {
        rate: 5,
        from: 'Leo A.',
        review: 'The wooden frame is beautiful! Very comfortable for lounging.'
      },
      {
        rate: 4,
        from: 'Grace E.',
        review: 'Great design, but the cushions could be a bit softer.'
      },
      {
        rate: 5,
        from: 'Aiden M.',
        review: 'A wonderful addition to my living room. Love the natural look!'
      }
    ]
  },
  {
    id: 25,
    name: 'Orange Wooden Table',
    price: 1100,
    category: TABLE,
    image: '/furniture/table_circular_orange.png',
    description: 'A vibrant orange wooden table that adds a pop of color to any room. Its unique circular design and lively hue make it a standout piece, perfect for brightening up your dining area or living space. The sturdy construction ensures durability while maintaining a stylish aesthetic. Ideal for both casual dining and entertaining, this table is sure to be a conversation starter and a functional centerpiece in your home.',
    reviews: [
      {
        rate: 5,
        from: 'Emily R.',
        review: 'This table brightens my dining area! Perfect size and shape.'
      },
      {
        rate: 4,
        from: 'James W.',
        review: 'Love the color and design, but wish it was a bit bigger.'
      },
      {
        rate: 5,
        from: 'Sophie J.',
        review: 'Such a fun and stylish table! It\'s great for gatherings.'
      }
    ]
  },
  {
    id: 26,
    name: 'Brown Wooden Table',
    price: 800,
    category: TABLE,
    image: '/furniture/table_curvy_legs.png',
    description: 'A classic brown wooden table with elegantly curved legs for a vintage look. This table not only serves as a functional piece but also adds a touch of sophistication to your dining or living area. The rich brown finish highlights the natural beauty of the wood, making it a timeless addition to any home. Its sturdy design ensures that it will stand the test of time while providing a perfect surface for meals, games, or decor.',
    reviews: [
      {
        rate: 5,
        from: 'Olivia L.',
        review: 'Beautiful craftsmanship! Perfect for my vintage decor.'
      },
      {
        rate: 4,
        from: 'Jack N.',
        review: 'Sturdy and stylish, though the finish is a bit darker than expected.'
      },
      {
        rate: 5,
        from: 'Liam S.',
        review: 'I’m in love with this table! It’s the centerpiece of my dining room.'
      }
    ]
  },
  {
    id: 27,
    name: 'Square Glass Table',
    price: 900,
    category: TABLE,
    image: '/furniture/table_square_wooden.jpg',
    description: 'A sleek square glass table that adds a modern touch to any space. The minimalist design features a clear glass top that creates an airy feel, making it perfect for smaller rooms or as an accent piece. Its sturdy base provides stability while maintaining a stylish profile. Ideal for dining, working, or displaying decorative items, this table offers versatility and elegance, enhancing the contemporary vibe of your home.',
    reviews: [
      {
        rate: 5,
        from: 'Olivia K.',
        review: 'Love the minimalist design! Perfect for my dining area.'
      },
      {
        rate: 4,
        from: 'Ethan S.',
        review: 'Looks great, but the glass top is a bit fragile.'
      },
      {
        rate: 5,
        from: 'Sophie T.',
        review: 'Very stylish and easy to clean! Great value for the price.'
      }
    ]
  },
  {
    id: 29,
    name: 'Circle Glass Table',
    price: 900,
    category: TABLE,
    image: '/furniture/table_wooden_circle_glass.jpg',
    description: 'An elegant circular glass table perfect for entertaining guests. Its sophisticated design features a clear glass top that creates an open, airy feel, making it an ideal centerpiece for your dining room or living space. The sturdy wooden base offers both stability and style, complementing any decor. Whether hosting dinner parties or casual gatherings, this table provides a versatile and chic solution for your entertaining needs.',
    reviews: [
      {
        rate: 5,
        from: 'Mia C.',
        review: 'Such a beautiful table! It’s a focal point in my living room.'
      },
      {
        rate: 4,
        from: 'Jack L.',
        review: 'Great design, though it takes a bit of effort to keep clean.'
      },
      {
        rate: 5,
        from: 'Emily R.',
        review: 'Absolutely love this table! Perfect size for my space.'
      }
    ]
  },
  {
    id: 30,
    name: 'Cat Vase',
    price: 400,
    category: VASE,
    image: '/furniture/vase_cat.jpg',
    description: 'A quirky cat-shaped vase that adds personality to your decor. This charming vase is perfect for displaying small flowers or as a standalone piece. Its unique design and playful aesthetic make it a fun addition to any room, whether you’re a cat lover or just appreciate whimsical decor. The Cat Vase is sure to draw compliments and add a delightful touch to your home.',
    reviews: [
      {
        rate: 5,
        from: 'Chloe F.',
        review: 'This vase is adorable! I get so many compliments on it.'
      },
      {
        rate: 4,
        from: 'Lucas W.',
        review: 'Cute design, but it’s smaller than I expected.'
      },
      {
        rate: 5,
        from: 'Emma N.',
        review: 'Perfect for my cat-themed decor! Love it.'
      }
    ]
  },
  {
    id: 31,
    name: 'Crossed Vase',
    price: 700,
    category: VASE,
    image: '/furniture/vase_crossed.jpg',
    description: 'A modern crossed vase that adds a touch of elegance to any room. Its unique crossed design creates an eye-catching silhouette, making it an ideal accent piece for tables, shelves, or mantels. The sleek lines and contemporary style enhance the beauty of floral arrangements or stand out beautifully on their own. Elevate your decor with this stunning vase that combines form and function effortlessly.',
    reviews: [
      {
        rate: 5,
        from: 'Olivia R.',
        review: 'Beautiful design! It’s the perfect accent piece for my table.'
      },
      {
        rate: 4,
        from: 'Aiden M.',
        review: 'Stylish vase, but it’s a bit heavy for my liking.'
      },
      {
        rate: 5,
        from: 'Zoe C.',
        review: 'I love the unique design! It looks stunning with flowers.'
      }
    ]
  },
  {
    id: 32,
    name: 'Large Porcelain Vase',
    price: 1200,
    category: VASE,
    image: '/furniture/vase_porcelain_large.png',
    description: 'A stunning large porcelain vase that makes a bold statement. This exquisite vase features a classic design with intricate detailing, perfect for showcasing large floral arrangements or serving as a standalone statement piece. Its glossy finish enhances the beauty of any flower while adding a touch of elegance to your decor. Make a striking impact in your entryway or living room with this magnificent vase.',
    reviews: [
      {
        rate: 5,
        from: 'Sophia A.',
        review: 'This vase is magnificent! It adds elegance to my entryway.'
      },
      {
        rate: 4,
        from: 'James R.',
        review: 'Great quality and beautiful design, but quite heavy to move.'
      },
      {
        rate: 5,
        from: 'Liam P.',
        review: 'Absolutely love this vase! It’s perfect for large floral arrangements.'
      }
    ]
  },
  {
    id: 33,
    name: 'Medium Porcelain Vase',
    price: 1000,
    category: VASE,
    image: '/furniture/vase_porcelain_medium.png',
    description: 'A medium-sized porcelain vase, perfect for accentuating your decor. This elegantly designed vase features smooth curves and a glossy finish, making it a versatile piece for any room. Whether filled with fresh flowers or standing alone, it enhances the aesthetic appeal of your space. Its balanced size makes it an excellent choice for tabletops, shelves, or mantels, adding a refined touch to your home.',
    reviews: [
      {
        rate: 5,
        from: 'Emily L.',
        review: 'Beautiful vase! It fits perfectly on my shelf.'
      },
      {
        rate: 4,
        from: 'Jackson D.',
        review: 'Great design, but I wish it was a bit larger.'
      },
      {
        rate: 5,
        from: 'Ava T.',
        review: 'Stunning quality! It looks great with or without flowers.'
      }
    ]
  },
  {
    id: 34,
    name: 'White Slim Vase',
    price: 999,
    category: VASE,
    image: '/furniture/vase_slim_white.jpg',
    description: 'A chic white slim vase that enhances any room with its elegant simplicity. Its minimalist design makes it a perfect fit for modern decor, while the clean lines and smooth surface create a serene ambiance. Ideal for displaying single stems or as a decorative piece on its own, this vase adds a touch of sophistication to your coffee table, console, or dining area.',
    reviews: [
      {
        rate: 5,
        from: 'Charlotte R.',
        review: 'This slim vase is perfect for my modern decor! Love it.'
      },
      {
        rate: 4,
        from: 'Ethan H.',
        review: 'Stylish and minimalistic, but I was hoping for a more textured finish.'
      },
      {
        rate: 5,
        from: 'Mia C.',
        review: 'Absolutely beautiful! It fits perfectly on my coffee table.'
      }
    ]
  },
  {
    id: 36,
    name: 'White Vase x2',
    price: 1100,
    category: VASE,
    image: '/furniture/vase_two.jpg',
    description: 'A set of two elegant white vases, perfect for a coordinated look. These stylish vases are designed to complement each other, making them ideal for displaying together or separately in different spaces. Crafted with a smooth finish, they provide a timeless elegance that enhances any decor. Use them to showcase fresh flowers, greenery, or simply as decorative pieces that add sophistication to your home.',
    reviews: [
      {
        rate: 5,
        from: 'Zoe N.',
        review: 'Love these vases! They look fantastic together on my mantle.'
      },
      {
        rate: 4,
        from: 'Oliver W.',
        review: 'Very stylish, but I wish they were a bit larger.'
      },
      {
        rate: 5,
        from: 'Ella M.',
        review: 'Great quality and beautiful design! They elevate my decor.'
      }
    ]
  },
  {
    id: 37,
    name: 'Tall White Vase',
    price: 600,
    category: VASE,
    image: '/furniture/vase_white.jpg',
    description: 'A tall white vase that stands out beautifully with any floral arrangement. Its impressive height makes it perfect for showcasing large bouquets or elegant floor arrangements. The sleek design and glossy finish create a striking visual impact, adding a touch of modern elegance to your decor. This vase is versatile enough to fit into various styles, making it an excellent choice for both contemporary and traditional settings.',
    reviews: [
      {
        rate: 5,
        from: 'Mason P.',
        review: 'Perfect height for my floor arrangement! Very elegant.'
      },
      {
        rate: 4,
        from: 'Grace L.',
        review: 'Beautiful vase, but a bit wobbly when filled with heavy flowers.'
      },
      {
        rate: 5,
        from: 'Liam R.',
        review: 'Absolutely love this vase! It makes a stunning statement.'
      }
    ]
  }
];

export const BANNER = Object.freeze([
  '/banner/classy.jpg',
  '/banner/minimalist.jpg',
  '/banner/minimalist2.jpg',
  '/banner/classy2.jpg',
  '/banner/minimalist3.jpg',
  '/banner/minimalist4.jpg',
  '/banner/classy3.jpg'
]);