import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const scrollRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error('Failed to load products', err));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const scroll = (refIndex: number, direction: 'left' | 'right') => {
    const ref = scrollRefs[refIndex];
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getRow = (start: number, end: number, rowIndex: number) => (
    <div className="relative mb-14">
      {/* Left Arrow */}
      <button
        onClick={() => scroll(rowIndex, 'left')}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border rounded-full shadow-md p-2 hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(rowIndex, 'right')}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border rounded-full shadow-md p-2 hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* Scroll Row */}
      <div
        ref={scrollRefs[rowIndex]}
        className="overflow-x-auto whitespace-nowrap scroll-smooth px-[40px]"
        style={{ scrollbarWidth: 'auto', height: 'auto' }}
      >
        {products.slice(start, end).map((product) => (
          <div
            key={product.id}
            data-aos="fade-right"
            className="inline-block w-[23%] m-[1%] bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 align-top transition-all duration-[1500ms] ease-in-out transform hover:scale-105 hover:shadow-xl mb-[50px]"
          >
            <img
              src={product.image}
              alt={product.title}
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200')}
              className="w-[200px] h-[200px] object-contain mx-auto mb-2"
            />
            <h3 className="text-sm font-semibold text-center text-[var(--text-color)] line-clamp-2 mb-1">
              {product.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 text-center line-clamp-2 mb-2">
              {product.description}
            </p>
            <div className="text-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
              ${product.price}
            </div>
            <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black text-xs py-1 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-24 px-6 sm:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--text-color)]">
        🛒 Featured Products
      </h2>

      {getRow(0, 4, 0)}
      {getRow(4, 8, 1)}
      {getRow(8, 12, 2)}
    </div>
  );
};

export default Home;
