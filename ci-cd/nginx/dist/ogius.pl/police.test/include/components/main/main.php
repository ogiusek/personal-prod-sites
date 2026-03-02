<?php
require_once "wraper.php";
require_once "footer.php";
require_once "header.php";

function display_Main(
  $child = "", 
  $args = array("image" => false, "image_text" => "", "max_image_height" => "1000vh")
){
  $defaultArgs = array("image" => false, "image_text" => "", "max_image_height" => "1000vh");
  foreach (array_keys($defaultArgs) as $key) {
    if (!array_key_exists($key, $args)) {
      $args[$key] = $defaultArgs[$key];
    }
  }
  return Wraper(Main($child, $args));
}

function Main(
  $child,
  $args
) {
  $id = $GLOBALS["getID"]();
  $class = $GLOBALS["getClass"]();
  ob_start();
  ?>
<title>Projekt Police</title>

<div class="<?= "$class $id" ?>">
  <main class="main">
    <?= display_Header(); ?>
    <section class="section">
      <?php if($args['image']){ ?>
        <div class="image-container">
          <img
            loading="lazy"
            class="image"
            style="--max-height: <?=$args['max_image_height']?>;"
            alt="MainImage"
            src="<?= $args['image'] ?>"
          />
          <?php if($args['image_text']){ ?>
            <div>
              <?php
                echo html_entity_decode($args['image_text']);
              ?>
            </div>
          <?php } ?>
        </div>
      <?php } ?>
      <?= $child; ?>
      <?= display_Footer(); ?>
    </section>
  </main>
</div>

<?php
  $style = '.main {
    min-height: 100vh;
    height: 100vh;
    max-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .section {
      background-color: var(--second-color);
      box-sizing: border-box;
      scroll-behavior: smooth;

      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100vw;
      overflow-y: auto;
      overflow-x: hidden;

      .image-container {
        position: relative;

        &,
        .image {
          $mobile-width: 620px;

          width: 100%;
          --header-height: calc(4rem + 1rem);
          @media (max-width: $mobile-width) {
            --header-height: calc(4rem + 1rem + 2.5rem);
          }
          @media (min-width: $mobile-width) {
            --header-height: calc(4rem + 1rem);
          }
          $height: min(calc(100svh - var(--header-height)), var(--max-height));
          min-height: $height;
          max-height: $height;
        }

        .image {
          object-fit: cover;
          filter: brightness(80%);
        }

        div {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          p,
          * {
            color: white;
            // color: var(--second-text-color);
            font-weight: bold;
          }

          padding: 1rem;
          border-radius: 1rem;
          // background-color: rgb(255, 255, 255, 0.3);
          background-color: rgb(0, 0, 0, 0.3);
        }
      }

      &::-webkit-scrollbar {
        width: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--accent-color);
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-button {
        display: none;
      }
    }
  }';

  $style = getWrapedScss($style, $id, $class);
  echo "<style>". $style ."</style>";

  return ob_get_clean();
}
?>