const multiUnlimitParams = (...numbers) => {
    return numbers.reduce((acc,item) => acc*item,1)
}


console.log(multiUnlimitParams(2,4,6))