-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2022 a las 06:23:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg`
--

CREATE TABLE `reg` (
  `id` int(11) NOT NULL,
  `company` varchar(100) DEFAULT NULL,
  `fecha` varchar(100) DEFAULT NULL,
  `lista` varchar(100) DEFAULT NULL,
  `puesto` varchar(100) DEFAULT NULL,
  `exp` varchar(100) DEFAULT NULL,
  `modalidad` varchar(100) DEFAULT NULL,
  `sueldo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reg`
--

INSERT INTO `reg` (`id`, `company`, `fecha`, `lista`, `puesto`, `exp`, `modalidad`, `sueldo`) VALUES
(22222, 'Levante', '8/08/22', '3', 'Director Deportivo B', '6 anios', 'hibrido', '70000'),
(32433, 'Chivas', '8/07/22', '3', 'Visor', '6 anios', 'hibrido', '60000'),
(44233, 'San Luis', '8/8/22', '2', 'DT fuerzas basicas', '3 anios', 'presencial', '16000'),
(212121, 'Valladolid', '8/08/22', '4', 'Mant. cesped', '2 anios', 'presencial', '6000'),
(213123, 'Necaxa', '8/05/22', '4', 'Limpieza', '2 anios', 'presencial', '4000'),
(232323, 'Osasuna', '8/07/22', '3', 'Visor', '7 anios', 'hibrido', '23833'),
(272170, 'Real Madrid', '8/07/22', '3', 'Director deportivo', '9 anios', 'hibrido', '290000'),
(272730, 'Cruz Azul', '7/31/22', '2', 'Primer equipo', '5', 'remoto', '60000'),
(546546, 'Real Madrid', '8/08/22', '1', 'Delantero', '6 anios', 'presencial', '800000'),
(657445, 'Man. City', '8/07/22', '2', 'DT primer equipo', '4 anios', 'presencial', '800000'),
(3434456, 'Pumas', '8/08/22', '2', 'DT primer equipo', '8 anios', 'presencial', '130000'),
(4354536, 'Chiapas', '8/06/22', '3', 'Visor', '6 anios', 'hibrido', '48000'),
(4366783, 'Barcelona', '8/07/22', '3', 'Visor', '4 anios', 'hibrido', '72000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `name` varchar(100) NOT NULL,
  `cuenta` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `pass1` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`name`, `cuenta`, `correo`, `pass1`) VALUES
('Juan', 'Juan123', 'Juan123@gmail.com', '1cc39ffd758234422e1f75beadfc5fb2'),
('Karla', 'Karla123', 'karla123@gmail.com', '8ffc75f183bea7891e2c30034be40016'),
('Kyra', 'Kyra123', 'kyra@gmail.com', 'c7e2b4acb8a5f9d0d10d7ef6f70439d7'),
('Luis', 'Luis3232', 'luis32@gmail.com', 'b521084706709a9f8a64f2e8b657f3c7'),
('Pepe', 'Pepe123', 'pepe123@gmail.com', '0b6acef5e644abedb0c6f0b856fec0a2'),
('Ricardo', 'Rickbro', 'ricoro845@gmail.com', '4ba53b30084ee784d7f898c79fca03c9'),
('Richard', 'Rickbro', 'ricoro845@gmail.com', '92876cef5a1c4592e9fff33cfb331c2e'),
('Rick', 'Rick1212', 'ricoro845@gmail.com', '92876cef5a1c4592e9fff33cfb331c2e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reg`
--
ALTER TABLE `reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213213124;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
