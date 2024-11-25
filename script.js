const africanCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad",
    "Comoros", "Congo (Congo-Brazzaville)", "Democratic Republic of the Congo (Congo-Kinshasa)", "Djibouti", "Egypt", "Equatorial Guinea",
    "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia",
    "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
    "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Togo", "Tunisia",
    "Uganda", "Zambia", "Zimbabwe"
];

// Function to populate the select elements with the African countries
function populateCountries() {
    const fromCountrySelect = document.getElementById("fromCountry");
    const toCountrySelect = document.getElementById("toCountry");

    // Loop through the list of countries and add them to both dropdowns
    africanCountries.forEach(country => {
        const optionFrom = document.createElement("option");
        optionFrom.value = country;
        optionFrom.textContent = country;
        fromCountrySelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = country;
        optionTo.textContent = country;
        toCountrySelect.appendChild(optionTo);
    });
}

// Call the function to populate countries when the page loads
populateCountries();