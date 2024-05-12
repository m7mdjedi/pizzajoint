import React, { useState } from "react";
import Nav from "./components/Nav";
import classes from "./App.module.css";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Toppings from "./pages/Toppings";
import {
  Route,
  Router,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Order from "./pages/Order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
const App = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const onBaseHandler = (base) => {
    if (pizza.base === base) setPizza({ ...pizza, base: "" });
    else setPizza({ ...pizza, base });
  };
  const onTopHandler = (topping) => {
    let oldToppings = pizza.toppings;
    console.log(oldToppings);
    if (oldToppings.includes(topping)) {
      let newToppings = oldToppings.filter(
        (oldTopping) => oldTopping !== topping
      );
      setPizza({ ...pizza, toppings: newToppings });
    } else {
      let newToppings = oldToppings.push(topping);
      setPizza({ ...pizza, topings: newToppings });
    }
  };

  return (
    <div className={classes.appContainer}>
      <Nav />
     <Modal showModal={showModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
      
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Base">
            <Base pizza={pizza} onBaseAdd={onBaseHandler} />
          </Route>

          <Route path="/Toppings">
            <Toppings pizza={pizza} onTopAdd={onTopHandler} />
          </Route>
          <Route path="/Order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
