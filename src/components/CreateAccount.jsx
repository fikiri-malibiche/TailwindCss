import { Link } from "react-router-dom";
function CreateAccount() {
  return (
    <>
      <form action="" className="flex min-h-screen w-full items-center justify-center p-4">
        <div className="box-border flex w-full max-w-xl min-w-0 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-blue-300 bg-blue-200 px-4 py-6 sm:gap-3 sm:px-8">
          <div>
            <img
              src="src/assets/mzumbelogo1.jpg"
              alt="Mzumbe Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif text-center">CREATE ACCOUNT</h1>
          </div>
          <div className="flex flex-col gap-2 w-full min-w-0">
            <label htmlFor="First name" className="text-lg sm:text-2xl font-serif">
              First Name
            </label>
            <div className="relative w-full min-w-0">
              <img
                src="src/assets/profile.png"
                alt=""
                className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2"
              />
              <input
                type="text"
                id="first-name"
                placeholder="Enter first name"
                className="box-border w-full min-w-0 rounded-xl bg-white px-12 py-2 text-base outline-0 sm:text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full min-w-0">
            <label htmlFor="Last name" className="text-lg sm:text-2xl font-serif">
              Last Name
            </label>
            <div className="relative w-full min-w-0">
              <img
                src="src/assets/profile.png"
                alt=""
                className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2"
              />
              <input
                type="text"
                id="last-name"
                placeholder="Enter last name"
                className="box-border w-full min-w-0 rounded-xl bg-white px-12 py-2 text-base outline-0 sm:text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full min-w-0">
            <label htmlFor="email" className="text-lg sm:text-2xl font-serif">
              Email
            </label>
            <div className="relative w-full min-w-0">
              <img
                src="src/assets/mail.png"
                alt=""
                className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2"
              />
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="box-border w-full min-w-0 rounded-xl bg-white px-12 py-2 text-base outline-0 sm:text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full min-w-0">
            <label htmlFor="password" className="text-lg sm:text-2xl font-serif">
              Password
            </label>
            <div className="relative w-full min-w-0">
              <img
                src="src/assets/padlock.png"
                alt=""
                className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2"
              />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="box-border w-full min-w-0 rounded-xl bg-white px-12 py-2 text-base outline-0 sm:text-xl"
              />
            </div>
          </div>
          <div>
            <input
              type="submit"
              value={"Create Account"}
              className="bg-blue-900 text-lg sm:text-2xl font-serif text-white p-2 rounded-xl hover:bg-blue-400 transition-colors max-w-full"
            />
          </div>
          <div>
            <p className="text-sm sm:text-xl font-serif text-center wrap-break-word">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-900 font-bold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
export default CreateAccount;
