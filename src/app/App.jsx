import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/NavBar.jsx'
import Footer from '../Components/Footer.jsx'
import ScrollToTop from '../Components/ScrollToTop.jsx'
import Home from '../pages/Home.jsx'
import Blog from '../pages/Blog.jsx'
import BlogPost from '../pages/BlogPost.jsx'
import About from '../pages/About.jsx'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
