import { NextResponse } from "next/server";

const products = [
  {
    _id: "2P4ew3n0aFKlAn3Aum9jzF",
    title: "Elegant Layered Top",
    originalPrice: 30,
    discountedPrice: 20,
    description:"A sophisticated layered top designed for effortless charm. Crafted from soft, breathable fabric, it drapes beautifully, making it perfect for both casual and semi-formal occasions.",
    ratings: 4.5,
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
    title: "Modern Weave Skirt",
    originalPrice: 25,
    discountedPrice: 20,
    description:"A stylish weave-patterned skirt that combines elegance with comfort. Its lightweight fabric and flattering fit make it a versatile choice for both day and evening wear.",
    ratings: 4.7,
    category: {
      _id: "2",
      title: "Women",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product10.png",
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
    description:"Timeless white jeans with a sleek fit and premium stretch fabric. These versatile bottoms elevate any outfit, offering comfort and effortless style for every occasion.",
    ratings: 4.9,
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
    title: "Printed T-Shirt",
    originalPrice: 30,
    discountedPrice: 20,
    description:"A trendy printed tee that adds a pop of personality to your wardrobe. Made from soft cotton, it ensures all-day comfort with a modern and stylish appeal.",
    ratings: 4.6,
    category: {
      _id: "1",
      title: "Men",
      imageUrl:
        "https://template-05-api-by-yusranaz.vercel.app/images/product9.png",
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
    description:"Stay warm in this sophisticated duffle coat, featuring a tailored fit and premium wool blend. Perfect for layering, it offers both style and functionality for winter.",
    ratings: 4.8,
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
    description:"A soft and breathable long shirt designed for ultimate comfort. Its relaxed fit and chic design make it perfect for casual outings or cozy indoor lounging.",
    ratings: 4.4,
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
    description:"A must-have hoodie with a relaxed fit and ultra-soft fabric. Whether for workouts or everyday wear, it offers warmth, comfort, and a classic sporty vibe.",
    ratings: 4.3,
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
    description:"Fun and stylish graphic tees featuring eye-catching designs. Made from premium cotton, these tees offer a relaxed fit and vibrant prints to express your unique style.",
    ratings: 4.0,
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
    description:"A trendy beige bomber jacket crafted from high-quality fabric. Featuring a sleek design, ribbed cuffs, and a comfortable fit, it’s a perfect mix of style and functionality.",
    ratings: 4.1,
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
    description:"A timeless polo-neck shirt with a sleek and elegant silhouette. Made from breathable fabric, it offers both warmth and versatility for layering or standalone wear.",
    ratings: 4.2,
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
    description:"A vintage-inspired denim jacket with a classic wash and stylish details. Durable, versatile, and effortlessly cool, it's the perfect layering piece for all seasons.",
    ratings: 4.6,
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
    description:"Brighten up your day with this cheerful yellow dress. Featuring a flowy silhouette and lightweight fabric, it’s perfect for sunny outings and breezy comfort.",
    ratings: 4.5,
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
    description:"A contemporary take on the classic trench coat. Tailored for a refined look, it offers lightweight warmth and effortless sophistication for transitional weather.",
    ratings: 4.8,
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
    description:"A stylish sleeveless jacket that adds an edgy touch to any outfit. Layer it over casual or formal wear for a chic and confident statement.",
    ratings: 4.2,
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
    description:"Experience all-day comfort with this soft cotton shirt. Breathable and lightweight, it’s perfect for layering or wearing solo for a relaxed, effortless look.",
    ratings: 4.9,
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
    description:"A stylish wrap blouse designed for a flattering fit. Its soft fabric and elegant design make it an ideal choice for both office wear and casual outings.",
    ratings: 4.7,
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
    description:"A timeless striped jacket with a sleek fit and structured design. Perfect for layering, it adds a sophisticated touch to both casual and formal outfits.",
    ratings: 4.0,
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
    description:"A high-quality black hoodie crafted from ultra-soft fabric. Featuring a relaxed fit and cozy feel, it's an everyday essential for effortless style and comfort.",
    ratings: 4.3,
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
    description:"A lightweight half-sleeve t-shirt with a soft and breathable fabric. Perfect for casual outings, it pairs effortlessly with jeans, skirts, or shorts.",
    ratings: 4.5,
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
    originalPrice: 30,
    discountedPrice: 25,
    description:"A trendy cropped jacket in a warm brown shade. Designed for a flattering fit, it’s perfect for layering over dresses or high-waisted bottoms.",
    ratings: 4.6,
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
