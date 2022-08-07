function Accumulator(startingValue){
    this.currenctValue=startingValue;

    this.read = function(){
        let newInput = +prompt('Enter Number')
        this.currenctValue += newInput;
    }
    this.show = function(){
        alert(this.currenctValue)
    }
}

    

    const acc1 = new Accumulator(5);
    const acc2 = new Accumulator(15);
    const acc3 = new Accumulator(54);
    acc1.read()
    acc1.show()
    console.log(acc1)
    console.log(acc2)
    console.log(acc3)
