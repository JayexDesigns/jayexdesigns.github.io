// Change Heights When Page Is Loaded
const loadHandle = () => {
	let headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
	document.getElementById("homeHeader").style.top = `${-headerHeight}px`;
	document.getElementById("worksHeader").style.top = `${document.getElementsByClassName("works")[0].offsetTop - headerHeight}px`;
	document.getElementById("aboutHeader").style.top = `${document.getElementsByClassName("about")[0].offsetTop - headerHeight}px`;
	document.getElementById("contactHeader").style.top = `${document.getElementsByClassName("contact")[0].offsetTop - headerHeight}px`;
	document.getElementById("javascriptSection").style.top = `${document.getElementById("javascriptSection").offsetTop - headerHeight}px`;
	document.getElementById("pythonSection").style.top = `${document.getElementById("pythonSection").offsetTop - headerHeight}px`;
	document.getElementById("graphicdesignSection").style.top = `${document.getElementById("graphicdesignSection").offsetTop - headerHeight}px`;
	document.getElementById("videoeditingSection").style.top = `${document.getElementById("videoeditingSection").offsetTop - headerHeight}px`;
	document.getElementById("othersSection").style.top = `${document.getElementById("othersSection").offsetTop - headerHeight}px`;
	scrollHandle();
};

// Change Colors Of Header Depending On Section
var navItems = [document.getElementsByClassName("navHome")[0].childNodes[0], document.getElementsByClassName("navWorks")[0].childNodes[0], document.getElementsByClassName("navAbout")[0].childNodes[0], document.getElementsByClassName("navContact")[0].childNodes[0]];

const assignColor = param => {
	for (let i = 0; i < navItems.length; ++i) {
		i == param ? (navItems[i].style.color = "var(--primary-color)") : (navItems[i].style.color = "var(--text-color)");
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
	if (contactPos <= headerHeight + window.innerHeight / 2) {
		assignColor(3);
	} else if (aboutPos <= headerHeight + window.innerHeight / 2) {
		assignColor(2);
	} else if (worksPos <= headerHeight + window.innerHeight / 2) {
		assignColor(1);
	} else if (homePos <= headerHeight + window.innerHeight / 2) {
		assignColor(0);
	}
};

window.addEventListener("scroll", scrollHandle);

// Day Js
var timeStart = new Date("04/25/2002");
var years = () => {
	let time = dayjs().diff(dayjs(timeStart.getTime()), "year", true);
	return time.toString().substring(0, 11);
};

var currentAge = document.getElementById("years");
setInterval(() => {
	currentAge.innerText = years();
}, 50);

// Scroll Reveal
window.sr = ScrollReveal({reset: false});

sr.reveal(".header", {
	duration: 500,
	origin: "top",
	distance: "3rem"
});

sr.reveal(".sectionTitle", {
	duration: 500,
	origin: "top",
	distance: "3rem"
});

sr.reveal(".workElement", {
	duration: 1000,
	origin: "bottom",
	distance: "5rem"
});

sr.reveal(".aboutSkill", {
	duration: 500,
	scale: 0.8
});

sr.reveal(".aboutFolder", {
	duration: 1000,
	scale: 0.8
});

sr.reveal(".contactLink", {
	duration: 1000,
	origin: "left",
	distance: "5rem"
});
