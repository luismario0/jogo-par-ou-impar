let par = document.getElementById('par');
let impar = document.getElementById('impar')
let rad = document.getElementsByName('rad')
let result = document.getElementById('result')

verificar.addEventListener("click", () =>{
    num = parseInt(Math.random() * 20) 
    let  number = document.getElementById('number').value
     let teste = parseInt(num)  +  parseInt(number)
     document.getElementById('gerador').innerHTML = num 
    
     if(rad[0].checked)
     {
        if(teste%2==0){
            document.getElementById('result').innerHTML =`o ${teste} é par` 
            alert('Você venceu!')
        }else{
            document.getElementById('result').innerHTML =`o ${teste} é impar` 
            alert('Você perdeu!')
        }
     }
     else if(rad[1].checked)
     {
        if(teste%2!=0){
            document.getElementById('result').innerHTML =`o ${teste} é impar` 
            alert('Você venceu!')
        }else{
            document.getElementById('result').innerHTML =`o ${teste} é par` 
            alert('Você perdeu!')
        }
        
     }
    
    console.log(num)
})

   


