<?php function Wraper($child) { 
  ob_start();  
?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <!-- link --> <link rel="icon" href="/static/img/logo.png" />
    <!-- link --> <link rel="stylesheet" href="/static/css/style.css"> 
    <!-- link <link rel="stylesheet" href="/static/css/font.css"> -->
    <!-- link --> <script defer src="/static/js/index.js"></script>
    <!-- description -->
    <meta name="description" content="
      informacje o wyborach w policach. 
      informacje o policach. 
      informacje o projekcie police.
      informacje o krystianie kowalewskim" />
    <meta name="keywords" content="
      projekt police, police, miasto, nasze miasto, wybory,
      krystian kowalewski, grażyna pawłowska, Rafał Ignaczak, Artur echaust, Sławomir Kajkowski,
      wybory gminne, kandydaci, głosowanie, społeczność lokalna, samorząd,
      portfolio, aktualności, strona, klub">
    <meta name="author" content="Artur echaust">
    <meta name="copyright" content="Artur echaust">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <title>Projekt Police</title>
    <meta property="og:title" content="Projekt Police">
    <!-- link --> <meta property="og:image" content="/static/img/klub/Projekt_Police.JPG">
    <!-- link --> <meta name="thumbnail" content="/static/img/klub/Projekt_Police.JPG">
    <meta property="og:description" content="Projekt police - informacje o wyborach. Police stać na więcej ">
  </head>
  <body>
    <?= $child ?>
  </body>
  </html>
<?php
  return ob_get_clean();
} 
?>