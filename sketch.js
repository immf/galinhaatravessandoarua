var pessoa;
var obstáculo1;
var obstáculo2;
var obstáculo3;
var obstáculo4;
var parededireita;
var paredeesquerda;
var paredecima;
var paredebaixo;
var paredecimaesquerda;
var paredecimadireita;
var paredebaixoesquerda;
var paredebaixodireita;
var numerodeerros = 0;
var chikenlittle;
var carro1;
var carro2;
function preload(){
chikenlittle = loadImage('assets/xikenlirou.png');  
carro1 = loadImage('assets/carrrrinhoooooo.png');
carro2 = loadImage('assets/carrrrrrrrao.png');
}
function setup(){
createCanvas(400,400);
pessoa = new Sprite(200, 370, 20, 20);//eixo x, eixo y, largura, altura.
pessoa.color = "Blue";
pessoa.img = chikenlittle;
pessoa.scale = 0.25;
obstáculo1 = new Sprite(200, 290, 20, 20);
obstáculo1.color = "Red";
obstáculo1.vel.x=-3;
obstáculo1.img = carro1;
obstáculo1.scale = 0.5;
obstáculo2 = new Sprite(200, 240, 20, 20);
obstáculo2.color = "Red";
obstáculo2.vel.x=3;
obstáculo2.img = carro2;
obstáculo2.scale = 0.24;
obstáculo3 = new Sprite(200, 190, 20, 20);
obstáculo3.color = "Red";
obstáculo3.vel.x=-3;
obstáculo3.img = carro1;
obstáculo3.scale = 0.5;
obstáculo4 = new Sprite(200, 140, 20, 20);
obstáculo4.color = "Red";
obstáculo4.vel.x=3;
obstáculo4.img = carro2;
obstáculo4.scale = 0.24;
parededireita = new Sprite(325, 215, 10, 250);
parededireita.color = "Grey";
paredeesquerda = new Sprite(75, 215, 10, 250);
paredeesquerda.color = "Grey";
paredebaixo = new Sprite(200, 390, 75, 7);
paredebaixo.color = "Grey";
paredebaixodireita = new Sprite(243, 364, 10, 60);
paredebaixodireita.color = "Grey";
paredebaixoesquerda = new Sprite(157, 364, 10, 60);   
paredebaixoesquerda.color = "Grey";
paredecima = new Sprite(200, 10, 75, 7); 
paredecima.color = "Grey";
paredecimaesquerda = new Sprite(157, 36, 10, 60); 
paredecimaesquerda.color = "Grey";
paredecimadireita = new Sprite(243, 36, 10, 60);
paredecimadireita.color = "Grey";
paredebaixo.collider = "k";
paredebaixodireita.collider = "k";
paredebaixoesquerda.collider = "k";
paredecimaesquerda.collider = "k";
paredecima.collider = "s";
paredecimadireita.collider = "k";
paredeesquerda.collider = "s";
parededireita.collider = "s";
pessoa.collider = "k";
obstáculo1.collider = "d";
obstáculo2.collider = "d";
obstáculo3.collider = "d";
obstáculo4.collider = "d";
obstáculo1.rotationLock = true;
obstáculo2.rotationLock = true;
obstáculo3.rotationLock = true;
obstáculo4.rotationLock = true;
obstáculo1.addCollider(0,0,35,35);
obstáculo2.addCollider(0,0,35,35);
obstáculo3.addCollider(0,0,35,35);
obstáculo4.addCollider(0,0,35,35);
}



function draw(){  
background("#1ef79c");
textSize(18);
fill("black");
text("Erros:"+numerodeerros, 0, 20);
if(obstáculo1.colliding(paredeesquerda)){
obstáculo1.vel.x=3;
}
if(obstáculo1.colliding(parededireita)){
obstáculo1.vel.x=-3;
}
if(obstáculo2.colliding(parededireita)){
obstáculo2.vel.x=-3;
}
if(obstáculo2.colliding(paredeesquerda)){
obstáculo2.vel.x=3;
}
if(obstáculo3.colliding(paredeesquerda)){
obstáculo3.vel.x=3;
}
if(obstáculo3.colliding(parededireita)){
obstáculo3.vel.x=-3;
}
if(obstáculo4.colliding(parededireita)){
obstáculo4.vel.x=-3;
}
if(obstáculo4.colliding(paredeesquerda)){
obstáculo4.vel.x=3;
}
if(kb.presses("up") && pessoa.y>30){
pessoa.y = pessoa.y-19;    
}
if(pessoa.colliding(obstáculo1)){
pessoa.y = 370;
numerodeerros = numerodeerros+1; 
    
}
if(pessoa.colliding(obstáculo2)){
pessoa.y = 370;
numerodeerros = numerodeerros+1;     
}
if(pessoa.colliding(obstáculo3)){
pessoa.y = 370;
numerodeerros = numerodeerros+1;     
}
if(pessoa.colliding(obstáculo4)){
pessoa.y = 370;
numerodeerros = numerodeerros+1;     
}
}
