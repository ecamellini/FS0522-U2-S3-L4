async function displayHelloWorld() {
  let helloHttpResponse = await fetch('http://localhost:3000/hello')
  // Qua è già come se fossimo nel then della fetch, dato che abbiamo scritto await

  let text = await helloHttpResponse.text()

  document.querySelector('body').innerHTML = text
}

window.onload = () => {
  displayHelloWorld()
}
