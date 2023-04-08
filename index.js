// Your code here
class Polygon{
     
    constructor(side){
        this.side = side

    }

    get countSides(){
       return this.side.length
    }

    get perimeter(){
        let sum = 0
        for(let i =0 ; i<this.side.length; i++){
            
             sum +=this.side[i]
        }
        return sum
    }
}

class Triangle extends Polygon{

   get isValid(){
    return this.countSides === 3 && 
    this.side[0]<this.side[1] + this.side[2] &&
    this.side[2]<this.side[1] + this.side[0] &&
    this.side[1]<this.side[0] + this.side[2]
 
}
}

class Square extends Polygon {

    get isValid (){

        return this.countSides === 4 
        && this.side[0]===this.side[1] &&
         this.side[2]===this.side[3]&&
         this.side[3]===this.side[0]
    }
    get area(){
        return this.side[0] * this.side[0]
    }

}