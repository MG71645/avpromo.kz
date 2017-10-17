<?
if($_POST)
    {
    $to = "info@avpromo.kz"; //куда отправлять письмо
    $from = 'AV PROMO'; // от кого
    $subject = "Проверка почты"; //тема
    $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['phone'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    }
?>