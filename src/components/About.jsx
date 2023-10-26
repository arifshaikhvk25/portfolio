import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from "../utils/motion"
import { hocSectionWrapper } from '../hoc';

const  ServicesCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full " >

      <motion.div variants={fadeIn( "right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ' >

          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text=[20px] font-bold text-center '> {title} </h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >    {/* variants={textVariant()} these are in utils/motion */}
      <p className={styles.sectionSubText} >Introduction</p>
      <h2 className={styles.sectionHeadText} >Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ' >   {/* variants={fadeIn("", "", 0.1, 1)} these are in utils/motion */}
    A self taught developer from a non tech background currently focused on frontend development building responsive applications while learning backend technologies seeking an entry-level full-time position to further enhance my skills and knowledge. in an organization that offers good growth prospects I completed a 4-month software development internship, worked as a Shopify developer and learned about Shopify Liquid.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 ' >

      {
        services.map(( eachservice, index ) =>{
          return(
              // <ServicesCard key={eachservice.title} index={index} {...eachservice} />
              <ServicesCard key={eachservice.title} index={index} {...eachservice} />
          )
        })
      }

    </div>

    </>
  )
}

// export default About 
export default hocSectionWrapper(About, "about");

