import {
    DocumentDefinition,
    FilterQuery,
    QueryOptions,
    UpdateQuery,
} from "mongoose";
import ProductModel, {ProductDocument} from "../models/product.model";

export async function createProduct(input: DocumentDefinition<Omit<ProductDocument, "createdAt" | "updatedAt">>) {
    return ProductModel.create(input);
}
