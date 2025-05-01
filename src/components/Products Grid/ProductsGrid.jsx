import useProducts from "../../hooks/useProducts";
import { useActiveLinkAtom } from "../../stores/active-link";

const ProductsGrid = () => {
  const { products, loading, error } = useProducts();
  const [activeLink] = useActiveLinkAtom();

  if (error) return <p>Failed to fetch products: {error}</p>;

  if (loading) return <p>...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 px-8 place-items-center gap-y-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-y-3 bg-neutral-300 rounded-t-lg  text-neutral-500 font-semibold rounded-b-lg"
        >
          <div className="flex max-h-80">
            <img
              className="rounded-t-lg object-cover"
              src={product.imageUrl}
              alt={`${product.name} Image`}
            />
          </div>

          <div className="flex justify-between mb-3 px-2">
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
