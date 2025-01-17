import {RiReactjsLine} from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion";
import { FaBootstrap } from "react-icons/fa6";


const iconVariants = (duration) =>({
    initial: {y: -10},
   animate: {
    y: [10, -10],
    transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
    },
   },
  });

const Technologies = () => {
  return (
    <div className="borber-b border-neutral-800 pb-10">
       <motion.h1 whileInView={{opacity:1, y:0}} 
       initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
       <motion.div whileInView={{opacity:1, x:0}} 
       initial={{opacity: 0, x: -100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
       <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            <SiCplusplus className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            < FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            < DiCss3 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            < SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            < RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            < FaBootstrap className="text-7xl text-neutral-300" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="roumded-2xl border-4 border-neutral-800 p-4 ">
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
       </motion.div>
    </div>
  );
}

export default Technologies;
