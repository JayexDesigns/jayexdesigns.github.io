// Change Heights When Page Is Loaded
const loadHandle = () => {
	const headerHeight = document.querySelector(".header").offsetHeight;
	document.querySelector("#homeHeader").style.top = `${-headerHeight}px`;
	document.querySelector("#worksHeader").style.top = `${document.querySelector(".works").offsetTop - headerHeight}px`;
	document.querySelector("#aboutHeader").style.top = `${document.querySelector(".about").offsetTop - headerHeight}px`;
	document.querySelector("#contactHeader").style.top = `${document.querySelector(".contact").offsetTop - headerHeight}px`;
	document.querySelector("#javascriptSection").style.top = `${document.querySelector("#javascriptSection").offsetTop - headerHeight}px`;
	document.querySelector("#pythonSection").style.top = `${document.querySelector("#pythonSection").offsetTop - headerHeight}px`;
	document.querySelector("#graphicdesignSection").style.top = `${document.querySelector("#graphicdesignSection").offsetTop - headerHeight}px`;
	document.querySelector("#videoeditingSection").style.top = `${document.querySelector("#videoeditingSection").offsetTop - headerHeight}px`;
	document.querySelector("#othersSection").style.top = `${document.querySelector("#othersSection").offsetTop - headerHeight}px`;
	scrollHandle();
};

// Change Colors Of Header Depending On Section
const navItems = [document.querySelector(".navHome a"), document.querySelector(".navWorks a"), document.querySelector(".navAbout a"), document.querySelector(".navContact a")];

const assignColor = param => {
	for (let i = 0; i < navItems.length; ++i) {
		navItems[i].style.color = i == param ? "var(--primary-color)" : "var(--text-color)";
	}
};

const header = document.querySelector(".header");
const home = document.querySelector(".home");
const works = document.querySelector(".works");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

const scrollHandle = () => {
	const headerHeight = header.offsetHeight;
	const homePos = home.getBoundingClientRect().top;
	const worksPos = works.getBoundingClientRect().top;
	const aboutPos = about.getBoundingClientRect().top;
	const contactPos = contact.getBoundingClientRect().top;
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
const timeStart = new Date("04/25/2002");
const years = () => {
	const time = dayjs().diff(dayjs(timeStart.getTime()), "year", true);
	return time.toString().substring(0, 11);
};

const currentAge = document.querySelector("#years");
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
