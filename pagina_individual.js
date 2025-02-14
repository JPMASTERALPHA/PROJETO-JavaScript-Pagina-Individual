document.querySelector("#formButton").addEventListener("click", enviarFeedback)



function enviarFeedback() {

    let container = document.querySelector("#feedbacksContainer")

    let div = document.createElement("div")
    div.setAttribute("class", "feedbackPContainer")

    let p1 = document.createElement("p")
    p1.setAttribute("class", "feedbackP1")
    p1.appendChild(document.createTextNode(document.querySelector("#formMsg1").value))

    let p2 = document.createElement("p")
    p2.setAttribute("class", "feedbackP2")
    p2.appendChild(document.createTextNode(document.querySelector("#formMsg2").value))

    div.appendChild(p2)
    div.appendChild(p1)

    container.insertBefore(div, container.firstChild)
}