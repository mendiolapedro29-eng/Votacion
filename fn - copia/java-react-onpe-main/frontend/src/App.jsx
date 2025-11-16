import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Partidos from "./pages/Partidos"; 
import Votar from "./pages/votar/Votar";
import VotoDigital from "./pages/VotoDigital";
import Resultados from "./pages/Resultados";
import Informacion from "./pages/Informacion";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/panelAdmin/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const PublicLayout = () => (
  <>
    <Navbar />
    <main className="flex-grow pt-16">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="partidos" element={<Partidos />} />
          <Route path="votar" element={<Votar />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="voto-digital" element={<VotoDigital />} />
        </Route>
        
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </div>
  );
}

export default App;