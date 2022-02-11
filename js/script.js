// Change Heights When Page Is Loaded
const loadHandle = () => {
    let headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    document.getElementById("homeHeader").style.top = `${-headerHeight}px`;
    document.getElementById("worksHeader").style.top = `${document.getElementsByClassName("works")[0].offsetTop-headerHeight}px`;
    document.getElementById("aboutHeader").style.top = `${document.getElementsByClassName("about")[0].offsetTop-headerHeight}px`;
    document.getElementById("contactHeader").style.top = `${document.getElementsByClassName("contact")[0].offsetTop-headerHeight}px`;
    document.getElementById("javascriptSection").style.top = `${document.getElementById("javascriptSection").offsetTop-headerHeight}px`;
    document.getElementById("pythonSection").style.top = `${document.getElementById("pythonSection").offsetTop-headerHeight}px`;
    document.getElementById("graphicdesignSection").style.top = `${document.getElementById("graphicdesignSection").offsetTop-headerHeight}px`;
    document.getElementById("videoeditingSection").style.top = `${document.getElementById("videoeditingSection").offsetTop-headerHeight}px`;
    document.getElementById("othersSection").style.top = `${document.getElementById("othersSection").offsetTop-headerHeight}px`;
    scrollHandle();
}





// Change Colors Of Header Depending On Section
var navItems = [
    document.getElementsByClassName("navHome")[0].childNodes[0],
    document.getElementsByClassName("navWorks")[0].childNodes[0],
    document.getElementsByClassName("navAbout")[0].childNodes[0],
    document.getElementsByClassName("navContact")[0].childNodes[0]
];

const assignColor = (param) => {
    for(let i = 0; i < navItems.length; ++i) {
        (i == param) ? navItems[i].style.color = "var(--primary-color)" : navItems[i].style.color = "var(--text-color)";
    }
};

var header = document.getElementsByClassName("header")[0];
var home = document.getElementsByClassName("home")[0];
var works = document.getElementsByClassName("works")[0];
var about = document.getElementsByClassName("about")[0];
var contact = document.getElementsByClassName("contact")[0];

const scrollHandle = () => {
    let headerHeight = header.offsetHeight;
    let homePos = home.getBoundingClientRect().top;
    let worksPos = works.getBoundingClientRect().top;
    let aboutPos = about.getBoundingClientRect().top;
    let contactPos = contact.getBoundingClientRect().top;
    if (contactPos <= headerHeight + window.innerHeight/2) {
        assignColor(3);
    }
    else if (aboutPos <= headerHeight + window.innerHeight/2) {
        assignColor(2);
    }
    else if (worksPos <= headerHeight + window.innerHeight/2) {
        assignColor(1);
    }
    else if (homePos <= headerHeight + window.innerHeight/2) {
        assignColor(0);
    }
};

window.addEventListener('scroll', scrollHandle);





// Day Js
var timeStart = new Date("04/25/2002");
var years = () => {
    let time = dayjs().diff(dayjs(timeStart.getTime()), 'year', true);
    return time.toString().substring(0, 11);
};

var currentAge = document.getElementById("years");
setInterval(() => {
    currentAge.innerText = years();
}, 50);





// Certificates Showcase
var image1 = document.getElementById("aboutImage1");
var image2 = document.getElementById("aboutImage2");
var image3 = document.getElementById("aboutImage3");
var imageOrder = [image1, image2, image3];
var totalImages = 34;
var currentImage = 3;

const imageSlideshow = () => {
    imageOrder[0].style.opacity = 1;
    imageOrder[0].style.left = "50%";
    imageOrder[1].style.left = "150%";
    imageOrder[2].style.opacity = 0;
    imageOrder[2].style.left = "-50%";
    imageOrder.unshift(imageOrder.pop());
    setTimeout(() => {
        imageOrder[0].src = `assets/certificates/${currentImage}.jpg`;
        ++currentImage;
        if (currentImage > totalImages) {
            currentImage = 1;
        }
    }, 2000);
};

var interv = setInterval(imageSlideshow, 5000);





// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.header', {
    duration: 500,
    origin: 'top',
    distance: '3rem',
});

sr.reveal('.homeText', {
    duration: 1000,
    origin: 'left',
    distance: '5rem',
});

sr.reveal('.homeLogo', {
    duration: 1000,
    origin: 'right',
    distance: '5rem',
});

sr.reveal('.sectionTitle', {
    duration: 500,
    origin: 'top',
    distance: '3rem',
});

sr.reveal('.workElement', {
    duration: 1000,
    origin: 'bottom',
    distance: '5rem',
});

sr.reveal('.aboutText', {
    duration: 1000,
    origin: 'left',
    distance: '5rem',
});

sr.reveal('.aboutSkill', {
    duration: 500,
    scale: 0.8,
});

sr.reveal('.aboutResume', {
    duration: 500,
    origin: 'bottom',
    distance: '5rem',
});

sr.reveal('.aboutCertificates', {
    duration: 500,
    origin: 'bottom',
    distance: '5rem',
});

sr.reveal('.contentSection', {
    duration: 1000,
    origin: 'bottom',
    distance: '5rem',
});

sr.reveal('.contactLink', {
    duration: 1000,
    origin: 'left',
    distance: '5rem',
});