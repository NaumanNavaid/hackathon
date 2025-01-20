import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopPage from '@/app/component/shop'; // Adjust the import
import '@testing-library/jest-dom'; // Add this import to extend Jest matchers
import { JSX } from 'react';
import React from 'react';

const products = [
    { _id: '1', name: 'Sofa A', description: 'Comfortable sofa', price: 500, category: 'Living Room', imagePath: '/path/to/image1.jpg' },
    { _id: '2', name: 'Sofa B', description: 'Stylish sofa', price: 600, category: 'Living Room', imagePath: '/path/to/image2.jpg' },
    { _id: '3', name: 'Chair A', description: 'Comfy chair', price: 200, category: 'Office', imagePath: '/path/to/image3.jpg' },
];

const categories = ['All', 'Living Room', 'Office'];

describe('ShopPage', () => {
    test('filters products by category', async () => {
        render(<ShopPage products={products} categories={categories} />);

        expect(screen.getByText('Sofa A')).toBeInTheDocument();
        expect(screen.getByText('Sofa B')).toBeInTheDocument();
        expect(screen.getByText('Chair A')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Living Room' } });

        await waitFor(() => {
            expect(screen.getByText('Sofa A')).toBeInTheDocument();
            expect(screen.getByText('Sofa B')).toBeInTheDocument();
            expect(screen.queryByText('Chair A')).not.toBeInTheDocument();
        });
    });

    test('filters products by search query', async () => {
        render(<ShopPage products={products} categories={categories} />);

        expect(screen.getByText('Sofa A')).toBeInTheDocument();
        expect(screen.getByText('Sofa B')).toBeInTheDocument();
        expect(screen.getByText('Chair A')).toBeInTheDocument();

        userEvent.type(screen.getByPlaceholderText(/search products.../i), 'Sofa A');

        await waitFor(() => {
            expect(screen.queryByText('Sofa A')).toBeInTheDocument();
            expect(screen.queryByText('Sofa B')).not.toBeInTheDocument();
            expect(screen.queryByText('Chair A')).not.toBeInTheDocument();
        });
    });

    test('filters by both category and search query', async () => {
        render(<ShopPage products={products} categories={categories} />);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Living Room' } });
        userEvent.type(screen.getByPlaceholderText(/search products.../i), 'Sofa A');

        await waitFor(() => {
            expect(screen.queryByText('Sofa A')).toBeInTheDocument();
            expect(screen.queryByText('Sofa B')).not.toBeInTheDocument();
            expect(screen.queryByText('Chair A')).not.toBeInTheDocument();
        });
    });
});
