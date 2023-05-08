import { createSlice } from "@reduxjs/toolkit";

const profilSlice = createSlice({
    name: "Profil",
    initialState: {
        alamat: "",
        email: "",
        nama: "",
        noHP: "",
        uid: "",
        username: "-",
        gambar: "",
        id: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setAlamat: (state, action) => {
            state.alamat = action.payload
        },
        setNama: (state, action) => {
            state.nama = action.payload
        },
        setNoHP: (state, action) => {
            state.noHP = action.payload
        },
        setUID: (state, action) => {
            state.uid = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        },
        setGambar: (state, action) => {
            state.gambar = action.payload
        }
    }
})

export const { setEmail, setAlamat, setNama, setNoHP, setUID, setUsername, setId } = profilSlice.actions;
export default profilSlice.reducer;