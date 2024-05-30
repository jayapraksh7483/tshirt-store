import product1 from './photo1.jpg'
import product2 from './photo2.webp'
import product3 from './photo3.avif'
import product4 from './photo4.jpg'
import product5 from './photo5.webp'
import product6 from './photo6.jpg'
import product7 from './photo7.jpg'
import product8 from './photo8.jpeg'
import product9 from './photo9.jpg'
import product10 from './photo10.jpg'
import product11 from './photo11.webp'
import product12 from './photo12.jpg'
import product13 from './photo13.jpg'
import product14 from './photo14.jpg'
import product15 from './photo15.jpg'
import product16 from './photo16.jpg'
import product17 from './photo17.jpg'
import product18 from './photo18.jpg'
import product19 from './photo19.webp'
import product20 from './photo20.webp'
import product21 from './photo21.jpeg'
import product22 from './photo22.jpg'
import product23 from './photo23.jpg'
import product24 from './photo24.jpg'
import product25 from './photo25.jpg'
import product26 from './photo26.jpg'
import product27 from './photo27.jpg'
import product28 from './photo28.jpeg'
import product29 from './photo29.jpg'
import product30 from './photo30.webp'
import product31 from './photo31.webp'




 const availableQuantity = 5; 

let allproducts = [
  {
    id: 1,
    name: "nike white t-shirt",
    gender: "men",
    image: product1,
    color: "white",
    price: 600,
    brand: "nike",
    availablequantity: availableQuantity,
 
  },
  {
    id: 2,
    name: "nike red t-shirt",
    gender: "men",
    image: product2,
    color: "red",
    price: 500,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 3,
    name: "nike white t-shirt",
    gender: "women",
    image: product3,
    color: "white",
    price: 300,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 4,
    name: "puma t-shirt",
    gender: "men",
    image: product4,
    color: "black",
    price: 600,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  // Add availableQuantity to all other products similarly
  {
    id: 5,
    name: "puma t-shirt",
    gender: "women",
    image: product5,
    color: "black",
    price: 500,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  {
    id: 6,
    name: "puma white t-shirt",
    gender: "women",
    image: product6,
    color: "white",
    price: 300,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  {
    id: 7,
    name: "puma t-shirt",
    gender: "men",
    image: product7,
    color: "red",
    price: 600,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  {
    id: 8,
    name: "puma t-shirt",
    gender: "men",
    image: product8,
    color: "green",
    price: 500,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  {
    id: 9,
    name: "puma t-shirt",
    gender: "men",
    image: product9,
    color: "black",
    price: 300,
    brand: "puma",
    availablequantity: availableQuantity,
  },
  {
    id: 10,
    name: "polo blue t-shirt",
    gender: "men",
    image: product10,
    color: "blue",
    price: 699,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 11,
    name: "polo blue t-shirt",
    gender: "men",
    image: product11,
    color: "blue",
    price: 799,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 12,
    name: "polo yellow t-shirt",
    gender: "men",
    image: product12,
    color: "yellow",
    price: 599,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 13,
    name: "polo black&white t-shirt",
    gender: "men",
    image: product13,
    color: "black",
    price: 499,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 14,
    name: "polo skyblue t-shirt",
    gender: "men",
    image: product14,
    color: "skyblue",
    price: 199,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 15,
    name: "polo black t-shirt",
    gender: "men",
    image: product15,
    color: "black",
    price: 249,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 16,
    name: "polo gray t-shirt",
    gender: "men",
    image: product16,
    color: "gray",
    price: 699,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 17,
    name: "polo blue t-shirt",
    gender: "women",
    image: product17,
    color: "lightblue",
    price: 500,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 18,
    name: "polo t-shirt",
    gender: "women",
    image: product18,
    color: "red",
    price: 300,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 19,
    name: "polo green t-shirt",
    gender: "women",
    image: product19,
    color: "white",
    price: 600,
    brand: "polo",
    availablequantity: availableQuantity,
  },
  {
    id: 20,
    name: "nike blue t-shirt",
    gender: "women",
    image: product20,
    color: "blue",
    price: 500,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 21,
    name: "nike black t-shirt",
    gender: "women",
    image: product21,
    color: "black",
    price: 300,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 22,
    name: "nike t-shirt",
    gender: "women",
    image: product22,
    color: "pink",
    price: 600,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 23,
    name: "nike t-shirt",
    gender: "women",
    image: product23,
    color: "black",
    price: 500,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 24,
    name: "nike blue t-shirt",
    gender: "women",
    image: product24,
    color: "blue",
    price: 300,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 25,
    name: "nike orange t-shirt",
    gender: "women",
    image: product25,
    color: "orange",
    price: 600,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 26,
    name: "nike skyblue t-shirt",
    gender: "men",
    image: product26,
    color: "blue",
    price: 500,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 27,
    name: "nike black t-shirt",
    gender: "men",
    image: product27,
    color: "black",
    price: 300,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 28,
    name: "nike blue t-shirt",
    gender: "men",
    image: product28,
    color: "blue",
    price: 600,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 29,
    name: "nike black t-shirt",
    gender: "men",
    image: product29,
    color: "black",
    price: 500,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 30,
    name: "nike hddi t-shirt",
    gender: "men",
    image: product30,
    color: "white",
    price: 700,
    brand: "nike",
    availablequantity: availableQuantity,
  },
  {
    id: 31,
    name: "nike blue t-shirt",
    gender: "men",
    image: product31,
    color: "blue",
    price: 600,
    brand: "nike",
    availablequantity: availableQuantity,
  },
];


export default allproducts;