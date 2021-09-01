import {useEffect, useState} from "react"
import ProjectItem from "./ProjectItem"
function ProjectList (){
    const [projectList ,setProjectList] = useState([])

    async function fetchProject(){
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        const updatedData = data.map(eachData => ({
            author : eachData.author,
            avatarUrl : eachData.avatar_url,
            id : eachData.id,
            imageUrl : eachData.image_url,
            title:eachData.title,
            topic : eachData.topic
        }))

        setProjectList(updatedData)
       
        

    }
    useEffect(() => {
        fetchProject();
    },[])

    
    return(
    
    <div>
        {projectList.map(eachProject =>(
            <ProjectItem  projectDetails = {eachProject} key = {eachProject.id}/>
        )  
        )}
    </div>
    )
}
export default ProjectList