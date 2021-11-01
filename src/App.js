import "./App.css";
import Home from "./screens/Home";
import Account from "./screens/Account";
import Navbar from "./components/Navbar";
import Favorites from "./screens/Favorites"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Account} path="/account" exact />
          <Route component={Favorites} path="/favorites" />
          <Route component={SinglePost} path="/post/:slug" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
