<?php
$content = \components()->get_content();
$component = \component(__DIR__)
  ->css_file("image.css")
  ->js_file("image.js");
?>

<div class="<?=$component->identifiers()?>" data-refresh="image">
  <div class="input" style="width: max-content;">
    <button type="button" class="image-button" onclick="admin_image_component_edit(this.querySelector('img').src, select_parent_component(this))" data-alt="select image">
      <input type="text" data-name="image" style="display: none;" aria-label="image" value="<?=$content->get_src()?>">
      <?php $src = empty($content->get_src()) ? "/img/icons/add.svg" : $content->get_src(); ?>
      <?=\components()->render(\components()->get_instance("image")->set_src($src)->set_alt("select image")) ?>
    </button>
  </div>
  <div class="input" style="width: max-content;">
    <button type="button" class="settings-btn" onclick="">
      <?php $src = "/img/icons/settings.svg"; ?>
      <?=\components()->render(\components()->get_instance("image")->set_src($src)->set_alt("settings")) ?>
    </button>
  </div>
  <div class="dialog">
    <button type="button" class="dialog-bg"></button>
    <div class="dialog-content">
      <!-- text -->
    </div>
  </div>
  <!-- <div class="input">
    <label for="alt">image alt</label>
    <input type="text" data-name="alt" value="<?=$content->get_alt()?>" aria-label="alt">
  </div> -->
  <!-- <div class="input">
    <button data-alt="edit image center" class="extra-button" onclick="admin_image_select_center(this)">
      <input style="display: none;" data-name="object_position" type="text" value="<=$content->get_object_position()?>">
      <img src="/static/img/icons/aim.svg" alt="edit image center">
    </button>
  </div> -->
</div>
