<?php
    cors(); 

    require_once("config.php"); 


    $request = json_decode(file_get_contents('php://input'));

    if(isset($request) && !empty($request))
    {

        $first_name = $request->first_name;
        $last_name = $request->last_name; 
        $email = $request->email;
        $password = $request->password; 
        $isAdmin = 0; 
        


    $sql = "INSERT INTO users 
    (
        fname,
        lname,
        email,
        password, 
        isAdmin
    ) VALUES 
    (
        '{$first_name}',
        '{$last_name}',
        '{$email}',
        '{$password}',
        {$isAdmin}
    )
    "; 


    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else 
    {
       http_response_code(422); 
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