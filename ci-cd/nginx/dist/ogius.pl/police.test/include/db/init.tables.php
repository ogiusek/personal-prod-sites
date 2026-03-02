<?php
require_once "config.php";

// create tables

$tables = [
  "CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `hash` VARCHAR(256)
  )",
  "CREATE TABLE IF NOT EXISTS `waiting_users` (
    `uuid` VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    `email` VARCHAR(255) UNIQUE NOT NULL
  )",
];

foreach ($tables as $table) {
  $db = &$GLOBALS["db"];
  if(($db->query($table)) == false){
    echo "Error creating table: " . $db->error;
    exit(1);
  }
}