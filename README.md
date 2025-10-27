
[curvatura.css](https://github.com/user-attachments/files/23175714/curvatura.css)<img width="1110" height="768" alt="fundosite" src="https://github.com/user-attachments/assets/dc1db750-82a1-43dd-ac1e-9bd98f032a5d" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Capilares: Conheça sobre a sua curvatura capilar. </title>
    <link rel="stylesheet" href="curvatura.css">
</head>
<body>
    <header>
        <div class="logo">
            <img id="img" src="logo site.png" alt="">
        </div>
        <hr id="hr1">
    </header>
    <div class="saudação">
        <h1 class="text">
            Seja bem vindo(a)!
        </h1>
    </div> 
    <div class="hss">
        <h2 class="text2">
           Capilares: Seu cabelo é único e possui uma curvatura especial!
           <br>
           Você já parou para entender o universo dos fios e descobrir qual é exatamente a sua?
        </h2>
        <h3 class="text3">
          Conhecer a sua curvatura capilar (liso, ondulado, cacheado, crespo e suas subcategorias, como 2A, 3C, 4B) é o primeiro passo para cuidar dele da maneira certa,
            usando os produtos e técnicas ideais que realçam sua forma e garantem mais saúde, brilho e definição. 
            <br>
            Venha mergulhar neste conhecimento! 
            <br>
            Identifique seu tipo de fio e descubra o segredo para ter um cabelo mais bonito, forte e cheio de personalidade.
            <br>
            Afinal, cada curvatura merece ser celebrada!
        </h3>
     
        <div class="link">
            <a id="clic" href="introdução.html"> Clique aqui </a>
            <!-- <a href="">Curvaturas tipo "A"</a>
            <a href="">Curvaturas tipo "B"</a>
            <a href="">Curvaturas tipo "C"</a> -->
        </div>
    </div>
    <hr id="hr2">
    <div class="infor">
        <ul>
            <a href="Capilares.html"> <li>Inicio</li> </a>
            <a href=""><li>Sobre</li></a>
            <a href=""><li>Fale conosco</li></a>
            <a href=""><li>Redes sociais</li></a>
            <a href=""><li>Avalie-nos</li></a>
        </ul>

    </div>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* tira o sublinhado do link */
    text-decoration:none;
    /* tirar os pontinhos da lista */
    list-style:none; 
}
body {
    background-image:linear-gradient(rgba(146, 86, 131, 0.5), rgba(240, 175, 226, 0.5)), 
    url('fundosite.png');
    background-size: cover; /* Faz a imagem cobrir todo o corpo */
    background-position: center center; /* Centraliza a imagem */
    background-attachment: fixed; /* Opcional: mantém a imagem fixa ao rolar */
    color: white; /* Para garantir que o texto sobre o fundo escuro seja legível */
}
.logo{
    background-color: rgb(206, 140, 151);
    display: flex;
    justify-content: center;
    align-items: center;
}
#img {
    width: 250px;
    margin-bottom: -40px;
    margin-top: -20px;
}
#hr1{
    border: 1px solid rgb(255, 232, 232);
    margin-top: 0px;
}

.saudação{
    display: flex;
    justify-content: center;
    align-items: center;


}
.text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100px;
    text-align: center;
    /* altura */
    /* height: 10vh;  */
    margin-top: 80px;



}
.hss{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center
}
.text2{
    font-size: 23px;
    margin-top: 30px;

}
.text3{
    /* tamanho da fonte */
    font-size: 20px; 
    /* margem do topo */
    margin-top: 50px; 
    margin-inline: 10px;
}
.link{
    display: flex;
    justify-content: center;
    /* distância entre os babados */
    /* gap: 50px; */
    margin-top: 70px;
    font-size: 30px;

}
#clic:hover{
    font-size:35px;
}
#clic:hover {
    color:  rgb(255, 194, 194);
}
#clic{
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 3px solid white;
    padding: 20px;
    border-radius: 10px;
}
#hr2{
    border: 1px solid rgb(255, 232, 232);
    margin-bottom: -50px;
    margin-top: 50px;

}
.infor{
    background-color: rgb(206, 140, 151);
    margin-top: 50px;
}
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 50px;
}
li:hover{
    font-size:20px;
}
li:hover {
    color:  rgb(255, 194, 194);
}
li{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
    color: white;
}

