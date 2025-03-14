CREATE DATABASE  IF NOT EXISTS `user-manager` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `user-manager`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: user-manager
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('laravel_cache_5v3r9z59pG5N8BOG','s:7:\"forever\";',2057201260),('laravel_cache_70H0HT7z86XFC8QJ','s:7:\"forever\";',2057218586),('laravel_cache_aCEtBGCBhR4h9NHp','s:7:\"forever\";',2057280155),('laravel_cache_bdBxk9pTGQduwxPW','s:7:\"forever\";',2057206341),('laravel_cache_CxcP94DoptZrSghL','s:7:\"forever\";',2057209731),('laravel_cache_DvyEXdGeAT8KcYfM','s:7:\"forever\";',2057206456),('laravel_cache_LA02orW0YCFB30n0','s:7:\"forever\";',2057208149),('laravel_cache_mxJrgPb5eWDwkwvb','s:7:\"forever\";',2057201412),('laravel_cache_n4TZWVMtKeaXyxIW','s:7:\"forever\";',2057277570),('laravel_cache_s9bvgXnkFIS7QvFU','s:7:\"forever\";',2057277671),('laravel_cache_SCtbDja8I3cCpYCu','s:7:\"forever\";',2057279995),('laravel_cache_szQXTe32eaGpaMwA','s:7:\"forever\";',2057206523),('laravel_cache_VNJAGzqKpOsOMLI5','s:7:\"forever\";',2057219360),('laravel_cache_wGMc0yRsUYnFt0ep','s:7:\"forever\";',2057215710),('laravel_cache_woOG1yJZstzBpWxE','s:7:\"forever\";',2057214970);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-14 13:18:04
