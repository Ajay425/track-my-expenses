import React from "react"
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expenses from "./pages/Dashboard/Expenses";

const App = () => {
return(
  <div>
    <Router>
        <Routes>
          <Route path="/" element = {<Root/>}/>
          <Route path="/login" exact element = {<Login/>} />
          <Route path="/signUp" exact element = {<SignUp/>} />
          <Route path="/dashboard" exact element = {<Home/>} />
          <Route path="/income" exact element = {<Income/>} />
          <Route path="/expense" exact element = {<Expenses/>} />

        </Routes>
      </Router>
    </div>
);

};



export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token")
  return isAuthenticated ? (
    <Navigate to="/dashboard"/>
  ) : (
    <Navigate to = "/login"/>
  );
};
