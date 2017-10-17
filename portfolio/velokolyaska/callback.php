<?php
if($_POST)
{
    $to_Email       = "mara_mg@mail.ru"; //Replace with recipient email address
    $subject        = 'Сообщение с сайта velokolyaska.kz'; //Subject line for emails
    
    
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    
        //exit script outputting json data
        $output = json_encode(
        array(
            'type'=>'error', 
            'text' => 'Request must come from Ajax'
        ));
        
        die($output);
    } 
    
    //check $_POST vars are set, exit if any missing
    if(!isset($_POST["userName"]) || !isset($_POST["userPhone"]))
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Вы ввели не все данные!'));
        die($output);
    }

    //Sanitize input data using PHP filter_var().
    $user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
    $user_Phone       = filter_var($_POST["userPhone"], FILTER_SANITIZE_STRING);
    
    //additional php validation
    if(strlen($user_Name)<3) // If length is less than 4 it will throw an HTTP error.
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Имя слишком короткое либо отсутствует!'));
        die($output);
    }
    if(!is_numeric($user_Phone)) //check entered data is numbers
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Номер должен состоять только из цифр!'));
        die($output);
    }
    
    //proceed with PHP email.

    /*
    Incase your host only allows emails from local domain, 
    you should un-comment the first line below, and remove the second header line. 
    Of-course you need to enter your own email address here, which exists in your cp.
    */
    //$headers = 'From: your-name@YOUR-DOMAIN.COM' . "\r\n" .
    $headers = 'From: no-reply@velokolyaska.kz' . "\r\n" . //remove this line if line above this is un-commented
    'Reply-To: no-reply@velokolyaska.kz' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
	/* Создаем новую переменную, присвоив ей значение */
	$user_Message = "Здравствуйте! 
	Вашей контактной формой было отправлено сообщение! 
	Имя отправителя: $user_Name
	Телефон: $user_Phone";
    
        // send mail
    $sentMail = @mail($to_Email, $subject, $user_Message, $headers);
    
    if(!$sentMail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'sdukfhsd'));
		echo $output;
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Спасибо, '.$user_Name .'! Мы получили ваши данные.'));
		echo $output;
        die($output);
    }
}
?>