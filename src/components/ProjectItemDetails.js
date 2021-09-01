import { useEffect, useState } from "react"
import BlogItem from "./BlogItem"
function ProjectItemDetails (props){
    const {match} = props 
    const {params} = match
    const {id} = params
     const [projects,setProjects] = useState({})

   

    useEffect(() => {
        async function fetchDetails (){
            const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
            const data = await response.json()
            const updatedData = {
                author : data.author,
                imageUrl : data.image_url,
                title : data.title,
                topic : data.topic,
                avatarUrl : data.avatar_url,
                content : data.content
            }
            setProjects(updatedData)
        }
            fetchDetails();
    },[id])

    return(
        <div>
            <BlogItem  project = {projects}/>
           
        </div>
      
    )

}
export default ProjectItemDetails