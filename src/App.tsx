import { Route, Routes, Outlet, Link } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Shop from './pages/Shop/Shop';
// import WelcomeOld from './pages/Welcome/WelcomeOld';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/products' element={<Shop />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
