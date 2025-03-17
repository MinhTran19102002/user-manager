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
-- Table structure for table `users`
--
use bdpbopycuisjtxk3d2bm;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Dr. Deanna Roberts I','pat09@example.org','$2y$12$.WIs3lpdjsOC7eyk.ai50eNIy4OL/xV05OnXoFr2Vrk9445hG20Tq','admin','2025-03-10 18:14:47','2025-03-10 18:14:47','male','Ho Chi Minh'),(6,'Drake Howell','nhowell@example.net','$2y$12$.WIs3lpdjsOC7eyk.ai50eNIy4OL/xV05OnXoFr2Vrk9445hG20Tq','user','2025-03-10 18:14:47','2025-03-10 18:14:47','male','Ho Chi Minh'),(7,'Felix Mraz','kevin21@example.org','$2y$12$.WIs3lpdjsOC7eyk.ai50eNIy4OL/xV05OnXoFr2Vrk9445hG20Tq','user','2025-03-10 18:14:47','2025-03-10 18:14:47','male','Ho Chi Minh'),(8,'Shanel Kovacek','lhermiston@example.com','$2y$12$.WIs3lpdjsOC7eyk.ai50eNIy4OL/xV05OnXoFr2Vrk9445hG20Tq','user','2025-03-10 18:14:47','2025-03-10 18:14:47','male','Ho Chi Minh'),(16,'Tran Cong Minh','minhtc1910@gmail.com','$2y$12$IYU7e5taKX9YmvRD/WsniO/XMJyLLDhppk/FSuPk0Pq5nryOJ6mPm','user','2025-03-10 20:15:32','2025-03-13 18:57:09','male','Ho Chi Minh'),(17,'Trần Công Minh','admin@gmail.com','$2y$12$kxYG6hJwdBlAHUlFp905DeBHoG6MrvPieL4QC7zKmM/907vZyAJ32','admin','2025-03-12 23:40:15','2025-03-13 19:01:34','male','Ho Chi Minh');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
