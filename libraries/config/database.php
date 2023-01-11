<?php

/**
 * Connect to DB
 * 
 * @return PDO
 */

 function getPDO(): PDO
 {
    $hostname = 'localhost';
    $dbname = 'vivino_db';
    $user = 'root';
    $password = '';
    
    $pdo = new PDO("mysql:host=$hostname;dbname=$dbname", $user, $password, 
    [
        PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
    );
    return $pdo;
}
?>