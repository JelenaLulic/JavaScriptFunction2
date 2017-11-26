function LastThree (niz) {

 var SumLastThree = 0;
 

 for(i=niz.length-3; i<=niz.length-1;i++){
 	SumLastThree=SumLastThree+niz[i];
 	
 }

console.log (SumLastThree);

}
var niz = [10, 2, 4, 2];
LastThree(niz);
