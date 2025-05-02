import createOrder from "../services/orders-service";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-5 bg-neutral-300 rounded-t-lg text-neutral-500 font-semibold rounded-b-lg">
      <div className="flex max-h-80">
        <img
          className="rounded-t-lg object-cover"
          src={product.imageUrl}
          alt={`${product.name} Image`}
        />
      </div>

      <div className="flex justify-between px-2">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>

      <div className="flex w-full items-center justify-center px-3 mb-6">
        <button
          onClick={() =>
            createOrder({
              user_id: 4,
              product_id: product.id,
              product_name: product.name,
              product_price: Number(product.price),
            })
          }
          className="bg-neutral-700 tracking-wider hover:scale-102 transition-all ease-in-out duration-300 font-bold hover:text-white text-neutral-100 py-1 px-3 rounded-full cursor-pointer hover:bg-neutral-500"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
