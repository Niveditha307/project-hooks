import {Link} from "react-router-dom"
import "./Header.css"
const  ProjectItem = props => {
const {projectDetails} = props 
const {avatarUrl,imageUrl,topic,title,author,id} = projectDetails

return(
  <Link to ={ `/blogs/${id}`} className = "item-container">  <div >
        <p>{title}</p>
        <p>{topic}</p>
       <img src = {imageUrl} alt = "ProjectImage" className = "project-image"/>
       <p>{author}</p>
       <img src = {avatarUrl} alt = "avatarImage" className = "avatar"/>
        
    </div></Link>
)

}
export default ProjectItem