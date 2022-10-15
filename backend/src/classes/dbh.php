<?php

class Dbh{
    private $host = "db";
    private $user = "root";
    private $pwd = "root";
    private $dbName = "ProductDB";

    protected function connect() {
        $conn = new mysqli($this->host, $this->user, $this->pwd, $this->dbName);
        return $conn;
    }
}