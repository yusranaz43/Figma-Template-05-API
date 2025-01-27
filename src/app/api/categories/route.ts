import { NextResponse } from "next/server";

const categories = [
  {
    "_id": "1",
    "title": "Men",
    "imageUrl": "https://template-05-api-by-yusranaz.vercel.app/images/product9.png"
  },
  {
    "_id": "2",
    "title": "Women",
    "imageUrl": "https://template-05-api-by-yusranaz.vercel.app/images/product10.png"
  },
  {
    "_id": "3",
    "title": "Accessories",
    "imageUrl": "https://template-05-api-by-yusranaz.vercel.app/images/product11.png"
  },
  {
    "_id": "4",
    "title": "Kids",
    "imageUrl": "https://template-05-api-by-yusranaz.vercel.app/images/product12.png"
  }
];

export async function GET() {
  return NextResponse.json(categories);
}
