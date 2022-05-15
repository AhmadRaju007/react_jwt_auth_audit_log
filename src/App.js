import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateSite from "./components/site/CreateSite";
import UpdateSite from "./components/site/UpdateSite";
import LogoutButton from "./components/layout/LogoutButton";

const App = () => {
  const token = sessionStorage.getItem("authToken");
  
  return (
    <div className="App">
      <BrowserRouter>
          
        <ToastContainer autoClose={3000} />
        <main>
            {
              token ? (
                <>
                <LogoutButton/>
                <Routes>
                  <Route exact path="/" element={<CreateSite/>}/>
                  <Route exact path="/site-create" element={<CreateSite/>}/>
                  <Route exact path="/site/:id" element={<UpdateSite/>}/>
                </Routes>
                </>
                ):(
                  <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                  </Routes>
                )
            }
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
