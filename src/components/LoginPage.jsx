import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <>
      <form action="" className="flex min-h-screen w-full items-center justify-center p-4">
        <div className="box-border flex w-full min-w-0 max-w-md flex-col items-center justify-center gap-3 rounded-3xl border-2 border-blue-300 bg-blue-200 p-4 sm:p-8">
          <div>
             <img src="src/assets/mzumbelogo1.jpg" alt="Mzumbe Logo" className="h-20 w-20 rounded-2xl"/>
          </div>
          <div>
            <h1 className="text-2xl font-serif">WELCOME BACK</h1>
          </div>
          <div className="flex w-full min-w-0 flex-col gap-2">
            <label htmlFor="username" className="text-xl font-serif">Username</label>
            <div className="relative w-full min-w-0">
              <img src="src/assets/profile.png" alt="" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"/>
              <input type="text" id="username" placeholder="Enter username" className="box-border w-full min-w-0 rounded-xl bg-white py-2 pl-12 pr-4 text-base outline-0 sm:text-lg"/>
            </div>
            
          </div>
          <div className="flex w-full min-w-0 flex-col gap-2">
            <label htmlFor="password" className="text-xl font-serif">Password</label>
            <div className="relative w-full min-w-0">
              <img src="src/assets/padlock.png" alt="" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"/>
              <input type="password" id="password" placeholder="Enter password" className="box-border w-full min-w-0 rounded-xl bg-white py-2 pl-12 pr-4 text-base outline-0 sm:text-lg"/>
            </div>
          </div>
          <div>
            <input type="submit" value={"Login"} className="rounded-xl bg-blue-900 p-2 text-2xl font-serif text-white transition-colors hover:bg-blue-400"/>
          </div>
          <div className="text-center">
            <p className="text-base font-serif sm:text-lg">Don't have an account? <Link to="/create-account" className="font-bold text-blue-900">Create here</Link></p>
          </div>
        </div>
      </form>
    </>
  );
}
export default LoginPage;
