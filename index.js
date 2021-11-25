// aboutme = document.getElementById("aboutme")
// education = document.getElementById("education")
// work = document.getElementById("work")
// interests = document.getElementById("interests")

// contentcards = document.querySelectorAll(".content-card")
// console.log(contentcards)


// contentcards.forEach(function(card) {
//     card.addEventListener('mouseover', function(e) {
        
//     })
// })


linkedln = document.getElementById("linkedln")
name_linkedln = document.getElementById("name-linkedln")
linkedln.addEventListener('mouseover', function(e) {
    name_linkedln.classList.add("name-show")
})
linkedln.addEventListener('mouseout', function(e) {
    name_linkedln.classList.remove("name-show")
})

gmail = document.getElementById("gmail")
name_gmail = document.getElementById("name-gmail")
gmail.addEventListener('mouseover', function(e) {
    name_gmail.classList.add("name-show")
})
gmail.addEventListener('mouseout', function(e) {
    name_gmail.classList.remove("name-show")
})

facebook = document.getElementById("facebook")
name_facebook = document.getElementById("name-facebook")
facebook.addEventListener('mouseover', function(e) {
    name_facebook.classList.add("name-show")
})
facebook.addEventListener('mouseout', function(e) {
    name_facebook.classList.remove("name-show")
})

twitter = document.getElementById("twitter")
name_twitter = document.getElementById("name-twitter")
twitter.addEventListener('mouseover', function(e) {
    name_twitter.classList.add("name-show")
})
twitter.addEventListener('mouseout', function(e) {
    name_twitter.classList.remove("name-show")
})