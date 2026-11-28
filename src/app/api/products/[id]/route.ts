
import products from "@/components/data/products.json";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  req: Request,
  context: Context
) {
  const { id } = await context.params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return Response.json(
      { success: false, message: "Product not found" },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
    product,
  });
}
