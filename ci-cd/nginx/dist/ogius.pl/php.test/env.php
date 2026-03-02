<?php
$_ENV["ENABLE_ADMIN"] ??= true;
$_ENV["DEBUG"] ??= true;
$_ENV["LOAD_DEFAULT_DATABASE_CONFIG"] ??= true;

// experimental db
// $_ENV["DB_ADDRESS"] ??= '127.0.0.1';
// $_ENV["DB_DATABASE"] ??= 'php_cms';
// $_ENV["DB_USER"] ??= 'php_user';
// $_ENV["DB_PASSWORD"] ??= 'P@$$W0rd';

$_ENV["DB_ADDRESS"] = 'localhost';
$_ENV["DB_DATABASE"] = 'ypmclvelpw_php_cms';
$_ENV["DB_USER"] = 'ypmclvelpw_php_user';
$_ENV["DB_PASSWORD"] = 'P@$$W0rd12';

$_ENV["ROOT_EMAIL"] = "root@gmail.com";
$_ENV["ROOT_PASSWORD"] = "root";
