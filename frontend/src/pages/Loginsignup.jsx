import { useState } from "react";

const Loginsignup = () => {
      const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex justify-center">
      
      <div className="w-[360px] pt-[10%]">
        <div className="relative z-[1] bg-[rgba(7,40,195,0.8)] max-w-[360px] mx-auto mb-[100px] p-[45px] text-center">

          {/* LOGIN FORM */}
          {isLogin && (
            <form className="space-y-[15px]">
              <input
                type="text"
                placeholder="name"
                className="w-full bg-[#f2f2f2] p-[15px] text-[14px] outline-none"
              />
              <input
                type="password"
                placeholder="password"
                className="w-full bg-[#f2f2f2] p-[15px] text-[14px] outline-none"
              />
              <button className="w-full bg-[#4CAF50] p-[15px] text-[14px] uppercase text-white cursor-pointer hover:bg-[#43a047] transition">
                login
              </button>

              <p className="mt-[15px] text-[12px] text-aliceblue">
                Not registered?{" "}
                <span
                  className="text-[#4CAF50] cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </span>
              </p>
            </form>
          )}

          {/* REGISTER FORM */}
          {!isLogin && (
            <form className="space-y-[15px]">
              <input
                type="text"
                placeholder="name"
                className="w-full bg-[#f2f2f2] p-[15px] text-[14px] outline-none"
              />
              <input
                type="password"
                placeholder="password"
                className="w-full bg-[#f2f2f2] p-[15px] text-[14px] outline-none"
              />
              <input
                type="text"
                placeholder="email address"
                className="w-full bg-[#f2f2f2] p-[15px] text-[14px] outline-none"
              />
              <button className="w-full bg-[#4CAF50] p-[15px] text-[14px] uppercase text-white cursor-pointer hover:bg-[#43a047] transition">
                create
              </button>

              <p className="mt-[15px] text-[12px] text-aliceblue">
                Already have an account?{" "}
                <span
                  className="text-[#4CAF50] cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  )
}

export default Loginsignup