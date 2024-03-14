<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $company_name = $_POST['company_name'];
    $solution_type = $_POST['solution_type'];
    $description = $_POST['description'];

    // You can process the form data here, such as sending an email, saving to a database, etc.
    
    // Example: send email
    $to = "kareemelbalshe1234@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "First Name: $first_name\nLast Name: $last_name\nCompany Name: $company_name\nSolution Type: $solution_type\nDescription: $description";
    $headers = "From: $first_name <$to>";
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
