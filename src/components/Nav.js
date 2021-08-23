import React from 'react'
import "../App.css";
import News from './News'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import icon01 from './itemData/icon01.png'
import icon02 from './itemData/icon02.png'
import icon03 from './itemData/icon03.png'
import icon04 from './itemData/icon04.png'
import icon05 from './itemData/icon05.png'
import icon06 from './itemData/icon06.png'
import icon07 from './itemData/icon07.png'
import icon08 from './itemData/icon08.png'
import icon09 from './itemData/icon09.png'
import icon10 from './itemData/icon10.png'
import icon11 from './itemData/icon11.png'
import icon12 from './itemData/icon12.png'
import icon13 from './itemData/icon13.png'
import icon14 from './itemData/icon14.png'
import icon15 from './itemData/icon15.png'
import icon16 from './itemData/icon16.png'
import icon17 from './itemData/icon17.png'



function Nav () {
    return(
        <header>
            <h1>SDGs News</h1>
            <ul className='img'>
                <li><Link to='/News'><img src={icon01} /></Link></li>
                <li><img src={icon02}/></li>
                <li><img src={icon03}/></li>
                <li><img src={icon04}/></li>
                <li><img src={icon05}/></li>
                <li><img src={icon06}/></li>
                <li><img src={icon07}/></li>
                <li><img src={icon08}/></li>
                <li><img src={icon09}/></li>
                <li><img src={icon10}/></li>
                <li><img src={icon11}/></li>
                <li><img src={icon12}/></li>
                <li><img src={icon13}/></li>
                <li><img src={icon14}/></li>
                <li><img src={icon15}/></li>
                <li><img src={icon16}/></li>
                <li><img src={icon17}/></li>
            </ul>


        </header>

    )
}

export default Nav;