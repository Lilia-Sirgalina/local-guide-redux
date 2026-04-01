import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import './App.css'
import Home from './Home';
import Beaches from './Beaches';
import Restaurants from './Restaurants';
import Barcelona from './Barcelona';
import ActiveAndNature from './ActiveAndNature';
import Shopping from './Shopping';
import Layout from './Layout';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/barcelona" element={<Barcelona />} />
          <Route path="/active" element={<ActiveAndNature />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
