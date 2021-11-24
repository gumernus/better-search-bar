const topics = [
    "Doom Eternal",
    "Doom 2016",
    "Cyberpunk",
    "Gumernus",
    "Lol",
    "Meme",
    "Developer",
    "Programing"
]

var results = topics.length

function show(value) {
    console.log(value)
    document.getElementById("datalist").innerHTML = ""

    list = value.length

    for (let i = 0; i < results; i++) {
        if (topics[i].toLowerCase().indexOf(value.toLowerCase()) > -1) {
            let n = document.createElement("option");
            let v = document.createTextNode(topics[i])
            n.append(v)
            document.getElementById("datalist").append(n)
        }
    }
}
