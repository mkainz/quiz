function menuClicked() {
			alert("You clicked on the menu");
}

// track user location. Code sourced from: https://stackoverflow.com/questions/10563789/how-to-locate-user-with-leaflet-locate, accessed 7th May 2018
function trackLocation(){
mymap.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
        .on('locationfound', function(e){
            var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here').openPopup();
            var circle = L.circle([e.latitude, e.longitude], e.accuracy/80, {
                weight: 1,
                color: 'blue',
                fillColor: '#cacaca',
                fillOpacity: 0.2
            });
            mymap.addLayer(marker);
            mymap.addLayer(circle);
        })
       .on('locationerror', function(e){
            console.log(e);
            alert("Location access denied.");
        });
		

};


