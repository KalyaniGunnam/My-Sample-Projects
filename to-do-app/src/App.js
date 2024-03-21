import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Task from './pages/Task/Task';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Landing/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/signin" element = {<SignIn/>} />
        <Route path="/task" element = {<Task/>} />
      </Routes>
    </Router>
  );
}

export default App;
