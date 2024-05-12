import React, { useState } from "react";
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
  } ,
  exit:{ 
    x:"-100vw" ,
    transition:{ease:"easeInOut" }
  }
}
const nextVariant={ 
  hidden:{ 
     x: "-100vw" 
  },
  visible:{ 
      x: 0 ,
   
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
const Base = ({ pizza, onBaseAdd }) => {
  const baseAr = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (

      <motion.div
        initial="hidden"
        animate="visible"
        variants={mainContainerVariant}
        exit="exit"
        className={classes.mainContainer}
      >
        <div className={classes.TitleContainer}>
          <h3 className={classes.Title}>Step 1: Choose Your Base</h3>
        </div>
        <div className={classes.ListContainer}>
          <ul className={classes.List}>
            {baseAr.map((ele) => (
              <motion.li
                whileHover={{color:"#f8e122" ,originX:0,scale:1.3}}
                transition={{type:'spring' ,stiffness:300}}
                className={`${classes.ListItem} ${
                  pizza.base === ele ? classes.Bold : ""
                }`}
                onClick={onBaseAdd.bind(null, ele)}
              >
                {pizza.base === ele && ">"} {ele}
              </motion.li>
            ))}
          </ul>
        </div>
        {pizza.base !== "" ? (
          <motion.div
          variants={nextVariant}
            className={classes.nextContainer}
          >
            <Link to={"/Toppings"}>
              <motion.button
                 className={classes.next}
                 variants={buttonVariant}
                whileHover="hover"
              >
                next
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
 
  );
};

export default Base;
