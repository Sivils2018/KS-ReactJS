<?php 
cors();
require_once("config.php");
//require_once("insert.php"); 

$request = json_decode(file_get_contents('php://input'));



if(isset($request) && !empty($request))
{

$query = "SELECT * FROM `users` WHERE email= '" . $request->email . "' AND password= '" . $request->password . "'" ; 



$result = $con->query($query); 


            if ($result->num_rows > 1)
                {
                    $row=mysqli_fetch_assoc($result);
                    $response=array("Message" => "success", "displayName" => $row['fname'] . " " . $row['lname'], 'user_id'=> $row['user_id']); 
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