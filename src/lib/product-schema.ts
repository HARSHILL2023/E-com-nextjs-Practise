import { z } from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  description: z
    .string()
    .trim()
    .min(5, "Description must be at least 5 characters."),
  price: z
    .string()
    .trim()
    .min(1, "Enter a price.")
    .refine(
      (value) => Number.isFinite(Number(value)) && Number(value) > 0,
      "Enter a price greater than zero.",
    ),
  category: z.string().trim().min(2, "Category must be at least 2 characters."),
  stock: z
    .string()
    .trim()
    .min(1, "Enter a stock quantity.")
    .refine(
      (value) => Number.isInteger(Number(value)) && Number(value) >= 0,
      "Enter a whole stock quantity of zero or more.",
    ),
  imageUrl: z.string().trim().url("Enter a valid image URL."),
});

export type ProductFormValues = z.infer<typeof productSchema>;
