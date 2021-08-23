import './App.css';
import Main from "./components/Main";
import News from "./components/News"
import { NewscontextProvider } from './NewsContext';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


        
        
    
    

    const News1 = () => {
      return (
        <NewscontextProvider>
        <News />
        </NewscontextProvider>
      )
  
}
function App() {
  return (
      <div>
      <BrowserRouter>
      
        <Main />
        <Route path='/News' component={News1} />
      </BrowserRouter>
      </div>
    
 

    
  );
}

export default App;