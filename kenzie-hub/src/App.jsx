import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainRoutes from "./components/MainRoutes";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<MainRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={800}
        hideProgressBar={true}
      />
    </div>
  );
}

export default App;
