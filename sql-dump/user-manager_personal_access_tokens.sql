use bdpbopycuisjtxk3d2bm;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',16,'auth_token','de38c6e6e16a32324ded8ca97c1f5d52a6b2853e5ff6128eee98c99bad8ebd84','[\"*\"]',NULL,NULL,'2025-03-10 20:30:15','2025-03-10 20:30:15'),(2,'App\\Models\\User',16,'auth_token','8a2a8314387a310516d93439adf0f8a342255ea6db692ab475ebe106531da97a','[\"*\"]',NULL,NULL,'2025-03-11 01:02:55','2025-03-11 01:02:55'),(3,'App\\Models\\User',16,'auth_token','e9428d9944782bf871af1ef6de904e992100257fc994675c47fb5db228444094','[\"*\"]','2025-03-11 18:58:51',NULL,'2025-03-11 01:17:09','2025-03-11 18:58:51'),(4,'App\\Models\\User',16,'auth_token','7eb75d49589621448be524860edc376c8a6cff6a9869abcb70d23b7ce0d467ba','[\"*\"]',NULL,NULL,'2025-03-11 19:47:40','2025-03-11 19:47:40');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
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
