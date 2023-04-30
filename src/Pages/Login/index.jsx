import React from "react";

import Navbar from "./../../components/Elements/Navbar";
import Footer from "./../../components/Elements/Footer";
import Logo from "./../../assets/img/Logo.png";
import Ellipse from "./../../assets/ellipse/Checkout-1.svg";
import Brand from "../../components/Elements/Navbar/Brand";

const Login = () => {
  return (
    <>
      <Navbar content="login">
        <div className="flex items-center justify-between gap-5">
          <Brand />
          <h1 className="text-xl text-slate-700">Login</h1>
        </div>
      </Navbar>
      <div className="bg-gradient-to-r from-[#DCFCE7] to-white md:p-[100px]. border-b border-slate-200 py-5 md:py-20">
        <div className="flex-div md:flex justify-evenly">
          <img
            className="absolute w-[100px] md:w-[150px] z-0 ml-[20%] mt-[500px] md:ml-[70%] md:mt-[-50px]"
            src={Ellipse}
            alt=""
          />
          <img
            className="absolute hidden md:block z-0 md:ml-[10%] md:mt-[400px]"
            src={Ellipse}
            alt=""
          />
          <div className="kanan">
            <img
              className="w-[50%] md:w-[400px] mt-[50px] m-auto"
              src={Logo}
              alt=""
            />
          </div>
          <div className="kiri z-10">
            <div className="form w-[85%] md:w-[77%] m-auto bg-white/25 backdrop-blur-sm border-[1px] rounded-[5px] border-[#22C55E] h-auto my-[20px] drop-shadow-lg px-2 md:px-7 box-border">
              <h1 className="text-center font-semibold text-[40px] my-[20px] text-slate-500">
                Login
              </h1>
              <form className="text-center" action="">
                <ul>
                  <li>
                    <input
                      className="w-[90%] p-[10px] border-[1px] border-[#22C55E] rounded-[5px]"
                      type="number"
                      name=""
                      id=""
                      placeholder="No.Handphone"
                    />
                    <input
                      className="w-[90%] p-[10px] border-[1px] border-[#22C55E] rounded-[5px] mt-[20px]"
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                    <input
                      className="w-[90%] py-2 text-white text-base bg-[#22C55E] rounded-[5px] mt-[40px] hover:cursor-pointer"
                      type="button"
                      value="Login"
                    />
                  </li>
                </ul>
              </form>
              <div className="hr m-auto flex my-[40px] md:my-[20px] lg:my-[30px]">
                <hr className="border-[1px] border-slate-400 m-auto w-[35%]" />
                <p className="text-slate-400">ATAU</p>
                <hr className="border-[1px] border-slate-400 m-auto w-[35%]" />
              </div>
              <div className="sign m-auto flex justify-center mb-[40px] md:mb-[20px] lg:mb-[30px]">
                <p className="text-slate-400">tidak punya akun?</p>
                <a className="ml-[5px] font-semibold text-[#22C55E]" href="">
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
