function isEmptyObject(obj){
    //เข้า for loop เมื่อ obj มี 1 key ขึ้นไป
    for(let key in obj){
        return false;
    }
    return true;
}

const user_1 = {name : "cc12"}
const user_2 = {}

console.log(isEmptyObject(user_1))
console.log(isEmptyObject(user_2))




  