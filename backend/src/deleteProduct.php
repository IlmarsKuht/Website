<?php
include_once './classes/products.php';

$product = new Products();
$product->deleteProducts($_POST['delete']);

