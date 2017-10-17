<?php
/* ������������ �������� �������� ������ � �� ������ �� ���������� 
�������� */
$sender_name = htmlspecialchars($_POST["sender_name"]);
$sender_email = htmlspecialchars($_POST["sender_email"]);
$subject = "����� ��������� � kolyaska.kz";

/* ������������� e-mail �������� */
$myemail = "mara_mg@mail.ru";

/* ��������� ��������� �� ������������ ���� �����, ��������� check_input 
������� */
$sender_name = check_input($_POST["sender_name"], "������� ���� ���!");
$sender_email = check_input($_POST["sender_email"], "������� ��� e-mail!");

/* ��������� ��������� �� ������� e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $sender_email))
{
show_error("<br /> �-mail ����� �� ����������!");
}

/* ������� ����� ����������, �������� �� �������� */
$message_to_myemail = "������������! 
����� ���������� ������ ���� ���������� ���������! 
��� �����������: $sender_name 
E-mail: $sender_email";

/* ���������� ���������, ��������� mail() ������� */
$from  = "��: $sender_name <$sender_email> \r\n �������� �����: $sender_email \r\n"; 
mail($myemail, $subject, $message_to_myemail, $from);

echo '�������! ���� ������ ����������.';
?>

<?php
/* ���� ��� ���������� ����� ���� �������� ������ ��������� 
��������� ���: */
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