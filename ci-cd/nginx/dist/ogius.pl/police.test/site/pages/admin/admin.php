<?php
  if(!$_ENV["DEBUG"]){
    header("Location: /");
    exit();
  }
  require_once "lib/include.php";


  // $_SESSION['login'] = "";
  // $_SESSION['hash'] = "";
  echo $_SERVER['SERVER_NAME'];
  add_user("ogius06@wp.pl");

  // $_
?>
