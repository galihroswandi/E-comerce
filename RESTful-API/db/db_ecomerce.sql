-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Mar 2023 pada 17.31
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecomerce`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(50) NOT NULL,
  `gambar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `gambar`) VALUES
(1, 'Laptop & PC', 'images/1680096280582-325355446-PC-Laptop.png'),
(2, 'Skincare', 'images/1680099347867-931971408-skincare.png'),
(3, 'Hanphone', 'images/1680099382779-226447805-handphone.png'),
(4, 'Fashion', 'images/1680099410176-134166593-Fashion.png'),
(5, 'Sepatu', 'images/1680099486346-909786585-sepatu.png'),
(6, 'Elektronik', 'images/1680099439495-389265514-PC-Laptop.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `nama_product` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `harga` varchar(20) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id_product`, `nama_product`, `deskripsi`, `harga`, `gambar`, `id_kategori`) VALUES
(2, 'Kabel Data Type C', 'lorem ipsum dolor sit amet', '50.000', 'images/1680096304755-672668114-Product8.png', 1),
(3, 'Laptop Asus ROG Strix', 'lorem ipsum dolor sit amet', '15.000.000', 'images/1680099786861-510990386-Product1.png', 1),
(4, 'ASUS ZENBOOK C103', 'lorem ipsum dolor sit amet', '10.000.000', 'images/1680099816618-840501158-Product2.png', 1),
(5, 'IPhone 11', 'lorem ipsum dolor sit amet', '8.000.000', 'images/1680099852647-872222131-Product3.png', 3),
(6, 'IPhone XR', 'lorem ipsum dolor sit amet', '5.000.000', 'images/1680099911004-274943150-Product4.png', 3),
(7, 'BAJU WANITA SIMPLE', 'lorem ipsum dolor sit amet', '30.000', 'images/1680099954754-344696254-Product5.png', 4),
(8, 'Tas Kece', 'lorem ipsum dolor sit amet', '30.000', 'images/1680099972928-776153069-Product6.png', 4),
(9, 'Pembersih Hidung', 'lorem ipsum dolor sit amet', '10.000', 'images/1680100002002-480469930-Product7.png', 6);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
