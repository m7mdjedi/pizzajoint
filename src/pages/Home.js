import React from "react";
import classes from "../components/Home.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

const mainContainerVariant={ 
  hidden:{ 
   opacity:0,
  },
  visible:{ 
    opacity:1,
    transition:{delay:1.5 , duration:1.5 }
  } ,
  exit:{ 
    x:"-100vw" ,
    transition:{ease:"easeInOut" }
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
const Home = () => {
  return (
  
      <motion.div className={classes.mainContainer}
        variants={mainContainerVariant}
        initial="hidden"
        animate='visible' 
        exit="exit"
      >
        <div className={classes.mainContainerTitleContainer}>
          <motion.h1
            animate={{ fontSize: 50, color: "#ff2994" }}
            className={classes.mainContainerTitle}
          >
            Welcome To Pizza Order
          </motion.h1>
        </div>
        <div className={classes.mainContainerOrderContainer}>
          <Link to={"/Base"}>
            <motion.button 
             className={classes.mainContainerOrder}
             variants={buttonVariant}
            whileHover="hover"
            >Create your Pizza</motion.button>
          </Link>
        </div>
      </motion.div>
  
  );
};

export default Home;
