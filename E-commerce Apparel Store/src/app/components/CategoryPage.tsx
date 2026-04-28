import { getProductsByCategory } from '../data/products';
import { ProductCard } from './ProductCard';

interface CategoryPageProps {
  category: 'tees' | 'bottoms' | 'essentials' | 'accessories' | 'outerwear';
}

export const CategoryPage = ({ category }: CategoryPageProps) => {
  const products = getProductsByCategory(category);

  const categoryTitles = {
    tees: 'Tees',
    bottoms: 'Bottoms',
    essentials: 'Essentials',
    accessories: 'Accessories',
    outerwear: 'Outerwear',
  };

  const categoryDescriptions = {
    tees: 'Express yourself. Premium tees that speak louder than words.',
    bottoms: 'Built for movement. Pants and shorts for those who never sit still.',
    essentials: 'Street staples for rebels and dreamers. Foundation pieces for your freedom.',
    accessories: 'The finishing touch. Small details that make big statements.',
    outerwear: 'Armor for the streets. Layer up, stand out, stay limitless.',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{categoryTitles[category]}</h1>
        <p className="text-gray-600">{categoryDescriptions[category]}</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
