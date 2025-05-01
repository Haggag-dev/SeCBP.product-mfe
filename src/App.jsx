import Header from "./components/Header/Header";
import ProductsGrid from "./components/Products Grid/ProductsGrid";

function App() {
  return (
    <div>
      <header>
        <Header addProductLinks={true} rightNav="Your Orders" />
      </header>
      <main className="mt-30 mb-30 max-w-300 mx-auto w-full">
        <ProductsGrid />
      </main>
    </div>
  );
}

export default App;
