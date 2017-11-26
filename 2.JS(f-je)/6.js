function ObrnutNiz(niz) {


 var a=[];
  for(var i=niz.length-1; i>=0; i--){
      a.push(niz[i]);
}
   console.log(a);

}



var niz=[5, -2, -4, 2];
ObrnutNiz(niz);