interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({ id, image, title, description, price }: ProductCardProps) => (
  <div
    key={id}
    className="border p-4 rounded shadow-sm bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 max-w-xs mx-auto">
    <img
      src={image}
      alt={title}
      className="h-36 w-full object-contain mb-2"/>
    <h3 className="font-semibold text-sm truncate">{title}</h3>
    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
    <p className="font-bold mt-2">${price}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-800 text-sm">
      Buy
    </button>
  </div>
);

export default ProductCard;
