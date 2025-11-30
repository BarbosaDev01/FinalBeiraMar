function IrMenu(){
    // Esta linha está correta para navegação
    window.location.href = "../ControleEstoque/controleEstoque.html"; 
}
function IrNew(){
    // Esta linha está correta para navegação
    window.location.href = "New.html"; 
}
function IrLogin(){
    // Esta linha está correta para navegação
    window.location.href = "login.html"; 
}

var btn2 = document.getElementById('newbtn')

document.addEventListener('DOMContentLoaded', function(){
    const forms = document.getElementById('Forms') // A tag <form> ou <div> pai
    const button = document.getElementById('loginbtn')
    const user = document.getElementById('email')
    const senha = document.getElementById('senha')
    const erro = document.getElementById('error')
    
    button.addEventListener('click', function(event){
        
        // 🚨 PASSO CRÍTICO: Impede a submissão padrão do formulário.
        event.preventDefault(); 
        
        const userValue = user.value.trim();
        const senhaValue = senha.value.trim();

        // Lógica de validação: verifica se os campos estão preenchidos
        if (userValue === '' || senhaValue === '') {
            erro.textContent = 'Por favor, preencha o e-mail e a senha.'
        } else {
            // Se a validação for bem-sucedida, limpa o erro e chama a função de navegação.
            erro.textContent = ''; 
            IrMenu(); 
        }
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('newbtn')
    const user = document.getElementById('email2')
    const name = document.getElementById('nome2')
    const cll = document.getElementById('telefone')
    const cpf = document.getElementById('cpf')
    const senha = document.getElementById('senha2')
    const erro = document.getElementById('error2')
    
    button.addEventListener('click', function(event){
        
        // 🚨 PASSO CRÍTICO: Impede a submissão padrão do formulário.
        event.preventDefault(); 
        
        const userValue = user.value.trim();
        const senhaValue = senha.value.trim();
        const nameValue = name.value.trim();
        const cllValue = cll.value.trim();
        const cpfValue = cpf.value.trim();


        // Lógica de validação: verifica se os campos estão preenchidos
        if (userValue === '' || senhaValue === '' || cllValue === '' || nameValue === '' || cpfValue === '') {
            alert('Preencha os campos obrigatórios!')
        } else {
            // Se a validação for bem-sucedida, limpa o erro e chama a função de navegação.
            alert('Conta criada com sucesso!'); 
            IrLogin(); 
        }
    });
});