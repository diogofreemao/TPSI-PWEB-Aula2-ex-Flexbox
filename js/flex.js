
function flex(valor) {
	document.getElementById('container').style.flexDirection=valor;
}
function wrap(valor) {
	document.getElementById('container').style.flexWrap=valor;
}
function justify(valor) {
	document.getElementById('container').style.flexJustify=valor;
}
function align(valor) {
	document.getElementById('container').style.alignItems=valor;
}
function slide(){
	document.getElementById('publicidade').src="../img/8af.jpg";
	document.getElementById('descricao').innerHTML="lol";
	setTimeout("slide2()", 2000)
}
function slide2(){
	document.getElementById('publicidade').src="../img/8af2.jpg";
	document.getElementById('descricao').innerHTML="lol2";
	setTimeout("slide3()", 2000)
}
function slide3(){
	document.getElementById('publicidade').src="../img/8af3.jpg";
	document.getElementById('descricao').innerHTML="lol3";
	setTimeout("slide4()", 2000)
}
function slide4(){
	document.getElementById('publicidade').src="../img/8af4.jpg";
	document.getElementById('descricao').innerHTML="lol4";
	setTimeout("slide()", 2000)
}