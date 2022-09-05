const api={
    // url api here
    // api key here
}

const ciudad = document.getElementById('ciudad');
const fecha = document.getElementById('fecha');
const clima = document.getElementById('clima');
const temperatura = document.getElementById('temperatura');
const rango = document.getElementById('rango');

const contenedor = document.getElementById('contenedor-datos');




async function buscar(query){
    try{
        
        const respuesta = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const dato = await respuesta.json();
        contenedor.style.display = 'grid';
        ciudad.innerHTML = `${dato.name}, ${dato.sys.country}`;
        fecha.innerHTML =(new Date()).toLocaleDateString();
        clima.innerHTML =  dato.weather[0].description;
        temperatura.innerHTML ='temp: '+ centigrados(dato.main.temp) +'°c';
        rango.innerHTML = `${'min: '+ centigrados(dato.main.temp_min)}°c / ${'max: '+centigrados(dato.main.temp_max)}°c`;
        console.log(dato);

    }catch(err){
        console.log('error');
        alert('hubo un error');
    }
}


function centigrados(kelvin){
    return Math.round(kelvin - 273.15);
}

function onsubmit(evento){
    evento.preventDefault();
    buscar(barra_busqueda.value); 
}

const form = document.getElementById('form-barra');
const barra_busqueda = document.getElementById('barra-busqueda');
form.addEventListener('submit', onsubmit,true);