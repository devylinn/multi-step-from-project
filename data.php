<?php
$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
// if any of these variables don't exist, add an error to our $errors array

$first_name="";
$last_name="";
$birthday="";
$phone_number="";
$email="";
$home_street_address="";
$city="";
$choose_option="";


if(isset($_POST["fname"])){
  $first_name=$_POST['fname'];
}
if(isset($_POST['lname'])){
  $last_name=$_POST['lname'];
}
if(isset($_POST['birthday'])){
  $birthday=$_POST['birthday'];
}
if(isset($_POST['phone-number'])){
  $phone_number=$_POST['phone-number'];
}
if(isset($_POST['email'])){
  $email=$_POST['email'];
}

if(isset($_POST['home-street-address'])){
  $home_street_address=$_POST['home-street-address'];
}

if(isset($_POST['city'])){
  $city=$_POST['city'];
}


if(!empty($_POST['choose-two'])){
  $choose_option=$_POST['choose-two'];
}else if(!empty($_POST['choose-one'])){
  $choose_option=$_POST['choose-one'];
}

// $first_name = $_POST["fname"];
// $last_name =  $_POST["lname"];
// $home_street_address = $_POST["home-street-address"];
// $city = $_POST["city"];


// return a response ===========================================================

// if there are any errors in our errors array, return a success boolean of false
if ( ! empty($errors)) {

    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors']  = $errors;
} else {


    $data['success'] = true;
    $data['message'] = 'Success!';
}

if($data['success'] = true){

    $data['fname'] =  $first_name;
    $data['lname'] =  $last_name;
    $data['birthday'] =  $birthday;
    $data['phone-number'] =  $phone_number;
    $data['email'] =  $email;
    $data['home-street-address'] =  $home_street_address;
    $data['city'] =  $city;
    $data['choose'] =  $choose_option;

}



// return all our data to an AJAX call
echo json_encode($data);

?>