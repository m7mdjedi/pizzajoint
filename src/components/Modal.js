import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./Base.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const mainContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  
  },

};
const bobleVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "200px",
    transition: {delay:0.5, ease: "easeInOut" },
  },

};
const Modal = ({showModal}) => {
  return <AnimatePresence exitBeforeEnter> 
    { 
     showModal &&
     <motion.div
           variants={mainContainerVariant}
           initial="hidden"
           animate="visible"
           exit="hidden"
           className={classes.modal}
         >
           <motion.div className={classes.bobleModal} variants={bobleVariant}>
             <h3 className={classes.hTag}>Do you want to order more pizza ? </h3>
             <Link to="/">
               <button className={classes.next}>Order</button>
             </Link>
           </motion.div>
         </motion.div> 
    }
  </AnimatePresence>  
 

    


};

export default Modal;
