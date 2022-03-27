<?
    require_once("config.php"); 


    $request = json_decode(file_get_contents('php://input'));

    if(isset($request) && !empty($request))
    {

        $first_name = $request->first_name;
        $last_name = $request->last_name; 
        $email = $request-> email;
        $password = $request->password; 

        if ($email == "")
        {
            http_response_code(422);
            exit(); 
        }

    $sql = "INSERT INTO `users` 
    (
        `fname`,
        `lname`,
        `email`,
        `password`
    ) VALUES 
    (
        '{$first_name}',
        '{$last_name}',
        '{$email}',
        '{$password}'
    )
    "; 

    if(mysqli_query($con, $sql))
    {
        http_response_code(201);
        $data = array("message" => "Sucessfully created a user record.");
        echo json_encode($data);
    }
    else 
       http_response_code(422); 
}
?>