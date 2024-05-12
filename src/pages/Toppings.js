import React from "react";
import classes from "../components/Base.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
const mainContainerVariant={ 
  hidden:{ 
   x: "100vw" 
  },
  visible:{ 
    x: 0 ,
    transition:{ type: "spring", delay: 0.5 },
  },
  exit:{ 
    x:"-100vw" ,
    
  }
}
const buttonVariant = { 
  hover:{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition:{ 
      duration:0.3,
      yoyo:Infinity
    }
  }
}
const Toppings = ({ onTopAdd, pizza }) => {
  const toppingsAr = [
    "Mushrooms",
    "Tomato",
    "Union",
    "Olivs",
    "extra cheese",
    "pepper",
  ];
  return (

      <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mainContainerVariant} 
      className={classes.mainContainer}>
        <div className={classes.TitleContainer}>
          <h3 className={classes.Title}>Step 2:Choose Toppings</h3>
        </div>
        <div className={classes.ListContainer}>
          <ul className={classes.List}>
            {toppingsAr.map((ele) => (
            <motion.li
            whileHover={{color:"#f8e122" ,originX:0,scale:1.3}}
                className={`${classes.ListItem} ${
                  pizza.toppings.includes(ele) ? classes.Bold : ""
                }`}
                transition={{type:'spring' ,stiffness:300}}
                onClick={onTopAdd.bind(null, ele)}
              >
                {pizza.toppings.includes(ele) && ">"} {ele}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className={classes.nextContainer}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link to={"/Order"}>
            <motion.button
              className={classes.next}
              variants={buttonVariant}
              whileHover="hover"
            >
              Order
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
 
  );
};

export default Toppings;
