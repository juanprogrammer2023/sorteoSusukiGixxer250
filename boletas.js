let ventas=[]
let colores = ['#F2CB57', '#FF0000', '#0000FF'];
let currentIndex = 0;
let btonCambio=document.getElementsByClassName('banner')[0].childNodes[1]

function cambiarColor() {
    // Seleccionar el botón que deseas cambiar de color
   
    btonCambio.style.backgroundColor = colores[currentIndex];
    if(currentIndex === 1){
        btonCambio.innerText='Reservado'
    }
    else if(currentIndex ===2){
        btonCambio.innerText='Proceso de venta'
    }
    else{
        btonCambio.innerText='Disponible'
    }
    
    currentIndex++;

  
    if (currentIndex >= colores.length) {
        currentIndex = 0;
    }
}

// Llamar a la función cambiarColor inicialmente para establecer el primer color
cambiarColor();

// Configurar setInterval para llamar a cambiarColor cada 5 segundos (5000 milisegundos)
setInterval(cambiarColor, 2000);

function llenarNumeros(x){
    let array=[]
    for(let i=1;i<=x;i++){
            array.push(i)
        }
        return array
    }
let array=llenarNumeros(10000)

const boletas = document.getElementById('array');


array.forEach((index) => {
    let boleta = document.createElement('div');
    boleta.className = 'boleta';
    boleta.innerText=index
    boletas.appendChild(boleta);

    boleta.addEventListener('click',()=>{
        numeroBoleta=boleta.innerText
        
        let url='https://juanprogrammer2023.github.io/sorteoSuzukiGixxer250/datos.html?boleta='+encodeURIComponent(numeroBoleta)
        window.location.href=url
        boleta.style.backgroundColor='#0000FF'
    })
});



