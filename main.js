addEventListener("DOMContentLoaded",(e)=>{
    let form= document.querySelector("#form")
    form.querySelector("submit",(e)=>{
    preventDefault();

        let datainput=Object.fromEntries(new FormData(e.target))
        let farenheit=Number(datainput.celcius)
        let pro=(farenheit-32)*5/9
        let mytable=document.querySelector("tbody");
        mytable.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${farenheit}</td>
            <td>${pro}</td>
        </tr>
        `)

})
})