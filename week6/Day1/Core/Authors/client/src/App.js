import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path ="/" element={<Dashboard/>} />
        <Route path="/authors/new" element={<Create/>} />
        <Route path="/authors/:id/edit" element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
