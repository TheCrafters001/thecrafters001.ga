<!--

//
// Script by Jari Aarniala [www.mbnet.fi/~foo -- foo@mbnet.fi]
//
// This script makes it easy to choose with which search engine
// you`d like to search the net. You may use this if you keep this
// text here...
//

function startSearch(){
searchString = document.searchForm.searchText.value; 
if(searchString != ""){
searchEngine = document.searchForm.whichEngine.selectedIndex + 1;
finalSearchString = "";

if(searchEngine == 1){
finalSearchString = "http://duckduckgo.com/?q=" + searchString + " site:thecrafters001.ga";
}
if(searchEngine == 2){
finalSearchString = "http://google.com/search?q=" + searchString + " site:thecrafters001.ga";
}

location.href = finalSearchString;
}
}


// -->