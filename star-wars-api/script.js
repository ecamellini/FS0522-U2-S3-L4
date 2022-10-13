// Async function vuol dire: qua dentro gestirò delle Promise con la parola await
async function visualizeStarWarsPeople() {
  // Await è un altro modo per gestire la Promise - quando arriverà il risultato
  // lo andrà a mettere direttamente dentro alla variabile.
  // PERÒ, funziona solo all'interno di una funzione dichiarata come async.
  let starWarsPeopleResponse = await fetch('https://swapi.dev/api/people/').catch(() => {
    // Posso comunque gestire qua il catch
  })
  // Qua dopo l'await è come se fossimo nel then della fetch...
  // Non lo vediamo perché JS trasforma tutta questa funzione in una Promise.

  if (starWarsPeopleResponse.ok !== true) { // Questo boolea è true se la risposta HTTP è positiva
    document.querySelector("body").innerHTML = starWarsPeopleResponse.statusText
  }

  // Await va usato solo prima di una Promise
  let responseText = await starWarsPeopleResponse.text() // Questa è una Promise
  console.log(responseText)
  console.log(JSON.parse(responseText))

  // Altrimenti, posso direttamente prendere un JSON già parsato
  // let responseAsJson = await starWarsPeopleResponse.json()
  // console.log(responseAsJson)

  document.querySelector("body").innerHTML = '' // Svuoto il body, altrimenti vedo ancora loading
  let starWarsPeople = JSON.parse(responseText).results

  for (let starWarsPerson of starWarsPeople) {
    document.querySelector('body').innerHTML += `<div>${starWarsPerson.name} - è alto/a ${starWarsPerson.height}cm</div>`
  }
}

window.onload = () => {

  document.querySelector('body').innerHTML = `<div class="progress"><div class="color"></div></div>`

  visualizeStarWarsPeople()

  console.log("CIAOCIAO") // Questo invece verrà eseguito prima del risultato della funzione sopra...
  // Perché è la funzione che è diventata una Promise, essendo async.
  // E tutti gli await al suo interno è come se fossero dei then su questa funzione.
}
