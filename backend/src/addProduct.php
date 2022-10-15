<?php
  
include_once './classes/product.php';

$product = new Product();

$product->setSKU($_POST['sku']);
$product->setName($_POST['name']);
$product->setPrice($_POST['price']);
$product->setProductInfo($_POST['productInfo']);
$product->setProductType($_POST['productType']);

$product->addProduct(); 


    