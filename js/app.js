/* DESAFIO FETCH
Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando 
API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para 
los estilos) una tabla de 10 usuarios y debe contener las propiedades 
en sus columnas de Id, name, username, email y address-street. */

(() => {
  const $tbody = document.querySelector("#tbody");
  $fragment1 = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      json.forEach((a) => {
        // console.log(a);
        const fragment2 = document.createDocumentFragment();

        const eth = document.createElement("th");
        eth.textContent = `${a.id}`;
        fragment2.appendChild(eth);

        const etd1 = document.createElement("td");
        etd1.textContent = `${a.name}`;
        fragment2.appendChild(etd1);

        const etd2 = document.createElement("td");
        etd2.textContent = `${a.username}`;
        fragment2.appendChild(etd2);

        const etd3 = document.createElement("td");
        etd3.textContent = `${a.email}`;
        fragment2.appendChild(etd3);

        const etd4 = document.createElement("td");
        etd4.textContent = `${a.address.street}`;
        fragment2.appendChild(etd4);

        const $tr = document.createElement("tr");
        $tr.appendChild(fragment2);

        $fragment1.appendChild($tr);
      });
      $tbody.appendChild($fragment1);
    })
    .catch((error) => {
      console.log(error.status);
    });
})();
