document.getElementById('para-btn').addEventListener('click',function(){
    const a1=document.getElementById('parain1');
    const a2=parseFloat(a1.value);
    const a3=document.getElementById('parain2');
    const a4=parseFloat(a3.value);
    
    const a5=cal(1,a2,a4);
    set(a5,'Area-box');

    a1.value=''
    a3.value=''
})