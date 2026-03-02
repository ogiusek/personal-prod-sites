<?php
  $dir = __DIR__;
  $directories = array_filter(scandir($dir), function($item) use ($dir) {
      return is_dir($dir . '/' . $item);
  });

  $directories = array_diff($directories, ['.', '..']);

  foreach ($directories as &$directory) {
    echo "<p>".$directory."</p>";
  }  
  // echo implode("\n", $directories);