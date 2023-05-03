import React, { useState } from "react";

import Navbar from "./../../components/Elements/Navbar";
import Footer from "./../../components/Elements/Footer";
import Logo from "./../../assets/img/Logo.png";
import Ellipse from "./../../assets/ellipse/Checkout-1.svg";
import Brand from "../../components/Elements/Navbar/Brand";
import Google from "./../../assets/icons/google.svg";
import { BsTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CgSpinner } from "react-icons/cg";
import OTPInput from "react-otp-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { addUser } from "../../config/users";

const Login = () => {
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [usePhone, setUsePhone] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const navigate = useNavigate();

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setLoading(false);
        toast.success("Verifikasi berhasil...");

        const data = {
          uid: res.user.uid,
          noHP: res.user.phoneNumber,
          username: "-",
          email: "-",
          alamat: "-",
        };

        try {
          await addUser(data);
          setTimeout(() => {
            navigate("/");
          }, 700);
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onSendOTP();
          },
          "expired-callback": () => {
            toast.error("OTP gagal dikirim !");
          },
        },
        auth
      );
    }
  };

  const onSendOTP = () => {
    setLoading(true);
    onCaptchVerify();

    const input = document.querySelector("input[type=tel]");
    const drop = document.querySelector(".flag-dropdown");

    const formatPh = "+" + ph;
    const appVerifier = window.recaptchaVerifier;

    if (formatPh === "+" || formatPh === "+62" || formatPh === "+6") {
      input.style.border = "1px solid red";
      drop.style.border = "1px solid red";
      setLoading(false);
      return false;
    }

    input.style.border = "1px solid #64748b";
    drop.style.border = "1px solid #64748b";

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("Kode OTP berhasil dikirim...");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar content="login">
        <div className="flex items-center w-[200%] sm:w-auto justify-between gap-5">
          <Brand />
          <h1 className="text-xl text-slate-700">Sign In</h1>
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
          <div className="wrapper w-full flex-div md:flex justify-evenly items-center">
            <div className="kanan">
              <img
                className="w-[50%] md:w-[400px] mt-[50px] m-auto"
                src={Logo}
                alt=""
              />
            </div>
            <div className="kiri z-10">
              <Toaster toastOptions={{ duration: 4000 }} />
              <div id="recaptcha-container"></div>
              {!usePhone ? (
                <>
                  <div className="form w-[85%] md:w-[77%] m-auto bg-white/25 backdrop-blur-sm border-[1px] rounded-[5px] border-[#22C55E] h-auto my-[20px] drop-shadow-lg px-2 md:px-7 box-border">
                    <h1 className="text-center font-semibold text-2xl my-[20px] text-slate-500">
                      Sign In
                    </h1>
                    <div className="text-center" action="">
                      <div className="">
                        <input
                          className="w-[90%] p-[10px] border-[1px] border-[#22C55E] rounded-[5px] text-sm md:text-base outline-none"
                          type="number"
                          name=""
                          id=""
                          placeholder="Username"
                        />
                        <input
                          className="w-[90%] p-[10px] border-[1px] border-[#22C55E] rounded-[5px] mt-[20px] text-sm md:text-base outline-none"
                          type="password"
                          name=""
                          id=""
                          placeholder="Password"
                        />
                        <button className="w-[90%] py-2 text-white text-base bg-[#22C55E] rounded-[5px] mt-[20px] md:mt-[40px] hover:cursor-pointer">
                          <div className="flex justify-center items-center gap-1 w-[100%] box-border">
                            {loading && (
                              <CgSpinner size={20} className=" animate-spin" />
                            )}
                            <span>Signin</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="hr m-auto flex my-[20px] md:my-[20px] lg:mt-[30px]">
                      <hr className="border-[1px] border-slate-400 m-auto w-[35%]" />
                      <p className="text-slate-400 text-xs md:text-base">
                        ATAU
                      </p>
                      <hr className="border-[1px] border-slate-400 m-auto w-[35%]" />
                    </div>
                    <div className="auth mb-5 px-3 sm:px-8 min-w-full flex justify-evenly gap-4">
                      <button
                        onClick={() => setUsePhone(true)}
                        className="telephone w-full flex items-center justify-center gap-1 border border-slate-400 rounded-sm p-2 cursor-pointer active:bg-green-200"
                      >
                        <div className="text-green-600">
                          <BsTelephoneFill size={20} />
                        </div>
                        <span className="text-slate-600 text-sm md:text-base">
                          Telepon
                        </span>
                      </button>
                      <button className="google w-full flex items-center justify-center gap-1 border border-slate-400 rounded-sm p-2 cursor-pointer active:bg-green-200">
                        <img src={Google} alt="Icons Google" width="25" />
                        <span className="text-slate-600 text-sm md:text-base">
                          Google
                        </span>
                      </button>
                    </div>
                    <div className="sign m-auto flex justify-center mb-[40px] md:mb-[20px] lg:mb-[30px]">
                      <p className="text-slate-400 text-sm md:text-base">
                        Tidak punya akun?
                      </p>
                      <a
                        className="ml-[5px] font-semibold text-[#22C55E]"
                        href=""
                      >
                        SignUp
                      </a>
                    </div>
                  </div>
                </>
              ) : !showOTP ? (
                <>
                  <div className="form w-[85%] md:w-[77%] m-auto bg-white/25 backdrop-blur-sm border-[1px] rounded-[5px] border-[#22C55E] h-auto my-[20px] drop-shadow-lg px-2 md:px-7 box-border">
                    <h1 className="text-center font-semibold text-xl my-[20px] text-slate-500 px-2">
                      Verifikasi nomor telepon Anda
                    </h1>
                    <form
                      className="px-3 md:px-0 text-center mb-[40px] md:mb-[20px] lg:mb-[30px]"
                      action=""
                    >
                      <div className="mb-4 md:mb-0">
                        <PhoneInput
                          country={"id"}
                          value={ph}
                          onChange={setPh}
                          inputClass="w-[80%] p-[10px] border-[1px] border-[#22C55E] rounded-[5px] text-sm md:text-base outline-none"
                          dropdownClass="text-start"
                        />
                      </div>
                      <button
                        onClick={onSendOTP}
                        type="button"
                        className="w-[98%] py-2 text-white text-base bg-[#22C55E] rounded-[5px] mt-[20px] md:mt-[40px] hover:cursor-pointer"
                      >
                        <div className="flex justify-center items-center gap-1 w-[100%] box-border">
                          {loading && (
                            <CgSpinner size={20} className=" animate-spin" />
                          )}
                          <span>Kirim Kode OTP</span>
                        </div>
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <div className="form w-[85%] md:w-[110%] m-auto bg-white/25 backdrop-blur-sm border-[1px] rounded-[5px] border-[#22C55E] h-auto my-[20px] drop-shadow-lg px-2 md:px-7 box-border.">
                    <h1 className="text-center font-semibold text-xl my-[20px] text-slate-500 px-2">
                      Masukan OTP Anda
                    </h1>
                    <form
                      className="px-3 md:px-0 text-center mb-[40px] md:mb-[20px] lg:mb-[30px]"
                      action=""
                    >
                      <div className="mb-4 md:mb-0">
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          inputType="number"
                          renderSeparator={<span></span>}
                          shouldAutoFocus={true}
                          renderInput={(props) => <input {...props} />}
                          containerStyle="otp-container"
                        />
                      </div>
                      <button
                        onClick={onOTPVerify}
                        type="button"
                        className="w-[98%] py-2 text-white text-base bg-[#22C55E] rounded-[5px] mt-[20px] md:mt-[40px] hover:cursor-pointer"
                      >
                        <div className="flex justify-center items-center gap-1 w-[100%] box-border">
                          {loading && (
                            <CgSpinner size={20} className=" animate-spin" />
                          )}
                          <span>Verifikasi OTP</span>
                        </div>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
