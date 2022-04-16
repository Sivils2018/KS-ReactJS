<?php
require_once("config.php");

error_reporting(E_ERROR);
$singleproducts = [];
$sql = "SELECT * FROM `products` WHERE product_id=" .$_GET['id']; 



if($result = mysqli_query($con, $sql))
{
    
    $cr = 0;
    while ($row=mysqli_fetch_assoc($result))
    {
        $singleproducts[$cr]['product_id']= $row['product_id'];
        $singleproducts[$cr]['price']= $row['product_price'];
        $singleproducts[$cr]['description']= $row['product_desc'];
        $singleproducts[$cr]['name']= $row['product_name'];
        $cr++; 
    }

    echo json_encode($singleproducts);
    http_response_code(200);
}
else 
{
    http_response_code(404); 
}

?>