function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function isGameAllowed(game, userAge) {
  if (userAge === null || userAge === undefined) return false;
  if (userAge >= 18) return true;
  
  const brRating = game.rating;
  if (!brRating) return true;
  
  const match = brRating.match(/(\d+)/);
  if (match) {
    const minAge = parseInt(match[0]);
    if (minAge > userAge) return false;
  }
  return true;
}

function getUserAge() {
  const age = localStorage.getItem('user-age');
  if (age === null) return null;
  const parsedAge = parseInt(age);
  return isNaN(parsedAge) ? null : parsedAge;
}

function changeAge() {
  localStorage.removeItem('user-age');
  location.reload();
}
