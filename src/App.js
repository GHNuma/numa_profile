import React, {useState} from "react"
import Menu from "./components/menuComponents/Menu";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Courses from "./Pages/Courses";
import Portfolio from "./Pages/Portfolio";
import Footer from "./components/footerComponents/Footer";
import Header from "./components/headerComponents/Header";



const App = ()=> {
    const [menuActive,setMenuActive] = useState(false)

    const items = [
        {
            value:"О себе",
            href:"/aboutMe",
            icon:"account_box"
        },
        {
            value:"Опыт работы",
            href:"/experience",
            icon:"business_center"
        },
        {
            value:"Курсы и семинары",
            href:"/courses",
            icon:"sentiment_very_satisfied"
        },
        {
            value:"Портфолио",
            href:"/portfolio",
            icon:"layers"
        }

    ]

    return(
        <>
            <Router>
                        <nav style={{backgroundColor:"rgba(182,197,200,0.79)"}}>

                            <div className="burger-btn" onClick={()=>setMenuActive(!menuActive)}>
                                <span/>
                            </div>
                            &nbsp;
                            &nbsp;
                            <Header/>
                            <Menu active={menuActive} setActive={setMenuActive} header={"Меню"} items={items}/>
                        </nav>


                <Switch>
                    <Route exact path="/"><AboutMe/></Route>
                    <Route exact path="/aboutMe"><AboutMe/></Route>
                    {/*Странный момент, я сначало ссылку на домашнюю страницу оставил, но когда нажимал на О себе в меню открывалась ссылка
                    на /aboutme. Это все логично и понятно, но там было пусто, выходит она не считалась на домашнюю страницу. Поэтому мне пришлось
                    добавить два роута по разным ссылкам, но с одним компенентом*/}
                    <Route exact path="/experience"><Experience/></Route>
                    <Route exact path="/courses"><Courses/></Route>
                    <Route exact path="/portfolio"><Portfolio/></Route>
                </Switch>
                <footer className="page-footer">
                    <Footer/>
                </footer>
            </Router>
        </>
    );

};

export default App;