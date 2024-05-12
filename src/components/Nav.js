import React from 'react'
import classes from './nav.module.css'
import { GiFullPizza } from "react-icons/gi";
import {motion} from 'framer-motion'
const pizzaIcon = { 
  hidden:{ 
    rotate:-180,
    pathLength:0
  },
  visible:{ 
    rotate:0,
    scale:1.5,
    pathLength:1
  }
}
const Nav = () => {
  return (
        <nav className={classes.navBar}> 
            <motion.div 
            variants={pizzaIcon}
            initial="hidden"
            animate="visible"
            drag
            dragConstraints={{top:0,right:0,left:0,bottom:0}}
            className={classes.iconContainer} > 
            <GiFullPizza className={classes.pizzaIcon}  />
            </motion.div> 
            <motion.div className={classes.logoContainer}
              initial={{y:-250}}
              animate={{y:0}}
              transition={{delay:0.2, type:"spring" ,stiffness:100}}
            > 
                    <h1 className={classes.navLogo}>Pizza Order</h1>
            </motion.div>
        </nav>
  )
}

export default Nav
