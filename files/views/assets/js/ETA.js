function sendETA()
{
    var eta=('https://maps.googleapis.com/maps/api/distancematrix/json?		origin='+localStorage.getItem('currentLat')+','+localStorage.getItem('currentLng')+'&destination='+localStorage.getItem('DestinationLat')+','+localStorage.getItem('DestinationLng')+'&&mode=driving&departure_time=now&language=en&key=AIzaSyAU2ywrBdA-Sk3jIMRed4YyuVbOBzINcVQ');
    localStorage.setItem('ETA',eta);
}