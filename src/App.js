import React, { useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import MoviePage from "./screens/MoviePage";
import Loader from "./components/loader/Loader";
import SearchResults from "./screens/SearchResults";
import ErrorPage from "./screens/ErrorPage";

function App(props) {
  let [searchStr, setSearchStr] = useState("");

  const changeStr = (val) => setSearchStr(val);

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="App">
        <Header changeStr={changeStr} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route exact path="/loader" component={Loader} />
          <Route
            exact
            path="/searchresults"
            component={() => <SearchResults value={searchStr} />}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
