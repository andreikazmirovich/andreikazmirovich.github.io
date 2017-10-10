(function () {
	
	var div = document.createElement('div'),
		profile = document.createElement('div'),
		otherInfo = document.createElement('div'),
		projects = document.createElement('div');

	div.className = 'col-md-8';
	profile.className = 'col-md-4';
	profile.id = 'profile';
	otherInfo.className = 'col-md-12';
	otherInfo.id = 'other_info';
	projects.className = 'col-md-12';
	projects.id = 'projects';

	div.appendChild(otherInfo);
	div.appendChild(projects);

	document.getElementsByClassName('row')[0].appendChild(profile);
	document.getElementsByClassName('row')[0].appendChild(div);


	/*========================================
	=            Get Data Function           =
	========================================*/
	
		var getData = function(url, callback){
			var xhr = new XMLHttpRequest();

			xhr.open('GET', url, true);

			xhr.onreadystatechange = function () {
				if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					var  data = JSON.parse(xhr.response);
					callback(data);
				}
			};

			xhr.send();
		};	
	
	/*=====  End of Get Data Function ======*/


	
	/*=====================================
	=            Profile Block            =
	=====================================*/
	
		var createProfileBlock = function (data) {
			var parentNode = document.getElementById('profile'),
				skillsInfoNode = '',
				mainInfoNode = '<img class="card-img-top" src="'+ data.image +'" alt="Not Found">'+
								'<div class="card-block">'+
									'<h4 class="card-title">'+ data.spec +'</h4>'+
									'<p class="card-text">'+ data.description +  '</p>'+
								'</div>';

			for(var i = 0; i < data.skills.length; i++){
				skillsInfoNode += '<li class="list-group-item">'+ data.skills[i] +'</li>';
			}

			parentNode.innerHTML = '<div class="card">'+
									mainInfoNode+
									'<ul class="list-group list-group-flush">'+
										skillsInfoNode+
									'</ul>'+
								'</div>';
		}
	
	/*=====  End of Profile Block  ======*/



	/*=======================================
	=            Education Block            =
	=======================================*/
	
		var createEducationBlock = function (data) {
			var parentNode = document.getElementById('other_info'),
				educationPlacesNode = '';
			data.forEach( function(item) {
				educationPlacesNode += '<div class="card">'+
											'<div id="app-education">'+
												'<h3 class="card-header">'+ item.title +'</h3>'+
												'<span class="dates">'+ item.startDate +' - '+ item.endDate +'</span>'+
												'<div class="card-block">'+
													'<h4 class="card-title">'+ item.where +'</h4>'+
													'<p class="card-text">'+ item.desc +'</p>'+
												'</div>'+
											'</div>'+
										'</div>'
			});
			
			document.getElementById('other_info').innerHTML += educationPlacesNode;
		}
	
	/*=====  End of Education Block  ======*/



	/*======================================
	=            Projects Block            =
	======================================*/
	
		var createProjectsBlock = function (data) {
			var parentNode = document.getElementById('projects'),
				projectsNode = '';

			for(var i = 0; i < 3; i++){
				projectsNode += '<div class="col-xs-12 col-sm-6 col-md-4">'+
									'<div class="card">'+
										'<img class="card-img-top" src="'+ data[i].image +'" alt="Not Found">'+
										'<div class="card-block">'+
										   	'<h4 class="card-title">'+ data[i].title +'</h4>'+
										    '<p class="card-text">'+ data[i].desc +'</p>'+
										'</div>'+
									'</div>'+
								'</div>';
			}

			var div = document.createElement('div');
			div.className = 'row';
			div.innerHTML = projectsNode;

			document.getElementById('projects').appendChild(div);
			
		}
	
	/*=====  End of Projects Block  ======*/
		


	getData('data/myData.json', createProfileBlock);
	getData('data/education.json', createEducationBlock);
	getData('data/projects.json', createProjectsBlock);
	
}());