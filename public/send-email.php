<?php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$to = $data['to'];
$subject = $data['subject'];
$message = $data['message'];

$headers = "From: website@rd1.co.uk\r\n";
$headers .= "Reply-To: website@rd1.co.uk\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if(mail($to, $subject, $message, $headers)){

    echo json_encode([
        "success" => true
    ]);

}else{

    echo json_encode([
        "success" => false
    ]);

}

?>
