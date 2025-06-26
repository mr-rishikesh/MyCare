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
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

import { initFlowbite } from 'flowbite';
import { Home } from "./pages/Home";



function App() {

   const {authUser , checkAuth , isCheckingAuth} = useAuthStore()


  useEffect(() => {
    checkAuth()
    initFlowbite();
  } , [checkAuth])

  console.log({authUser})
  if(isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader  className='size-10 animate-spin'/>
      </div>
    )
  }
 
 

  return (<>
   
    
   
          
        
   
    
      <BrowserRouter>
       <Navbar/>
      
     
 
      <Routes>
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> :  <SignupRoute/>} />
        <Route path="/signin" element={authUser ? <Navigate to="/home" /> :  <SignIn/>} />
        <Route path="/home" element={authUser ?   <Home/>: <Navigate to="/signin" />} />
        <Route path="/profile" element={authUser ?   <Profile/>: <Navigate to="/signin" />} />

      </Routes>
    </BrowserRouter> 
    <Toaster />
    </>)
  
}

export default App
