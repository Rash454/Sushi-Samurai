/**
 * Menu categories and products — add, edit, or remove items here.
 */
const MENU_CATEGORIES = [
  { id: "sushi", name: { en: "Sushi", ar: "سوشي" }, icon: "" },
  { id: "samurai", name: { en: "Samurai Combos", ar: "كومبوهات الساموراي" }, icon: "" },
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
    id: "Samurai Roll",
    category: "sushi",
    name: {
      en: "Samurai Roll",
      ar: "سوشي ساموراي  "
    },
    description: {
      en: "Raw salmon, shrimp, cucumber, and avocado, topped with spicy salmon and spicy tuna, crispy sweet potato, and jalapeño slices.",
      ar: "سلمون ني , جمبري , خيار , افوكادو , مغطى بالسلمون الحار والتونا الحارة مع بطاطا حلوة مقرمشة وشرائح هالبينو"
    },
    price: 50,
    image:
      "./imges/سام.jpeg",
    extras: [
     
    ],
  },
  {
    id: "Lion Roll",
    category: "sushi",
    name: {
      en: "Lion Roll",
      ar: "سوشي ليون رول "
    },
    description: {
      en: "Fried roll stuffed with crispy sweet potato and mozzarella cheese, topped with spicy salmon and tuna seasoning.",
      ar: "رول مقلي محشو بالبطاطا الحلوة المقلية وجبنة الموزاريلا ومزين بتتبيلة السلمون والتونا الحارة "
    },
    price: 40,
    image:
      "./imges/ليون.jpeg",
    extras: [
     
    ],
  },

   {
    id: "Salmon Lemon Roll",
    category: "sushi",
    name: {
      en: "Salmon Lemon Roll",
      ar: "سوشي سلمون رول "
    },
    description: {
      en: "Raw salmon, lemon wedges, avocado, and cucumber, topped with slices of salmon and avocado.",
      ar: "سلمون ني , قطع ليمون , افوكادو , خيار مغطى بشرائح السلمون والافوكادو "
    },
    price: 45,
    image:
      "./imges/سالمون.jpeg",
    extras: [
     
    ],
  },
{
    id: "California Special Roll",
    category: "sushi",
    name: {
      en: "California Special Roll",
      ar: "رول كاليفورنيا الخاص "
    },
    description: {
      en: "Tempura salmon, Philadelphia cheese, cucumber, avocado, and tempura, topped with a layer of smoked salmon slices and drizzled with teriyaki sauce.",
      ar: "افوكادو , جبنة كريمية , كراب , خيار , مغطى بالمايونيز الحار والكافيار"
    },
    price: 40,
    image:
      "./imges/كاليف.jpeg",
    extras: [
     
    ],
  },
 
   {
    id: "Tuna Roll",
    category: "sushi",
    name: {
      en: "Tuna Roll",
      ar: "رول التونا "
    },
    description: {
      en: "Raw red tuna, cucumber, and avocado, topped with slices of raw salmon.",
      ar: "تونا حمراء نية , خيار , افوكادو , مغطى بشرائح السلمون الني"
    },
    price: 45,
    image:
      "./imges/تونا..jpeg",
    extras: [
     
    ],
  },
  
   {
    id: "Veggie Roll",
    category: "sushi",
    name: {
      en: "Veggie Roll",
      ar: "سوشي رول الخضار "
    },
    description: {
      en: "Sweet potato, carrots, cucumber, and enoki mushrooms, topped with avocado slices and crispy sweet potato.",
      ar: "بطاطا حلوة , جزر , خيار , اوشنكو, مغطى بشرائح الافوكادو والبطاطا الحلوة المقرمشة"
    },
    price: 30,
    image:
      "./imges/خضار.jpeg",
    extras: [
     
    ],
  },
  
  {
    id: "Jalapeño Roll ",
    category: "sushi",
    name: {
      en: "Jalapeño Roll ",
      ar: "هالبينو رول"
    },
    description: {
      en: "Tempura salmon, green onion, and avocado, topped with spicy tuna seasoning, garnished with jalapeño and crispy panko.",
      ar: "سلمون تمبورا , بصل اخضر , افوكادو , مغطى بتتبيلة التونا الحارة , مزين بالهالبينو والبانكو المقرمش"
    },
    price: 40,
    image:
      "./imges/هالبينو.jpeg",
    extras: [
     
    ],
  },

   {
    id: "Smokey Salmon Roll",
    category: "sushi",
    name: {
      en: "Smokey Salmon Roll",
      ar: "رول السالمون المدخن"
    },
    description: {
      en: "Tempura salmon, Philadelphia cheese, cucumber, avocado, and tempura, topped with a layer of smoked salmon slices and drizzled with teriyaki sauce.",
      ar: "سلمون تمبورا , جبنة فلدلفيا , خيار , افوكادو , تمبورة , مغطى بطبقة من شرائح السلمون المدخن , مزين بصلصة الترياكي"
    },
    price: 45,
    image:
      "./imges/سالمون مدخن.jpeg",
    extras: [
     
    ],
  },
   {
    id: "Chicken Cheese Roll ",
    category: "sushi",
    name: {
      en: "Chicken Cheese Roll  ",
      ar: "رول الدجاج والجبنة"
    },
    description: {
      en: "Fried salmon, avocado, carrot, cucumber, and green onion, topped with crispy potato.",
      ar: "دجاج مقلي , بطاطا حلوة , جبنة موزاريلا , رول مقلي بالبانكو"
    },
    price: 40,
    image:
      "./imges/دجاج وجبنة.jpeg",
    extras: [
     
    ],
  },
   
  {
    id: "Cazy Crab Roll ",
    category: "sushi",
    name: {
      en: "Cazy Crab Roll ",
      ar: "رول الكراب"
    },
    description: {
      en: "Tempura-fried roll stuffed with potato, avocado, cucumber, and carrot, topped with spicy crab sauce.",
      ar: "رول مقلي بالتمبورا , محشي بالبطاطا , افوكادو , خيار , جزر , مزين بصلصة الكراب الحارة "
    },
    price: 45,
    image:
      "./imges/كراب.jpeg",
    extras: [
     
    ],
  },

   {
    id: "Sun set Roll ",
    category: "sushi",
    name: {
      en: "Sun set Roll  ",
      ar: "سن ست رول"
    },
    description: {
      en: "Fried salmon, avocado, carrot, cucumber, and green onion, topped with crispy potato.",
      ar: "سلمون مقلي , افوكادو , جزر , خيار , بصل اخضر , مغطى بالبطاطا المقرمشة  "
    },
    price: 40,
    image:
      "./imges/سن ست رول.jpeg",
    extras: [
     
    ],
  },

  {
    id: "Dragon Roll ",
    category: "sushi",
    name: {
      en: "Dragon Roll",
      ar: " رول التنين"
    },
    description: {
      en: "Tempura shrimp, carrot, and crab, topped with a layer of avocado slices, garnished with crispy panko and teriyaki sauce.",
      ar: "جمبري تمبورا , جزر , كراب , مغطى بطبقة من شرائح الافوكادو ومزين بالبانكو وصلصة الترياكي"
    },
    price: 40,
    image:
      "./imges/رول التنين.jpeg",
    extras: [
     
    ],
  },
    {
    id: "Rainbow Roll ",
    category: "sushi",
    name: {
      en: "Rainbow Roll ",
      ar: "رينبو رول"
    },
    description: {
      en: "Tempura shrimp, cucumber, and avocado, topped with slices of salmon and tuna, with added lemon slices.",
      ar: "جمبري تمبورا , خيار , افوكادو , مغطى بشرائح السلمون والتونا مع اضافة شرائح الليمون "
    },
    price: 45,
    image:
      "./imges/رينبو.jpeg",
    extras: [
     
    ],
  },

   {
    id: "Volcano Roll ",
    category: "sushi",
    name: {
      en: "Volcano Roll  ",
      ar: "فولكانو رول"
    },
    description: {
      en: "Shrimp, Philadelphia cheese, tuna, green onion, cucumber, and avocado, topped with a layer of smoked salmon and teriyaki sauce.",
      ar: "جمبري , جبنة فيلاديلفيا , تونا , بصل اخضر , خيار , افوكادو , مغطى بطبقة من السلمون المدخن وصلصة الترياكي"
    },
    price: 50,
    image:
      "./imges/فولكا.jpeg",
    extras: [
     
    ],
  },


  {
    id: "Salmon Grilled Roll ",
    category: "sushi",
    name: {
      en: "Salmon Grilled Roll",
      ar: "رول السلمون المشوي"
    },
    description: {
      en: "Tempura sweet potato, avocado, and cucumber, topped with grilled salmon slices and teriyaki sauce, garnished with nuts and green onion.",
      ar: "بطاطا حلوة بالتمبورا , افوكادو , خيار , مغطى بشرائح السلمون المشوية والترياكي ومزين بالمكسرات والبصل الاخضر"
    },
    price: 45,
    image:
      "./imges/سالمون مشوي.jpeg",
    extras: [
     
    ],
  },

    {
    id: "Dynamite Shrimp Roll ",
    category: "sushi",
    name: {
      en: "Dynamite Shrimp Roll ",
      ar: "رول الجمبري الدايناميت"
    },
    description: {
      en: "Tempura shrimp, cucumber, and avocado, topped with slices of salmon and tuna, with added lemon slices.",
      ar: "بطاطا مقلية , افوكادو , جزر , مزين بقطع جمبري متبلة بصوص الداينمايت"
    },
    price: 50,
    image:
      "./imges/ديناميت.jpeg",
    extras: [
     
    ],
  },







  //Rolls 
 
