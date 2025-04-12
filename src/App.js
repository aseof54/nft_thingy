import "./styles/App.css"
import Header from "./elements/Header";
import { BrowserRouter } from "react-router-dom";
import Banner from "./elements/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
