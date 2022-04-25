<?php
require_once("config.php");

error_reporting(E_ERROR);
 
$wishlist = [];
$sql = "SELECT * FROM `wishlist` NATURAL JOIN products where user_id=" . $_GET['user_id']; 


$result = mysqli_query($con, $sql);

if($result -> num_rows > 0)
{
    
    while ($row=mysqli_fetch_assoc($result))
    {
        $product['product']= $row['product_id'];
        $product['price']= $row['product_price'];
        $product['description']= $row['product_desc'];
        $product['name']= $row['product_name'];
        $product['image'] = $row['product_image']; 
        $wishlist[] = $product;
    }

    echo json_encode($wishlist);
    http_response_code(200);
}
else 
{
    http_response_code(404); 
}

?>