import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Pricing from "./Pricing"
import Registeration from "./Registeration"
import Select from "./Select"
import Select1 from "./Select1"
import Select2 from "./Select2"
import Navbar from "./Navbar";

import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Pricing} />
        <Route exact path="/registeration" component={Registeration} />
        <Route exact path="/select" component={Select} />
        <Route exact path="/select1" component={Select1} />
        <Route exact path="/select2" component={Select2} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;
