<?
// ----------------------------конфигурация-------------------------- // 

$adminemail="info@avpromo.kz";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="javascript:history.back(1)";  // На какую страничку переходит после отправки письма 

//---------------------------------------------------------------------- // 



// Принимаем данные с формы

$name=$_POST['name'];

$phone=$_POST['phone'];



// Проверяем валидность e-mail
/*
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", strtolower($phone)))

 { 

  echo
"Вы указали не верные данные";

  }
 
 else
 
 {
*/

$msg="

Имя: $name

Телефон: $phone


";


 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение от $name", "$msg");



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

echo "<p>Спасибо! Наш оператор свяжется с вами в течении 30 минут</p>";
/*
 }
*/
?>