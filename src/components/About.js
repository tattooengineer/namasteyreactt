import ClassComp from "./ClassComp"
import useStatus from "../utilities/useStatus";
import { useState } from "react";

const About = () =>{
    const statusNew = useStatus();
    const [newvar , setnewvar] = useState("")
if(statusNew === false) return <h1>Looks like you are offline bro !</h1>
    return(
        <div>
            <p>About us</p>
            <ClassComp name={"lakshay"}/>
            <ClassComp name={"mayank"}/>
            <ClassComp name={"misha"}/>
        </div>
    )
}
export default About