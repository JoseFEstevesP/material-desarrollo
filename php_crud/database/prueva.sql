-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-01-2021 a las 01:13:03
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueva`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueva_user`
--

CREATE TABLE `prueva_user` (
  `id_user` int(11) NOT NULL,
  `nomAdre` varchar(100) NOT NULL,
  `correo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prueva_user`
--

INSERT INTO `prueva_user` (`id_user`, `nomAdre`, `correo`) VALUES
(21, 'jose kdpke', 'eded@eded'),
(62, 'xdede', 'ededdeds@dwdd'),
(63, 'xdede', 'ededdeds@dwdd'),
(64, 'xdede', 'ededdeds@dwdd'),
(65, 'xdede', 'ededdeds@dwdd'),
(66, 'xdede', 'ededdeds@dwdd'),
(67, 'xdede', 'ededdeds@dwdd'),
(68, 'xdede', 'ededdeds@dwdd'),
(69, 'xdede', 'ededdeds@dwdd'),
(70, 'xdede', 'ededdeds@dwdd'),
(71, 'xdede', 'ededdeds@dwdd'),
(72, 'xdede', 'ededdeds@dwdd'),
(73, 'xdede', 'ededdeds@dwdd'),
(74, 'xdede', 'ededdeds@dwdd'),
(75, 'xdede', 'ededdeds@dwdd'),
(76, 'xdede', 'ededdeds@dwdd'),
(77, 'xdede', 'ededdeds@dwdd'),
(78, 'xdede', 'ededdeds@dwdd'),
(79, 'xdede', 'ededdeds@dwdd'),
(80, 'ale ededq', 'eded@dedededqddeqd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `prueva_user`
--
ALTER TABLE `prueva_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `prueva_user`
--
ALTER TABLE `prueva_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
