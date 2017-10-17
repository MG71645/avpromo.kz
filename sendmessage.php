<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$sender_name = htmlspecialchars($_POST["name"]);
$sender_email = htmlspecialchars($_POST["phone"]);
$subject = "Новое сообщение с сайта";
/* Устанавливаем e-mail адресата */
$myemail = "mg71645@gmail.com";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$sender_name = check_input($_POST["name"], "Укажите ваше имя!");
$sender_email = check_input($_POST["phone"], "Укажите ваш телефон!");
/* Проверяем правильно ли записан e-mail */
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $sender_email))
{
show_error("<br /> Е-mail адрес не существует!");
}*/
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $sender_name 
Телефон: $sender_email";
/* Отправляем сообщение, используя mail() функцию */
$from  = "От: $sender_name <$sender_email> \r\n Написать ответ: $sender_email \r\n"; 
mail($myemail, $subject, $message_to_myemail, $from);
?>
<p>Ваше сообщение отправлено!</p>
<p>Вернуться <a href="index.html">На главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>