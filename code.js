var newcontain1 = document.getElementById('newcontain1');
var newcontain2 = document.getElementById('newcontain2');
var newcontain3 = document.getElementById('newcontain3');
function Onclick1(){     
    newcontain1.style.display = 'flex';   
}

function Onclick2(){     
    newcontain2.style.display = 'flex';      
}

function Onclick3(){   
    newcontain3.style.display = 'flex';       
}




newcontain1.addEventListener('click', (e) => {
   if (e.target === newcontain1) {  
    newcontain1.style.display = 'none';
    }
});

newcontain2.addEventListener('click', (e) => {
    if (e.target === newcontain2) {  
        newcontain2.style.display = 'none';
     }
 });

 newcontain3.addEventListener('click', (e) => {
    if (e.target === newcontain3) {  
        newcontain3.style.display = 'none';
     }
 });