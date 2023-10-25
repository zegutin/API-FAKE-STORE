const api = "https://fakestoreapi.com/products"

fetch(api)
.then((data)=>data.json())
.then(data=>{
    exibir(data)
})

function exibir(data){
    const container = document.querySelector('.container')

    data.forEach(data => {
        
    const card = document.createElement('card')
    card.classList.add('card')

    card.innerHTML=`
    <div class="">
                    <img src="${data.image}" alt="">

                        <div class="informacao">
                            <h2>${data.title}</h2>
                            <p>${data.description}</p>
                            <p>R$${data.price.toFixed(2)}</p>
                            <input type="button" value="COMPRAR">
                        </div>
                </div>
                `
                container.appendChild(card)
    });



}

/* 

pegar o pai
criar o filho
dar uma classe para o filho
dar o conteudo para o filho

e colocar o filho dentro do pai

*/

































// console.log(data)

// const container = document.querySelector('.container')

// const card = document.createElement("div")
// card.classList.add("card")

// card.innerHTML=`
// <div class="produto-1">
// <img src="img/a346bedc9c50e1776da06cf85158d528.jpg" alt="">

//     <div class="informacao">
//         <h2>Titulo</h2>
//         <p>descrição</p>
//         <input type="button" value="COMPRAR">
//     </div>
// </div>
// `

// container.appendChild(card)