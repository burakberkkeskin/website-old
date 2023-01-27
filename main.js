var professions = [
  'Computer Engineer',
  'DevOps Engineer',
  'Backend Engineer',
  '!Frontend Engineer',
  'Lifetime Student',
];
let currentProfession = 0;
function changeProfession() {
  document.getElementById('profession').innerHTML =
    professions[currentProfession];
  currentProfession = (currentProfession + 1) % professions.length;
  setTimeout(changeProfession, 1000);
}
