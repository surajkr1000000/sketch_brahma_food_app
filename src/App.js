import React from 'react';
import Styles from './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Categories from "./Components/Categories/Categories";
import HomePage from "./Components/HomePage/HomePage";




function App(){

    

        return(
            <div className={Styles.app}>
                <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path="/" element= { <Categories/> }/>
                        <Route exact path="/HomePage" element= {<HomePage/>}/>
                    </Routes>
                </Router>
                
            </div>
        )
    }


export default App;