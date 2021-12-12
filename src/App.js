import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import Price from "./components/Price";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/price">
            <Price />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route>
            <Redirect to={"/"} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
}

export default App;
