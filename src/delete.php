<?php 

require_once("config.php");


$sql = "DELETE FROM `wishlist` WHERE `user_id` = . $_GET['user_id'] AND `product_id` = . $_GET['product_id']"; 

error_reporting(E_ERROR);
if($result = mysqli_query($con, $sql))
{
    $result = array("message" => "Record Deleted Successfully");
    http_response_code(204);
    echo json_encode($result);
}
else 
{
    $result = array("message" => "Record not deleted");
    http_response_code(422);
    echo json_encode($result);
}