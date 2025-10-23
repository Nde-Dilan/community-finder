import React from "react"; 
import { motion } from "framer-motion";
 
export default function TripleStripeLine({ 
  width = "w-full", 
  height = "h-2", 
  className = "", 
  colors = ["bg-blue-500", "bg-white", "bg-red-500"], 
  vertical = false, 
}) { 
  const containerDirection = vertical ? "flex-col" : "flex"; 

  const underlineVariants = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
 
  return ( 
    <motion.div 
      variants={underlineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={`${width} ${height} ${containerDirection} overflow-hidden rounded-full ${className}`} 
      role="img" 
      aria-label="Three stripe line: blue, white and red" 
    > 
      <div className={`flex-1 ${colors[0]}`} /> 
      <div className={`flex-1 ${colors[1]}`} /> 
      <div className={`flex-1 ${colors[2]}`} /> 
    </motion.div> 
  ); 
} 
 
/* Example usages: 
 
<TripleStripeLine /> 
<TripleStripeLine width="w-48" height="h-1" /> 
<TripleStripeLine vertical width="w-2" height="h-40" /> 
<TripleStripeLine colors={["bg-sky-600", "bg-white", "bg-rose-600"]} /> 
*/