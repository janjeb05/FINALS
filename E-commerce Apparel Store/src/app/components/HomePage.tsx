import { Link } from 'react-router';
import { getFeaturedProducts } from '../data/products';
import { ProductCard } from './ProductCard';

export const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <section className="relative h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558769132-cb1aea1c8f3f?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-300">
            Live Free. Live Fearless.
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            NO RULES<br />ONLY VIBES
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
            Streetwear for those who create their own path
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tees"
              className="inline-block bg-white text-black px-10 py-4 font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors"
            >
              Explore Collection
            </Link>
            <Link
              to="/outerwear"
              className="inline-block border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              New Drops
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link
            to="/tees"
            className="group relative h-64 bg-black overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
              alt="Tees"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
              <h2 className="text-white text-2xl font-black tracking-wider">TEES</h2>
            </div>
          </Link>
          <Link
            to="/bottoms"
            className="group relative h-64 bg-black overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
              alt="Bottoms"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
              <h2 className="text-white text-2xl font-black tracking-wider">BOTTOMS</h2>
            </div>
          </Link>
          <Link
            to="/essentials"
            className="group relative h-64 bg-black overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
              alt="Essentials"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
              <h2 className="text-white text-2xl font-black tracking-wider">ESSENTIALS</h2>
            </div>
          </Link>
          <Link
            to="/outerwear"
            className="group relative h-64 bg-black overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
              alt="Outerwear"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
              <h2 className="text-white text-2xl font-black tracking-wider">OUTERWEAR</h2>
            </div>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-black mb-2 uppercase">Latest Drops</h2>
          <p className="text-gray-600 text-lg">Fresh gear for the streets</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
