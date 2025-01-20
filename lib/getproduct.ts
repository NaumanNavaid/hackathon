import { client } from "@/sanity/lib/client";
 

export const getProduct = async () => {
 const query = `*[_type == "product"]`;

 const products = await client.fetch(query);
return products;
 



}