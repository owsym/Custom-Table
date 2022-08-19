function table(){
   let start=document.getElementById('start').value; 
   let end=document.getElementById('end').value; 
   let num=document.getElementById('table').value; 
   document.getElementById('usama').innerHTML-"";

   for (let index = start; index <= end; index++) {
    let result="<h3>"+ num + " x "+index+" = "+num*index +"</h3>";
    document.getElementById('usama').innerHTML+=result;
   }
}
