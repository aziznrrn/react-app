import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Home from "./Components/Page/Home";
import Faq from "./Components/Page/Faq";
import Setting from "./Components/Page/Setting";
import Contact from "./Components/Page/Contact";
import NotFound from "./Components/Page/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="mx-auto" style={{maxWidth: '1000px'}}>
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
