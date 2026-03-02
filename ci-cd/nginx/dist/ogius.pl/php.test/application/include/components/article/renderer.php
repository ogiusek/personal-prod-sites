<?php
$content = \components()->get_content();
$component = \component(__DIR__)
  ->css_file("article.css");
?>

<article class="<?=$component->identifiers()?>">
  <?= \components()->render($content->text ?? \components()->get_instance("text")) ?>
  <!-- <h2><=$content->title?></h2> -->
  <!-- <p><=str_replace("\n", "<br>", $content->content)?></p> -->
</article>