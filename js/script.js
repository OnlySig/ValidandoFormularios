import ehUmCpf from "./validaCpf.js";
import ehMaiorDeIdade from "./validaIdade.js"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", event => event.preventDefault())
})

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
    if(campo.name == "aniversario" && campo.value != '') {
        ehMaiorDeIdade(campo)
    }

    console.log(campo.validity)
}