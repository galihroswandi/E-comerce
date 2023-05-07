import Navbar from "./../../components/Elements/Navbar";
import Hr from "./../../components/Elements/Hr";
import Footer from "./../../components/Elements/Footer";
import ProfileDummy from "./../../assets/img/Profile Dummy.svg";
import Paperclip from "./../../assets/icons/Paperclip.svg";
import { useEffect, useState } from "react";
import checkLogin from "../../utils/loginCheck.util";
import { useNavigate } from "react-router";

const Profile = () => {
  const [login, setLogin] = useState(undefined);
  const navigate = useNavigate();

  const handleFileChange = () => {};

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res);
    });
  }, []);

  return login !== undefined && !login.status ? (
    navigate("/")
  ) : (
    <>
      <Navbar />
      <header className="container mt-36 mb-5 px-7 lg:px-20">
        <h1 className="text-lg md:text-2xl text-slate-700 font-medium">
          Profil
        </h1>
        <Hr width="3.5rem" />
      </header>
      <main className="container px-7 mb-10 lg:px-20">
        <div className="container border bg-white bg-opacity-5 backdrop-blur-md border-green-500 min-h-[50vh] py-4 rounded-lg flex flex-col gap-3 sm:flex-row-reverse sm:justify-between sm:px-7 md:p-8">
          <section className="foto flex flex-col justify-center items-center lg:mr-10">
            <img
              src={ProfileDummy}
              alt="Profile Photo"
              className="w-[70px] lg:w-[9rem]"
            />
            <div className="buttonInputFile my-3">
              <label htmlFor="image">
                <a className="cursor-pointer flex items-center justify-center border border-slate-300 py-1 md:py-2 px-2 pr-3 rounded-md">
                  <img
                    src={Paperclip}
                    alt="Icon Upload"
                    className="w-6 md:w-8"
                  />
                  <span className="text-slate-500 text-sm font-extralight md:text-base">
                    Upload Gambar
                  </span>
                </a>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </section>
          <section className="sm:w-[65%] md:flex md:flex-col md:gap-4">
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1">
              <label
                htmlFor="username"
                className="text-slate-600 text-base font-extralight min-w-[20%]"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm font-extralight md:py-2 md:text-base md:px-5"
                disabled
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1">
              <label
                htmlFor="nama"
                className="text-slate-600 text-base min-w-[20%]"
              >
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1">
              <label
                htmlFor="email"
                className="text-slate-600 text-base min-w-[20%]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1">
              <label
                htmlFor="noTelepon"
                className="text-slate-600 text-base min-w-[20%]"
              >
                No Telepon
              </label>
              <input
                type="text"
                name="noTelepon"
                id="noTelepon"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1">
              <label
                htmlFor="alamat"
                className="text-slate-600 text-base min-w-[20%]"
              >
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mt-6">
              <button
                className="w-full border border-slate-200 bg-green-500 text-slate-100 py-1.5 px-2 rounded-lg text-sm outline-none md:py-2 md:w-[50%]"
                type="button"
              >
                Simpan
              </button>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
