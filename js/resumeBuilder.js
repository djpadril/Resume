  var bio = {
    "name" : "Patrick Gerber",
    "role" : "ICT Business Analyst",
    "contacts": {
    "mobile": "+4178 884 54 04",
    "email": "patrick.gerber@me.com",
    "github": "https://github.com/djpadril",
    "location": "Bern, Switzerland",
  },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["project management", "requirements engineering", "business analysisys", "empathetic working"],
    "biopic": "images/patrick.jpg"
  };


bio.display=function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

  //append all contacts to the html
  $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedGithub, formattedWelcomeMessage);

  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPicture);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append();

  $("#header").append(HTMLskillsStart);

  bio.skills.forEach (function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills:last").append(formattedSkill);
  })
};

bio.display();

var education = {
	"schools": [
    {
			"name": "Höhere Fachschule für Wirtschaftsinformatik",
      "degree": "Business Data Specialist, Advanced Federal Diploma of Higher Education",
			"majors": ["economics", " " + "business information systems"],
      "location": "Bern, Switzerland",
			"dates": "2012 - 2015",
      "url": "https://www.ifa.ch/nc/weiterbildung/studiengaenge/kursdetail/dipl-wirtschaftsinformatikerin-hf/kurs/show/"
		},
		{
			"name": "Schule für Gestaltung Bern-Biel",
      "degree": "Polygraf EFZ",
			"majors": ["graphic design", " " + "media technology"],
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
  education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedEducationTitle = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedEducationTitle);

      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
      $(".education-entry:last").append(formattedMajor);

      var formattedUrl = HTMLonlineURL.replace("%data%", school.url);
      $(".education-entry:last").append(formattedUrl);
    });

      $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
      $("#education").append(HTMLschoolStart);
      var OnlineCourseName = HTMLonlineTitle.replace("%data%", onlineCourse.title);
      var OnlineCourseSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
      var OnlineCourseTitle = OnlineCourseName + OnlineCourseSchool;
      $(".education-entry:last").append(OnlineCourseTitle);

      var OnlineCourseDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
      $(".education-entry:last").append(OnlineCourseDates);

      var OnlineCourseUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
      $(".education-entry:last").append(OnlineCourseUrl);
  })
};

education.display();




  var work = {
    "jobs": [
      {
        "title": "ICT Business Analyst",
        "employer": "Garaio AG",
        "dates": "2015 - present",
        "location": "Bern and Zurich, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      },
      {
        "title": "Application Manager",
        "employer": "SRG SSR ideé suisse",
        "dates": "2014 - 2015",
        "location": "Bern, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      },
      {
        "title": "Application Specialist",
        "employer": "Tamedia AG",
        "dates": "2008 - 2014",
        "location": "Bern and Zurich, Switzerland",
        "description": "Lorem Ipsum Doler ..."
      }
    ]
  };

  work.display=function() {
    work.jobs.forEach(function(job) {
      // create new div for workExperience
      $("#workExperience").append(HTMLworkStart);
      // concat employer and job position
      var formattedEmployer = HTMLworkEmployer.replace ("%data%", job.employer);
      var formattedPosition = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedPosition;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace ("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace ("%data%", job.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace ("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
    })
  };

  work.display();

var projects = {
    "projects": [
      {
        "title": "Order Button",
        "description": "Building a IoT device to deliver new services to the customer with a phygital access point. Business analasys and requirements engineering to develope the hard- and software to bring postal services and products to the customers home",
        "dates": "ongoing",
        "images": ["images/IoT.jpg"]
      },
      {
        "title": "Outsourcing Swisscom Online",
        "description": "Development and Support of the existing software solution. Business analysis and requirements engineering",
        "dates": "1.5 years",
        "images": ["images/eCommerce.jpg"]
      },
      {
        "title": "APM@SRG",
        "description": "As part of my diploma I did the project setup and procurement of an application performance management solution to measure the customer experience of relevant Business Applications for my customer SRG SSR.",
        "dates": "8 months",
        "images": ["images/apm.jpg"]
      }
    ]
  };

projects.display=function() {

      projects.projects.forEach(function(project) {
        // create new div for projectExperience
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace ("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDuration = HTMLprojectDates.replace ("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDuration);

        var formattedProjectDescription = HTMLprojectDescription.replace ("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

        project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace ("%data%", project.images);
        $(".project-entry:last").append(formattedProjectImage);
    });
  });
  };

projects.display();

$("#mapDiv").append(googleMap);
