import "./Header.css"
const BlogItem = props => {
    console.log(props)
    const {project} = props
    const {title,content,topic,imageUrl,avatarUrl} = project

    return(
        <div className = "item-container">
            <p>{title}</p>
            <p>{topic}</p>
            <img src = {imageUrl} alt = "BlogImage" className = "project-image"/>
            <p>{content}</p>
            <img src = {avatarUrl} alt = "avatarImage" className = "avatar"/>
            
        </div>
    )

}
export default BlogItem