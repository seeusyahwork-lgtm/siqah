import P_landing from "./pages/P_landing" 
import P_user from "./pages/P_user" 
import P_harga from "./pages/P_harga" 
import P_tentang from "./pages/P_tentang" 
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<P_landing />} />
        <Route path="/about" element={<P_tentang />} />
        <Route path="/harga" element={<P_harga />} />
        <Route path="/user" element={<P_user />} />
        {/* default kalau url tidak ditemukan */}
        <Route path="*" element={<h2>404 - Halaman tidak ditemukan</h2>} />
      </Routes>
    </div>
  )
}

export default App
