import { render, screen, waitFor } from '@testing-library/react';
import { client } from '@/sanity/lib/client';
import Page from '@/app/shop/[id]/page';
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('Product Page', () => {
  it('renders product details correctly based on the product ID', async () => {
    const mockProduct = {
      _id: '123',
      name: 'Product A',
      imagePath: '/path/to/image.jpg',
      price: 500,
      description: 'Product A description',
      discountPercentage: 20,
      stockLevel: 10,
      category: 'Category A',
    };

    // Mock the client.fetch function
    (client.fetch as jest.Mock).mockResolvedValue(mockProduct);

    render(<Page params={{ id: '123' }} />);
    console.log(mockProduct);
    // Wait for the async content to load
    await waitFor(() => screen.getByText(mockProduct.name));

    // Assertions
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.discountPercentage}% off`)).toBeInTheDocument();
    expect(screen.getByText(`In Stock: ${mockProduct.stockLevel}`)).toBeInTheDocument();
    expect(screen.getByText(`Category: ${mockProduct.category}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });
});
