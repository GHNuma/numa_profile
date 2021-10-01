import React, {useState} from 'react';
import Full from "../components/portfolioComponents/Full"

function Portfolio() {

    let [allProjects,setAllProjects] = useState([
        {
            when:"Давние, самые первые работы",
            list:[
                {
                    name:"Esperanze restaurant",
                    img:"Esperanze.png",
                    info:""
                },
                {
                    name:"Rixos hotel",
                    img:"Rixos.png",
                    info:""
                },
                {
                    name:"Ritz-Carlton hotel",
                    img:"Ritz-Carlton.png",
                    info:""
                }
            ]

        },
        {
            when:"Недавние работы",
            list:[
                {
                    name:"Моё портфолио",
                    img:""
                }
            ]

        }
    ])

        return (
            <div className="portfolioWrapper">
                {allProjects.map((projects,index)=>{
                    return <Full key={index} {...projects}/>
                }
                )}
            </div>
        );
    }


export default Portfolio;