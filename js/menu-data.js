/**
 * Menu categories and products — add, edit, or remove items here.
 */
const MENU_CATEGORIES = [
  { id: "sushi", name: { en: "Sushi", ar: "سوشي" }, icon: "" },
  { id: "burgers", name: { en: "Burgers", ar: "برغر" }, icon: "" },
  { id: "noodles", name: { en: "Noodles", ar: "نودلز" }, icon: "" },
  { id: "steaks", name: { en: "Steak", ar: "ستيك" }, icon: "" },
  { id: "Snacks", name: { en: "Snacks", ar: "مقبلات" }, icon: "" },
  { id: "soup", name: { en: "Soup", ar: "شوربات" }, icon: "" },
  { id: "salads", name: { en: "Salads", ar: "سلطات" }, icon: "" },

];

const MENU_ITEMS = [
  // Sushi
  {
    id: "classic-burger",
    category: "sushi",
    name: {
      en: "Classic Burger",
      ar: "برغر كلاسيك"
    },
    description: {
      en: "Angus beef patty, cheddar, lettuce, tomato, and house sauce.",
      ar: "قطعة لحم أنغوس، جبنة شيدر، خس، طماطم، وصوص المطعم."
    },
    price: 29,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 4
      },
      {
        id: "extra-patty",
        name: {
          en: "Extra Patty",
          ar: "قطعة لحم إضافية"
        },
        price: 12
      },
      {
        id: "bacon",
        name: {
          en: "Crispy Bacon",
          ar: "بيكون مقرمش"
        },
        price: 6
      },
    ],
  },

  {
    id: "smoky-bbq",
    category: "sushi",
    name: {
      en: "Smoky BBQ Burger",
      ar: "برغر باربكيو مدخن"
    },
    description: {
      en: "Double patty, smoked BBQ sauce, onion rings, and jalapeños.",
      ar: "قطعتا لحم، صوص باربكيو مدخن، حلقات بصل، وهالبينو."
    },
    price: 39,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 4
      },
      {
        id: "extra-patty",
        name: {
          en: "Extra Patty",
          ar: "قطعة لحم إضافية"
        },
        price: 12
      },
    ],
  },

  {
    id: "mushroom-swiss",
    category: "sushi",
    name: {
      en: "Mushroom Swiss",
      ar: "مشروم سويس"
    },
    description: {
      en: "Sautéed mushrooms, Swiss cheese, and garlic aioli.",
      ar: "مشروم سوتيه، جبنة سويسرية، وصوص أيولي بالثوم."
    },
    price: 34,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0df?w=600&q=80",
    extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 4
      },
      {
        id: "bacon",
        name: {
          en: "Crispy Bacon",
          ar: "بيكون مقرمش"
        },
        price: 6
      },
    ],
  },

  {
    id: "veggie-delight",
    category: "sushi",
    name: {
      en: "Veggie Delight",
      ar: "برغر الخضار"
    },
    description: {
      en: "Grilled portobello, avocado, arugula, and tahini dressing.",
      ar: "فطر بورتوبيلو مشوي، أفوكادو، جرجير، وصوص طحينة."
    },
    price: 32,
    image:
      "https://images.unsplash.com/photo-1520072959219-cbf346866e39?w=600&q=80",
    extras: [
      {
        id: "extra-avocado",
        name: {
          en: "Extra Avocado",
          ar: "أفوكادو إضافي"
        },
        price: 5
      }
    ],
  },

  // Burgers
  {
    id: "crispy-chicken",
    category: "burgers",
    name: {
      en: "Classic Burger",
      ar: "كلاسيك برغر"
    },
    description: {
      en: "160g beef patty, cheese, onion, tomato, lettuce, pickles, sauce.",
      ar: "قطعة لحم 160 غم , جبن , بصل , بندورة , خس , مخلل صوص"
    },
    price: 30,
    image:
      "./imges/كلاسيك برغر.jfif",
    extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 5
      },
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
      {
        id: "Fries",
        name: {
          en: "Fries",
          ar: "بطاطا"
        },
        price: 5
      },
     
    ],
  },

  {
    id: "grilled-chicken",
    category: "burgers",
    name: {
      en: "Chicken Burger",
      ar: "برغر دجاج "
    },
    description: {
      en: "Grilled chicken fillet, cheese, onion, tomato, lettuce, pickles, sauce.",
      ar: "قطعة دجاج مشوي , جبن , بصل , بندورة , خس , مخلل صوص"
    },
    price: 25,
    image:
      "./imges/برغر دجاج.jfif",
   extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 5
      },
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
      {
        id: "Fries",
        name: {
          en: "Fries",
          ar: "بطاطا"
        },
        price: 5
      },
     
    ],
  },

  {
    id: "Katsavim Burger",
    category: "burgers",
    name: {
      en: "Katsavim Burger",
      ar: "برغر كتسافيم"
    },
    description: {
      en: "200g beef patty, cheese, onion, tomato, lettuce, pickles, sauce.",
      ar: "قطعة لحم 200 غم , جبن , بصل , بندورة , خس , مخلل صوص "
    },
    price: 40,
    image:
      "./imges/كتسا.jfif",
   extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 5
      },
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
      {
        id: "Fries",
        name: {
          en: "Fries",
          ar: "بطاطا"
        },
        price: 5
      },
     
    ],
  },

  {
    id: "Entrecôte Burger",
    category: "burgers",
    name: {
      en: "Entrecôte Burger",
      ar: "برغر انتريكوت"
    },
    description: {
      en: "200g beef patty, cheese, onion, tomato, lettuce, pickles, sauce.",
      ar: "قطعة لحم انتريكوت 200 غم , جبن , بصل , بندورة , خس , مخلل صوص "
    },
    price: 45,
    image:
      "./imges/برغر متسافيم.jfif",
   extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 5
      },
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
      {
        id: "Fries",
        name: {
          en: "Fries",
          ar: "بطاطا"
        },
        price: 5
      },
     
    ],
  },

   {
    id: "Asado Burger",
    category: "burgers",
    name: {
      en: "Asado Burger",
      ar: "اسادو برغر "
    },
    description: {
      en: "200g beef patty, cheese, onion, tomato, lettuce, pickles, sauce.",
      ar: "قطعةاسادو 200 غم , جبن , بصل , بندورة , خس , مخلل صوص "
    },
    price: 45,
    image:
      "./imges/برغر متسافيم.jfif",
   extras: [
      {
        id: "extra-cheese",
        name: {
          en: "Extra Cheese",
          ar: "جبنة إضافية"
        },
        price: 5
      },
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
      {
        id: "Fries",
        name: {
          en: "Fries",
          ar: "بطاطا"
        },
        price: 5
      },
     
    ],
  },


  // Nodels
  {
    id: "Teriyaki Noodles",
    category: "noodles",
    name: {
      en: "Teriyaki Noodles",
      ar: "ترياكي نودلز"
    },
    description: {
      en: "Onion, bell pepper, carrot, cabbage, mushrooms, garlic, ginger, sauce.",
      ar: "بصل , فلفل حلو , جزر , ملفوف , فطر , ثوم , زنجبيل , صوص "
    },
    price: 30,
    image:
      "./imges/ترياكي.jfif",
    extras: [
      {
        id: "extra-chicken",
        name: {
          en: "Extra Chicken",
          ar: "دجاج اضافي "
        },
        price: 5
      },
       {
        id: "Crab",
        name: {
          en: "Crab",
          ar: "كراب"
        },
        price: 5
      },
      {
        id: "Tofu",
        name: {
          en: "Tofu",
          ar: "توفو"
        },
        price: 5
      },
      {
        id: "Calamari",
        name: {
          en: "Calamari",
          ar: "كلماري"
        },
        price: 20
      },
       {
        id: "Shrimps",
        name: {
          en: "Shrimps",
          ar: "شريمس"
        },
        price: 20
      },
       {
        id: "Beef",
        name: {
          en: "Beef",
          ar: "لحم"
        },
        price: 20
      },
       {
        id: "Salmon",
        name: {
          en: "Salmon",
          ar: "سالمون"
        },
        price: 20
      },
    ],
  },

  {
    id: "Curry",
    category: "noodles",
    name: {
      en: "Curry",
      ar: "نودلز كاري "
    },
    description: {
      en: "Onion, bell pepper, carrot, cabbage, mushrooms, garlic, ginger, sauce.",
      ar: "بصل , فلفل حلو , جزر , ملفوف , فطر , ثوم , زنجبيل , صوص "
    },
    price: 30,
    image:
      "./imges/كاري اخضر.jpeg",
    extras: [
      {
        id: "colour",
        name: {
          en: "Green",
          ar: "اخضر "
        },
         price: 0
      },

      {
        id: "colour",
        name: {
          en: "Red",
          ar: "احمر "
        },
         price: 0
      },
      {
        id: "extra-chicken",
        name: {
          en: "Extra Chicken",
          ar: "دجاج اضافي "
        },
        price: 5
      },
       {
        id: "Crab",
        name: {
          en: "Crab",
          ar: "كراب"
        },
        price: 5
      },
      {
        id: "Tofu",
        name: {
          en: "Tofu",
          ar: "توفو"
        },
        price: 5
      },
      {
        id: "Calamari",
        name: {
          en: "Calamari",
          ar: "كلماري"
        },
        price: 20
      },
       {
        id: "Shrimps",
        name: {
          en: "Shrimps",
          ar: "شريمس"
        },
        price: 20
      },
       {
        id: "Beef",
        name: {
          en: "Beef",
          ar: "لحم"
        },
        price: 20
      },
       {
        id: "Salmon",
        name: {
          en: "Salmon",
          ar: "سالمون"
        },
        price: 20
      },
    ],
  },

  {
    id: "Korean Ramen",
    category: "noodles",
    name: {
      en: "Korean Ramen",
      ar: "رامن كوري"
    },
    description: {
      en: "Onion, bell pepper, carrot, cabbage, garlic, ginger, mushrooms.",
      ar: "بصل , فلفل , جزر , ملفوف , ثوم , زنجبيل , فطر"
    },
    price: 30,
    image:
      "./imges/رامن2.jfif",
    extras: [
      {
        id: "extra-chicken",
        name: {
          en: "Extra Chicken",
          ar: "دجاج اضافي "
        },
        price: 10
      },
       {
        id: "Crab",
        name: {
          en: "Crab",
          ar: "كراب"
        },
        price: 5
      },
      {
        id: "Tofu",
        name: {
          en: "Tofu",
          ar: "توفو"
        },
        price: 5
      },
      {
        id: "Calamari",
        name: {
          en: "Calamari",
          ar: "كلماري"
        },
        price: 20
      },
       {
        id: "Shrimps",
        name: {
          en: "Shrimps",
          ar: "شريمس"
        },
        price: 20
      },
       {
        id: "Beef",
        name: {
          en: "Beef",
          ar: "لحم"
        },
        price: 20
      },
       {
        id: "Salmon",
        name: {
          en: "Salmon",
          ar: "سالمون"
        },
        price: 20
      },
    ],
  },


  {
    id: "Pad Thai Noodles",
    category: "noodles",
    name: {
      en: "Pad Thai ",
      ar: "بتاي "
    },
    description: {
      en: "Noodles, rice, cabbage, onion, carrot, bell pepper, mushrooms, garlic, ginger.",
      ar: "نودلز , رز , ملفوف , بصل , جزر , فلفل حلو , فطر , ثوم , زنجبيل "
    },
    price: 20,
    image:
      "./imges/بتاي.jfif",
    extras: [
      {
        id: "extra-chicken",
        name: {
          en: "Extra Chicken",
          ar: "دجاج اضافي "
        },
        price: 10
      },
       {
        id: "Crab",
        name: {
          en: "Crab",
          ar: "كراب"
        },
        price: 10
      },
      {
        id: "Tofu",
        name: {
          en: "Tofu",
          ar: "توفو"
        },
        price: 10
      },
      {
        id: "Calamari",
        name: {
          en: "Calamari",
          ar: "كلماري"
        },
        price: 20
      },
       {
        id: "Shrimps",
        name: {
          en: "Shrimps",
          ar: "شريمس"
        },
        price: 20
      },
       {
        id: "Beef",
        name: {
          en: "Beef",
          ar: "لحم"
        },
        price: 20
      },
       {
        id: "Salmon",
        name: {
          en: "Salmon",
          ar: "سالمون"
        },
        price: 20
      },
    ],
  },

   {
    id: "Taksi Wok",
    category: "noodles",
    name: {
      en: "Taksi Wok ",
      ar: "تكسي ووك "
    },
    description: {
      en: "White rice, vegetables",
      ar: "رز ابيض , خضار "
    },
    price: 20,
    image:
      "./imges/تكسي ووك.jfif",
    extras: [
      {
        id: "extra-chicken",
        name: {
          en: "Extra Chicken",
          ar: "دجاج اضافي "
        },
        price: 10
      },
       {
        id: "Crab",
        name: {
          en: "Crab",
          ar: "كراب"
        },
        price: 10
      },
      {
        id: "Tofu",
        name: {
          en: "Tofu",
          ar: "توفو"
        },
        price: 10
      },
      {
        id: "Calamari",
        name: {
          en: "Calamari",
          ar: "كلماري"
        },
        price: 20
      },
       {
        id: "Shrimps",
        name: {
          en: "Shrimps",
          ar: "شريمس"
        },
        price: 20
      },
       {
        id: "Beef",
        name: {
          en: "Beef",
          ar: "لحم"
        },
        price: 20
      },
       {
        id: "Salmon",
        name: {
          en: "Salmon",
          ar: "سالمون"
        },
        price: 20
      },

       {
        id: "Pad Thai",
        name: {
          en: "Pad Thai",
          ar: "بتاي"
        },
        price: 20
      },
    ],
  },


  //Steak
  {
    id: "Chicken Steak",
    category: "steaks",
    name: {
      en: "Chicken Steak",
      ar: "ستيك دجاج"
    },
    description: {
      en: "White rice, grilled chicken breast, sautéed vegetables.",
      ar: "رز ابيض , صدر دجاج مشوي , خضار سوتيه "
    },
    price: 35,
    image:
      "./imges/ستيك دجاج مشوي.jfif",
    extras: [
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
    ],
  },

  {
    id: "Beef Steak",
    category: "steaks",
    name: {
      en: "Beef Steak",
      ar: "ستيك لحمة"
    },
    description: {
      en: "White rice, Grilled beef steak , sautéed vegetables.",
      ar: "رز ابيض , ستيك لحمة مشوي , خضار سوتيه "
    },
    price:60,
    image:
      "./imges/ستيك لحمة مشوي.jfif",
    extras: [
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
    ],
  },


   {
    id: "Salmon Steak",
    category: "steaks",
    name: {
      en: "Salmon Steak",
      ar: "ستيك سلمون"
    },
    description: {
      en: "White rice, Salmon steak , sautéed vegetables.",
      ar: "رز ابيض , ستيك سلمون , خضار سوتيه "
    },
    price:70,
    image:
      "./imges/ستيك سلمون.jfif",
    extras: [
       {
        id: "Cola",
        name: {
          en: "Cola",
          ar: "كولا"
        },
        price: 5
      },
    ],
  },


  //Snacks
  {
    id: "Fish & Chips",
    category: "Snacks",
    name: {
      en: "Fish & Chips",
      ar: "سمك وبطاطا مقلية"
    },
    description: {
      en: "Fried fish fillet slices with crispy fries, served with creamy tartar sauce and lemon.",
      ar: "شرائح فيليه سمك مقلية مع البطاطا المقرمشة تقدم مع صوص الترتار الكريمي والليمون"
    },
    price: 30,
    image:
      "./imges/بطاطاوسمك.jpg",
    extras: [],
  },

   {
    id: "Sweet potato fries",
    category: "Snacks",
    name: {
      en: "Sweet Potato Fries",
      ar: "اصابع بطاطا حلوة "
    },
    description: {
      en: "Tempura-fried sweet potato fries.",
      ar: "اصابع بطاطا حلوة مقلية بالتمبورا"
    },
    price: 15,
    image:
      "./imges/بطاطا حلوة.jpg",
    extras: [],
  },

   {
    id: "Edamame",
    category: "Snacks",
    name: {
      en: "Edamame",
      ar: "فول الصويا الاخضر "
    },
    description: {
      en: "Green soybeans served with a sprinkle of sea salt and lemon slices.",
      ar: "فول الصويا الاخضر يقدم مع رشة من ملح البحر وشرائح الليمون "
    },
    price: 15,
    image:
      "./imges/فول.jpg",
    extras: [],
  },

  {
    id: "Dynamite shrimp",
    category: "Snacks",
    name: {
      en: "Dynamite shrimp",
      ar: "جمبري طازج ومقرمش "
    },
    description: {
      en: "Fresh, crispy shrimp coated in a sweet and spicy dynamite sauce.",
      ar: "جمبري طازج ومقرمش مغطى بصلصة الديناميت الحارة والحلوة "
    },
    price: 35,
    image:
      "./imges/جمبري.jpg",
    extras: [],
  },

   {
    id: "Crispy Shrimp Tempura",
    category: "Snacks",
    name: {
      en: "Crispy Shrimp Tempura",
      ar: "حبات الجمبري "
    },
    description: {
      en: "Fresh, crispy shrimp coated in a sweet and spicy dynamite sauce.",
      ar: "5 حبات من الجمبري المقلية بالتمبورا والبانكو"
    },
    price: 30,
    image:
      "./imges/حبات جمبري.jpg",
    extras: [],
  },

  
   {
    id: "Japanese Pickles",
    category: "Snacks",
    name: {
      en: "Japanese Pickles",
      ar: "مخللات يابانية"
    },
    description: {
      en: "Cabbage, carrot, cucumber, bell pepper, radish, and lemon wedges, marinated in Japanese vinegar and served with sesame seeds and Togarashi.",
      ar: "ملفوف , جزر , خيار , فلفل ملون , فجل , قطع ليمون . منقوع بالخل الياباني تقدم مع السمسم والتوجوراشي"
    },
    price: 10,
    image:
      "./imges/مخللات.jpg",
    extras: [],
  },

  {
    id: "French fries",
    category: "Snacks",
    name: {
      en: "French Fries",
      ar: "بطاطا مقلية "
    },
    description: {
      en: "Crispy French fries.",
      ar: "بطاطا مقلية مقرمشة"
    },
    price: 12,
    image:
      "./imges/بطاطا مقرمشة.jpg",
    extras: [
      {
        id: "Size",
        name: {
          en: "Large",
          ar: "حجم كبير"
        },
        price: 6
      },
    ],
  },

  {
    id: "Chicken Gyoza",
    category: "Snacks",
    name: {
      en: "Chicken Gyoza",
      ar: "جيوزا دجاج"
    },
    description: {
      en: "Chicken gyoza — 6 pieces of fried gyoza. ",
      ar: "جيوزا دجاج , 6 حبات من الجيوزا المقلية"
    },
    price: 25,
    image:
      "./imges/جيوزا دجاج.jpg",
    extras: [],
  },

  {
    id: "Crispy Panko",
    category: "Snacks",
    name: {
      en: "Crispy Panko Chicken Fingers",
      ar: "اصابع دجاج مقلية"
    },
    description: {
      en: "Crispy fried chicken fingers with a white panko coating. ",
      ar: "اصابع دجاج مقلية بالقشرةالبيضاء ( بانكو )"
    },
    price: 20,
    image:
      "./imges/بانكو.jpg",
    extras: [],
  },
   
  {
    id: "Spring Rolls",
    category: "Snacks",
    name: {
      en: "Spring Rolls",
      ar: "لفائف خضار مقرمشة"
    },
    description: {
      en: "Crispy vegetable spring rolls, served with sweet and sour sauce (sold per piece).",
      ar: "لفائف خضار مقرمشة , تقدم مع صلصة حلوة وحامضة ( تطلب بالقطعة الواحدة ) "
    },
    price: 8,
    image:
      "./imges/رولز.jpg",
    extras: [],
  },

  // Salads
  {
    id: "Caesar Salad",
    category: "salads",
    name: {
      en: "Caesar Salad",
      ar: "سلطة سيزر"
    },
    description: {
      en: "Classic Caesar salad with crisp lettuce, cheese, crunchy toasted bread, and a rich creamy Caesar dressing.",
      ar: "سلطة سيزر كلاسيكية ، خس ، جبنة ، خبز محمص مقرمش، وتتبيلة السيزر الكريمية الغنية"
    },
    price: 30,
    image:
      "./imges/سيزر2.jfif",
    extras: [],
  },

  {
    id: "Crab Salad",
    category: "salads",
    name: {
      en: "Crab Salad",
      ar: "سلطة كراب "
    },
    description: {
      en: "Cucumber, carrot, crab, kohlrabi, arugula sprouts, and soybean sprouts, served with our signature mayonnaise dressing.",
      ar: "خيار , جزر , كراب , كولرابي , اعشاب الجرجير , اعشاب الصويا , تقدم مع سلطة المايونيز الخاصة"
    },
    price: 30,
    image:
      "./imges/كراب سلطة.jpg",
    extras: [],
  },


  // Soups
  {
    id: "Mushroom Soup",
    category: "soup",
    name: {
      en: "Mushroom Soup",
      ar: "شوربة فطر "
    },
    description: {
      en: "Soup made with fresh mushrooms, delicately seasoned with herbs and spices, featuring a smooth texture and a warm, distinctive flavor.",
      ar: "شوربة من الفطر الطازج مع لمسة من الأعشاب والتوابل، بقوام ناعم ونكهة دافئة ومميزة."
    },
    price: 30,
    image:
      "./imges/شوربة فطر.jpeg",
    extras: [
      {
        id: "extra-ice-cream",
        name: {
          en: "Extra Ice Cream",
          ar: "آيس كريم إضافي"
        },
        price: 5
      }
    ],
  },

  {
    id: "cheesecake",
    category: "desserts",
    name: {
      en: "NY Cheesecake",
      ar: "تشيزكيك نيويورك"
    },
    description: {
      en: "Classic creamy cheesecake with berry compote.",
      ar: "تشيزكيك كريمي كلاسيكي مع صوص التوت."
    },
    price: 24,
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80",
    extras: [],
  },

  {
    id: "churros",
    category: "desserts",
    name: {
      en: "Churros",
      ar: "تشوروز"
    },
    description: {
      en: "Cinnamon sugar churros with chocolate dip.",
      ar: "تشوروز بالسكر والقرفة مع صوص الشوكولاتة."
    },
    price: 18,
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
    extras: [
      {
        id: "extra-dip",
        name: {
          en: "Extra Chocolate Dip",
          ar: "صوص شوكولاتة إضافي"
        },
        price: 4
      }
    ],
  },
];