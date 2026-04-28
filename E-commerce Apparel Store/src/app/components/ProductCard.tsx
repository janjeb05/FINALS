import { Link } from 'react-router';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1 group-hover:text-gray-600">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
          {product.category}
        </p>
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};
