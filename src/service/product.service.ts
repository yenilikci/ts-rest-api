import {DocumentDefinition, FilterQuery, QueryOptions,} from "mongoose";
import ProductModel, {ProductDocument} from "../models/product.model";

export async function createProduct(input: DocumentDefinition<Omit<ProductDocument, "createdAt" | "updatedAt">>) {
    return ProductModel.create(input);
}

export async function findProduct(
    query: FilterQuery<ProductDocument>,
    options: QueryOptions = {lean: true}
) {
    return ProductModel.findOne(query, {}, options);
}
