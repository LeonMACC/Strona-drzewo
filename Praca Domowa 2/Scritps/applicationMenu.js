const footerButtonsContainer = document.getElementById('footer-buttons');


function createButton() {
  const button = document.createElement('button'); 
  button.textContent = 'Przycisk';


  button.addEventListener('click', function() {
    console.log('Drzewo'); 
  });

  return button; 
}


for (let i = 0; i < 20; i++) {
  const button = createButton(); // Tworzy przycisk
  footerButtonsContainer.appendChild(button); // Dodaje przycisk do kontenera
}