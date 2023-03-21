const btnXHR = document.querySelector('#btnXHR');
const dataXHR = document.querySelector('#dataXHR')

btnXHR.addEventListener('click', (e) => {
    e.preventDefault()
    getDataUserXHR()
})

function getDataUserXHR(){
    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/users';
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText)
        showData(data)
    }
    xhr.open("GET", url)
    xhr.send()
}

function showData(data){
    dataXHR.innerHTML = '';
    data.forEach(element => {
        dataXHR.innerHTML += `
        <tr>
            <td scope="col">${element.id}</td>
            <td scope="col">${element.name}</td>
            <td scope="col">${element.username}</td>
            <td scope="col">${element.email}</td>
            <td scope="col">${element.website}</td>
        </tr>
        `
    });
}