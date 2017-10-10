(function () {

	var input = document.createElement('input'),
		profile = document.createElement('div'),
		row = document.getElementsByClassName('container')[0].getElementsByClassName('row')[0];

	input.setAttribute('type', 'file');
	input.id = 'fileInput';
	profile.className = 'col-md-4 offset-md-4';
	profile.id = 'profile';
	
	row.appendChild(input);
	row.appendChild(profile);

	
	/*========================================
	=            Get Data Function           =
	========================================*/
	
		var File = '' ;

		function getData(evt) {
		    var files = evt.target.files;
		    	f = files[0],
		    	reader = new FileReader();

		    reader.onload = (function(theFile) {
		        return function(e) {
		        	File = JSON.parse(e.target.result);
		        	document.getElementById('fileInput').remove();
		        	createProfileBlock(File);
		        };
		    })(f);

		    reader.readAsText(f);
		}

		document.getElementById('fileInput').addEventListener('change', getData, false);
	
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
	
}());