<?php  
  $modules = array(
    "main",
    "caruosel",
    // "form",
    // "images",
  );

  foreach ($modules as $module) {
    require_once $module."/".$module.".php";
  }
