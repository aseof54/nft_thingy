import "./styles/App.css"
import Header from "./elements/Header";
import { BrowserRouter } from "react-router-dom";
import Banner from "./elements/Banner";
import Partners from "./elements/Partners";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <Partners></Partners>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
