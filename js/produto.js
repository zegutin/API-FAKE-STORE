const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>exibir(json))
            


function exibir(json){
    
    const pai = document.querySelector("main")

    const card = document.createElement('div')
    card.classList.add('global')

    card.innerHTML = `
    <div class="card-produto">
    <img src="${json.image}" alt="">

    <div class="global">
        <h3 class="categoria">${json.category}</h3>
        <h2 class="titulo">${json.title}</h2>
        <p class="preco">R$${json.price}</p>
        <p class="rating">Rating ${json.rating.rate}  <i class="fa-solid fa-star"></i></p>
        <div class="card-descricao">

            <p class="descricao">${json.description}</p>
        </div>
        
        <div class="campo-quantidade">
            <div class="cep">     
                <p>CEP:</p>
                <input id="cep" type="text">
                <button id="btnCep">Consultar</button>
                <div id="resultado"></div>
            </div>
            <div class="btns">
                <p class="quantidade">Quantidade:</p>
                <input class="numero-quantidade" type="number" value="1">
                <input class="buy" type="button" value="COMPRAR">
                <input class="buy" type="button" value="ADICIONAR AO CARRINHO">
            </div>
        </div>
    </div>

</div>
    `
    pai.appendChild(card)
}

/* 

pegar o pai
criar o filho
dar uma classe para o filho
dar o conteudo para o filho

e colocar o filho dentro do pai

*/


















































// const btn = document.querySelector("#btnCep")

// function consultaEndereco() {
//     let cep = document.querySelector('#cep').value;


//     if (cep.length !== 8) {
//         alert("CEP invalido!!!")
//         return;
//     }
//     console.log(cep.length);
//     let url = `https://viacep.com.br/ws/${cep}/json/`;
//     console.log(url);

//     fetch(url).then(function (response) {
//         response.json().then(mostrarEndereco);
//     }
//     );
// }

// function mostrarEndereco(dados) {
//     let resultado = document.querySelector("#resultado");

//     if (dados.erro) {

//         resultado.innerHTML = "<br> Não foi possível localizar endereço!";

//     }
//     else {

//         resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
//                          <p>Complemento: ${dados.complemento}</p>
//                          <p>Bairro: ${dados.bairro}</p>
//                          <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
//     }
// }

// //13188181


// btn.addEventListener('click', consultaEndereco())