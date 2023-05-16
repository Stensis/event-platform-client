import HomePage from "./Homepage";
import Footer from "./footer";
import Navbar from "./navbar";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./registrationForm";
import LoginForm from "./LoginForm";
import AuthPage from "./authPage";

function App() {
  return (
    <>
      <AuthPage />
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Other routes */}
      </Routes>
    </>
  );
}

export default App;
