import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Explanation"
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


import { NewscontextProvider } from './NewsContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
    

    const News1P = () => {
      return (
        <NewscontextProvider>
        <News1 />
        </NewscontextProvider>
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
      <NewscontextProvider>
      <News3 />
      </NewscontextProvider>
    )
　　　}

const News4P = () => {
    return (
      <NewscontextProvider>
      <News4 />
      </NewscontextProvider>
    )
　　　}

const News5P = () => {
    return (
      <NewscontextProvider>
      <News5 />
      </NewscontextProvider>
    )
　　　}

const News6P = () => {
    return (
      <NewscontextProvider>
      <News6 />
      </NewscontextProvider>
    )
　　　}

const News7P = () => {
    return (
      <NewscontextProvider>
      <News7 />
      </NewscontextProvider>
    )
　　　}

const News8P = () => {
    return (
      <NewscontextProvider>
      <News8 />
      </NewscontextProvider>
    )
　　　}

const News9P = () => {
    return (
      <NewscontextProvider>
      <News9 />
      </NewscontextProvider>
    )
　　　}

const News10P = () => {
    return (
      <NewscontextProvider>
      <News10 />
      </NewscontextProvider>
    )
　　　}

const News11P = () => {
    return (
      <NewscontextProvider>
      <News11 />
      </NewscontextProvider>
    )
　　　}

const News12P = () => {
    return (
      <NewscontextProvider>
      <News12 />
      </NewscontextProvider>
    )
　　　}
　　　
const News13P = () => {
    return (
      <NewscontextProvider>
      <News13 />
      </NewscontextProvider>
    )
　　　}

const News14P = () => {
    return (
      <NewscontextProvider>
      <News14 />
      </NewscontextProvider>
    )
　　　}

const News15P = () => {
    return (
      <NewscontextProvider>
      <News15 />
      </NewscontextProvider>
    )
　　　}

const News16P = () => {
    return (
      <NewscontextProvider>
      <News16 />
      </NewscontextProvider>
    )
　　　}

const News17P = () => {
    return (
      <NewscontextProvider>
      <News17 />
      </NewscontextProvider>
    )
　　　}

const MainP = () => {
  return(
    <Main />
  )
}

function App() {
  return (
      <div>
      <BrowserRouter>
      
        <Nav />
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