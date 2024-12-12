const handleSum = () =>{
    const num1= document.getElementById("num1").value
    const num2= document.getElementById("num2").value
    const resultContainer = document.getElementById('result')

    const sum = Number(num1) + Number(num2)

    if(num1=== "") {
        resultContainer.innerHTML= "please provide number in input"
        return;    
    }
    if(num2=== "") {
        resultContainer.innerText= "please don't click here"
        return;
    }
    resultContainer.innerHTML = (`The sum is: ${sum}`)
}