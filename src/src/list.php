<?php 

require_once("config.php");
require_once("insert.php"); 

$request = json_decode(file_get_contents('php://input'));



if(isset($request) && !empty($request))
{

$query = "SELECT * FROM `users` WHERE email= '" . $request->email . "' AND password= '" . $request->password . "'" ; 



$result = $con->query($query); 


            if ($result->num_rows > 1)
                {
                    $row=mysqli_fetch_assoc($result);
                    $response=array("Message" => "success", "displayName" => $row['fname'] . " " . $row['lname']); 
                    echo json_encode($response);
                    http_response_code(201);
                }
            else 
                {   
                $error = array("Message" => "Invalid email/password");
                echo json_encode($error);
                http_response_code(401);
                }
}
else 
{
    http_response_code(404); 
}
?>