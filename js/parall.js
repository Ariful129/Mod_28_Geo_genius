document.getElementById('pi-btn').addEventListener('click',function(){
    const a1=document.getElementById('piin1');
    const a2=parseFloat(a1.value);
    const a3=document.getElementById('piin2');
    const a4=parseFloat(a3.value);
    
    const a5=cal(3.1416,a2,a4);
    set(a5,'Area-box');

    a1.value=''
    a3.value=''
})