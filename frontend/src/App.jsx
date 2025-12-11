import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import NewMedia from "./pages/NewMedia";
import Director from "./pages/Director";
import Producer from "./pages/Producer";
import Type from "./pages/Type";
import Medialayout from "./pages/MediaLayout";
import { MediaDetails } from "./components/MediaDetails";
import NoFound from "./pages/NoFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminUsers from "./pages/AdminUsers";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col bg-primary-default text-colortext-default font-lexend">
        <Routes>
          <Route
            element={<ProtectedRoute redirectPath={"/register"} />}
          >
            <Route path="/media" element={<Medialayout />} />
            <Route path="/media/:id" element={<MediaDetails />} />
            <Route path="/editMedia/:id" element={<NewMedia />} />
            <Route path="/createMedia" element={<NewMedia />} />
            <Route path="/director" element={<Director></Director>} />
            <Route path="/genre" element={<Genre></Genre>} />
            <Route path="/producer" element={<Producer></Producer>} />
            <Route path="/type" element={<Type></Type>} />
            <Route path="/user-managment" element={<AdminUsers />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<Medialayout />} />
          </Route>
          {/* Rutas públicas */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;
