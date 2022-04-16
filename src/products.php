<?php
require_once("config.php");

error_reporting(E_ERROR);
 
$product = [];
$sql = "SELECT * FROM products WHERE product_id=" . $_GET['id'];


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
    }

    echo json_encode($product);
    http_response_code(200);
}
else 
{
    http_response_code(404); 
}

?>