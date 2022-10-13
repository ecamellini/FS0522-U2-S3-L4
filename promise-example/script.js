
// Se esistesse un modo di prendere da quel server quel JSON,
// metterlo qua dentro, questa variabile...
fetch('https://swapi.dev/api/people/').then(
  (httpResponse) => {
    console.log("Fine richiesta, ecco la risposta HTTP:")
    console.log(httpResponse)
    // Questo risultato potrebbe anche essere un errore HTTP.
    // Sono comunque nel then perché lui è riuscito a fare la chiamata HTTP,
    // poi magari non ha trovato nulla a quell'indirizzo...
    // e quindi avrò 404 NOT FOUND.

    httpResponse.text().then((responseText) => {
      console.log(responseText)
      console.log(JSON.parse(responseText))
    })

    // Altrimenti, fetch vi mette a disposizione anche il JSON già parsato.
    // Quindi sarà già un oggetto JavaScript
    // httpResponse.json() --
  }
).catch((errore) => {
  console.log("Fine Richiesta, ecco il risultato:")
  console.log(errore)
  // Sono in questo caso quando non riesce nemmeno a far partire la chiamata HTTP.
  // Ad esempio, se non passo nessun indirizzo da chiamare, oppure se non c'è connessione a internet.
})

// Questa riga verrà eseguita subito dopo aver lanciato la richiesta fetch.
// Quando la fetch finirà, verrà chiamata la callback - che quindi verrà eseguita
// dopo questa riga.
console.log("Riga di codice subito dopo la fetch.")
