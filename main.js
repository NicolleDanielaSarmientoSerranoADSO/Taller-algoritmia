addEventListener("DOMContentLoaded",(e)=>{
    let formulario = document.querySelector("#form")
        formulario.addEventListener("submit",(e)=>{e.preventDefault();

            let datainput=Object.fromEntries(new FormData(e.target));
            let pesos=document.querySelector("#pesos")
            let dolarec=datainput.pesos
            let conversion= Number(dolarec*0.000023)

            let mytabla = document.querySelector('tbody');
            mytabla.insertAdjacentHTML('beforeend',`
            <tr>
                <td>${pesos}</td>
                <td>${conversion}</td>
            </tr>
            `)

        })
})