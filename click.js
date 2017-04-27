//declare samecolor() here
function samecolor(){
    const doc = document;
  let color = "#b1ffa3"


  let divs = doc.querySelectorAll("#samecolor div");

  for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor = "#11D7C8";
    divs[i].style.opacity = 0.50+10*i;
  }



}
//declare diffcolor() here
function diffcolor(){
const doc = document;
  let reed = "#B30EB8";
  let deed = "#a6fcfb";


  let divs = doc.querySelectorAll("#diffcolor div");

  for(let i=0;i<divs.length;i=i+2){
    divs[i].style.backgroundColor = reed;

  }
  for(let i=1; i<diffdivs.length;i=i+2){
  diffdivs[i].style.backgroundColor = deed;
  }

}
