const frogStable = [
  {
    name: 'Hopper',
    color: 'blue',
    number: '32',
  },
  {
    name: 'Legs',
    color: 'red',
    number: '79',
  },
  {
    name: 'Bouncer',
    color: 'brown',
    number: '6',
  },
  {
    name: 'Springs',
    color: 'purple',
    number: '48',
  },
  {
    name: 'Fred',
    color: 'black',
    number: '8',
  },
];

let racers = [];


for(let i=0; i<3; i++){
  let random = Math.floor(Math.random() * frogStable.length);
  
  racers.push(frogStable[random]);
  frogStable.splice(random, 1);
  
  let frogRef = document.querySelector(`#frog-${i}`);
  frogRef.innerHTML = `${racers[i].number}`;
  frogRef.style.background = `${racers[i].color}`;
  
  racers[i].progress = 0;
}

let randomNum = function(num) {
  return Math.floor(Math.random() * num);
}

let set1 = setInterval(function() {racingFrog(racers, 0);}, 1500);
let set2 = setInterval(function() {racingFrog(racers, 1);}, 2000);
let set3 = setInterval(function() {racingFrog(racers, 2);}, 1800);

let racingFrog = function(frogObject, frogNum) {
  let randomDistance = randomNum(10);

  frogObject[frogNum].progress += (randomDistance*2);

  document.querySelector(`#frog-${frogNum}.frog`).style.left = `${frogObject[frogNum].progress}%`;

  if(frogObject[0].progress >= 100) {
    document.querySelector(`#frog-${frogNum}.frog`).style.left = `100%`;
    clearInterval(set1);
  }

  if(frogObject[1].progress >= 100) {
    document.querySelector(`#frog-${frogNum}.frog`).style.left = `100%`;
    clearInterval(set2);
  }

  if(frogObject[2].progress >= 100) {
    document.querySelector(`#frog-${frogNum}.frog`).style.left = `100%`;
    clearInterval(set3);
  }
}