<?php

if(isset($_POST['submit'])) {

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['mail']);
  $phone = htmlspecialchars($_POST['phone']);
  $msg = htmlspecialchars($_POST['msg']);

  require './PHPMailer/PHPMailerAutoload.php';
  
  //we need to create an instance of PHPMailer
    $mail = new PHPMailer();

    //set where we are sending email
    $mail->addAddress('info@megatti-metals.com');

    //set who is sending an email
    $mail->setFrom('info@megatti-metals.com', $name);

    //set subject
    $mail->Subject = "Poruka sa stranice!";

    //type of email
    $mail->isHTML(true);

    //write email
    $mail->Body = "<p>Poruka od: ".$name."<br><br>Mail: ".$email."<br><br>Kontakt broj: ".$phone."<br><br>Poruka:<br><br>$msg</p>";

    //send an email
    if (!$mail->send())
        echo "Error!";
    else
        echo 'Poruka poslana!';
} else {
  header('location: ./index.php');
  die();
}