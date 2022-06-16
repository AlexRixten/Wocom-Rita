<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$textarea1 = $_POST['textarea1'];
$textarea2 = $_POST['textarea2'];
$textarea3 = $_POST['textarea3'];
$textarea4 = $_POST['textarea4'];
$textarea5 = $_POST['textarea5'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rixten.09@gmail.com';                 // Наш логин
$mail->Password = 'wlabbgdirpmuddwo';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('rixten.09@gmail.com', 'Wocom - Анкета');   // От кого письмо 
$mail->addAddress('vinolin.bright@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br>
	Чем вы занимаетесь?: ' .$textarea1 .' <br>
	В чем ваша задача?: ' .$textarea2 .' <br>
	Каким вы видите решение задачи?: ' .$textarea3 .' <br>
	Какие у вас ожидания от результата?: ' .$textarea4 .' <br>
	Сколько денег планируете потратить?: ' .$textarea5 .' <br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>