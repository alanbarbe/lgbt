function calcularRespuesta(){
    let count = 0; //contador de respuestas correctas

    if(document.getElementById("r2").checked){count++;}     //P1 
    if(document.getElementById("r6").checked){count ++}     //P2

    if(document.getElementById("r7").checked &&
       document.getElementById("r8").checked &&
       document.getElementById("r9").checked &&
       document.getElementById("r10").checked &&
       document.getElementById("r11").checked &&
       document.getElementById("r12").checked &&  
       document.getElementById("r13").checked &&
       document.getElementById("r14").checked &&
       document.getElementById("r15").checked &&
       document.getElementById("r16").checked 
    ){count ++}//P3     
    
    if(document.getElementById("r17").checked &&
       document.getElementById("r18").checked &&
       document.getElementById("r19").checked &&
       document.getElementById("r20").checked &&
       document.getElementById("r21").checked &&
       document.getElementById("r22").checked 
    ){count ++}    //P4

    if(document.getElementById("r24").checked &&
       document.getElementById("r26").checked &&
       document.getElementById("r27").checked 
    ){count ++}    //P5

    if(document.getElementById("r28").checked &&
       document.getElementById("r29").checked &&
       document.getElementById("r30").checked 
    ){count ++}    //P6
               
    if(document.getElementById("r32").checked &&
       document.getElementById("r34").checked 

    ){count ++}    //P7

    if(document.getElementById("r35").checked &&
       document.getElementById("r36").checked &&
       document.getElementById("r37").checked &&
       document.getElementById("r38").checked 
    
    ){count ++}    //P8
    

    if(count == 8){
       cartel="Correcto"
    }
    else if(count == 4){
        cartel="50% correcto"
    }
    
    else if(count == 0){
        cartel="Incorrecto"
    }

    alert (count + " respuestas correctas.")
    
}