<?php
  function display_Caruosel($images){
    $id = getUniqueID();
    $class = getClass();

    $arrowPath = "https://www.svgrepo.com/show/521481/arrow-prev-small.svg";
    ob_start();
    $images_as_string = implode(", ", $images);
  ?>

<script>
  const caruosel = {
    caruosel: null,
    value: 0,
    step: 200,
    maxValue: 0,
  };

  let last_mouse_x = -1;
  let last_mouse_y = -1;
  let mouse_move_event = () => {};

  const onMouseUp = () => {
    // console.log("onMouseUp") ||
    mouse_move_event = () => {};
    last_mouse_x = -1;
    last_mouse_y = -1;
  };
  const onMouseDown = () =>
    // console.log("onMouseDown") ||
    (mouse_move_event = (x, _) => {
      if (last_mouse_x == -1) return;
      caruosel.value = caruosel.value - x + last_mouse_x;
      caruosel.value = Math.max(0, Math.min(caruosel.maxValue, caruosel.value));
    });

  function setCaruoselMaxValue() {
    caruosel.caruosel = document.getElementById("caruosel-<?= $id ?>");

    caruosel.maxValue = -caruosel.caruosel?.offsetWidth;
    [...caruosel.caruosel?.getElementsByTagName("li")].map((li) => {
      caruosel.maxValue += li.offsetWidth;
    });
    const REFRESH_RATE = 1000;
    setTimeout(setCaruoselMaxValue, REFRESH_RATE);
  }
  window.addEventListener("load", setCaruoselMaxValue);
</script>

<svelte:window
  on:touchend={onMouseUp}
  on:touchmove={(e) => {
    mouse_move_event(e.touches[0].clientX, e.touches[0].clientY);
    last_mouse_x = e.touches[0].clientX;
    last_mouse_y = e.touches[0].clientY;
  }}
  on:mousemove={(e) => {
    if (e.buttons == 0) onMouseUp();
    mouse_move_event(e.clientX, e.clientY);
    last_mouse_x = e.clientX;
    last_mouse_y = e.clientY;
  }}
/>

<div>
  <div class="caruosel" id="caruosel-<?= $id ?>">
    <button
      onmousedown="onMouseDown()"
      ontouchstart="onMouseDown()"
      class="caruosel-button"
    ></button>
    <button
      class="arrow-left"
      onclick="() => (caruosel.value =
          caruosel.value == 0
            ? caruosel.maxValue
            : caruosel.value - caruosel.step)"
    >
      <img src="<?= $arrowPath ?>" alt="left arrow" />
    </button>
    <ul class="caruosel-list" style="--scroll: {-caruosel.value}px;">
      <?php
        foreach ($images as $image) { ?>
          <li style="pointer-events: none; user-select: none">
          <img src="<?= $image ?>" alt="caruosel" />
          </li>
        <?php } ?>
    </ul>
    <button
      class="arrow-right"
      onclick="() =>
        (caruosel.value =
          caruosel.value == caruosel.maxValue
            ? 0 : Math.min(caruosel.value + caruosel.step, caruosel.maxValue))"
    >
      <img style="rotate: 180deg;" src="<?= $arrowPath ?>" alt="right arrow" />
    </button>
  </div>
</div>

<?php
  $style = '.caruosel {
    position: relative;
    overflow: hidden;

    $width: 100vw;
    $height: 40svh;
    width: 100vw;
    height: 40svh;
    min-width: $width;
    min-height: $height;
    max-width: $width;
    max-height: $height;

    .caruosel-button {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
      z-index: 1;
    }

    .caruosel-list {
      list-style: none;
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;

      display: flex;
      align-items: center;
      flex-direction: row;

      width: 100%;
      height: 100%;
      transition: 0s;
      // transition: 0.5s ease-in-out;
      transform: translateX(var(--scroll));

      li {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }

    .arrow-left,
    .arrow-right {
      z-index: 1;
      background-color: transparent;
      border: none;
      position: absolute;
      top: calc(50% - 2rem);
      width: 4rem;
      height: 4rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: rgb(255, 255, 255, 0.2);
      }
    }
    .arrow-left {
      left: 0;
    }
    .arrow-right {
      right: 0;
    }
  }';

  $style = getWrapedScss($style, $id, $class);
  echo "<style>". $style ."</style>";
  return ob_get_clean();  
}
?>
<!-- <style lang="scss">
</style> -->
