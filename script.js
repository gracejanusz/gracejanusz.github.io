function hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}


document.addEventListener('DOMContentLoaded', () => {

    // preload white images to reduce hover buffer
    ['linkedin', 'mail', 'resume', 'github'].forEach((icon) => {
        const img = new Image();
        img.src = `images/${icon}-white.png`;
    })

})

window.onload = function() {
  const nameElement = document.getElementById('typed-name');
  const name = 'Grace Janusz';  // Your name here

  let index = 0;
  function typeName() {
    if (index < name.length) {
      nameElement.textContent += name[index];
      index++;
      setTimeout(typeName, 150); 
    }
  }

  typeName(); 
};
