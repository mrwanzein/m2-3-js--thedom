// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

let frogRaceTrack = document.querySelector('#track');

for(let i=0; i<FROGS; i++){
    let frogLane = document.createElement('li');
    frogLane.setAttribute('id', `lane-${i}`);

    let frogLaneNum = document.createElement('span');
    frogLaneNum.setAttribute('id', `frog-${i}`);
    frogLaneNum.setAttribute('class', `frog`);
    frogLane.appendChild(frogLaneNum);
    frogRaceTrack.appendChild(frogLane);
}
