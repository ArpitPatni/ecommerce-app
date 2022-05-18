import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
 export const products = [
  {
    _id: uuid(),
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg",
    alt: "Highlander White Sneakers",
    name: "HighlanderWhite Sneakers",
    description: "A Perfect white sneakers for all kind of clothes",
    price: 1800,
    originalPrice: 2400.0,
    discount: 25,
    latest: true,
    categoryName: "Casual Shoes",
    rating: 4,
    inStock: 5
  },
  {
    _id: uuid(),
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17404084/2022/3/5/5b0f6560-8200-4935-a5bc-eaefe06a735e1646460050087ALDOMenWhitePerforationsSneakers1.jpg",
    alt: "Aldo White Sneakers",
    name: "Aldo White Sneakers",
    description: "Aldo sneakers for all kind of clothes",
    price: 1800,
    originalPrice: 2400.0,
    discount: 25,
    latest: true,
    categoryName: "Casual Shoes",
    rating: 4,
    inStock: 5
  },
  {
    _id: uuid(),
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/373050/01/sv01/fnd/IND/fmt/png/Trinity-Men's-Sneakers",
    alt: "Puma White Sneakers",
    name: "Puma White Sneakers",
    description: "Puma white sneakers for all kind of wears.",
    price: 800,
    originalPrice: 1000.0,
    discount: 20,
    latest: true,
    categoryName: "Sneakers",
    rating: 3,
    inStock: 5
  },
  {
    _id: uuid(),
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11766724/2021/10/13/52d02ef3-72cd-4314-bddd-3eb2140c6aac1634125735562-HRX-by-Hrithik-Roshan-Women-White-Woven-Design-Marble-Knit-R-1.jpg",
    alt: "HRX Sport Shoes",
    name: "HRX Sport Shoes",
    description: "HRX sports shoes perfect for jogging and running",
    price: 900,
    originalPrice: 1800.0,
    discount: 50,
    latest: true,
    categoryName: "Sports",
    rating: 2,
    inStock: 5
  },
  {
    _id: uuid(),
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/4/09632c23-1c83-446a-9c85-436ea3fc8c5a1622826850187-1.jpg",
    alt: "Puma Sports Shoes",
    name: "Puma Sports Shoes",
    description: "Puma Sports shoes best for jogging and running",
    price: 700,
    originalPrice: 1000.0,
    discount: 30,
    latest: true,
    categoryName: "Sports",
    rating: 3,
    inStock: 5
  },
  {
    _id: uuid(),
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg",
    alt: "Black Formal Shoes",
    name: "Black Formal Shoes",
    description: "Black Formal Shoes for all kind of clothes",
    price: 1800,
    originalPrice: 2000.0,
    discount: 10,
    latest: true,
    categoryName: "Formal",
    rating: 4,
    inStock: 5
  }
];
