import { BallCanvas } from "./canvas"
import { hocSectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10" >
      {
        technologies.map((eachtechnology, index) =>{
          return(
            <div className=" w-28 h-28" key={index} > 
              <BallCanvas icon={eachtechnology.icon} />
            </div>
          )
        })
      }

    </div>
  )
}

export default Tech