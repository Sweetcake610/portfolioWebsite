let navCircles = document.getElementsByClassName('circle');
let navCirclesArray = Array.from(navCircles);
let contentInfo = document.getElementsByClassName('contentInfo');
let contentInfoArray = Array.from(contentInfo);

  
/***ForEach loop that handles the event handler for navigation buttons, 
 * animations and content displayed for each nav button clicked *****/
navCirclesArray.forEach((navCircle, index) => {
	navCircle.addEventListener('click', function() {
		navCircle.classList.add('bounce-in');
		console.log('Button is clicked');
		setTimeout(() => {
			navCircle.classList.remove('bounce-in');
		}, 3000)


		let navCircleText = navCirclesArray[index].innerText;
		console.log(navCircleText);
		if(navCircleText === 'Home') {
			contentInfoArray.map(changeContentShow);
			console.log('Displaying home content');
			contentInfo[0].classList.remove('noShow')
			contentInfo[0].classList.add('spread-out')
		} else if(navCircleText === 'Experience & Skills') {
			contentInfoArray.map(changeContentShow);
			console.log('Displaying Skills content');
			contentInfo[1].classList.remove('noShow');
			contentInfo[1].classList.add('spread-out')
		} else if(navCircleText === 'Education') {
			contentInfoArray.map(changeContentShow);
			console.log('Displaying Education content');
			contentInfo[2].classList.remove('noShow');
			contentInfo[2].classList.add('spread-out')
		} else if(navCircleText === 'All Projects') {
			contentInfoArray.map(changeContentShow);
			console.log('Displaying projects content');
			contentInfo[3].classList.remove('noShow');
			contentInfo[3].classList.add('spread-out')
		} else {
			contentInfoArray.map(changeContentShow);
			console.log('No content');
		}
	
	})
});

const changeContentShow = function(contentValue) {
	contentValue.classList.add('noShow');
}

//Adding projects to project section and including project in featured section on home page.
const projectSection = document.getElementById('projectsAll');
const featuredProject = document.getElementById('featured');

let projectData = [
	{
	 name: 'Ms. Margie`s',
	 img: 'img/ms_margie_screenshot.png',
	 purpose: 'I met the owner back at one of my previous employments and got the idea of making him a webiste',
	 objective: 'Wanting to create a website that was functional in submitting orders as well as provide a simple but sweet design, like the dessert.',
	 duration: 'About 4 days to complete, Most of the time was spent working on the deisgn layout and graphics ',
	 source: 'https://ms-margie-a7552a.netlify.app/',
	 featured: true
	},
	{
	 name: 'Tea Cozy',
	 img: 'img/tea_cozy_screenshot.png',
	 purpose: 'Practice project to create a replica of the site from a design schematic',
	 objective: 'Creating a single page website following design schematic',
	 duration: 'Less than 5 hours (Basic JS), Less than 7 hours (For React Version)',
	 source: 'https://github.com/Sweetcake610/teaCozyProject',
	 featured: false
	},
	{
	 name: 'Appointment Planner',
	 img: 'img/app_planner_screenshot.png',
	 purpose: 'Practice project using JS framework React',
	 objective: 'An app that creates contacts and appointments to be saved. Contacts can also be attached to appointments',
	 duration: 'About 2 days',
	 source: 'https://github.com/Sweetcake610/AppointmentPlanner',
	 featured: false
	},
	{
	 name: 'Easyl',
	 img: 'img/noImage.jpg',
	 purpose: 'An Art Information Website to provide clients with a broad scope of artistic methods and resources',
	 objective: 'Create the website, that was mock-up and create by a UX/UI designer friend. Having to work on a full scale website start to finish.',
	 duration: 'TBD',
	 source: '',
	 featured: false
	},
]

projectData.forEach((project) => {
	let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'projectInfo');
		projectDiv.innerHTML = '<h4>' + project.name + '</h4>' +
								'<img class= projectImage src=' + project.img + ' alt= "project image">' +
								'<p><strong>Purpose:</strong> ' + project.purpose + '</p>' +
								'<p><strong>Objective:</strong> ' + project.objective + '</p>' +
								'<p><strong>Duration:</strong> ' + project.duration+ '</p>' +
								'<p><strong>Source: </strong><a href=' + project.source + ' target= _blank>' + project.name + '</a></p>';
		projectSection.appendChild(projectDiv);

});

projectData.forEach((project) => {
	if(project.featured === true) {
		let featuredDiv = document.createElement('div');
		featuredDiv.setAttribute('class', 'projectInfo');
		featuredDiv.innerHTML = '<h4>' + project.name + '</h4>' +
								'<img class= projectImage src=' + project.img + ' alt= "project image">' +
								'<p><strong>Purpose:</strong> ' + project.purpose + '</p>' +
								'<p><strong>Objective:</strong> ' + project.objective + '</p>' +
								'<p><strong>Duration:</strong> ' + project.duration+ '</p>' +
								'<p><strong>Source: </strong><a href=' + project.source + ' target= _blank>' + project.name + '</a></p>';
		featuredProject.appendChild(featuredDiv);
	}
})


// let projectThree = new Project("CheatSheet", 'img/noImage.jpg', "Informational CheatSheet on syntax for HTML, CSS, and JS", "2023", 'https://github.com/Sweetcake610/cheatSheet');

