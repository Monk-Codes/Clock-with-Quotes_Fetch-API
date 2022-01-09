function showTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var time ="Time:"+ h + ":" + m + ":" + s + " "
    document.getElementById("clock").textContent = time
    setTimeout(showTime, 1000)
}
showTime()

function button() {
    document.getElementById("quote").innerHTML =
        fetch("https://api.quotable.io/random?maxLength=50")
            .then(res=>res.json())
            .then(data=>{quote.innerHTML=`${data.content}-${data.author}`})
}
button()


