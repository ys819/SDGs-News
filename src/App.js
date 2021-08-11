import './App.css';
import Main from "./components/Main"
import { NewscontextProvider } from './NewsContext';
import "./App.css";

function App() {
  return (
    <NewscontextProvider>
       <Main />
    </NewscontextProvider>
  );
}

export default App;