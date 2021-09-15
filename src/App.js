import './App.css';
import NavRes from "./components/NavRes";
import Explanation from "./components/Explanation"
import News1 from "./components/News/News1"
import News2 from "./components/News/News2"
import News3 from "./components/News/News3"
import News4 from "./components/News/News4"
import News5 from "./components/News/News5"
import News6 from "./components/News/News6"
import News7 from "./components/News/News7"
import News8 from "./components/News/News8"
import News9 from "./components/News/News9"
import News10 from "./components/News/News10"
import News11 from "./components/News/News11"
import News12 from "./components/News/News12"
import News13 from "./components/News/News13"
import News14 from "./components/News/News14"
import News15 from "./components/News/News15"
import News16 from "./components/News/News16"
import News17 from "./components/News/News17"


import { NewscontextProvider } from './components/NewsContext/NewsContext2';
import { NewscontextProvider1 } from './components/NewsContext/NewsContext1';
import { NewscontextProvider3 } from './components/NewsContext/NewsContext3';
import { NewscontextProvider4 } from './components/NewsContext/NewsContext4';
import { NewscontextProvider5 } from './components/NewsContext/NewsContext5';
import { NewscontextProvider6 } from './components/NewsContext/NewsContext6';
import { NewscontextProvider7 } from './components/NewsContext/NewsContext7';
import { NewscontextProvider8 } from './components/NewsContext/NewsContext8';
import { NewscontextProvider9 } from './components/NewsContext/NewsContext9';
import { NewscontextProvider10 } from './components/NewsContext/NewsContext10';
import { NewscontextProvider11 } from './components/NewsContext/NewsContext11';
import { NewscontextProvider12 } from './components/NewsContext/NewsContext12';
import { NewscontextProvider13 } from './components/NewsContext/NewsContext13';
import { NewscontextProvider14 } from './components/NewsContext/NewsContext14';
import { NewscontextProvider15 } from './components/NewsContext/NewsContext15';
import { NewscontextProvider16 } from './components/NewsContext/NewsContext16';
import { NewscontextProvider17 } from './components/NewsContext/NewsContext17';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
    

    const News1P = () => {
      return (
        <NewscontextProvider1>
        <News1 />
        </NewscontextProvider1>
      )
　　　}

　　　 const News2P = () => {
    return (
      <NewscontextProvider>
      <News2 />
      </NewscontextProvider>
    )
　　　}
const News3P = () => {
    return (
      <NewscontextProvider3>
      <News3 />
      </NewscontextProvider3>
    )
　　　}

const News4P = () => {
    return (
      <NewscontextProvider4>
      <News4 />
      </NewscontextProvider4>
    )
　　　}

const News5P = () => {
    return (
      <NewscontextProvider5>
      <News5 />
      </NewscontextProvider5>
    )
　　　}

const News6P = () => {
    return (
      <NewscontextProvider6>
      <News6 />
      </NewscontextProvider6>
    )
　　　}

const News7P = () => {
    return (
      <NewscontextProvider7>
      <News7 />
      </NewscontextProvider7>
    )
　　　}

const News8P = () => {
    return (
      <NewscontextProvider8>
      <News8 />
      </NewscontextProvider8>
    )
　　　}

const News9P = () => {
    return (
      <NewscontextProvider9>
      <News9 />
      </NewscontextProvider9>
    )
　　　}

const News10P = () => {
    return (
      <NewscontextProvider10>
      <News10 />
      </NewscontextProvider10>
    )
　　　}

const News11P = () => {
    return (
      <NewscontextProvider11>
      <News11 />
      </NewscontextProvider11>
    )
　　　}

const News12P = () => {
    return (
      <NewscontextProvider12>
      <News12 />
      </NewscontextProvider12>
    )
　　　}
　　　
const News13P = () => {
    return (
      <NewscontextProvider13>
      <News13 />
      </NewscontextProvider13>
    )
　　　}

const News14P = () => {
    return (
      <NewscontextProvider14>
      <News14 />
      </NewscontextProvider14>
    )
　　　}

const News15P = () => {
    return (
      <NewscontextProvider15>
      <News15 />
      </NewscontextProvider15>
    )
　　　}

const News16P = () => {
    return (
      <NewscontextProvider16>
      <News16 />
      </NewscontextProvider16>
    )
　　　}

const News17P = () => {
    return (
      <NewscontextProvider17>
      <News17 />
      </NewscontextProvider17>
    )
　　　}

const MainP = () => {
  return(
    <Explanation />
  )
}

function App() {
  return (
      <div>
      <BrowserRouter>
      
        <NavRes />
        <div className='News'>
        <Route path='/News1' component={News1P} />
        <Route path='/News2' component={News2P} />
        <Route path='/News3' component={News3P} />
        <Route path='/News4' component={News4P} />
        <Route path='/News5' component={News5P} />
        <Route path='/News6' component={News6P} />
        <Route path='/News7' component={News7P} />
        <Route path='/News8' component={News8P} />
        <Route path='/News9' component={News9P} />
        <Route path='/News10' component={News10P} />
        <Route path='/News11' component={News11P} />
        <Route path='/News12' component={News12P} />
        <Route path='/News13' component={News13P} />
        <Route path='/News14' component={News14P} />
        <Route path='/News15' component={News15P} />
        <Route path='/News16' component={News16P} />
        <Route path='/News17' component={News17P} />
        <Route exact path='/' component={MainP} />
        </div>
      </BrowserRouter>
      </div>
    
 

    
  );
}

export default App;