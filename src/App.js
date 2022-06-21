import "./App.scss";
import Header from "./components/header/Header";

import Posts from "./components/posts/Posts";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
