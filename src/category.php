<?php
require_once("config.php");

error_reporting(E_ERROR);
$categories = [];
$sql = "SELECT * FROM `category`";

if($result = mysqli_query($con, $sql))
{
    $cr = 0;
    while ($row=mysqli_fetch_assoc($result))
    {
        $categories[$cr]['catId'] = $row['cat_id'];
        $categories[$cr]['catName'] = $row['cat_name'];
        $cr++; 
    }

    echo json_encode($categories);
    http_response_code(200); 
}
else 
{
    http_response_code(404); 
}