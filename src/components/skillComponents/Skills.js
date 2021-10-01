import React,{useState} from 'react';
import {Slides} from "./Slides";
import "./skill.css"

function Skills({slides})
{
    const [current,setCurrent]=useState(0);
    const length=slides.length;
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    }

    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
    return (
        <section className="slider">
            <button className="left-arrow fas fa-arrow-alt-circle-left" onClick={prevSlide} />
            <button className="right-arrow fas fa-arrow-alt-circle-right" onClick={nextSlide}/>
            {Slides.map
                ((skill, index)=>
                    {
                        return(
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index===current &&
                                    (
                                        <div className="slider__item">
                                            <p >{skill.value+":"}</p>
                                            {skill.languages.map
                                                (item=>
                                                    <div>
                                                        {item.name ?
                                                            <div className="simpleLanguagesBox"> <p>{item.name+" ("+item.progress+")"}</p>
                                                                <div className="progress">
                                                                    <span className="progress-bar" style={{width:item.progress}}/>
                                                                </div>
                                                            </div>
                                                            :
                                                            item.professional.map
                                                            (pro=>
                                                                    <div className="professionalLanguagesWay" >
                                                                        <p>{pro.name+":"}</p>
                                                                        {pro.talents.map
                                                                            (tool=>
                                                                                    <div className="professionalLanguagesBox">
                                                                                        <p>{tool.name+" ("+tool.progress+")"}</p>
                                                                                        <div className="progress" >
                                                                                            <span className="progress-bar" style={{width:tool.progress}}/>
                                                                                        </div>
                                                                                    </div>
                                                                            )
                                                                        }
                                                                    </div>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                )

            }
        </section>
    )
    }


export default Skills;