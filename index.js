let k = 0
document.getElementById('counter').innerHTML=k

const handleDecrement=()=>{
    document.getElementById('counter').innerHTML=k-=1
}
const handleIcrement =()=>{
    document.getElementById('counter').innerHTML=k+=1
}