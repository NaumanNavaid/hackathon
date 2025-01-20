import { getProduct } from "./getproduct";
import { client } from "@/sanity/lib/client";

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('getProduct', () => {
  it('should return products', async () => {
    const products = [{ name: 'product1' }, { name: 'product2' }];
    
    // Correctly mock the fetch method
    (client.fetch as jest.Mock).mockResolvedValue(products);
    
    const result = await getProduct();
    
    expect(result).toEqual(products);
    expect(result.length).toBeGreaterThan(0);
  });
});
