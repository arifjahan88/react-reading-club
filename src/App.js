import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookCart from "./Components/BookCarts/BookCart";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <BookCart></BookCart>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
