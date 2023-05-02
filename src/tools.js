// Get the select element from the DOM
const spaceSelect = document.getElementById('space-select');

// Load the spaces from the JSON file
fetch('spaces.json')
  .then(response => response.json())
  .then(spaces => {
    // Iterate over the spaces and create an option for each one
    spaces.forEach(space => {
      const option = document.createElement('option');
      option.value = space.src;
      option.textContent = space.name;
      spaceSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading spaces:', error));

// Get the iframe element from the DOM
const spaceIframe = document.getElementById('space-iframe');

// Listen for changes to the select element and update the iframe src accordingly
spaceSelect.addEventListener('change', () => {
  spaceIframe.src = spaceSelect.value;
});
