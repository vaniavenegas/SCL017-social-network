var db = firebase.firestore();

export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    
    const fondoLogoWall = document.createElement("div");
    fondoLogoWall.className = "fondoLogoWall";
    mainWall.appendChild(fondoLogoWall);
    
    const imgLogoWall = document.createElement("img");
    imgLogoWall.src ='img/brocoli.png';
    imgLogoWall.className = "imgLogoWall";
    fondoLogoWall.appendChild(imgLogoWall);

    const tituloMuro = document.createElement("div");
    tituloMuro.className = "tituloMuro";
    const textoTituloMuro = document.createTextNode("Muro");
    tituloMuro.appendChild(textoTituloMuro);
    fondoLogoWall.appendChild(tituloMuro);
    
    const fondoMuro = document.createElement("div");
    fondoMuro.className = "fondoMuro";
    mainWall.appendChild(fondoMuro);
 /*frame verde oscuro*/
    const frameFondoPostear = document.createElement("div");
    frameFondoPostear.className = "frameFondoPostear";
    fondoMuro.appendChild(frameFondoPostear);
/* frame blanco*/
    const postear = document.createElement("div");
    postear.className = "postear";
    frameFondoPostear.appendChild(postear);

    const postearImg = document.createElement("img");
    postearImg.src ='img/postearImg.png';
    postearImg.className = "postearImg";
    postear.appendChild(postearImg);

    const inputPostear = document.createElement("input");
    inputPostear.className = "inputPostear";
    inputPostear.placeholder = "¿Qué quieres escribir?";
    postear.appendChild(inputPostear)
    
    const divBtnPostear = document.createElement("div");
    divBtnPostear.className = "divBtnPostear";
    frameFondoPostear.appendChild(divBtnPostear);

    const btnPostear = document.createElement("button");
    btnPostear.className = "btnPostear"
    btnPostear.innerText = "Postear"
    divBtnPostear.appendChild(btnPostear);

    const divBtnNavengacion = document.createElement("div");
    divBtnNavengacion.className = "divBtnNavengacion";
    mainWall.appendChild(divBtnNavengacion);

    const btnUsuario = document.createElement("button");
    btnUsuario.className = "imgUsuario";
    divBtnNavengacion.appendChild(btnUsuario);
    
    const btnCerrar = document.createElement("button");
    btnCerrar.className = "imgCerrar";
    divBtnNavengacion.appendChild(btnCerrar);



    btnUsuario.addEventListener("click", () => {
        // Obtengo todos los campos que puso la usuaria
        window.location.href = '#/profile';

    });
    btnCerrar.addEventListener("click", () => {
        firebase.auth().signOut()
        .then(() => {
            window.location.href = '#/login'
        });
    });

    const savePost = (post) =>{

        db.collection('post').doc().set({
            post,
          })

    }




    btnPostear.addEventListener("click",  async(e) =>{
        e.preventDefault();
        const post = mainWall.querySelector('.inputPostear');

        await savePost(post.value);

        btnPostear.reset();

    })


    return mainWall;
}