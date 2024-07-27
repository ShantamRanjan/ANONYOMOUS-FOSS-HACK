<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $quantity = intval($_POST["quantity"]);

    if ($quantity >= 0 && $quantity <= 15) {
  
        $amount = $quantity * 150;

        $payment_url = "$amount";
        header("Location: $payment_url");
        exit();
    } else {
        echo "Invalid quantity. Please select a value between 0 and 15.";
    }
} else {
    echo "Form not submitted correctly.";
}
?>