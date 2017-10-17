<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$sender_name = htmlspecialchars($_POST["sender_name"]);
$sender_email = htmlspecialchars($_POST["sender_email"]);
$subject = "Новое сообщение с kolyaska.kz";

/* Устанавливаем e-mail адресата */
$myemail = "mara_mg@mail.ru";

/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$sender_name = check_input($_POST["sender_name"], "Укажите ваше имя!");
$sender_email = check_input($_POST["sender_email"], "Укажите ваш e-mail!");

/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $sender_email))
{
show_error("<br /> Е-mail адрес не существует!");
}

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $sender_name 
E-mail: $sender_email";

/* Отправляем сообщение, используя mail() функцию */
$from  = "От: $sender_name <$sender_email> \r\n Написать ответ: $sender_email \r\n"; 
mail($myemail, $subject, $message_to_myemail, $from);

echo 'Спасибо! Ваше письмо отправлено.';
?>

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

}
?>