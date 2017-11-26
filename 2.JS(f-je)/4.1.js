

 function LastThree (niz) {

    var SumLastThree = 0;

  SumLastThree = SumLastThree+niz[niz.length-1] +
 
  niz[niz.length-2] + niz[niz.length-3];

  console.log (SumLastThree);

}

var niz1 = [10, 2, 4, 2];
LastThree(niz1);