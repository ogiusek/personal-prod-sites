<?php
  require_once "scssphp/scss.inc.php"; // use new ScssPhp\ScssPhp\Compiler(); .compileString('')->getCss();
  
  $GLOBALS["scss"] = new ScssPhp\ScssPhp\Compiler();
  function getWrapedScss($scss, $id, $class, $global_style = "") {
    // $compiler = new ScssPhp\ScssPhp\Compiler();
    $compiler = &$GLOBALS["scss"];
    $style = ".$id :not(.$class), .$id> { $scss } 
              $global_style";

    echo "<script>console.log([`$style`])</script>";
    return $compiler->compileString($style)->getCss();
  }
  // example scss
    // $compiler = new ScssPhp\ScssPhp\Compiler();
    // echo $compiler->compileString('
    // $color: #abc; 
    // div{ 
    //   color: black; 
    //   div { 
    //     color: lighten($color, 20%); 
    //   }
    // }')->getCss();
    // if( class_exists('ScssPhp\ScssPhp\Version')){
    //   $compiler = new ScssPhp\ScssPhp\Compiler();
    //   echo $compiler->compileString(' $color: #abc; div { color: lighten($color, 20%); } ')->getCss();
    // }else{
    // }
    // $compiler = new Compiler();
    // echo $compiler->compileString(' $color: #abc; div { color: lighten($color, 20%); } ')->getCss();