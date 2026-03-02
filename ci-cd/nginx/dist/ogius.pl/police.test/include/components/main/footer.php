<?php
function display_Footer() {
  $id = $GLOBALS["getID"]();
  $class = $GLOBALS["getClass"]();

  ob_start();
  ?>

<div class="<?= "$class $id" ?>">
  <footer class="footer">
    <img class="logo" alt="logo" src="/static/img/logo.png" />
    <div class="column">
      <h2>więcej</h2>
      <ul class="links">
        <li><a href="/o_mnie">o mnie</a></li>
        <li><a href="/klub">klub</a></li>
        <li><a href="/projekt_police">projekt police</a></li>
        <li><a href="/aktualnosci">aktualności</a></li>
        <li><a href="/kontakt">kontakt</a></li>
      </ul>
    </div>
    <div class="column">
      <h2>Kontakt</h2>
      <ul>
        <li><p>Email: biuro@krystiankowalewski.pl</p></li>
        <li><p>Numer: 502 063 398</p></li>
      </ul>
    </div>
  </footer>
</div>

<?php 
  $style = '.footer {
    background-blend-mode: multiply;
    background-image: linear-gradient(
      to bottom,
      var(--main-color),
      var(--second-color)
    ); /* color mix */

    width: 100%;
    margin-top: 5rem;

    box-sizing: border-box;
    padding: 3rem 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    .logo {
      width: 7.5rem;
      margin-right: 2.5rem;
      margin-bottom: auto;

      *[nightmode] & {
        filter: invert(100%);
      }
    }

    .column {
      width: calc(50% - 10rem / 2);
      min-width: 10rem;
      margin-bottom: auto;

      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: column;

      h2 {
        margin-right: auto;
        text-transform: uppercase;
      }

      ul {
        margin-right: auto;
        padding-left: 0.5rem;
        li {
          list-style: none;
          a,
          p {
            margin: 0;
            opacity: 0.6;
            text-transform: capitalize;
            &:hover {
              opacity: 0.8;
            }
            text-decoration: none;
          }
          p {
            opacity: 0.8;
          }
        }
      }
    }
  }';
  $style = getWrapedScss($style, $id, $class);
  echo "<style>". $style ."</style>";

  return ob_get_clean();
}
?>
