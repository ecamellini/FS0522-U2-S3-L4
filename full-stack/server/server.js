// La parola require mi permette di usare una libreria che ho installato
const express = require('express') // Usiamo express

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Benvenuto, puoi chiamare le rotte /hello e /pippo')
})

// Se qualcuno chiama questo server, con metodo HTTP GET
// all'indirizzo /hello allora io rispondo "Hello World!"
app.get('/hello', (req, res) => {
  // Restituisco una stringa, questo non è JSON
  res.send('Hello World!')

  // Di norma, qua dovrei fare
  // 1) Prendo i miei dati, da database
  // 2) JSON.stringify ...
  //    Così invio una risposta JSON
})

// Se qualcuno chiama invece /pippo, allora rispondo quest'altra cosa
app.get('/pippo', (req, res) => {
  res.send('Ecco qua il famigerato Pippo.')
})

// Una volta che ho definito tutte le risposte che posso dare...
// Allora avvio il server, cioè partirà un'applicazione
// che si mette in ascolto, cioè, aspetta che qualcuno la chiami.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
