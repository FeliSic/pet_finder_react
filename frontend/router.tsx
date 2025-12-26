import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHeader from "./components/header/Header";
import Home from "./pages/pageHome/Home/Home";
import Register from "./pages/pageLogin/Register/Register";
import Login from "./pages/pageLogin/InicioSesion/Session"; // Importá el componente Login
import Menu from "./pages/pageProfile/pageMenu/menu"
import ChangePassword from "pages/pageProfile/PageContraseña/contraseña";
import ChangeData from "pages/pageProfile/pageDatosPersonales/Data";
import MyReports from "pages/pageMisreports/pageMisreportes/MisReportes";
import Report from "pages/pageMisreports/pageReportar/Reporting";
import EditReport from "pages/pageMisreports/pageReportar/EditReporting";
import MyMessages from "components/Messages/messages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHeader />}>
          <Route path="register" element={<Register />} /> {/* Ruta para registro */}
          <Route path="login" element={<Login />} /> {/* Ruta para login */}
          <Route path="home" element={<Home />} /> {/* Ruta para home */}
          <Route path="menu" element={<Menu />} /> {/* Ruta para Menú */}
          <Route path="change-password" element={<ChangePassword />} /> {/* Ruta para Change password */}
          <Route path="change-data" element={<ChangeData />} /> {/* Ruta para Change data */}
          <Route path="Myreports" element={<MyReports />} /> {/* Ruta para obtener mis mascotas */}
          <Route path="reporting" element={<Report />} /> {/* Ruta para Crear mascota */}
          <Route path="edit-pet/:petId" element={<EditReport />} /> {/* Ruta para Editar mascota */}
          <Route path="messages" element={<MyMessages />} /> {/* Ruta para Mis Mensajes */}
          <Route index element={<Register />} /> {/* Ruta raíz redirige a register */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
//<Route path="search/:query" element={<App2 />} />