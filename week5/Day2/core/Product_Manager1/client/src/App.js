import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Product from './components/Product';
import Update from './components/Update';
import DisplayAllProducts from './components/DisplayAllProducts';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main view */}
      <Route path="/" element={<Form />} default />
      {/* Read All */}
      <Route path="/products" element={<DisplayAllProducts/>}/>
      {/* get one Product */}
      <Route path="/products/:id" element={<Product />} />

      {/* Update  */}
      <Route path="/products/edit/:id" element={<Update />} />
          
      </Routes>
    </div>
  );
}

export default App;
