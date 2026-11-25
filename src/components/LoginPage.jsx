function LoginPage() {
  return (
    <>
      <form action="">
        <div className="bg-blue-200 flex-1 flex flex-col items-center justify-center h-screen gap-3">
          <div>
             <img src="src/assets/mzumbelogo1.jpg" alt="Mzumbe Logo" className="w-20 h-20 rounded-2xl "/>
          </div>
          <div>
            <h1 className="text-3xl font-serif">WELCOME BACK</h1>
          </div>
          <div>
            <label htmlFor="username" className="text-2xl font-serif-normal">Enter username</label>
            <input type="text" id="username" placeholder="username" className="bg-white  mx-5 rounded-xl text-xl p-2 outline-0"/>
          </div>
          <div>
            <label htmlFor="password" className="text-2xl font-serif-normal">Enter password</label>
            <input type="password" id="password" placeholder="password"className="bg-white mx-5 rounded-xl text-xl p-2 outline-0"/>
          </div>
          <div>
            <input type="submit" value={"Login"} className="bg-green-800 text-2xl font-serif  text-white p-2 rounded-xl hover:bg-green-400 transition-colors"  />
          </div>
        </div>
      </form>
    </>
  );
}
export default LoginPage;
