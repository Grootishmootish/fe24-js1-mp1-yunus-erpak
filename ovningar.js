// Select the main container
const container = document.getElementById('container');

// Set the container's basic style
container.style = 'width: 100%; padding: 20px; box-sizing: border-box; font-family: Arial, sans-serif;';

// Define row colors in an array with HSL values
const rowColors = [
    'hsl(210, 100%, 85%)', // Light blue
    'hsl(210, 100%, 75%)', // Sky blue
    'hsl(210, 100%, 65%)', // Medium blue
    'hsl(210, 100%, 55%)', // Blue
    'hsl(210, 100%, 45%)'  // Darker blue
];

// Create rows with a loop and conditionally set content and style
for (let i = 1; i <= 5; i++) {
    const row = document.createElement('div');
    row.innerText = `Rad ${i}`; // Set text content
    row.style = `width: 100%; padding: 10px; text-align: center; margin: 5px 0; color: #ffffff; font-weight: bold; background-color: ${rowColors[i - 1]};`;
    container.appendChild(row); // Add row to container
}

// Create grid container and style it
const gridContainer = document.createElement('div');
gridContainer.style = 'display: flex; justify-content: space-around; margin-top: 20px;';
container.appendChild(gridContainer);

// Define the content for each grid column as arrays
const gridContents = [
    Array.from({ length: 10 }, (_, i) => i.toString()),         // Numbers 0-9
    Array.from({ length: 10 }, (_, i) => (9 - i).toString()),   // Numbers 9-0
    ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"] // Swedish numbers
];

// Loop over each content array to create grid columns
gridContents.forEach((contentArray, index) => {
    const grid = document.createElement('div');
    grid.style = 'background-color: hsl(220, 20%, 85%); padding: 5px; border: 2px solid hsl(0, 0%, 20%); box-sizing: border-box;';
    
    // Inner loop to create each cell in the grid column
    contentArray.forEach(item => {
        const cell = document.createElement('div');
        cell.innerText = item;
        
        // Conditionally set cell background color for alternating stripes
        if (parseInt(item) % 2 === 0 || isNaN(parseInt(item))) { 
            cell.style = 'background-color: hsl(0, 0%, 20%); color: #ffffff; text-align: center; padding: 5px; margin: 2px 0;';
        } else {
            cell.style = 'background-color: hsl(0, 0%, 30%); color: #ffffff; text-align: center; padding: 5px; margin: 2px 0;';
        }
        
        grid.appendChild(cell); // Add cell to grid column
    });
    
    gridContainer.appendChild(grid); // Add grid column to grid container
});
