import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Word from './components/Word';
import WordColorBackground from './components/WordColorBackground';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:word" element={<Word/>}/>
        <Route path="/:word/:color/:bgcolor" element={<WordColorBackground/>}/>

      </Routes>

    </div>
  );
}

export default App;
