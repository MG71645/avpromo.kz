<?php
/* ������������ �������� �������� ������ � �� ������ �� ���������� 
�������� */
$sender_name = htmlspecialchars($_POST["sender_name"]);
$subject = "����� ��������� � kolyaska.kz";
$sender_phone = htmlspecialchars($_POST["sender_phone"]);

/* ������������� e-mail �������� */
$myemail = "mara_mg@mail.ru";

/* ��������� ��������� �� ������������ ���� �����, ��������� check_input 
������� */
$sender_name = check_input($_POST["sender_name"], "������� ���� ���!");
$sender_phone = check_input($_POST["sender_phone"], "�� ������ ������� �����!");

/* ������� ����� ����������, �������� �� �������� */
$message_to_myemail = "������������! 
����� ���������� ������ ���� ���������� ���������! 
��� �����������: $sender_name 
�������: $sender_phone";

/* ���������� ���������, ��������� mail() ������� */
$from  = "��: $sender_name <noreply@mail.ru> \r\n �������� �����: noreply@mail.ru \r\n"; 
mail($myemail, $subject, $message_to_myemail, $from);
?>

<p>���� ��������� ����������!</p>
<p>��������� <a href="index.html">�� ������� >>></a></p>

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
?>

<html>
<body>
<p>���������� ��������� ��������� ������:</p>
<?php echo $myError; ?>

</body>
</html>
<?php
exit();
}
?>