<?php
  // $str = "<h1>i hate you </h1>";
  $str = "<h1>i hate you </h1>";
  $str = html_entity_decode($str);
?>

<div>
  <?= $str ?>
</div>