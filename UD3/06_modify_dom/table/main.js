function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    //Hacer que el ID se autoincremente (mediante una variable)
    
    //Añadir una columna 'Acciones' en el HTML
    
    //Añadir a los datos que se incluyan cada vez que se pulse un botón
    
    //un enlace a la url 'http://localhost/edit/id'




    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = '0'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}