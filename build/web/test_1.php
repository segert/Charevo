<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
$dbhost = '127.0.0.1';
$dbuser = 'root';
$dbpass = '';
$dbname = "charevo";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT * FROM charevo.blogs';

//mysql_select_db('TUTORIALS');
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysqli_fetch_array($retval))
{
    echo "Tutorial ID :{$row['blogid']}  <br> ".
         "Title: {$row['character']} <br> ".
         "Author: {$row['date']} <br> ".
         "Submission Date : {$row['content']} <br> ".
         "--------------------------------<br>";
} 


echo "Fetched data successfully\n";
mysqli_close($conn);
?>
    </body>
</html>
