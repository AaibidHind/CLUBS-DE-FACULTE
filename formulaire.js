function checkForm() {
  // Récupère tous les champs de formulaire
  const fields = document.querySelectorAll('form input, form textarea, form select');

  // Vérifie si tous les champs sont remplis
  let allFieldsFilled = true;
  fields.forEach(field => {
    if (field.value === '') {
      allFieldsFilled = false;
    }
  });

  // Affiche un message d'alerte en fonction de la vérification
  if (allFieldsFilled) {
    alert('Votre demande a été enregistrée');
  } else {
    alert('Veuillez remplir tous les champs');
  }
 
  }
  





