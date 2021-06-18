import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import ContactUs from "./pages/Contactus";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;