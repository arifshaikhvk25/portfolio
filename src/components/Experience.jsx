import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { hocSectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ eachexperiencecard }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={eachexperiencecard.date}
    iconStyle={{ background: eachexperiencecard.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full" >
        <img src={eachexperiencecard.icon} alt={eachexperiencecard.company_name} className="w-[60%] h-[60%] object-contain " />
      </div>
    }
  >

    <div>
      <h3 className="text-white text-[24px] font-bold ">
        {eachexperiencecard.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold " style={{margin:0}} >
        {eachexperiencecard.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {
        eachexperiencecard.points.map((eachpoints, index) => {
          return(
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider " >
              {eachpoints}
            </li>
          )
        })
      }

    </ul>


  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* variants={textVariant()} these are in utils/motion */}
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((eachexperience, index) => {
            return (
              <ExperienceCard key={index} eachexperiencecard={eachexperience } />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default hocSectionWrapper(Experience, "work");
