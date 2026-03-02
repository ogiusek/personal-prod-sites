<?php
  require_once "scssphp/scss.inc.php"; // use new ScssPhp\ScssPhp\Compiler(); .compileString('')->getCss();

  define("scss_compiler", new ScssPhp\ScssPhp\Compiler());
  
  $scss_cache = cache_get('scss', array());
  function getWrapedScss($scss, $id, $class, $global_style = "") {
    global $scss_cache;
    $key = "$id$class $scss";
    // return compiled if found
    if (key_exists($key, $scss_cache)) 
      return $scss_cache[$key];
    
    // compile scss
    $style = ".$id :not(.$class), .$id> { $scss } $global_style";
    $compiled = scss_compiler->compileString($style)->getCss();

    $scss_cache[$key] = $compiled;
    cache_set('scss', $scss_cache);

    return $compiled;
  }