import React, {Component} from 'react';
import Book from "../components/courseComponents/Book";
import $ from "jquery";
import "turn.js";

function Courses (){

let myCourses=[
        {
                id:1,
                title:"Пройденные",
                pages:[
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        }
                ]
        },
        {
                id:2,
                title:"В процессе изучения",
                pages:[
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        }
                ]
        },
        {
                id:3,
                title:"Планируются",
                pages:[
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        },
                        {
                                img:"",
                                description:""
                        }
                ]
        }
]

        const options = {
                width: 1500,
                height: 600,
                autoCenter: true,
                display: "double",
                acceleration: true,
                elevation: 50,
                gradients: !$.isTouch,
                when: {
                        turned: function(e, page) {
                                console.log("Current view: ", $(this).turn("view"));
                        }
                }
        };

        const pages = [
                "StartPage.png",
                "HTMLcertificate.png",
                "CSScertificate.png",
                "ResponsiveWebDesigncertificate.png",
                "Marketingcertificate.png",
                "JavaScriptcertificate.png",
                "jQuerycertificate.png",
                "Rcertificate.png"
        ];

        return (
            <div>
                    <br/>
                    <Book options={options} className="certificates">
                            {pages.map((page, index) => (
                                <div key={index} className="page">
                                        <img src={page} alt="" />
                                </div>
                            ))}
                    </Book>
            <br/>
            </div>

        );

}

export default Courses;