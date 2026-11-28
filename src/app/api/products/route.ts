
import products from "@/components/data/products.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return Response.json({
    success: true,
    products: filteredProducts,
  });
}
