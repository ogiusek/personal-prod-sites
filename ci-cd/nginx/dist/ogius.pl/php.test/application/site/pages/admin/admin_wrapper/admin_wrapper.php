<?php
function wrap_admin($content) {
  $component = \component(__DIR__)
    ->css_file("admin_wrapper.css")
    ->js_file("admin_wrapper.js");
?>
  <head>
    <!-- Cannot use this because ckeditor adds extra scripts -->
    <!-- <script src="/api/compress?url=<?=urlencode("/ckeditor/ckeditor.js")?>"></script> -->
    <!-- consider changing framework -->
    <script src="/static/ckeditor/ckeditor.js"></script>
  </head>
  <main class="<?=$component->identifiers()?>">
    <div class="header">
      <?php require_once "header/header.php"; ?>
    </div>
    <div class="content">
      <?=$content?>
    </div>
  </main>
<?php } ?>