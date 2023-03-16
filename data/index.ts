import { ImageSourcePropType } from "react-native";
import StyleGuide from "../constants/StyleGuide";



export interface Category {
  id: number;
  name: string;
  image: ImageSourcePropType
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Pizza",
    image: require('../assets/images/icons/pizza-icon.png')
  },
  {
    id: 2,
    name: "Seafood",
    image: require('../assets/images/icons/shrimp-icon.png')
  },
  {
    id: 3,
    name: "Soft Drink",
    image: require('../assets/images/icons/soda-icon.png')
  },
];

export interface Ingredients {
    id: number;
    image: ImageSourcePropType
  }
  
  export const ingredients: Ingredients[] = [
    {
      id: 1,
      image: require('../assets/images/icons/ham.png')
    },
    {
      id: 2,
      image: require('../assets/images/icons/tomato.png')
    },
    {
      id: 3,
      image: require('../assets/images/icons/garlic.png')
    },
    {
      id: 4,
      image: require('../assets/images/icons/cheese.png')
    },
  ];



export interface Product {
  id: number;
  name: string;
  price: number;
  ingredients: Ingredients[];
  crust: string;
  size: string;
  image: ImageSourcePropType;
  rating: number;
  time: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Primavera Pizza",
    price: 5.9,
    size: "Medium 14",
    crust: "Thin Crust",
    time: 20,
    ingredients: ingredients,
    image: require("../assets/images/pizza1.png"),
    rating: 5.0,
  },
  {
    id: 2,    
    name: "KFC Pizza",
    price: 3.2,
    size: "Medium 14",
    ingredients: ingredients,
    crust: "Thin Crust",
    image: require("../assets/images/pizza2.png"),
    rating: 5.0,
    time: 17
  },
  {
    id: 3,    
    name: "Tikka Pizza",
    price: 4.2,
    size: "Medium 14",
    ingredients: ingredients,
    crust: "Thin Crust",
    image: require("../assets/images/pizza3.png"),
    rating: 5.0,
    time: 15
  }
];
