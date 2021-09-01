import {Link} from "react-router-dom"
import {Component} from "react"

import "./Header.css"

class Header extends Component{
    render(){
    return(
        <div >
            <div className = "header-container">
            <h1>Project Case Study</h1>
            </div>
            <div className = "header-list-container">
                <ul className = "header-list">
                  <Link to = "/"> 
                   <li className = "list-item">Home</li>            
                   </Link>
                    <li className = "list-item">About</li>
                    <li className = "list-item">Contact</li>
                </ul>
            </div>
           

        </div>
    )

}
}

export default Header