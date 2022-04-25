<?php
cors();

require_once("config.php");
//require_once("insert.php"); 

error_reporting(E_ERROR);
$request = json_decode(file_get_contents('php://input'));


if(isset($_GET['user_id']))
{
        $user_id = $_GET['user_id'];
        $product_id = $request->product->product; 

        $sql = "SELECT * FROM `wishlist` where `product_id` = $product_id AND `user_id` = $user_id";
        $result = mysqli_query($con, $sql);
    
        if (mysqli_num_rows($result) == 1)
        {
            echo("Product Already Favorited");
        }
        else
        {
            $insert = "INSERT INTO `wishlist` VALUES (" . $product_id . ", 1, " . $user_id . ", null)"; 
            echo $insert;
            if(mysqli_query($con, $insert))
            {
             http_response_code(200);
            }
        }
}

function cors() {

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }
}

?>