<?php
include_once 'dbh.php';

class Product extends Dbh {
    private $SKU;
    private $Name;
    private $Price;
    private $ProductInfo;
    private $ProductType;
    private $ProductTypeID;
    

    public function addProduct(){
        // if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        
        //     if(isset($_POST['sku']) && isset($_POST['name']) && isset($_POST['price']) 
        //     && isset($_POST[$_POST['productType']]) && isset($_POST['productType'])){
        
        $sql = "SELECT ID FROM ProductType WHERE Name = '$this->ProductType'";
        $result = $this->connect()->query($sql);  //or die(mysqli_error($conn)); how to add
        $this->ProductTypeID = $result->fetch_object()->ID;       
        
        $this->SKU=$this->connect()->real_escape_string($this->SKU);
        $this->Name=$this->connect()->real_escape_string($this->Name);

        $sql = "INSERT INTO `Product` (`SKU`, `Name`, `Price`, `ProductInfo`, `ProductTypeID`)
        VALUES ('$this->SKU', '$this->Name', $this->Price, '$this->ProductInfo', '$this->ProductTypeID')";
    
        $this->connect()->query($sql);
        header('Location: http://localhost:3000');
                
            //}
            
         //}
    }
    public function setSKU($SKU){
        $this->SKU=$SKU;
    }

    public function setName($Name){
        $this->Name=$Name;
    }

    public function setPrice($Price){
        $this->Price=$Price;
    }

    public function setProductInfo($ProductInfo){
        $this->ProductInfo = implode("x", $ProductInfo);
    }

    public function setProductType($ProductType){
        $this->ProductType=$ProductType;
    }

    public function setProductTypeID($ProductTypeID){
        $this->ProductTypeID=$ProductTypeID;
    }



    public function getSKU(){
        return $this->SKU;
    }

    public function getName(){
        return $this->Name;
    }

    public function getPrice(){
        return $this->Price;
    }

    public function getProductInfo(){
        return $this->ProductInfo;
    }

    public function getProductType(){
        return $this->ProductType;
    }

    public function getProductTypeID(){
        return $this->ProductTypeID;
    }


} 