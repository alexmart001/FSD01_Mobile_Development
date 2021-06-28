import { Product } from "../../models/products";
import api from "../../services/api";

export async function fetchProducts() {

  const { data } = await api.get('/product/list');

  const products: Product[] = data;

  const list = Array.from(products.values());
  return list;
}