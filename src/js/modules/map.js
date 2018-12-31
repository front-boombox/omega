var mapHandler = {
    mapHandlerInit: function() {
        var $mapWrap = $(".map");

        if (!$mapWrap.length) {
            return;
        }

        initialize();

        function initialize() {
            var latlng = new google.maps.LatLng(33.770154, -118.150000);
            var settings = {
                zoom: 11,
                scrollwheel: false,
                center: latlng,
                mapTypeControl: true,
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                navigationControl: true,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('map_canvas'), settings);
            // var companyLogo = new google.maps.MarkerImage('build/images/marker.png',
            //     new google.maps.Size(45,60),
            //     new google.maps.Point(0,0),
            //     new google.maps.Point(30,60)
            // );

            var companyPos = new google.maps.LatLng(33.770154, -118.206710);
            var companyMarker = new google.maps.Marker({
                position: companyPos,
                map: map,
                // icon: companyLogo,
                title:"Long Beach"
            });

            var content = document.createElement('div');
            content.innerHTML = "<p>Long Beach</p>";
            var infowindow = new google.maps.InfoWindow({
                content: content
            });

            google.maps.event.addListener(companyMarker, 'click', function() {
                infowindow.open(map, companyMarker);
            });

            var styles = [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f5f5f5"
                }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#5e5e5b"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#e0e1da"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#bdbdbd"
                }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#dbdcd5"
                }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#dbdcd5"
                }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d3d4cd"
                }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d3d4cd"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#eeeeee"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d3d4cd"
                },
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d3d4cd"
                },
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e5e5e5"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d3d4cd"
                },
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#ffffff"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#c9cac4"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                {
                    "saturation": -100
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dadada"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#e0e1da"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#616161"
                }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                {
                    "color": "#c9cac4"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e5e5e5"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#eeeeee"
                }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#d4d5ce"
                }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                {
                    "color": "#e9eae2"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#c9c9c9"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#c3c4bd"
                },
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            }
            ];
            map.setOptions({
                styles: styles
            });
        }
    }
};

export default mapHandler;