<?php
require_once("config.php");

error_reporting(E_ERROR);
$products = [];
$sql = "SELECT * FROM `products` WHERE `cat_id`" . $_GET['id'];



if($result = mysqli_query($con, $sql))
{
    
    $cr = 0;
    while ($row=mysqli_fetch_assoc($result))
    {
        $products[$cr]['product_id']= $row['product_id'];
        $products[$cr]['price']= $row['product_price'];
        $products[$cr]['description']= $row['product_desc'];
        $products[$cr]['image']= $row['product_image'];
        $products[$cr]['name']= $row['product_name'];
        $products[$cr]['category'] = $row['cat_id']; 
        $cr++; 
    }

    echo json_encode($products);
    http_response_code(200);
}
else 
{
    http_response_code(404); 
}

?>