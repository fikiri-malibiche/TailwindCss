function LoginPage() {
  return (
    <>
      <form action="">
        <div className="bg-blue-200 flex-auto flex flex-col items-center justify-center h-screen gap-3 border-2 border-blue-300 rounded-3xl w-1/2 mx-auto">
          <div>
             <img src="src/assets/mzumbelogo1.jpg" alt="Mzumbe Logo" className="w-20 h-20 rounded-2xl "/>
          </div>
          <div>
            <h1 className="text-3xl font-serif">WELCOME BACK</h1>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-2xl font-serif mx-5">username</label>
            <input type="text" id="username" placeholder="Enter username" className="bg-white  mx-5 rounded-xl text-xl p-2 outline-0 w-full"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-2xl font-serif mx-5">password</label>
            <input type="password" id="password" placeholder="Enter password"className="bg-white mx-5 rounded-xl text-xl p-2 outline-0 w-full"/>
          </div>
          <div>
            <input type="submit" value={"Login"} className="bg-blue-900 text-2xl font-serif  text-white p-2 rounded-xl hover:bg-blue-400 transition-colors"  />
          </div>
          <div>
            <p className="text-xl font-serif">Don't have an account? <a href="#" className="text-blue-900 font-bold">Create here</a></p>
          </div>
        </div>
      </form>
    </>
  );
}
export default LoginPage;
