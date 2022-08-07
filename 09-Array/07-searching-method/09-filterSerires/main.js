// const array = [9, 17, 23, 5];

// const result = array.filter(function(item,index,arr){
//     if(item>10){
//         return true
//     }
//     else{
//         return false;
//     }
// })

// console.log(result)

// const array = [1, 2, 3, 4];

// const result = array.filter(function(item,index,array){
//     if(item%2!=0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(result)

// const array = [1, '1', 2, {}];

// let result = array.filter(function(item,index,array){
//     if(typeof(item)=='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(result)

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว

// let result = array.filter(function(item,index,array){
//     if(item.length>6){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(result)

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก

// let result = array.filter(item=>item>0)
// console.log(result)

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// let result = array.filter(item=>item%3==0)

// console.log(result)

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];

// // let result = array.filter(function(item,index,array){
// //     if(item.slice(0,1)=='E'){
// //         return true
// //     }
// //     else{
// //         return false
// //     }
// // })

// let result = array.filter(item=>item.slice(0,1)=='E')

// console.log(result)

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// let result = array.filter(function(item,index,array){
//     if(item==item.toUpperCase()){
//         return true
//     }
//     else{
//         return false;
//     }
// })

// console.log(result)

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// let result = array.filter(item=>item.toLocaleLowerCase().includes('buri'))

// console.log(result)

//----------------------test round 2-----------------------

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10

// // let result = array.filter(function (item) {
// //   return item > 10;
// // });

// let result = array.filter((item) => item > 10);

// console.log(result);

//-------------------------------------------------
// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่

// let result = array.filter((item) => item % 2 != 0);

// console.log(result);

//--------------------------------------------------
// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number

// let findNumber = array.filter((item) => typeof item == 'number');
// console.log(findNumber);

//-------------------------------------------------------

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว

// let result = array.filter((item) => item.length > 6);
// console.log(result);

//-----------------------------------------------------------
// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// let result = array.filter((item) => item > 0);
// console.log(result);

//------------------------------------------------------------

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว

// let result = array.filter((item) => item % 3 == 0);
// console.log(result);

//-------------------------------------------------
// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// let result = array.filter((item) => item.slice(0, 1) == 'E');
// console.log(result);

//-----------------------------------------------------
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// let result = array.filter((item) => item == item.toUpperCase());
// console.log(result);

//----------------------------------------------------------
// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// let result = array.filter((item) => item.toLocaleLowerCase().includes('buri'));
// console.log(result);

//------------------------------------------------------

// const array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 },
// ];
// // อายุไม่น้อยกว่า 18

// let result = array.filter((item) => item.age > 18);
// console.log(result);

//--------------------------------------------------------
// const array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' },
// ];
// // id ไม่เท่ากับ 4

// let result = array.filter((item) => item.id != 4);
// console.log(result);

//-------------------------------------------------------

const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' },
];
// เกิดเดือน 6

let result = array.filter((item) => item.birth.slice(5, 7) == 6);
console.log(result);
