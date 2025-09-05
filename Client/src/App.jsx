// // import P_landing from './pages/P_landing' 
// import React from 'react'
// import P_user from './pages/P_user'

// const App = () => {
//   return (
//     <div>
//       {/* <P_landing/> */}
//       <P_user/>
//     </div>
//   )
// }

// export default App


import { Routes, Route, Link } from "react-router-dom"
import P_landing from "./pages/P_landing" 
import P_user from "./pages/P_user" 
import P_harga from "./pages/P_harga" 
import P_tentang from "./pages/P_tentang" 

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* default kalau url tidak ditemukan */}
        <Route path="*" element={<h2>404 - Halaman tidak ditemukan</h2>} />
      </Routes>
    </div>
  )
}

export default App
