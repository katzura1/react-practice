import {Routes, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import BlogDetail from './pages/BlogDetail';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <h1 className='web-title'>Blog News</h1>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/blog" className='nav-item'>Blog</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
        <Link to="/profile" className='nav-item'>Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blog/:blogId" element={<BlogDetail/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="error404" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
