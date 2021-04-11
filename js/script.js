const loadHandle = () => {
    let headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    document.getElementById("homeHeader").style.top = `${-headerHeight}px`;
    document.getElementById("worksHeader").style.top = `${document.getElementsByClassName("works")[0].offsetTop-headerHeight}px`;
    document.getElementById("aboutHeader").style.top = `${document.getElementsByClassName("about")[0].offsetTop-headerHeight}px`;
    document.getElementById("contactHeader").style.top = `${document.getElementsByClassName("contact")[0].offsetTop-headerHeight}px`;
    scrollHandle();
    let years = () => {
        let timeNow = new Date();
        let timeStart = new Date("04/25/2002");
        let time = new Date(timeNow - timeStart);
        return Math.abs(time.getUTCFullYear() - 1970);
    };
    document.getElementById("years").innerText = years();
}

const scrollHandle = () => {
    let headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    let homePos = document.getElementsByClassName("home")[0].getBoundingClientRect().top;
    let worksPos = document.getElementsByClassName("works")[0].getBoundingClientRect().top;
    let aboutPos = document.getElementsByClassName("about")[0].getBoundingClientRect().top;
    let contactPos = document.getElementsByClassName("contact")[0].getBoundingClientRect().top;
    if (contactPos <= headerHeight) {
        document.getElementsByClassName("navHome")[0].style.color = "#ffffff";
        document.getElementsByClassName("navWorks")[0].style.color = "#ffffff";
        document.getElementsByClassName("navAbout")[0].style.color = "#ffffff";
        document.getElementsByClassName("navContact")[0].style.color = "#ff0066";
    }
    else if (aboutPos <= headerHeight) {
        document.getElementsByClassName("navHome")[0].style.color = "#ffffff";
        document.getElementsByClassName("navWorks")[0].style.color = "#ffffff";
        document.getElementsByClassName("navAbout")[0].style.color = "#ff0066";
        document.getElementsByClassName("navContact")[0].style.color = "#ffffff";
    }
    else if (worksPos <= headerHeight) {
        document.getElementsByClassName("navHome")[0].style.color = "#ffffff";
        document.getElementsByClassName("navWorks")[0].style.color = "#ff0066";
        document.getElementsByClassName("navAbout")[0].style.color = "#ffffff";
        document.getElementsByClassName("navContact")[0].style.color = "#ffffff";
    }
    else if (homePos <= headerHeight) {
        document.getElementsByClassName("navHome")[0].style.color = "#ff0066";
        document.getElementsByClassName("navWorks")[0].style.color = "#ffffff";
        document.getElementsByClassName("navAbout")[0].style.color = "#ffffff";
        document.getElementsByClassName("navContact")[0].style.color = "#ffffff";
    }
};

window.addEventListener('scroll', scrollHandle);



var image1 = document.getElementById("aboutImage1");
var image2 = document.getElementById("aboutImage2");
var image3 = document.getElementById("aboutImage3");
var imageOrder = [image1, image2, image3];
var totalImages = 22;
var currentImage = 4;

const imageSlideshow = () => {
    imageOrder[0].style.opacity = 1;
    imageOrder[0].style.left = "50%";
    imageOrder[1].style.left = "150%";
    imageOrder[2].style.opacity = 0;
    imageOrder[2].style.left = "-50%";
    imageOrder[2].src = `assets/certificates/${currentImage}.jpg`
    imageOrder.unshift(imageOrder.pop());
    ++currentImage;
    if (currentImage > totalImages) {
        currentImage = 1;
    }
};

var interv = setInterval(imageSlideshow, 5000);