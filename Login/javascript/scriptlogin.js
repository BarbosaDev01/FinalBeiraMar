function IrMenu(){
   
    window.location.href = "ControleEstoque/controleEstoque.html"; 
}

function IrNew(){
   
    window.location.href = "Login/New.html"; 
}

function IrLogin(){

    window.location.href = "index.html"; 
}




document.addEventListener('DOMContentLoaded', function(){
    const forms = document.getElementById('Forms');
    const button = document.getElementById('loginbtn');
    const user = document.getElementById('email');
    const senha = document.getElementById('senha');
    const erro = document.getElementById('error');
    
    button.addEventListener('click', function(event){
        event.preventDefault(); 
        
        const userValue = user.value.trim();
        const senhaValue = senha.value.trim();

        if (userValue === '' || senhaValue === '') {
            erro.textContent = 'Por favor, preencha o e-mail e a senha.';
        } else {
            erro.textContent = ''; 
            IrMenu(); 
        }
    });
});



document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('newbtn');
    const user = document.getElementById('email2');
    const name = document.getElementById('nome2');
    const cll = document.getElementById('telefone');
    const cpf = document.getElementById('cpf');
    const senha = document.getElementById('senha2');
    
    button.addEventListener('click', function(event){
        event.preventDefault(); 
        
        const userValue = user.value.trim();
        const senhaValue = senha.value.trim();
        const nameValue = name.value.trim();
        const cllValue = cll.value.trim();
        const cpfValue = cpf.value.trim();

        if (userValue === '' || senhaValue === '' || cllValue === '' || nameValue === '' || cpfValue === '') {
            alert('Preencha os campos obrigatórios!');
        } else {
            alert('Conta criada com sucesso!'); 
            IrLogin(); 
        }
    });
});
