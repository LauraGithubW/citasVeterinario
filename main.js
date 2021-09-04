

//Creamos una variable que guarde los datos del paciente en el localstorage y haga las convrsiones necesarias para que los datos sean compatibles
   let citas= JSON.parse(localStorage.getItem("citas"));
   (citas)?localStorage.setItem("citas",JSON.stringify(citas)):localStorage.setItem("citas",JSON.stringify([]));

//Creamos una función para que el usuario pueda pedir cita y que una vez creada pueda imprimirla y la vea plasmada en la vista
const agregarCita=()=>{
    //Seleccionamos los valores de los campos del formulario que hemos creado para que los guarde en estas variables-
    //Creamos el id de forma aleatoria
    let id= uuid.v1();
    let nombreMascota=document.querySelector("#nombre-mascota").value;
    let nombreDueño=document.querySelector("#nombre-dueño").value;
    
    let hora=document.querySelector("#hora").value;
    let sintomas=document.querySelector("#textareas").value;
    let mostrarCita=document.querySelector("#mostrarCitas");
    let formulario=document.querySelector("#form");

    //Hacemos validaciones de los campos
  
    if(nombreMascota==="" || nombreDueño==="" || hora==""|| sintomas===""){
        
        alert("Faltan campos por rellenar");

      



      
      
    }else {

       //Si se cumplen las condiciones de validación se creará la cita y se imprimirá y mostrará en el recuadro de la derecha
       
        let ficha=`<div id="ficha"> <h2>Cita creada</<h2>
        <p class="parrafos-ficha">Nombre mascota: ${nombreMascota}.</p>
        <p class="parrafos-ficha">Nombre dueño: ${nombreDueño}.</p>
        <p class="parrafos-ficha">Fecha y hora de la cita: ${hora}.</p>
        <p class="parrafos-ficha">Síntomas: ${sintomas}.</p>
        <button id="boton-cerrar" onclick="cerrar()">Cerrar</button>
        <button id="boton-imprimir" onclick="imprimir()">Print</button>
        </div>
        `;
        console.log(ficha);
        mostrarCita.style.display="block";
        mostrarCita.innerHTML=ficha;
        //Guardar citas en el localstorage
     
        let guardarCita={
            id,
            nombreMascota,
            nombreDueño,
            hora,
            sintomas
        }
        citas.push(guardarCita);
        localStorage.setItem("citas", JSON.stringify(citas));
     //Función que limpia el formulario
        formulario.reset() ;
        
    
    }
   
  

  
    




};

//Función para que al pulsar el botón cerrar cuando se ha creado la cita cierre la ventana que hemos creado con los datos

const cerrar=()=>{

    let mostrarCita=document.querySelector("#mostrarCitas");
    mostrarCita.style.display="none";

}

//Función que manda a la impresora los datos de la cita para recordarlos 
const imprimir=()=>{
    let mostrarCita=document.querySelector("#mostrarCitas");
    print(mostrarCita);

}



