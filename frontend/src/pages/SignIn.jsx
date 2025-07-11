import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";




function SignIn() {
    const [formData , setFormData] = useState({email : "" , password : ""})
    const {isSigningIn , signin , isforgetPasswordPage} = useAuthStore();
    const validateForgetPassword = () => {
         
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        return true;

    }

    const handleForgerPass = () => {
        const success = validateForgetPassword();

        if(success === true ) {
            forgetPassowrd(formData)

        }
    }


      

         const validateForm = () => { 
        
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
    
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    
        console.log("reacher bootmo")
    
        return true;
       }

       const handleSubmit = async () => {
          const success = validateForm();

          if(success === true ) {
          
           await  signin(formData);
          
          } 
       }

    return <>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          CareTrackr    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e) => { setFormData({...formData , email : e.target.value})}} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" onChange={(e) => { setFormData({...formData , password : e.target.value})}} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember"  aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                    <button
                    type="submit"
                    disabled={isSigningIn}
                    onClick={handleSubmit}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center gap-2"
                    >
                    {isSigningIn ? (
                        <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Loading...</span>
                        </>
                    ) : (
                        "LogIn"
                    )}
                    </button>                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     Create new Account <Link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
}

export default SignIn