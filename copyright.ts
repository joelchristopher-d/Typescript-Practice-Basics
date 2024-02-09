//  const year = document.getElementById("myid")
//  const thisyear = new Date().getFullYear().toString

//  year.setAttribute("year",thisyear)
//  year.textContent=thisyear

//  const year: HTMLElement|null = document.getElementById("myid")
//  const thisyear:string = new Date().getFullYear().toString()
// if (year){
//     year.setAttribute("year",thisyear)
//     year.textContent=thisyear
   
// }
 
const year = document.getElementById("myid") as HTMLSpanElement
const thisyear:string = new Date().getFullYear().toString()
year.setAttribute("year",thisyear)
year.textContent=thisyear
  
