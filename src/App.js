import "./App.css";
import { Route, Routes } from "react-router";
import PostForm from "./pages/PostForm";
import PostList from "./pages/PostList";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ProductForm from "./pages/ProductForm";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<Cart></Cart>} path="/"></Route>
        <Route element={<Cart></Cart>} path="/cart"></Route>
        <Route element={<ProductForm></ProductForm>} path="/product-form"></Route>
      </Routes>
    </>
  );
}

export default App;
