<?php 

define ('DB_HOST', 'db' );
define ('DB_USER', 'root' );
define ('DB_PASS', 'root');
define ('DB_NAME', 'IWantThis'); 


define ('DISPLAY_DEBUG', true);
define ('BASEDIR', $_SERVER['DOCUMENT_ROOT'] . "\\IWantThis\\");


function connect()
{
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if(mysqli_connect_errno())
    {
        die("Failed to connect" . mysqli_connect_errno()); 
    }

    mysqli_set_charset($connect, "utf8");

    return $connect; 
}

$con = connect(); 