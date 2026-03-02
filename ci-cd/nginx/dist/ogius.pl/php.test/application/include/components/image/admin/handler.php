<?php
$content = \components()->get_content();
$component = \components()->get_instance('image');

$component->set_src($content['image'] ?? $component->get_src());
$component->set_alt($content['alt'] ?? $component->get_alt());

return $component;