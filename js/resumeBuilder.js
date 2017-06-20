  var bio = {
    "name" : "Patrick Gerber",
    "role" : "ICT Business Analyst",
    "contacts": {
    "adress": "Weingartstrasse 9, 3014 Bern",
    "location": "Bern, Switzerland",
    "mobile": "+4178 884 54 04",
    "e-mail": "patrick.gerber@me.com"
  },
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["project management", "requirements engineering", "business analysisys", "empathetic working"],
    "picture": "images/patrick.jpg"
  };


bio.display=function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedAdress = HTMLcontactGeneric.replace("%data%", bio.contacts.adress);
  $("#header").prepend(formattedAdress);

  var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").prepend(formattedLocation);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#header").prepend(formattedMobile);

  var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#header").prepend(formattedEMail);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedWelcomeMessage);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills);
  $("#header").prepend(formattedSkills);

  var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
  $("#header").prepend(formattedPicture);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};

bio.display();

var education = {
	"schools": [
    {
			"name": "Höhere Fachschule für Wirtschaftsinformatik",
      "degree": "Business Data Specialist, Advanced Federal Diploma of Higher Education",
			"major": "[economics, business information systems]",
      "location": "Bern, Switzerland",
			"dates": "2012 - 2015",
      "url": "https://www.ifa.ch/nc/weiterbildung/studiengaenge/kursdetail/dipl-wirtschaftsinformatikerin-hf/kurs/show/"
		},
		{
			"name": "Schule für Gestaltung Bern-Biel",
      "degree": "Polygraf EFZ",
			"major": "[graphic design, media technology]",
      "location": "Bern, Switzerland",
			"dates": "2001 - 2005",
      "url": "http://www.sfgb-b.ch/sfgb/de/bildungsangebote/berufsfachschule/lehrberufe/polygraf.html"
		}
	],
  "onlineCourses": [
    {
      "title": "Basic Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

education.schools.display=function() {
  for (i=0; i<education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[i].url);
      var schoolAttributes = formattedName + formattedDegree + formattedMajor + formattedLocation + formattedDates + formattedUrl;
      $("#education-entry:last").append(schoolAttributes);
}
};

education.schools.display();

education.onlineCourses.display=function() {

  for (i=0; i<education.onlineCourses.length; i++) {
      $("#education").append(HTMLonlineClasses);

      var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      var schoolAttributes = formattedName + formattedSchool + formattedDates + formattedUrl;
      $("#onlineCourses").append(schoolAttributes);
    }
};

education.onlineCourses.display();


  var work = {
    "jobs": [
      {
        "position": "ICT Business Analyst",
        "employer": "Garaio AG",
        "duration": "2015 - present",
        "location": "Bern and Zurich, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      },
      {
        "position": "Application Manager",
        "employer": "SRG SSR ideé suisse",
        "duration": "2014 - 2015",
        "location": "Bern, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      },
      {
        "position": "Application Specialist",
        "employer": "Tamedia AG",
        "duration": "2008 - 2014",
        "location": "Bern and Zurich, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      }
    ]
  };

  work.display=function() {
    for (job in work.jobs) {
      // create new div for workExperience
      $("#workExperience").append(HTMLworkStart);
      // concat employer and job position
      var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
      var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
      var formattedEmployerTitle = formattedEmployer + formattedPosition;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].duration);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLlocation.replace ("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  };

  work.display();

var projects = {
    "project": [
      {
        "title": "Post Home Button",
        "description": "Building a IoT device to deliver new services to the customer with a phygital access point. Business analasys and requirements engineeringto develope the hard- and softwareto bring postal services and products to the customers home",
        "duration": "ongoing"
      },
      {
        "title": "Outsourcing Swisscom Online",
        "description": "Development and Support of the existing software solution. Business analysis and requirements engineering",
        "duration": "1.5 years",
      },
      {
        "title": "APM@SRG",
        "description": "As part of my diploma I did the project setup and procurement of an application performance management solution to measure the customer experience of relevant Business Applications for my customer SRG SSR.",
        "duration": "8 months"
      }
    ]
  };

projects.display=function() {

      for (projectposition in projects.project) {
        // create new div for workExperience
        $("#projects").append(HTMLprojectStart);
        // concat employer and job position
        var formattedProjectTitle = HTMLprojectTitle.replace ("%data%", projects.project[projectposition].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDescription = HTMLprojectDescription.replace ("%data%", projects.project[projectposition].description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectDuration = HTMLprojectDates.replace ("%data%", projects.project[projectposition].duration);
        $(".project-entry:last").append(formattedProjectDuration);
    }
  };

projects.display();

$("#main").append(internationalizeButton);


var oldName=bio.name;
function inName() {
    var finalName = oldName;
    var space=oldName.indexOf(' ');//determine location of space between first and last names
    var beginningFirstName=oldName[0];//first letter of first name
    var reminderFirstName=oldName.slice(1, space).toLowerCase(); //reminder of first name
    var firstName=beginningFirstName + reminderFirstName;
    var lastName=oldName.slice(space+1).toUpperCase();
    var finalName=firstName + '  ' + lastName;
    // Don't delete this line!
    return finalName;

  }

  //if(bio.skills.length > 0) {

  //$("header").append(HTMLskillsStart),
  //var formattedSkills = HTMLskills.replace("%data%", bio.skills),
  //$("header").formattedSkills.prepend(formattedSkills)
