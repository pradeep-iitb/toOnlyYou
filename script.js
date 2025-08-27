
function show(i) {
    let yes = document.querySelector("#yes");
    let newton = 90+90*0.2*i ;
    let einstein = 200+200*0.2*i ;
    if (yes) yes.style.height = newton + "px";
    if (yes) yes.style.width = einstein + "px";
  for (let count = 1; count <= 15; count++) {
    let el = document.querySelector("#no" + count);
    if (el) el.style.display = "none";
  }
    if (yes) yes.style.display = "flex";
  if (i === 14) {
    let no15 = document.querySelector("#no15");
    if (no15) no15.style.display = "flex";
    document.querySelector("#bear1").style.display = "none" ;
    document.querySelector("#bear2").style.display = "flex" ;
    let yes = document.querySelector("#yes");
    if (yes) yes.style.display = "none";

    return;
  }

  let next = document.querySelector("#no" + (i + 1));
  if (next) next.style.display = "flex";
}

  // let i = 1 ;
  // while (i<15) {
  // document.querySelector("#no"+i).addEventListener("click",() => {show(i);}) ;
  // i++ ; }

  no1.addEventListener("click",() => {show(1);})
  no2.addEventListener("click",() => {show(2);})
  no3.addEventListener("click",() => {show(3);})
  no4.addEventListener("click",() => {show(4);})
  no5.addEventListener("click",() => {show(5);})
  no6.addEventListener("click",() => {show(6);})
  no7.addEventListener("click",() => {show(7);})
  no8.addEventListener("click",() => {show(8);})
  no9.addEventListener("click",() => {show(9);})
  no10.addEventListener("click",() => {show(10);})
  no11.addEventListener("click",() => {show(11);})
  no12.addEventListener("click",() => {show(12);})
  no13.addEventListener("click",() => {show(13);})
  no14.addEventListener("click",() => {show(14);})

  document.querySelector("#yes").addEventListener("click",() => {
    document.querySelector("#end").style.display = "flex";
    document.querySelector("#yes").style.display = "none";
    for (let count = 1; count <= 15; count++) {
    let el = document.querySelector("#no" + count);
    if (el) el.style.display = "none";
    }
}
  )

document.querySelector("#no15").addEventListener("click",() => {
  location.reload()
}
)

