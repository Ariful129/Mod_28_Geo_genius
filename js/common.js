function cal(x1,x2,x3)
{
     const p1=x1*x2*x3;
     if(isNaN(p1))
     {
        alert('Invalid Input')
     }
     else
     {
        return p1; 
     }
     
}
function set(x4,x5)
{
    const p2=document.getElementById(x5);
    if(!isNaN(x4))
     {
        p2.innerText=x4;
     }
    
}

document.getElementById('resetButton').addEventListener('click',function(){
    const p10=document.getElementById('Area-box');
    p10.innerText='00'
})
