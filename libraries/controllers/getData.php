<?php

require_once(dirname(__DIR__) . '/models/Wines.php');

$model = new Wines();

$sql = $model->list();

echo json_encode($sql->fetchAll());

?>