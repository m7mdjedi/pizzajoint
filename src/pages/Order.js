import React, { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "../components/Base.module.css";
const mainContainerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
       type: "spring",
        mass:0.4,
        damping:8,
        staggerChildren:0.4,
        when:"beforeChildren"
      },
  },
  exit:{ 
    x:"-100vw",
    transition:{ease:"easeInOut" }
  }
};
const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza ,setShowModal }) => {
  useEffect(()=>{ 
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
  },[setShowModal])
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      
      variants={mainContainerVariant}
      className={classes.mainContainer}
    >
      <div className={classes.orderContainer}>
        <h3 className={classes.Title}>Thank you for your order :) </h3>
        {pizza !== "" ? (
          <motion.p variants={childVariant}>
            you order ( {pizza.base} ){" "}
            {pizza.toppings.length != 0 ? "with these adds" : "with no adds"}
          </motion.p>
        ) : (
          ""
        )}
        {
          <div>
            {pizza.toppings.map((ele) => (
              <motion.div
              variants={childVariant}
              >{ele}</motion.div>
            ))}
          </div>
        }
      </div>
    </motion.div>
  );
};

export default Order;
