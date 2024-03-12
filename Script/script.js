//Função para rolar a página para div específica
function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var offset = headerHeight + 10;

        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

//Função para abrir o formulário
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Função para fechar o formulário
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//Máscara para celular
$(document).ready(function () {
    $("#celular").mask("(00) 0000-00000");
})

// Validação do número de celular
function validaCelular() {
    var celular = document.getElementById("celular").value;
    var celularNumerico = celular.replace(/\D/g, '');
    if (celularNumerico.length !== 11) {
        alert("O número de celular não está em um formato válido. Por favor, insira um número de celular válido (XX)XXXX-XXXXX.");
        return false;
    }
    return true;
}

// Máscara para aceitar somente letras no campo de nome
$(document).ready(function () {
    $("#nome").on("input", function () {
        var regex = /[^a-zA-Z]/g;
        if (this.value.match(regex)) {
            this.value = this.value.replace(regex, '');
        }
    });
});

//Valida se é um e-mail válido
function validaEmail() {
    var email = document.getElementById("email").value;
    var exclude = /[^@\w.-]/;
    var check = /\w+@\w+\.\w+/;
    var checkend = /\.[a-zA-Z]{2,3}$/;

    if (exclude.test(email) || !check.test(email) || !checkend.test(email)) {
        alert("Endereço de e-mail inválido.");
        return false;
    } else {
        return true;
    }
}

// Máscara para aceitar somente letras no campo de cidade
$(document).ready(function () {
    $("#cidade").on("input", function () {
        var regex = /[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g; 
        if (this.value.match(regex)) {
            this.value = this.value.replace(regex, '');
        }
    });
});

//Valida se os campos estão preenchidos
function validaInputs() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var estado = document.getElementById("estado");
    var cidade = document.getElementById("cidade");

    if (nome.value == "") {
        alert("Você precisa inserir um nome.");
        nome.focus();
        return false;
    }
    if (email.value == "") {
        alert("Você precisa inserir um e-mail.");
        email.focus();
        return false;
    }
    if (!validaEmail()) {
        return false;
    }
    if (celular.value == "") {
        alert("Você precisa inserir um número de celular.");
        celular.focus();
        return false;
    }
    if (!validaCelular()) {
        return false;
    }

    if(estado.value == ""){
        alert("Você precisa inserir um estado.");
        estado.focus();
        return false;
    }

    if(cidade.value == ""){
        alert("Você precisa inserir uma cidade.");
        estado.focus();
        return false;
    }

    return true;
}

//Chama a função de validar inputs para salvar
$("#btnEnviar").on("click", function () {
    if (!validaInputs()) {
        return false;
    }
    alert("Obrigado por nos enviar seus dados! Em breve entraremos em contato com você.");
    closeModal();
});

//Limpa todos os campos
$("#btnLimpar").on("click", function () {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cidade").value = "";
});


