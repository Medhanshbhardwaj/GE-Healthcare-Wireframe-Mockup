// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get all the elements we need to work with
    const feasibilityForm = document.getElementById('feasibility-form');
    const inputs = [
        document.getElementById('roomLength'),
        document.getElementById('roomWidth'),
        document.getElementById('powerCapacity'),
        document.getElementById('location')
    ];
    const generateBtn = document.getElementById('generateQuoteBtn');
    const quoteSection = document.getElementById('quote-section');

    // A function to check if all input fields are filled
    function checkFormValidity() {
        // 'every' checks if all elements in the array pass the test
        const allFieldsFilled = inputs.every(input => input.value.trim() !== '');
        
        // Enable the button if all fields are filled, otherwise disable it
        generateBtn.disabled = !allFieldsFilled;
    }

    // Add an 'input' event listener to each input field
    // This will run the checkFormValidity function every time the user types
    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    // Add a 'submit' event listener to the form
    feasibilityForm.addEventListener('submit', (event) => {
        // Prevent the form from actually submitting and reloading the page
        event.preventDefault();
        
        // If the button is not disabled, show the quote section
        if (!generateBtn.disabled) {
            quoteSection.classList.remove('hidden');
        }
    });

});