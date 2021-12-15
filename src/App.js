import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Container from "./components/Container";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Price = lazy(() => import("./components/Price"));
const Contacts = lazy(() => import("./components/Contacts"));

function App() {
  return (
    <>
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
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
        </Suspense>
      </Container>
    </>
  );
}

export default App;
