import React from 'react'
import "../App.css";
import News1 from './News/News1'
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
                <li><Link to='/News1'><img src={icon01}/></Link></li>
                <li><Link to='/News2'><img src={icon02}/></Link></li>
                <li><Link to='/News3'><img src={icon03}/></Link></li>
                <li><Link to='/News4'><img src={icon04}/></Link></li>
                <li><Link to='/News5'><img src={icon05}/></Link></li>
                <li><Link to='/News6'><img src={icon06}/></Link></li>
                <li><Link to='/News7'><img src={icon07}/></Link></li>
                <li><Link to='/News8'><img src={icon08}/></Link></li>
                <li><Link to='/News9'><img src={icon09}/></Link></li>
                <li><Link to='/News10'><img src={icon10}/></Link></li>
                <li><Link to='/News11'><img src={icon11}/></Link></li>
                <li><Link to='/News12'><img src={icon12}/></Link></li>
                <li><Link to='/News13'><img src={icon13}/></Link></li>
                <li><Link to='/News14'><img src={icon14}/></Link></li>
                <li><Link to='/News15'><img src={icon15}/></Link></li>
                <li><Link to='/News16'><img src={icon16}/></Link></li>
                <li><Link to='/News17'><img src={icon17}/></Link></li>
            </ul>


        </header>

    )
}

export default Nav;