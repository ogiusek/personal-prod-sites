<?php function display_O_Mnie() {
  $id = $GLOBALS["getID"]();
  $class = $GLOBALS["getClass"]($id);
  ob_start();
  // $arr = array_map(function($_, $i) {
  //   return "./img/o_mnie/" . ($i + 1) . ".jpg";
  // }, array_fill(0, 32, 0));
  $arr = array_map(function($_, $i) {
    return "/static/img/o_mnie/" . ($i + 1) . ".jpg";
  }, array_fill(0, 32, 0), array_keys(array_fill(0, 32, 0)));
?>

<div class="<?= "$class $id" ?>">
  <div class="content">
    <h1>o mnie</h1>
    <h2>kim jestem ?</h2>
    <p>
      Szanowni Państwo Nazywam się Krystian Kowalewski i kandyduję na Burmistrza
      Gminy Police.
    </p>
    <p>
      Posiadam wykształcenie wyższe ekonomiczne kierunek Zarządzanie specjalność
      Psychologia Zarządzania.
    </p>

    <h2>Moja rodzina</h2>
    <p>
      Mam 47 lat. Jestem w związku małżeńskim z Aliną. Wychowujemy dwójkę
      cudownych dzieci Marcelinę (lat 13) i Olgierda (lat 17). Mieszkamy w
      Policach na os. Anny Jagiellonki.
    </p>

    <h2>Aktywność zawodowa</h2>
    <p>
      Od 2008 roku prowadzę firmę teleinformatyczną AMPIONET sp. z o.o. na
      stanowisku prezes zarządu natomiast żona prowadzi własną działalność
      gospodarczą oraz pracuje w handlu zagranicznym.
    </p>

    <h2>Aktywność społeczna</h2>
    <p>
      Obecnie pełnię funkcję Przewodniczącego Rady Nadzorczej Spółdzielni
      Mieszkaniowej "Chemik" w Policach. W ostatnich latach przeprowadziliśmy
      szereg zmian usprawniających pracę Spółdzielni oraz otwierającą ją na
      potrzeby i głosy spółdzielców.
    </p>
    <p>
      Działam aktywnie w Stowarzyszeniu „Lions Club” w Policach, które od lat
      prowadzi aktywną działalność charytatywną na rzecz mieszkańców Polic.
    </p>
    <p>Jestem Radnym Gminy Police od 1998 roku.</p>
    <p>
      Od 2017 roku przewodniczę Stowarzyszeniu na Rzecz Rozwoju "Projekt
      Police". Działamy ponad podziałami partyjnymi szukając rozwiązań
      najlepszych dla mieszkańców Polic. Moje motto to nasz los w naszych
      rękach, jeżeli chcemy by w Policach coś się zmieniło, by życie w naszej
      małej ojczyźnie było lepsze, to musimy dać coś z siebie i podejmować
      odpowiedzialność za wspólne sprawy. Nic o nas bez nas.
    </p>
  </div>
  <?= display_Caruosel($arr) ?>
</div>

  <!-- <Caruosel
    images={Array(32)
      .fill(0)
      .map((_, i) => `./img/o_mnie/${i + 1}.jpg`)}
  /> -->

  <?php
  $style_global = "
    .main .section .image {
      object-position: 35% 15%;
    }";
  $style = ".content{
    padding: 0 1rem;
    box-sizing: border-box;
    margin-top: 5rem;

    max-width: 70rem;
    width: 100%;

    margin-left: auto;
    margin-right: auto;

    h1,
    h2 {
      text-transform: uppercase;
    }

    h1 {
      font-size: 2.5rem;
      margin-top: 5rem;
      margin-left: 1rem;
      margin-bottom: -2rem;
    }

    h2 {
      font-size: 2rem;
      margin-top: 4rem;
      margin-bottom: -1rem;
    }

    p {
      // text-indent: 1rem;
      font-size: 1.5rem;
      filter: brightness(0.6);
    }
  }";
    
  $style = getWrapedScss($style, $id, $class, $style_global);
  // echo "<script>console.log(`$style`);</script>";
  echo "<style>". $style ."</style>";

  return ob_get_clean();
} ?>