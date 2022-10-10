import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const success = (message) => {
    toast.success(message);
  };
  const fail = (message) => {
    toast.error(message);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage success={success} fail={fail} />} />
        <Route
          path="/register"
          element={<RegisterPage success={success} fail={fail} />}
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
