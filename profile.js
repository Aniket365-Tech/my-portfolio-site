
var tablinks = document.getelementByClassName(tab-titles)
var tabcontents = document.getelementByClassName(tab-contents)

function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link")
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-tab")
    }
}