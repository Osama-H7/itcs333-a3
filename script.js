// API URL for fetching student nationality data
const apiUrl = 'https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100';

// Fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl); // Make the GET request
        const data = await response.json(); // Parse the JSON response
        populateTable(data.results); // Populate the table with data
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
    }
}

// Populate the HTML table with the fetched data
function populateTable(results) {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    results.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.semester}</td>
            <td>${item.the_programs || 'Bachelor'}</td> <!-- Default if not available -->
            <td>${item.nationality}</td>
            <td>${item.colleges}</td>
            <td>${item.number_of_students}</td>
        `;
        tableBody.appendChild(row); // Add the new row to the table
    });
}

// Fetch data when the page loads
fetchData();