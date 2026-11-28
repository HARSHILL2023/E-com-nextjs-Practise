"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ZodError } from "zod";
import { adminCookieName, isAdmin } from "@/lib/admin-auth";
import { productSchema } from "@/lib/product-schema";
import {
  addProduct,
  getProduct,
  removeProduct,
  updateProduct,
} from "@/lib/products";

export type ProductActionState = {
  message: string;
  success?: boolean;
  productId?: string;
  fieldErrors?: Record<string, string>;
};

export type AccessActionState = {
  message: string;
};

function getProductValues(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    description: String(formData.get("description") ?? ""),
    price: String(formData.get("price") ?? ""),
    category: String(formData.get("category") ?? ""),
    stock: String(formData.get("stock") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
  };
}

function getFieldErrors(error: ZodError) {
  const fieldErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const fieldName = String(issue.path[0]);
    fieldErrors[fieldName] = issue.message;
  }

  return fieldErrors;
}

function refreshProductPages(productId?: string) {
  revalidatePath("/products");
  revalidatePath("/admin/products");

  if (productId) {
    revalidatePath(`/products/${productId}`);
    revalidatePath(`/admin/products/${productId}/edit`);
  }
}

export async function startAdminSession(
  _previousState: AccessActionState,
  formData: FormData,
): Promise<AccessActionState> {
  const expectedToken = process.env.ADMIN_ACTION_TOKEN;
  const submittedToken = String(formData.get("token") ?? "");

  if (!expectedToken) {
    return { message: "Admin access has not been configured." };
  }

  if (submittedToken !== expectedToken) {
    return { message: "The access token is not correct." };
  }

  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, expectedToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin/products");
}

export async function createProductAction(
  formData: FormData,
): Promise<ProductActionState> {
  if (!(await isAdmin())) {
    return { message: "You are not allowed to manage products." };
  }

  const result = productSchema.safeParse(getProductValues(formData));

  if (!result.success) {
    return {
      message: "Please correct the errors below.",
      fieldErrors: getFieldErrors(result.error),
    };
  }

  const product = addProduct(result.data);
  refreshProductPages(product.id);

  return {
    message: "Product created successfully.",
    success: true,
    productId: product.id,
  };
}

export async function updateProductAction(
  productId: string,
  _previousState: ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  if (!(await isAdmin())) {
    return { message: "You are not allowed to manage products." };
  }

  if (!getProduct(productId)) {
    return { message: "This product could not be found." };
  }

  const result = productSchema.safeParse(getProductValues(formData));

  if (!result.success) {
    return {
      message: "Please correct the errors below.",
      fieldErrors: getFieldErrors(result.error),
    };
  }

  const updatedProduct = updateProduct(productId, result.data);

  if (!updatedProduct) {
    return { message: "This product could not be found." };
  }

  refreshProductPages(productId);

  return {
    message: "Product updated successfully.",
    success: true,
  };
}

export async function deleteProductAction(
  productId: string,
  formData: FormData,
): Promise<ProductActionState> {
  if (!(await isAdmin())) {
    return { message: "You are not allowed to manage products." };
  }

  if (formData.get("productId") !== productId) {
    return { message: "This product could not be found." };
  }

  if (!removeProduct(productId)) {
    return { message: "This product could not be found." };
  }

  refreshProductPages(productId);
  redirect("/admin/products?deleted=1");
}
