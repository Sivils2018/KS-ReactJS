<?php 

require_once("config.php");

$request = file_get_contents("php://input");

error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM `users` WHERE email == '$email' AND password == 'md5($password)'"; 

if ($data = mysqli_query($con, $sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($data))
    {
        $users[$cr]['user_id']= $row['user_id'];
        $users[$cr]['fname']= $row['fname'];
        $users[$cr]['lname']= $row['lname'];
        $users[$cr]['email']= $row['email'];
        $users[$cr]['password']= $row['password'];
        $cr++;
    }

    echo json_encode($users);
    http_response_code(200);
}
else 
{
    $data = array("message" => "Wrong Email or Password. Please Try Again.");
    echo json_encode($data);
}

?>