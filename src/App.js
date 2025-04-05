import "./styles/App.css"
import Header from "./elements/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
