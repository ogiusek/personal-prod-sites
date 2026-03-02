<?php
  $dir = __DIR__;
  $directories = array_filter(
    scandir($dir), 
    function($item) use ($dir) {
      return is_dir($dir . '/' . $item);
  });
  $directories = array_diff($directories, ['.', '..']);

  $routes = array();
  foreach ($directories as &$directory) {
    $routes[$directory] = $directory . '/index.php';
  }
  $path = substr($_SERVER['REQUEST_URI'], 1);
  $element = $routes[$path] ?? array_keys($routes)[0];
  if (key_exists($path, $routes)) {
    // $compiler = new ScssPhp\ScssPhp\Compiler();
    // echo $compiler->compileString(' $color: #abc;div{ color: black; div { color: lighten($color, 20%); }} ')->getCss();
    // $compiledString = $compiler->compileFile($routes[$path]);
    // $compiler = new ScssPhp\ScssPhp\Compiler();
    // echo $compiler->compileString(' $color: #abc;div{ color: black; div { color: lighten($color, 20%); }} ')->getCss();
    require_once $routes[$path];
  }else{
    header("Location: /" . array_keys($routes)[0]);
  }
?>