import { v4 as uuid } from "uuid";
// import {ButterScotch , Chocolate , RedVelvet , Vanilla} from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Casual Shoes",
    image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13925944/2021/12/7/6194cd94-9147-48fb-91a8-a9b9417a7bd61638861738807MactreeMenGreenPerforationsSuedeLoafers1.jpg',
    alt:"Casual Shoes"
  },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg",
    alt:"Sneakers"
  },
  {
    _id: uuid(),
    categoryName: "Formal",
    image : "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg",
    alt:"Formal"
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    image : "https://img.joomcdn.net/67f438401b03825e9d2239e56d0f1335eec48c33_original.jpeg",
    alt: "Sports"
  },
];