import { NextResponse } from "next/server";

const products = [
  {
    _id: "2P4ew3n0aFKlAn3Aum9jzF",
    title: "Elegant Layered Top",
    originalPrice: 30,
    discountedPrice: 20,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product1.png",
    inventory: 10,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "3lfjJc6xfJVyGl3sMldeD4",
    title: "Printed T-Shirt",
    originalPrice: 25,
    discountedPrice: 20,
    category: {
      _id: "4",
      title: "Kids",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product2.png",
    inventory: 20,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "3lfjJc6xfJVyGl3sMldeKI",
    title: "Classic White Jeans",
    originalPrice: 40,
    discountedPrice: 20,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product3.png",
    inventory: 40,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "3lfjJc6xfJVyGl3sMldeaY",
    title: "Modern Weave Skirt",
    originalPrice: 30,
    discountedPrice: 20,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product4.png",
    inventory: 20,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "7uWMcA2njGzrktIbr3a7dX",
    title: "Modern Duffle Coat",
    originalPrice: 25,
    discountedPrice: 20,
    category: {
      _id: "1",
      title: "Men",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product5.png",
    inventory: 10,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "7uWMcA2njGzrktIbr3a7oH",
    title: "Cozy Long Shirt",
    originalPrice: 50,
    discountedPrice: 40,
    category: {
      _id: "3",
      title: "Accessories",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product6.png",
    inventory: 10,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "Q9AwUxhBwTUyc7vQiJB9Jw",
    title: "Hooded Sweat Shirt",
    originalPrice: 25,
    discountedPrice: 20,
    category: {
      _id: "1",
      title: "Men",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product7.png",
    inventory: 20,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "Q9AwUxhBwTUyc7vQiJB9be",
    title: "Cute Graphic Tees",
    originalPrice: 40,
    discountedPrice: 20,
    category: {
      _id: "4",
      title: "Kids",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product8.png",
    inventory: 40,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "4kLDh3NmkIoRyjTbU2oVQZ",
    title: "Beige Bomber Jacket",
    originalPrice: 45,
    discountedPrice: 35,
    category: {
      _id: "1",
      title: "Men",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
    inventory: 15,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "X9MoU6HT7kIjQ3Wr2jVBKL",
    title: "Classic Polo Neck",
    originalPrice: 35,
    discountedPrice: 25,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    inventory: 25,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },

  {
    _id: "9o6xLfT2vGJhYk5zDk3Z9t",
    title: "Retro Denim Jacket",
    originalPrice: 50,
    discountedPrice: 35,
    category: {
      _id: "3",
      title: "Accessories",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    inventory: 25,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "4h7mRtY5vPGoJf9zLj3U2g",
    title: "Sunny Yellow Dress",
    originalPrice: 40,
    discountedPrice: 30,
    category: {
      _id: "4",
      title: "Kids",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    inventory: 15,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },

  {
    _id: "Y9AwUxH78PojQ3Wr2KLQ8M",
    title: "Modern Trench Coat",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "3",
      title: "Accessories",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product13.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "C2PqZrN8jYHoL7C3DzNQ7V",
    title: "Cut Sleeve Jacket",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "4",
      title: "Kids",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product14.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "R3PqWtM8jYLoK7C3MzNQ2T",
    title: "Cozy Cotton Shirt",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "1",
      title: "Men",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product15.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "L3PqZrM8tYLmKoC7QpQ5VJ",
    title: "Chic Wrap Blouse",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product16.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "X9PoUxH7jTLyQ3Wr2NVQ5J",
    title: "Classic Strip Jacket",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "3",
      title: "Accessories",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product17.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "M2PqArT8jYKoL7C3XMNQ7T",
    title: "Premium Black Hoodie",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "3",
      title: "Accessories",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product11.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product18.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "K9PqWrM8jYNoL7T3XMNQ1V",
    title: "Half Sleeve T-Shirt",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "4",
      title: "Kids",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product12.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product19.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
  {
    _id: "P9MoNrM8jYL7C3WzNQVT8X",
    title: "Brown Cropped Jacket",
    originalPrice: 20,
    discountedPrice: 15,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
    },
    imageUrl:
      "https://template-05-api-by-yusranaz.vercel.app/images/product20.png",
    inventory: 30,
    colors: ["#252B42", "#23856D", "#E77C40", "#23A6F0"],
  },
];

export async function GET() {
  return NextResponse.json(products);
}
