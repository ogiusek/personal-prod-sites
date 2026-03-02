<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function send_mail($to, $subject, $message){
  $mail = new PHPMailer(true);

  $mail->setFrom('from@example.com', 'Sender Name');
  $mail->addAddress('ogius06@wp.pl', 'Recipient Name');
  $mail->Subject = 'Test Email';
  $mail->Body = 'This is a test email sent using PHPMailer.';
  return $mail->send();
}
// try{
$sent = send_mail("ogius06@wp.pl", "test", "test");
if (!$sent) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  exit (1);
}else{
  echo "Message has been sent";
}
// } catch (Exception $e) {
  // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }