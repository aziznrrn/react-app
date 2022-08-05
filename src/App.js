import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Home from "./Components/Page/Home";
import Faq from "./Components/Page/Faq";
import Setting from "./Components/Page/Setting";
import Contact from "./Components/Page/Contact";
import NotFound from "./Components/Page/NotFound";
import Post from "./Components/Page/Post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="mx-auto h-full" style={{maxWidth: '1000px', marginBottom: '4.5rem', marginTop: '3.5rem'}}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post />
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
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
