import React, {useState} from 'react';
import CareerModel from "./CareerModel";

function Career({name,...otherJobs}) {

const [isOpen,setIsOpen]=useState(false)


    return (
        <div className="workWrapper" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%"
        }}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <button style={{border: 0}} className="workPlaceNameText"
                                onClick={() => setIsOpen(true)}>{name}</button>
                        <span className="line"/>
                        <CareerModel isOpen={isOpen} setIsOpen={setIsOpen} {...otherJobs} />
                    </div>

        </div>
    );
}

export default Career;
