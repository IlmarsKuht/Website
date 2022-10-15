<?php
include_once 'dbh.php';

class Products extends Dbh {
    
    public function getProducts(){
        $sql = "SELECT Product.SKU, Product.Name, Product.Price, Product.ProductInfo, Product.ProductTypeID, ProductType.Suffix
        FROM Product
        INNER JOIN ProductType ON Product.ProductTypeID = ProductType.ID; ";
        $result = $this->connect()->query($sql);
        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = $row;
        }
        echo json_encode($json_array);
    }

    public function deleteProducts($SKUS){

        foreach ($SKUS as $SKU){
        $SKU=$this->connect()->real_escape_string($SKU);
        $sql = "DELETE FROM Product WHERE SKU='$SKU'";
        $this->connect()->query($sql);
        }
        
        header('Location: http://localhost:3000');
    }
    public function getSKUS(){
        $sql = "SELECT SKU FROM Product";
        $result = $this->connect()->query($sql);
        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = array_values($row)[0];
        }
        echo json_encode($json_array);

    }


} 