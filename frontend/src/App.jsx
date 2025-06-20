import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOpt";
import ChangePassword from "./pages/ChangePassword";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
import SignupRoute from "./pages/SignupRoute";
import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";

function App() {
   const {authUser , checkAuth , isCheckingAuth} = useAuthStore()
  

  useEffect(() => {
    checkAuth()
  } , [checkAuth])

  console.log({authUser})
  if(isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader  className='size-10 animate-spin'/>
      </div>
    )
  }
 
 

  return (
  
    <>
    {/* <ChangePassword/>
    <VerifyOtp/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> :  <SignupRoute/>} />
        <Route path="/signin" element={authUser ? <Navigate to="/" /> :  <SignIn/>} />
        <Route path="/" element={authUser ? <Landing />  : <Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter> 
    <Toaster />
    </>
  );
}

export default App;
