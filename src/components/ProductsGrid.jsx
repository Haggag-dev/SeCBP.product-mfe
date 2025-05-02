import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products, loading, error } = useProducts();

  if (error) return <p>Failed to fetch products: {error}</p>;

  if (loading) return <p>...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 px-8 place-items-center gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
