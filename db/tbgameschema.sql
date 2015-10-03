-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 03, 2015 at 10:02 AM
-- Server version: 5.5.38-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.4

-- SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tbgamedesigner`
--

-- --------------------------------------------------------

--
-- Table structure for table `commands`
--

CREATE TABLE IF NOT EXISTS "commands" (
  "command" varchar(64) NOT NULL,
  "action" int(1) NOT NULL,
  "value" varchar(64) NOT NULL,
  "roomid" int(10) NOT NULL,
  "commandid" int(10) NOT NULL,
  PRIMARY KEY ("commandid")
);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE IF NOT EXISTS "games" (
  "name" varchar(64) NOT NULL,
  "gameid" int(10) NOT NULL,
  PRIMARY KEY ("gameid")
);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE IF NOT EXISTS "rooms" (
  "name" varchar(64) NOT NULL,
  "text" text NOT NULL,
  "isStart" tinyint(1) NOT NULL DEFAULT '0',
  "gameid" int(10) NOT NULL,
  "roomid" int(10) NOT NULL,
  PRIMARY KEY ("roomid")
);

-- --------------------------------------------------------

--
-- Table structure for table `variables`
--

CREATE TABLE IF NOT EXISTS "variables" (
  "varname" varchar(64) NOT NULL,
  "value" varchar(64) NOT NULL,
  "type" varchar(12) NOT NULL,
  "gameid" int(10) NOT NULL
);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
