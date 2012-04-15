var homes = [{
            'id': 1,
            'address': {
                  'id': 1,
                  'latitude': 35.38451037447432,
                  'longitude': -80.57186365127563,
                  'address1': '263 Fryling Ave SW',
                  'address2': null,
                  'city': 'Concord',
                  'state': 'NC',
                  'zip': '28025',
                  'created': 1333216519,
                  'updated': 1333216519,
                  'status': 'active'
            },
            'price': 173000,
            'sqft': 2100,
            'room_count': 3,
            'bath_count': 2,
            'created': 1333209034,
            'updated': 1333209034,
            'status': 'active',
            'pictures': [{
                  'url': 'http://placehold.it/90x90',
                  'room': 'Living Room',
                  'note': 'Has a nice layout, I like the fireplace.'
            },
            {
                  'url': 'http://placehold.it/90x90',
                  'room': 'Kitchen',
                  'note': 'Needs to be updated'
            },
            {
                  'url': 'http://placehold.it/90x90',
                  'room': 'Master Bath',
                  'note': 'Sexy!'
            }],
            'features': [{
                  'id': 1,
                  'name': 'Large Living Room'
            },
            {
                  'id': 2,
                  'name': 'Finished Basement'
            },
            {
                  'id': 3,
                  'name': 'Hardwood Floors'
            }]
      },
      {
            'id': 2,
            'address': {
                  'id': 2,
                  'latitude': 35.246111,
                  'longitude': -80.809985,
                  'address1': '2903 N Davidson St',
                  'address2': '1041',
                  'city': 'Charlotte',
                  'state': 'NC',
                  'zip': '28205',
                  'created': 1333216519,
                  'updated': 1333216519,
                  'status': 'active',
            },
            'price': 401000,
            'sqft': 3230,
            'room_count': 6,
            'bath_count': 5,
            'created': 1333776839,
            'updated': 1333776839,
            'status': 'active',
            'pictures': [{
                  'url': 'http://placehold.it/90x90',
                  'room': 'Kitchen',
                  'note': 'Like the counter tops'
            },
            {
                  'url': 'http://placehold.it/90x90',
                  'room': 'Basement',
                  'note': 'Finished!!!'
            },
            {
                  'url': 'http://placehold.it/90x90',
                  'room': 'Back Yard',
                  'note': 'Small'
            }],
            'features': [{
                  'id': 1,
                  'name': 'Large Living Room'
            },
            {
                  'id': 2,
                  'name': 'Finished Basement'
            },
            {
                  'id': 3,
                  'name': 'Hardwood Floors'
            }]
      }];

$.fixture.make(['homes', 'home'], 2, function(i){

	return homes[i];

});

var features = [
	'Hard Wood Floors',
	'Basement',
	'Large Master Bath',
	'Big Back Yard',
	'Open Floor Plan'
]

$.fixture.make(['features', 'feature'], 5, function(i, feature){

	return {
		id: i,
		name: features[i]
	}

});