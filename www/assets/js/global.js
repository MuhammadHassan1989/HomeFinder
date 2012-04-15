function preventBehavior(e) 
{ 
  e.preventDefault(); 
};

function onBodyLoad()
{
	//document.addEventListener("deviceready", onDeviceReady, false);
	$(document).ready(onDeviceReady);
}

function onDeviceReady()
{
	var initialLocation = new google.maps.LatLng(35.3847, -80.574);
	var markerLocation = new google.maps.LatLng(35.384307, -80.571614);

	var myOptions = {
		zoom: 18,
		center: initialLocation,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		disableDefaultUI: true
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	var markerOptions = {
		map: map,
		position: markerLocation
	}
	var marker = new google.maps.Marker(markerOptions);
	//navigator.notification.alert("Test")
	/*$('.container').on('click', function(){

		navigator.notification.alert("Ouch");

	});*/

	var header = '<hgroup class="title"><h1>${address.address1}</h1><ul class="list"><li><span>${room_count} Bedrooms</span></li><li><span>${bath_count} Bath</span></li><li><span>${sqft} sqft</span></li></ul><h2>${price}</h2></hgroup>';
	var rooms = '<li><img src="${url}" class="thumb" /><span>${room}</span></li>';
	var new_room_btn = '<a href="#modal" data-toggle="modal" id="camera" class="btn btn-primary btn-large" data-album="${id}"><i class="icon-camera icon-white"></i> Take a Picture</a>';
	var features = '<label class="checkbox"><input type="checkbox" name="feature_${id}" value="${id}">${name}</label>';

	$.ajax({
		url: 'homes',
		fixture: '-homes',
		success: function( homes ) {

			var i = 1;

			console.log(homes.data);
			$.tmpl(header, homes.data[i]).appendTo('#home');
			$.tmpl(new_room_btn, homes.data[i]).prependTo('#pictures');
			$.tmpl(rooms, homes.data[i].pictures).appendTo('#rooms');
			$.tmpl(features, homes.data[i].features).appendTo('#features_list');

			navigator.geolocation.getCurrentPosition(function( pos ) {
				alert(pos.coords.latitude);
			}, function( error ){
				alert('Error: ' + error.message);
			})
		}
	});

	$.ajax({
		url: 'features',
		fixture: '-features',
		success: function( features ) {
			//alert(features.data[2].name);
		}
	});

	$('#camera').live('click', function(){

		navigator.camera.getPicture(function( imageData ){

			$('#modal').modal();
			console.log(imageData);

		}, function( message ){

			alert('Failed because: ' + message);

		}, 
		{ 
			quality: 50,
    		destinationType: Camera.DestinationType.DATA_URL
 		});

	});

}