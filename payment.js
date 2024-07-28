document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const phone = document.getElementById('phoneNumber');
    const car = document.getElementById('carNumber');
    const hours = document.getElementById('hours');
    const price = document.getElementById('price');
    const submitButton = document.getElementById('submit');

    hours.addEventListener('input', function() {
        const hoursValue = parseInt(hours.value);
        if (!isNaN(hoursValue) && hoursValue >= 0) {
            price.innerHTML = (hoursValue * 100) + "Rs";
        } else {
            price.innerHTML = "0Rs";
        }
    });

    submitButton.addEventListener('click', function() {
        if (name.value === "" || phone.value === "" || car.value === "" || hours.value === "") {
            alert('No field should be empty');
        } else {
            clearFields();
        }
    });

    function clearFields() {
        name.value = "";
        phone.value = "";
        car.value = "";
        hours.value = "";
        price.innerHTML = "0Rs";
    }
});