// grab key elements for later referencing


const tab_headers = document.getElementById('tabs_headers');
let eimg = document.querySelector("img");
  eimg.src = 'assets/egroup_0.png';
const tab_bodies  = document.getElementById('tab_bodies');


let pics = ['assets/pasta.png','assets/book.png','assets/yoga.png','assets/pasta.png','assets/pasta.png','assets/pasta.png','assets/pasta.png' ]
let entities = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];











let entity_list = [
    // monday
    ['shower', 'school', 'homework', 'gym', 'meal prep for the week'],
    // Tuesday
    ['shower', 'school', 'work', 'homework', 'read'],
    // Wednesday
    ['shower', 'check mail', 'school', 'stretch (or gym)'],
    // Thursday
    ['shower', 'school', 'work', 'homework', 'read'],
    // Friday
    ['shower', 'school', 'pick up lunch for work', 'work', 'meet with friends if homework is done'],
    // Saturday
    ['work.'],
    // Sunday
    [ 'homework', 'pickleball', 'beer with friends']
];


const num_ent = entities.length;

// loop through number of entities to create elements for them
for (i=0; i<num_ent; i++) {
    let ecat = entities[i]; // gets the title of the days
    let epic = pics[i]; //get image for this day
    let elist = entity_list[i]; // get corresponding array for this entity category day
    console.log('days: ' + ecat);
    console.log('stuff in this day: \n' + elist); //


    let identifier = 'egroup_' + i;

    // creates the title text space holder
    let etitle = document.createElement('h2');
    etitle.innerHTML = ecat;

    // creates the tab
    let etab = document.createElement('div');
    etab.id= identifier;
    etab.classList.add('etab_tab');
    etab.addEventListener('click', tabSwitch, false);

    // append the tab and its title to the DOM
    etab.appendChild(etitle);
    tab_headers.appendChild(etab);

    // creates the body
    let ebody = document.createElement('section');
    ebody.id = identifier + '_body';
    ebody.classList.add('etab_body', 'hidden');

    // create image next to the body text
    // let eimg = document.querySelector("img");
    // eimg.id = identifier + '_image';
    // console.log('this is my pic!!! '+ eimg.id );
    // eimg.src = epic;


// I kept trying images here but couldnt get it to work, got close but found a different worse way


    //eimg.classList.add('etab_image', 'hidden');
    //eimg.src = epic;

    //const img = new image(100,200);
    //const img = document.querySelector("img");
    //img.src = 'assets/pasta.png';
    //tab_bodies.appendChild(img.src);

    //let epics = document.createElement('eimg');
    //eimg.src = epic;
    //document.getElementById('ebody').appendChild(img);

    // makes a list of all elements needed to display, then sends this list to below for displaying through active
    let eulist = document.createElement('ul');
    for (j=0; j<elist.length; j++) {
        let ent = document.createElement('li');
        ent.innerHTML = elist[j];
        eulist.appendChild(ent);


    }

    // append the body to the page
    ebody.appendChild(eulist);

    tab_bodies.appendChild(ebody);

    //ebody.appendChild(const img = new image(100,200););


    if (i==0) { // sets moday active and sets else to hidden
        etab.classList.add('active');
        ebody.classList.remove('hidden');
    }


}



function tabSwitch(e) {


  let tab = e.target.parentNode.id;
  let ebody = tab + '_body';

    // hide previous tab
    let atab = document.getElementsByClassName('active');
    console.log('just hidden element: ' + atab[0].id);


    while (atab.length) {
        let abody = atab[0].id + '_body';

        atab[0].classList.remove('active');
        console.log('Hiding body for: ' + abody);
        document.getElementById(abody).classList.add('hidden');
    }




    // set new tab to active
    if (e.target.tagName == "H2") {
        e.target.parentNode.classList.add("active");

    }
    else {
        e.target.classList.add("active");
    }

    // use the name of the group thats active as the name of the picture that needs to be presented

    eimg.src = 'assets/' + atab[0].id + '.png';
    console.log('what fucking group is it??: '+ atab[0].id);
    document.getElementById(atab[0].id + '_body').classList.remove('hidden');


}
