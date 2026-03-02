<?php
// namespace Display;
function display_Header() {
  $id = $GLOBALS["getID"]();
  $class = $GLOBALS["getClass"]($id);

  ob_start();
  ?>

<script>
  let showDropdown = false;
  const handleDropdown_<?= $id; ?> = () => {
    showDropdown = !showDropdown;
    <?php $header_ul_id = "header-ul-" . $id; ?>
    document.getElementById("<?= $header_ul_id; ?>").setAttribute("data-show", showDropdown ? 1 : 0);
  };
</script>
<header class="<?= "$class $id" ?> header">
  <nav>
    <ul class="ul" id="<?= $header_ul_id ?>" data-show="0">
      <li>
        <a href="/o_mnie" class="logo">
          <img src="/static/img/logo.png" alt="logo" />
        </a>
      </li>
      <li class="dropdown">
        <button onclick="handleDropdown_<?= $id; ?>()">
          <img src="/static/img/menu.svg" alt="dark mode" />
        </button>
      </li>
      <li class="hidable">
        <a href="/o_mnie">o mnie</a>
      </li>
      <li class="hidable">
        <a href="/klub">klub</a>
      </li>
      <li class="hidable">
        <a href="/projekt_police">projekt police</a>
      </li>
      <li class="hidable">
        <a href="/aktualnosci">aktualności</a>
      </li>
      <li class="hidable">
        <a href="/kontakt">kontakt</a>
      </li>
      <li class="nightmodeBtn hidable">
        <button onclick="toggleNightMode()">
          <img src="/static/img/darkmode.svg" alt="dark mode" />
        </button>
      </li>
    </ul>
  </nav>
</header>

<?php
  $style = '.ul {
    padding: 0 1rem;
    box-sizing: border-box;

    position: sticky;
    top: 0;

    user-select: none;
    list-style: none;

    height: 5rem;
    width: 100vw;
    border-bottom: 1px solid var(--second-color);
    padding: 0.5rem;
    margin: 0;

    display: flex;
    align-items: center;
    flex-direction: row;

    a {
      display: block;
      position: relative;
      margin-right: 1rem;

      text-transform: uppercase;
      font-size: 1rem;
      text-decoration: none;
      color: var(--text-color);

      &.logo {
        &,
        * {
          height: 4rem;
        }
        *[nightmode] & {
          filter: invert(100%);
        }
      }

      &:not(.logo) {
        $padding: 0.5rem;
        padding: $padding;
        &::after {
          content: "";
          display: block;

          position: absolute;
          bottom: $padding;
          right: 0;

          transition: width 0.5s;
          width: 0px;
          height: 1px;

          color: var(--accent-color);
          background-color: var(--accent-color);
        }

        &:hover {
          &::after {
            left: 0;
            width: 100%;
          }
          color: var(--accent-color);
        }
      }
    }

    .nightmodeBtn,
    .dropdown {
      margin-left: auto;
      button {
        &,
        img {
          margin: 0;
          padding: 0;
        }
        border: none;
        background-color: transparent;
        height: 2.5rem;

        img {
          height: 100%;
          scale: 0.8;
          &:hover {
            scale: 1;
          }
        }
      }
    }

    .dropdown {
      display: none;
      *[nightmode] & {
        filter: invert(100%);
      }
    }
    $mobile-width: 620px;
    @media (max-width: $mobile-width) {
      flex-direction: column;
      height: auto;

      .dropdown {
        display: block;
      }

      a,
      .nightmodeBtn,
      .dropdown {
        margin: 0;
      }

      @keyframes hide {
        0% {
          max-height: 3rem;
        }
        100% {
          max-height: 0;
        }
      }
      @keyframes show {
        0% {
          max-height: 0;
        }
        100% {
          max-height: 3rem;
        }
      }

      .hidable {
        overflow: hidden;
        animation: show 0.5s ease-in forwards;
      }

      &:not([data-show="1"]) {
        .hidable {
          animation: hide 0.5s ease-in forwards;
        }
      }
      .dropdown,
      li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        &:not(:first-child) {
          &::after {
            content: "";
            display: block;
            position: absolute;

            top: 0;
            left: 1rem;
            right: 1rem;
            height: 1px;
            background-color: var(--second-color);
          }
        }
      }
    }
  }';
  // $style = ".$id :not(.$class), .$id> { $style }";
  $style = getWrapedScss($style, $id, $class);
  echo "<style>". $style ."</style>";

  return ob_get_clean();
}
?>