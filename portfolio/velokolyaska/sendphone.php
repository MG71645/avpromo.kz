<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$sender_name = htmlspecialchars($_POST["sender_name"]);
$subject = "Новое сообщение с kolyaska.kz";
$sender_phone = htmlspecialchars($_POST["sender_phone"]);

/* Устанавливаем e-mail адресата */
$myemail = "mara_mg@mail.ru";

/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$sender_name = check_input($_POST["sender_name"], "Укажите ваше имя!");
$sender_phone = check_input($_POST["sender_phone"], "Вы забыли указать номер!");

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $sender_name 
Телефон: $sender_phone";

/* Отправляем сообщение, используя mail() функцию */
$from  = "От: $sender_name <noreply@mail.ru> \r\n Написать ответ: noreply@mail.ru \r\n"; 
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