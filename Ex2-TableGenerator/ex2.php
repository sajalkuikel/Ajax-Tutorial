<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
    
</body>
</html>
<?php
	$server = '127.0.0.1';
	$username = 'root';
	$password = '';


	$schema = 'message_demo';


	$pdo = new PDO('mysql:dbname=' . $schema . ';host=' . $server, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    function find($table, $field, $value) {
        global $pdo;
	    $stmt = $pdo->prepare('SELECT * FROM ' .$table.' WHERE '.$field.'=:value');
        $criteria = [
            'value' => $value
        ];
        $stmt->execute($criteria);
        return $stmt;
	}
	function findAll($table) {
        global $pdo;
	    $stmt = $pdo->prepare('SELECT * FROM ' .$table);
        $stmt->execute();
        return $stmt;
	}

    $persons= findAll('person');
    echo '
        <form method="get">
        <select name="users">';
        while ($person =$persons->fetch()){
            echo '<option value="'.$person['id'] .'">'. $person['firstname'].'  </option>';
        }
    echo '
        </select>
        <button  id="submitbtn" name="submit"> Submit</button>
        </form>
    ';
    echo '<div id="new"></div>';
    if(isset($_GET['users'])){
        
        $persons= find('person', 'id', $_GET['users']);
        while ($person =$persons->fetch()){
            echo $person['firstname'];
            echo $person['surname'];
            echo $person['email'];
        }

    }
    
?>