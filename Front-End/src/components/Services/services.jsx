import React from "react";
import './services.css'

import Services_Data from "../../../public/data";
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {

    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src="" alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={ index} className="services-format">
                        <h3>{service.b_no}</h3>
                        <h2>{ service.b_name}</h2>
                        <p>{ service.b_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}
export default Services

