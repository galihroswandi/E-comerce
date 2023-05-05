import Navbar from "./../../components/Elements/Navbar";
import Hr from "./../../components/Elements/Hr";
import Footer from "./../../components/Elements/Footer";
import ProfileDummy from "./../../assets/img/Profile Dummy.svg";
import Paperclip from "./../../assets/icons/Paperclip.svg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <header className="container mt-36 mb-5 px-7">
        <h1 className="text-lg md:text-2xl text-slate-700 font-medium">
          Profil
        </h1>
        <Hr width="3.5rem" />
      </header>
      <main className="container px-7 mb-10">
        <div className="container border bg-white bg-opacity-5 backdrop-blur-md border-green-500 min-h-[50vh] py-4 rounded-lg flex flex-col gap-3">
          <section className="foto flex flex-col justify-center items-center">
            <img src={ProfileDummy} alt="Profile Photo" width="70" />
            <div className="buttonInputFile my-3">
              <label htmlFor="image">
                <a className="cursor-pointer flex items-center justify-center border border-slate-300 py-1 px-2 pr-3 rounded-md">
                  <img src={Paperclip} alt="Icon Upload" className="w-6" />
                  <span className="text-slate-500 text-sm font-extralight">
                    Upload Gambar
                  </span>
                </a>
              </label>
              <input type="file" name="image" id="image" className="hidden" />
            </div>
          </section>
          <section>
            <section className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-slate-600 text-base font-extralight"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value="galihroswandi"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm font-extralight"
                disabled
              />
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="nama" className="text-slate-600 text-base">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value="Galih Roswandi"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="email" className="text-slate-600 text-base">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value="sh****.com"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="noTelepon" className="text-slate-600 text-base">
                No Telepon
              </label>
              <input
                type="text"
                name="noTelepon"
                id="noTelepon"
                value="+6281******85"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="alamat" className="text-slate-600 text-base">
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                value="Tasikmalaya"
                className="w-full bg-transparent border border-slate-200 py-1 px-2 rounded-lg text-slate-500 text-sm outline-none focus:ring-1 ring-green-400 font-extralight"
                autoComplete="off"
              />
            </section>
            <section className="flex flex-col gap-1 mt-6">
              <button
                className="w-full border border-slate-200 bg-green-500 text-slate-100 py-1.5 px-2 rounded-lg text-sm outline-none"
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
