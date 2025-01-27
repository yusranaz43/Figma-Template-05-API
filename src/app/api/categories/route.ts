import { NextResponse } from "next/server";

const categories = [
  {
    "_id": "1",
    "title": "Men",
    "imageUrl": "/images/product9.png"
  },
  {
    "_id": "2",
    "title": "Women",
    "imageUrl": "/images/product10.png"
  },
  {
    "_id": "3",
    "title": "Accessories",
    "imageUrl": "/images/product11.png"
  },
  {
    "_id": "4",
    "title": "Kids",
    "imageUrl": "/images/product12.png"
  }
];

export async function GET() {
  return NextResponse.json(categories);
}
