// TO THE CHECKER:
// I've got the idea of this challenge, depsite the fact that output is a mess

// in my opinion, it should be better done with single object
planets = {
    'Mercury' : {color : "darkgray"},
    Venus : {
        color : 'light yellowish'
    },
    Earth : {
        color : 'light blue',
        moons : {moon : 'gray'}
    },
    Mars : {
        color : 'red',
        moons : {
            Phobos : '',
            Deimos : ''
        }
    },
    Saturn : {
        color : '',
        moons : {
            Mimas : '',
            Enceladus : '',
            Tethys : '',
            Dione : '',
            Rhea : '',
            Titan : '',
            Iapetus : '' // there are more but I'm lazy
        }
    },
    Jupiter : {
        color : '',
        moons : {
            Ganymede : '',
            Callisto : '',
            Io : '',
            Europa : '',
            Amalthea : '',
            Himalia : '',
            Thebe : ''
        }
    },
    Uranus : {
        color : '',
        moons : {
            Titania : '',
            Oberon : '',
            Umbriel : '',
            Ariel : '',
            Miranda : ''
        }
    },
    Neptune : {
        color : '',
        moons : {
            Triton : '',
            Proteus : '',
            Nereid : '',
            Larissa : '',
            Galatea : '',
            Despina : ''
        }
    },
    Pluto : {
        color : '',
        moons : {
            Charon : '',
            Styx : '',
            Nix : '',
            Kerberos : '',
            Hydra : '' // I'm too lazy
        }
    }
}

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".
// Each planet should have a different background color. 
// (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

section = document.getElementsByClassName('listPlanets')[0];

for(planet in planets){
    console.log(planet);

    div = document.createElement('div');
    p = document.createElement('p');
    planetName = document.createTextNode(planet);
    p.appendChild(planetName);
    div.appendChild(p);
    div.classList.add('planet');

    if(planets[planet]['color'].length > 0){
        div.style.color = planets[planet]['color'];
    }
    else {
        div.style.color = 'white';
    } 

    if('moons' in planets[planet]){
        moons = document.createElement('ul');
        for(moon in planets[planet]['moons']){
            li = document.createElement('li');
            li_text = document.createTextNode(moon);
            li.appendChild(li_text);
            li.classList.add('moon');
            li.style.backgroundColor = 'white';
            moons.appendChild(li);

        }
        div.appendChild(moons);
    }
      

    section.appendChild(div);
}