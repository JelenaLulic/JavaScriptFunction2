function broj(niz) {
  var sumaNeg=0;
  var sumaPoz=0;

    for(var i=0; i<niz.length; i++){
    	if (niz[i]<0){
    		sumaNeg=sumaNeg + niz[i];
    	}
    	else {
    		sumaPoz=sumaPoz + niz[i];
    	}
    }
   console.log(sumaPoz * sumaNeg);
}
var niz=[5, -2, -4, 2];
broj(niz);
