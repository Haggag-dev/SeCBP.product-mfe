import Header from "host_app/Header";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  return (
    <div>
      <header>
        <Header
          addProductLinks={true}
          rightNav="Your Orders"
          hideRightNav={true}
        />
      </header>
      <main className="mt-30 mb-30 max-w-300 mx-auto w-full">
        <ProductsGrid />
      </main>
    </div>
  );
}

export default App;
