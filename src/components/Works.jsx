import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { hocSectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, source_code_link1 }) =>{
  return(
   <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}  >
      <Tilt options={{max:45, scale:1, speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[100%] w-full "  >

      {/* <div className="relative wfull h-[230px]" >
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        

        <div className="absolute flex justify-end inset-0 m-3 card-img_hover "> */}

          {/* <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " >
            <img src={github} alt="github" className=" w-1/2 h-1/2 object-contain " />
          </div> */}
          {/* <div onClick={() => { window.open(source_code_link1, "blank") }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " >
            <img src={github} alt="github" className=" w-1/2 h-1/2 object-contain " />
            Live
          </div> */}

        {/* </div>
      </div> */}

        <div className="mt-5  ">
          {/* <h3 className="text-white font-bold text-[24px] " >{name}</h3> */}
          <p className="mt2 text-secondary font-bold text-[24px] " > {description} </p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2  ">
          {
            tags.map((eachtag) =>(
              <p key={eachtag.name} className={`text-[14px] ${eachtag.color}`}  >
                #{eachtag.name}
              </p>
            ))
          }

        </div>

      </Tilt>
   </motion.div>
  )

}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      {/* <div className="w-full flex justify-center items-center ">

        <motion.p variants={fadeIn("", "", 0.1, 1)} className=" mt-3 text-secondary text-[17px] max-w-[70rem] leading-[30px] text-center  " >
         Explore a selection of my projects that provide a glimpse into my skills and expertise. Each project comes with a brief description and includes links to the code repository and live demos. It's all about how I tackle challenges, use different tech, and manage projects effectively.
        </motion.p>

 
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7  " >
          {
            projects.map((eachprojects, index) =>{
              return(
                <ProjectCard key={`eachproject-${index} `} index={index} {...eachprojects}  />
              )
            })
          }
        </div>

    </>
  )
}

export default hocSectionWrapper(Works, "") 