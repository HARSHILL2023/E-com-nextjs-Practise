import type { ProductFormValues } from "@/lib/product-schema";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  variants: string[];
  rating: number;
};

const products: Product[] = [
  {
    id: "product-101",
    name: "Premium Smartphone",
    description:
      "Experience powerful performance, a stunning display, and a sleek design.",
    price: 24999,
    category: "Electronics",
    stock: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1511707267537-b85faf0002c8?auto=format&fit=crop&w=900&q=80",
    variants: ["Small", "Medium", "Large", "XL"],
    rating: 4.5,
  },
];

let nextProductId = 102;

export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function addProduct(input: ProductFormValues) {
  const product: Product = {
    id: `product-${nextProductId}`,
    name: input.name,
    description: input.description,
    price: Number(input.price),
    category: input.category,
    stock: Number(input.stock),
    imageUrl: input.imageUrl,
    variants: ["Standard"],
    rating: 0,
  };

  nextProductId += 1;
  products.push(product);
  return product;
}

export function updateProduct(id: string, input: ProductFormValues) {
  const product = getProduct(id);

  if (!product) {
    return undefined;
  }

  product.name = input.name;
  product.description = input.description;
  product.price = Number(input.price);
  product.category = input.category;
  product.stock = Number(input.stock);
  product.imageUrl = input.imageUrl;

  return product;
}

export function removeProduct(id: string) {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);
  return true;
}
