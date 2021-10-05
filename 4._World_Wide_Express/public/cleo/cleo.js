fetch("https://catfact.ninja/fact")
.then(response => response.json())
.then(result => {
    const catFactsDiv = document.getElementById("cat-facts");
    catFactsDiv.innerHTML = result.fact;
    console.log(catFactsDiv);
    console.log(result);
});