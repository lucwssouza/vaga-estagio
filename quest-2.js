let txt = "Ana";
let qtd = 0;
if (txt.includes("a") || txt.includes("A")) {
    for (let z = 0; z < txt.length; z++) {
        if (txt[z] == "a" || txt[z] == "A") {
            qtd++
        }
    }
    console.log("tem a letra A e se repete " + qtd + " vezes")
} else {
    console.log("não tem a letra A")
}