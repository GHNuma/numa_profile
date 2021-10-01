import React,{useState} from 'react';

function Full({when,...projects}) {
    const [fullInfo,setFullInfo]=useState(false)
    return (
        <div  className="projectsBtnBlock">
            <button className="projectsBtn"  onClick={() => setFullInfo(!fullInfo)}>{when}</button>
            <div className={fullInfo ? "allProjects" : "allProjects hide" } >
            {projects.list.map((project,index)=>

                    <div className="allProjects-body">
                        <a target="_blank" href={project.info}>{project.name}</a>

                    </div>

            )}
                </div>
        </div>
    );
}

export default Full;