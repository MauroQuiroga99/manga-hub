import Header from "./components/Header";
import Front from "./components/Front";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "../src/css/header.css";
import "./css/App.css";

function App() {
  return (
    <>
      <div>
        <div className="">
          <Header />
          <Front />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
