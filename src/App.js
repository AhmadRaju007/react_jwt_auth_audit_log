import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "./components/auth/Login"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<Login />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
