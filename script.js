// Define the API URL to fetch student nationality data
const apiUrl = 'https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100';

// Function to fetch data from the API
async function fetchData() {
    try {
        // Make a GET request to the API
        const response = await fetch(apiUrl);
        
        const data = await response.json();
        
        // Call the function to populate the table with the retrieved data
        populateTable(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate the HTML table with the API data
function populateTable(results) {
    
    const tableBody = document.querySelector('#data-table tbody');
    
    // Loop through each item in the results
    results.forEach(item => {
        
        const row = document.createElement('tr');
        
        // Fill the row with data from the API
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.semester}</td>
            <td>${item.nationality}</td>
            <td>${item.number_of_students}</td>
            <td>${item.colleges}</td> <!-- Add college name -->
            <td>${item.the_programs}</td> <!-- Add program name -->
        `;
        
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Fetch data when the page loads
fetchData();