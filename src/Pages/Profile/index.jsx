import Navbar from "./../../components/Elements/Navbar";
import Hr from "./../../components/Elements/Hr";
import Footer from "./../../components/Elements/Footer";
import ProfileDummy from "./../../assets/img/Profile Dummy.svg";
import Paperclip from "./../../assets/icons/Paperclip.svg";
import { useEffect, useState } from "react";
import checkLogin from "../../utils/loginCheck.util";
import { useNavigate } from "react-router";
import {
  getUser,
  submitUsernameCheck,
  usernameCheck,
} from "../../config/profil";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import {
  setAlamat,
  setEmail,
  setNama,
  setNoHP,
  setUsername,
} from "../../config/redux/reducer/profilSlice";
import { Toaster, toast } from "react-hot-toast";
import { updateUser } from "../../config/users";

const Profile = () => {
  const [login, setLogin] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profil = useSelector((state) => state.profil);

  const handleCekUsername = async () => {
    const check = await submitUsernameCheck(profil.username, profil.id);
    check.status === "oke"
      ? toast.success("Username dapat digunakan.")
      : toast.error("Username sudah tersedia, Silahkan pilih username lain");
  };

  const cleanInput = (value) => {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOW_DATA_ATTR: false,
      ALLOWED_ATTR: [],
    });
  };

  const handleSubmit = async () => {
    const data = {
      noHP: profil.noHP,
      nama: profil.nama,
      username: profil.username,
      email: profil.email,
      alamat: profil.alamat,
    };

    const check = await submitUsernameCheck(data.username, profil.id);
    if (check.status === "not oke") {
      toast.error("Username sudah tersedia, Silahkan pilih username lain");
      return false;
    }

    const res = await updateUser(data, profil.id);
    res.status === "ok" && toast.success("Data berhasil diubah !");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        dispatch(setUsername(cleanInput(value)));
        break;
      case "nama":
        dispatch(setNama(cleanInput(value)));
        break;
      case "email":
        dispatch(setEmail(cleanInput(value)));
        break;
      case "noHP":
        dispatch(setNoHP(cleanInput(value)));
        break;
      case "alamat":
        dispatch(setAlamat(cleanInput(value)));
        break;
      default:
        break;
    }
  };

  const handleFileChange = () => {};

  useEffect(() => {
    getUser(dispatch);
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
      <Toaster toastOptions={{ duration: 4000 }} />
      <main className="container px-7 mb-10 lg:px-20">
        <div className="container border bg-white bg-opacity-5 backdrop-blur-md border-green-500 min-h-[50vh] py-4 rounded-lg flex flex-col gap-3 sm:flex-row-reverse sm:justify-between sm:px-7 md:p-8 md:max-w-[90%]">
          <section className="foto flex flex-col justify-center items-center lg:mr-10">
            <img
              src={!profil.gambar ? ProfileDummy : profil.gambar}
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
          <section className="sm:w-[65%] md:flex md:flex-col md:gap-1">
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mb-3">
              <label
                htmlFor="username"
                className="text-slate-600 text-base font-extralight min-w-[20%]"
              >
                Username
              </label>
              <div className="flex w-full gap-1">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={profil.username}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full bg-transparent border border-slate-200 py-2 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                />
                <button
                  onClick={handleCekUsername}
                  className="min-w-fit border px-3 text-sm text-white bg-green-500 rounded-lg"
                >
                  Cek <span className="hidden lg:inline-block">Username</span>
                </button>
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mb-3">
              <label
                htmlFor="nama"
                className="text-slate-600 text-base min-w-[20%]"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={profil.nama}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-slate-200 py-2 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mb-3">
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
                value="Fitur Belum Tersedia"
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-slate-200 py-2 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5 bg-slate-300"
                autoComplete="off"
                disabled
                title="Sementara fitur belum tersedia"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mb-3">
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
                value={profil.noHP}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-slate-200 py-2 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-10 gap-1 mb-3">
              <label
                htmlFor="alamat"
                className="text-slate-600 text-base min-w-[20%]"
              >
                Alamat
              </label>
              <div>
                <textarea
                  name="alamat"
                  id="alamat"
                  value={profil.alamat}
                  onChange={handleChange}
                  required
                  className="w-full h-20 bg-transparent border border-slate-200 py-2 px-2 rounded-md text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight md:py-2 md:text-base md:px-5 scrollbar-thin"
                  autoComplete="off"
                  maxLength={200}
                  style={{ resize: "none" }}
                  rows="2"
                ></textarea>
                <small className="text-red-500">
                  Note: Silakan susun alamat dengan format: Jalan/Nama Jalan
                  RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Provinsi
                </small>
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-center md:items-start md:gap-10 gap-1 mt-6 md:mt-1">
              <button
                onClick={handleSubmit}
                className="w-full border border-slate-200 bg-green-500 text-slate-100 py-1.5 px-2 rounded-lg text-sm outline-none md:py-2 md:text-base md:w-[30%] md:-translate-x-16"
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
