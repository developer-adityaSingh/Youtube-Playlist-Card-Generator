document.title="Playlist Card generator using DOM Concept"
var title= ""
var cName= ""
var views= 0
var monthsOld= 0
var duration= 0
var imageLink= ""
var modifiedViews= ""
function cardDetails(){
    title= prompt("Enter the title of the video")
    cName= prompt("Enter the Channel name")
    views= prompt("Enter total views")
    monthsOld= prompt("Enter the months old")
    duration= prompt("Enter the duration of the video")
    imageLink= prompt("Enter the link of the thumbnail")

    if (views > 1000 && views <=999000){
        let viewsStr = views.toString();
        modifiedViews = viewsStr.slice(0, -3) + 'K';
    }
    createCard(title, cName, modifiedViews, monthsOld ,duration, imageLink)
}
function createCard(title, cName, views, monthsOld ,duration, imageLink){
    document.getElementById("imgLink").src= imageLink
    document.getElementById("durationT").innerHTML= `${duration}`
    document.getElementById("heading").innerHTML= `${title}`
    document.getElementById("cName").innerHTML= `${cName}`
    document.getElementById("viewS").innerHTML= `${views} views`
    document.getElementById("uploadT").innerHTML= `${monthsOld} months ago`
}