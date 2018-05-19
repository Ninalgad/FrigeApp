/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var onSuccess = function(position) {
            /*console.log('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');*/
            initMap(position.coords.latitude, position.coords.longitude);
            
        };
		//
		function initialize() {
			var myLatlng = new google.maps.LatLng(43.665042,
-79.413809);
			var myLatlng1 = new google.maps.LatLng(43.674849
-79.412823);
  			var myLatlng2 = new google.maps.LatLng(43.712061,
-79.478874);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: '560 Palmerston Avenue, ON'
  });
			
  var marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      title: '30 Bridgman Avenue'
  });
		
  var marker1 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      title: '736 Bathurst Street, ON'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
		//
		
		
//        function initMap(LAT, LONG) {
//            console.log(LAT+" + "+LONG);
//            var mapOptions = {
//              center: { lat: 43.665042, lng:  -79.413809},
//              zoom: 13
//            };
//            var map = new google.maps.Map(document.getElementById('map-canvas'),
//                mapOptions);
//            
//            var marker = new google.maps.Marker({
//                position: { lat: 43.674849, lng: -79.412823},
//                map: map,
//                title: '30 Bridgman Avenue'
//            });
			
//			var marker2 = new google.maps.Marker({
//                position: { lat: 43.665042, lng:  -79.413809},
//                map: map,
//                title: '560 Palmerston Avenue, ON''
//            });
//			
//			var marker3 = new google.maps.Marker({
//                position: { lat: 43.712061, lng: -79.478874},
//                map: map,
//                title: '736 Bathurst Street, ON'
//            });
            
//            var infowindow = new google.maps.InfoWindow({
//                content: 'Is this you?'
//            });
//            
//            google.maps.event.addListener(marker, 'click', function() {
//                infowindow.open(map,marker);
//            });
//        }
		
//            google.maps.event.addListener(marker2, 'click', function() {
//                infowindow.open(map,marker2);
//            });
//        }            google.maps.event.addListener(marker3, 'click', function() {
//                infowindow.open(map,marker3);
//            });
//        }
//        
        

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        console.log('Received Event: ' + id);
    }
	
}; 
//restart here