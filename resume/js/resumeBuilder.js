
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
    "HTML", "CSS", "Javascript", "Japanese", "violin", "teaching"],
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
     "description" : "This is my first project, a simple webpage buile using a grid framework I created.",
     "images" : ["images/Portfolio1.jpg"]
     },
     {
        "title" : "Break Point Format",
        "dates" : 2016,
        "description" : "I used my knowledge of responsive design to change how a given webpage reacts to different screen sizes using media queries. I also used javascript to add a hamburger menu.",
        "images" : ["images/Breakpoint1.png"]
     },
     {"title" : "Responsive Image Serving",
     "dates" : 2016,
     "description" : "I used Grunt to optimize images for screens with different sizes and pixel densities. Grunt is very effective, and interesting to use because you have to get down and dirty with the command line. I then used the source tag, srcset, and media queries to help the browser know which image to download for a given screen type.",
     "images" : ["images/blog.png"]
     },
     {"title" : "Frogger Clone",
     "dates" : 2016,
     "description" : "I built this game using Javascript. With a supplied game engine and art assets, I wrote the main code for the game using object oriented javascript. I really enjoyed the process of going from not understanding the code at all to becomming very confident with building and improving the game. This is a work in progress.",
     "images" : ["images/game.png"]
     }
     ]

}
projects.display = function(){


for (var project = projects.Dev.length - 1; project >= 0; project--){
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

//logs the location of mouse clicks in the console
$(document).click(function(loc) {
  console.log(loc.pageX , "and" , loc.pageY);
});


var work = {
    "jobs" : [
    {"title" : "Japan Exchange Teaching (JET) Program: Assistant Language Teacher",
     "description" : "I taught English and collaborated with teachers to design the English curriculum in three schools in rural Japan. I was immersed in the Japanese language and culture and adapted quickly. It was fun and rewarding! I worked hard to improve my skills by organizing a training workshop in the area's model English program, and volunteering at private and non-profit English schools in the community. I had a very positive impact on my students. I helped one of my students win a statewide speech competition. I was selected to be a model teacher for several curriculum developments workshops. I contributed my insights in both the English and Japanese languages. At the end of my term, I was specifically requested to orient the new teachers. On July 10, 2016, I was appointed a JET Kizuna Ambassador by the Minister for Internal Affairs and Communications of Japan. ",
      "location" : "Hida Kamioka, Japan",
      "dates" : "August 2015 - August 2016"},
     {"title" : "May Institute: Program Specialist",
     "description" : "I worked directly with individuals with intellectual disabilities including traumatic brain injuries. My job was to provide support by implementing and assisting in the development of their services. This included facilitating healthy life choices, providing personal care, supporting community involvement and finding fulfillment. I also handled high intensity situations and medical emergencies. Seeking additional responsibilities, I obtained a Medication Administration Program certification and performed duties without error.",
      "location" : "Springfield, Massachusetts",
      "dates" : "March 2015 - August 2015"},
     {"title" : "UMass Computer Science Computational Facilities: Office Assistant",
      "description" : "My main responsibility was to give feedback and suggestions to improve all Computer Science related web resources and organize my suggestions in a wiki page. Many of the resources were documents about technology that was new to me, such as command line based programs and computing resources. I completely redid the bulletin boards, contributing to efficient communication for students and staff. I also inventoried the computing machines in the facility. ",
      "dates" : "March 2014 - May 2014",
      "location" : "Amherst, Massachusetts"},
     {"title" : "UMass Residence Hall Security: Security Monitor",
      "description" : "I worked as a Security Monitor for three years during my studies at UMass Amherst. I was responsible for securing the safety of residence halls and reporting any safety issues to emergency services. I verified the identity of people entering the residence hall, and documented guest information for law enforcement use. I welcomed new families to UMass as a move-in coordinator, and helped coordinate parking during graduation. ",
      "dates" : "October 2011 - March 2014",
      "location" : "Amherst, Massachusetts"}
    ]
}

function displayWork(){
    if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for (i in work.jobs){
    
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
