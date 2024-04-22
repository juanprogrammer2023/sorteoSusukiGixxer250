const inputBoleta=document.getElementById('boleta')
const btonInstagram=document.getElementsByClassName('button btn-2')[0]
const btonGithub=document.getElementsByClassName('button btn-3')[0]
let params = new URLSearchParams(window.location.search);
const boleta=params.get('boleta')
btonInstagram.addEventListener('click',()=>{
  window.open('https://www.instagram.com/rifagixxer250/')
})
btonGithub.addEventListener('click',()=>{
  window.open('https://github.com/juanprogrammer2023/sorteoSusukiGixxer250')
})

inputBoleta.value=Number(boleta)

const objeto=document.querySelectorAll(".dato")
const btonQuiero=document.getElementById("btonQuiero")

btonQuiero.addEventListener('click',crearParticipante)

class Participante{
    constructor(objeto){
      this.NumeroBoleta=objeto[0].value
      this.Email=objeto[1].value
      this.Nombres=objeto[2].value
      this.Apellidos=objeto[3].value
      this.Celular=objeto[4].value
    }
}
let mensaje;

function crearParticipante(){
const participante=new Participante(objeto)
let cadenaParti=JSON.stringify(participante)
let nuevaCadena = cadenaParti.replace(/[{}"]/g, '');
let partiCodificado = encodeURIComponent(nuevaCadena);
let mensaje = `https://api.whatsapp.com/send?phone=573228398796&text=Hola,me interesa la Boleta%20${nuevaCadena}`;
window.location.href=mensaje
}


