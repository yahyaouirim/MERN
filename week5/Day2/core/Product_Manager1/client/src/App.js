import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main view */}
      <Route path="/" element={<Form />} />
      {/* get one Product */}
      <Route path="/products/:id" element={<Product />} />


          
      </Routes>
    </div>
  );
}

export default App;