{
    id: "Shrimp Roll ",
    category: "sushi",
    name: {
      en: "Shrimp Roll ",
      ar: "رول الجمبري"
    },
    description: {
      en: "Cooked shrimp, carrot, and cucumber, topped with a layer of crispy tempura.",
      ar: "جمبري مطبوخ , جزر , خيار , مغطى بطبقة من التمبورا المقرمشة"
    },
    price: 30,
    image:
      "./imges/شريمب رول.jpg",
    extras: [
     
    ],
  },

  

  {
    id: "Spicy Salmon ",
    category: "sushi",
    name: {
      en: "Spicy Salmon ",
      ar: "سالمون حار"
    },
    description: {
      en: "Spicy salmon seasoning, avocado, cucumber, and crispy panko.",
      ar: "تتبيلة السلمون الحار , افوكادو , خيار , بانكو مقرمش"
    },
    price: 35,
    image:
      "./imges/سلمون رولز.jpg",
    extras: [
     
    ],
  },

  
   {
    id: "Philadelphia Maki ",
    category: "sushi",
    name: {
      en: "Philadelphia Maki ",
      ar: "فيلادلفيا ماكي"
    },
    description: {
      en: "Philadelphia cheese, tempura salmon, and cucumber.",
      ar: "جبنة فلدلفيا , سلمون تمبورا , خيار "
    },
    price: 35,
    image:
      "./imges/رولز1.jpg",
    extras: [
     
    ],
  },
  {
    id: "Kani Maki ",
    category: "sushi",
    name: {
      en: "Kani Maki ",
      ar: "كاني ماكي"
    },
    description: {
      en: "Crab, avocado, cucumber, and carrot, topped with a layer of crispy tempura.",
      ar: "كراب , افوكادو , خيار , جزر , مغطى بطبقة من التمبورا المقرمشة"
    },
    price: 25,
    image:
      "./imges/كاني ماكي.jpg",
    extras: [
     
    ],
  },

   {
    id: "Your Own",
    category: "sushi",
    name: {
      en: "Your Own ",
      ar: "اصنع الرول الخاص بك "
    },
    description: {
      en: "Choose one type of fish and three types of vegetables, served with crispy panko.",
      ar: "اختيار نوع واحد من الاسماك وثلاث انواع من الخضراوات تقدم مع البانكو المقرمش"
    },
    price: 35,
    image:
      "./imges/خاصة.jpg",
    extras: [
     
    ],
  },

   {
    id: "Salmon Tempura",
    category: "sushi",
    name: {
      en: "Salmon Tempura",
      ar: "سلمون تمبورا"
    },
    description: {
      en: "Tempura salmon, sweet potato, and tempura cucumber, served with crispy panko.",
      ar: "سلمون تمبورا , بطاطا حلوة , تمبورا خيار , تقدم مع البانكو المقرمش"
    },
    price: 35,
    image:
      "./imges/تمبورا.jpg",
    extras: [
     
    ],
  },

  
   {
    id: "Salmon Maki",
    category: "sushi",
    name: {
      en: "Salmon Maki",
      ar: "سلمون ماكي"
    },
    description: {
      en: "Salmon, avocado, and cucumber, served with crispy panko.",
      ar: "سلمون , افوكادو , خيار , تقدم مع البانكو المقرمش"
    },
    price: 35,
    image:
      "./imges/سلمون ماكي.jpg",
    extras: [
     
    ],
  },

  {
    id: "Spicy Tuna ",
    category: "sushi",
    name: {
      en: "Spicy Tuna ",
      ar: "تونا حارة"
    },
    description: {
      en: "Spicy tuna seasoning, avocado, cucumber, and crispy panko.",
      ar: "تتبيلة التونا الحارة , افوكادو , خيار , بانكو مقرمش"
    },
    price: 35,
    image:
      "./imges/تونا رول.jpg",
    extras: [
     
    ],
  },

  {
    id: "Own Fried Roll",
    category: "sushi",
    name: {
      en: "Make Your Own Fried Roll",
      ar: "اصنع طبقك الخاص"
    },
    description: {
      en: "Choose one type of fish and three types of vegetables, deep-fried. Served as 10 pieces.",
      ar: "اختيار نوع واحد من الاسماك وثلاث انواع من الخضراوات يقدم مقلي 8 قطع "
    },
    price: 40,
    image:
      "./imges/صحن.jpg",
    extras: [
     
    ],
  },


  // COMBOS samurai
  {
    id: "Vegetable Maki",
    category: "samurai",
    name: {
      en: "Vegetable Maki",
      ar: " ماكي الخضار"
    },
    description: {
      en: "Choose one type of vegetable: cucumber, carrot, avocado, green onion, sweet potato, tempura, shiitake mushrooms, or Japanese pickled oshinko.",
      ar: "اختيار نوع واحد من الخضار ( خيار , جزر , افوكادو , بصل اخضر , بطاطا حلوة , تمبورا , فطر شيتاكي , اوشينكو مخلل ياباني ) "
    },
    price: 15,
    image:
      "./imges/ماكي خضار.jpg",
    extras: [],
  },

   {
    id: "Sandwish",
    category: "samurai",
    name: {
      en: "Sandwish",
      ar: "ساندويشات"
    },
    description: {
      en: "Folded nori seaweed with Japanese rice, with your choice of one type of fish and two types of vegetables.",
      ar: "ورق النوري المطبق مع الرز الياباني مع اختيار نوع واحد من الاسماك ونوعين من الخضراوات "
    },
    price: 40,
    image:
      "./imges/ساندويش.jpg",
    extras: [],
  },

  {
    id: "Conus Roll",
    category: "samurai",
    name: {
      en: "Conus Roll",
      ar: "رول كونوس"
    },
    description: {
      en: "A sheet of seaweed wrapped into a cone, filled with rice and your choice of ingredients — fish and two types of vegetables.",
      ar: "ورقة طحالب  ملفوفة على شكل مخروط بداخلها ارز ومكونات يمكن اختيارها - سمك وخضراوات ( نوعان ) "
    },
    price: 20,
    image:
      "./imges/باقة.jpg",
    extras: [],
  },

   {
    id: "Sashimi",
    category: "samurai",
    name: {
      en: "Sashimi",
      ar: "ساشيمي"
    },
    description: {
      en: "Slices of raw salmon.",
      ar: "شرائح من السلمون الني"
    },
    price: 25,
    image:
      "./imges/شرائح سلمون.jpg",
    extras: [],
  },

   {
    id: "Nigiri",
    category: "samurai",
    name: {
      en: "Nigiri",
      ar: "نيجيري"
    },
    description: {
      en: "Salmon Nigiri (2 pieces)",
      ar: "نيجري سلمون ( قطعتين ) "
    },
    price: 15,
    image:
      "./imges/نيجري.jpg",
    extras: [],
  },

 

  {
    id: "Fish Maki",
    category: "samurai",
    name: {
      en: "Fish Maki",
      ar: "فيش ماكي"
    },
    description: {
      en: "Choose one type of fish: salmon, tempura salmon, spicy salmon, smoked salmon, red tuna, spicy tuna, shrimp, tempura shrimp, or crab.",
      ar: "اختيار نوع واحد من الاسماك ( سلمون , سلمون تمبورا , سلمون حار , سلمون مدخن , تونا حمرا , تونا حارة , جمبري , تمبورا , كراب ) "
    },
    price: 20,
    image:
      "./imges/فيش ماكي.jpg",
    extras: [],
  },

   {
    id: "Mixed Roll ",
    category: "samurai",
    name: {
      en: "Mixed Roll",
      ar: " رول مشكل"
    },
    description: {
      en: "Large platter – 9 rolls.",
      ar: "صينية حجم كبير 9 رولات "
    },
    price: 350,
    image:
      "./imges/صينية 9 رولات.jpg",
    extras: [
       {
        id: "small size",
        name: {
          en: "Small size",
          ar: "حجم صغير"
        },
        price: -120
      },
    ],
  },


   {
    id: "Sushi Roll Boat",
    category: "samurai",
    name: {
      en: "Sushi Roll Boat",
      ar: "سفينة من الرولز "
    },
    description: {
      en: "Three-Roll Boat",
      ar: "سفينة ثلاث رولات "
    },
    price: 110,
    image:
      "./imges/سفينة رولز.jpg",
    extras: [],
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
    extras: [ ],
  },

  {
    id: "Tom Yam",
    category: "soup",
    name: {
      en: "Tom Yam",
      ar: "شوربة توم يام "
    },
    description: {
      en: "Bell peppers, mushrooms, cherry tomatoes, shrimp, and seafood, cooked in a spicy Tom Yum sauce with coconut milk.",
      ar: "فلفل ملون , فطر , طماطم كرزية , جمبري , فواكه البحر , مطبوخة مع صلصة توم يام الحارة وحليب جوز الهند "
    },
    price: 30,
    image:
      "./imges/توم يام.jpg",
    extras: [ ],
  },
  
 
];