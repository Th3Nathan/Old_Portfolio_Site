
var name = "Nathan Vass";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
"name":"Nathan Vass",
"role":"Web Developer",
"age":25,
"contacts": {
    "email": "nathanevass@gmail.com",
    "mobile": "413-374-9381",
    "location": "Longmeadow, MA",
    "github" : "Th3Nathan"},

"biopic": "images/NathanMountain.jpg",
"skills": [
    "html", "css", "javascript", "Japanese", "violin", "coffee"],
}

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);





if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++){
var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
$("#header").append(formattedSkills)
    }
}




var education = {
    "schools": [{
        "name": "UMass Amherst",
        "location": "Amherst, Massachusetts",
        "dates": "2010 - 2014",
        "degree": "BA with Japanese Minor",
        "majors": ["Japanese minor", "Psychology"],
        "url": "umass.edu"
    }],

    "onlineCourses": [ {
        "title": "Introduction to html/css",
        "dates" : 2016,
        "url" : "www.udacity.com"
    }, {
        "title": "Building Responsive Web Sites",
        "dates" : 2016,
        "url" : "www.udacity.com"
    }, {
        "title": "Responsive Images"
    }, {
        "title": "Object Oriented Javascript"
    }]
}

$("#education").append(HTMLschoolStart);
var fName = HTMLschoolName.replace("%data%", education.schools[0].name);
$("#education").append(fName);
var fDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
$("#education").append(fDegree);
var fDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
$("#education").append(fDates);
var fLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
$("#education").append(fLocation);
var fMajors = HTMLschoolMajor.replace("%data%", education.schools[0].majors[1]);
$("#education").append(fMajors);

$("#education").append(HTMLonlineClasses);
var fTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
$("#education").append(fTitle);

var fTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[1].title);
$("#education").append(fTitle);


var fTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[2].title);
$("#education").append(fTitle);

var fTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[3].title);
$("#education").append(fTitle);

var projects = {

    "Dev" : [
    {"title" : "Sample Portfolio Page",
     "dates" : 2016,
     "description" : "My first webpage",
     "images" : ["images/Portfolio1.jpg"]
     },
     {
        "title" : "Break Point Format",
        "dates" : 2016,
        "description" : "Used media queries to make page resize gracefully on different screens, added hamburger menu",
        "images" : ["images/Breakpoint1.png","images/Breakpoint2.png"]
     }
     ]

}
projects.display = function(){


for (project in projects.Dev){
$("#projects").append('<div class="project-entry">');
var fTitle = HTMLprojectTitle.replace("%data%", projects.Dev[project].title);
$("#projects").append(fTitle);
var fDates = HTMLprojectDates.replace("%data%", projects.Dev[project].dates);
$("#projects").append(fDates);
var fDescription = HTMLprojectDescription.replace("%data%", projects.Dev[project].description);
$("#projects").append(fDescription);

for (var i = 0; i<projects.Dev[project].images.length; i++){
var fImage = HTMLprojectImage.replace("%data%", projects.Dev[project].images[i]);
$("#projects").append(fImage);
}



}
}


projects.display();


$(document).click(function(loc) {
  console.log(loc.pageX , "and" , loc.pageY);
});


var work = {
    "jobs" : [
    {"title" : "Assistant Language Teacher",
     "description" : "English teacher and curriculum consultant. Worked in three public schools in Japan.",
      "employer" : "JET Program",
      "location" : "Hida Kamioka, Japan",
      "dates" : "August 2015 - August 2016"},
     {"title" : "Direct Care Worker",
     "description" : "Developed and implemented strategies for serving people with Intellectual Disabilities",
      "employer" : "May Institute and BCarc",
      "location" : "Springfield, Massachusetts",
      "dates" : "March 2015 - August 2015"}
    ]
}

function displayWork(){
    if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for (i in work.jobs){
    var fEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    $("#workExperience").append(fEmployer);
    var fTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $("#workExperience").append(fTitle);
    var fWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $("#workExperience").append(fWorkLocation);
    var fDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $("#workExperience").append(fDates);
    var fWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $("#workExperience").append(fWorkDescription);
        }
    }
}

displayWork();

$("#main").append(internationalizeButton);
function inName(nationalName){
    var seperateNames = nationalName.split(" ");
    var formattedFirstname = seperateNames[0].slice(0,1).toUpperCase() + seperateNames[0].slice(1).toLowerCase();
    var formattedLastname = seperateNames[1].toUpperCase();
    intName = formattedFirstname + " " + formattedLastname;
   return intName;
}


var createFooter = function(){
$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedGithub);
}

createFooter();
