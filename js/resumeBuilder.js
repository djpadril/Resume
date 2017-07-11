  var bio = {
    "name" : "Patrick Gerber",
    "role" : "ICT Business Analyst",
    "contacts": {
    "adress": "Weingartstrasse 9, 3014 Bern",
    "location": "Bern, Switzerland",
    "mobile": "+4178 884 54 04",
    "email": "patrick.gerber@me.com"
  },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["project management", "requirements engineering", "business analysisys", "empathetic working"],
    "picture": "images/patrick.jpg"
  };


bio.display=function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedAdress = HTMLcontactGeneric.replace("%data%", bio.contacts.adress);
  $("#topContacts, #footerContacts").append(formattedAdress);

  var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);

  var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEMail);

  var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
  $("#header").append(formattedPicture);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  $("#header").append(HTMLskillsStart);
  for (var skill = 0; skill < bio.skills.length; skill++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills:last").append(formattedSkill);
  }
};

bio.display();

var education = {
	"schools": [
    {
			"name": "Höhere Fachschule für Wirtschaftsinformatik",
      "degree": "Business Data Specialist, Advanced Federal Diploma of Higher Education",
			"major": "economics, business information systems",
      "location": "Bern, Switzerland",
			"dates": "2012 - 2015",
      "url": "https://www.ifa.ch/nc/weiterbildung/studiengaenge/kursdetail/dipl-wirtschaftsinformatikerin-hf/kurs/show/"
		},
		{
			"name": "Schule für Gestaltung Bern-Biel",
      "degree": "Polygraf EFZ",
			"major": "graphic design, media technology",
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

education.display=function() {
  for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedEducationTitle = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedEducationTitle);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);

      var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
      $(".education-entry:last").append(formattedUrl);
    }

      $("#education").append(HTMLonlineClasses);

    for (var onlineCourse in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var OnlineCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      var OnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var OnlineCourseTitle = OnlineCourseName + OnlineCourseSchool;
      $(".education-entry:last").append(OnlineCourseTitle);

      var OnlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(OnlineCourseDates);

      var OnlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(OnlineCourseUrl);
  }
};

education.display();




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
    for (var job in work.jobs) {
      // create new div for workExperience
      $("#workExperience").append(HTMLworkStart);
      // concat employer and job position
      var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
      var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
      var formattedEmployerTitle = formattedEmployer + formattedPosition;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].duration);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  };

  work.display();

var projects = {
    "project": [
      {
        "title": "Order Button",
        "description": "Building a IoT device to deliver new services to the customer with a phygital access point. Business analasys and requirements engineering to develope the hard- and software to bring postal services and products to the customers home",
        "duration": "ongoing",
        "image": "images/IoT.jpg"
      },
      {
        "title": "Outsourcing Swisscom Online",
        "description": "Development and Support of the existing software solution. Business analysis and requirements engineering",
        "duration": "1.5 years",
        "image": "images/eCommerce.jpg"
      },
      {
        "title": "APM@SRG",
        "description": "As part of my diploma I did the project setup and procurement of an application performance management solution to measure the customer experience of relevant Business Applications for my customer SRG SSR.",
        "duration": "8 months",
        "image": "images/apm.jpg"
      }
    ]
  };

projects.display=function() {

      for (var project in projects.project) {
        // create new div for projectExperience
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace ("%data%", projects.project[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDuration = HTMLprojectDates.replace ("%data%", projects.project[project].duration);
        $(".project-entry:last").append(formattedProjectDuration);

        var formattedProjectDescription = HTMLprojectDescription.replace ("%data%", projects.project[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace ("%data%", projects.project[project].image);
        $(".project-entry:last").append(formattedProjectImage);
    }
  };

projects.display();

$("#mapDiv").append(googleMap);
