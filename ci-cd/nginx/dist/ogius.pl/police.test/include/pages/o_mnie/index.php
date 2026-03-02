<?php
  require_once "o_mnie.php";
  echo html_entity_decode(display_Main(
    display_O_Mnie(),
    array("image" => "/static/img/o_mnie.jpg", 
    "image_text" => "
      <h1 style='font-size: 3rem;'>Krystian<br/>Kowalewski</h1>
      <p style='font-size: 1.5rem;'>Police stać na więcej</p>
    ")
  ));
  