import React from "react";
import './MyWork.css';
import pattern from '../../assets/pattern.svg';
import mywork_data from "../../assets/workData";
import zuraas from '../../assets/zuraas.svg'

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My project</h1>
                <img src={pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    
                    return <img className="work" key={index} src={work.w_img} alt=""/> 
                    
                    
                })}
                
            </div>
            <div className="mywork-showmore">
                <p>show More</p>
                {/* <img src={zuraas} alt="" /> */}
            </div>
        </div>
    )
}
export default MyWork

