
const alemania={
    partidosganados:0,
    partidosperdidos:0,
    partidosjugados:0,
    puntos:[],
}
const brasil={
    puntos:[],
    partidosganados:0,
    partidosperdidos:0,
    partidosjugados:0,
}
const francia={
    puntos:[],
    partidosganados:0,
    partidosperdidos:0,
    partidosjugados:0,
}
const españa={
    puntos:[],
    partidosganados:0,
    partidosperdidos:0,
    partidosjugados:0,
}

const score=(equipoA,golesA,equipoB,golesB) => {
    equipoA.partidosjugados +=1; equipoB.partidosjugados +=1
    if(golesA===golesB){equipoA.puntos.push(1);
        equipoB.puntos.push(1);}
    if(golesA>golesB){ 
        //puntos
        equipoA.puntos.push(+3);equipoB.puntos.push(0)
        //partidos ganados
        equipoA.partidosganados+=1;equipoB.partidosperdidos+=1
    }
    if(golesA<golesB){
        //puntos
        equipoA.puntos.push(0);equipoB.puntos.push(+3);
        //partidos ganados
        equipoA.partidosperdidos+=1;equipoB.partidosganados+=1
    }
}
score(alemania, 4, brasil, 2)
console.table(alemania);
console.table(brasil);

score(alemania,3,francia,1)
console.table(alemania);
console.table(francia);

score(alemania,3,españa,1)
console.table(alemania);
console.table(españa);