import "./App.css";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SinglePost} path="/post/:slug" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
