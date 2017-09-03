<?php
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf-8");
$phone_num=$_POST["phone_num"];
$password=$_POST["password"];
$conn = new mysqli("","root");//连接服务器
/*if($conn->connect_error){
	die("数据库连接失败"); 
}
echo "数据库连接成功";*/
$conn->select_db("work"); //选择数据库
$sql = "select * from newwork where phone_num = '$phone_num'"; //选择表及字段
$result = $conn->query($sql);
//var_dump($result);	//echo不能输出对象?
if($result->num_rows==0){
	echo "1";
	$sql = "insert into newwork(phone_num,password)values('$phone_num','$password')";
	$conn->query($sql);

	//echo "$sql";
}else{
	echo "0";
}
?>