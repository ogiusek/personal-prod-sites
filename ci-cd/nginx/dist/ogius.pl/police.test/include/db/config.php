<?php
$DB_ADDRESS = $_ENV["DB_ADDRESS"];
$DB_DATABASE = $_ENV["DB_DATABASE"];
$DB_USER = $_ENV["DB_USER"];
$DB_PASSWORD = $_ENV["DB_PASSWORD"];

// Create connection
try{
  $db = new mysqli($DB_ADDRESS, $DB_USER, $DB_PASSWORD);
  $db->set_charset("utf8");
  $db->query("USE $DB_DATABASE");
  $GLOBALS["db"] = &$db;
}catch (Exception $e){
  echo "Wrong db credentials: <br>";
  echo $e->getMessage();
  exit(1);
}


if($_ENV["DEBUG"])
  require_once "init.tables.php";