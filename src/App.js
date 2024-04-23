import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddOrder from './pages/AddOrder';
import EditOrder from './orders/EditOrder';
import ViewOrder from './orders/ViewOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addorder" element={<AddOrder />} />
          <Route exact path="/editorder/:id" element={<EditOrder/>}/>
          <Route exact path="/vieworder/:id" element={<ViewOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
