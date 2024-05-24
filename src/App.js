import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Validation from './Component/Validation';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Validation />} />
        </Routes>
      </div >
    </Router >
  );
}

export default App;
