const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

const product2 = {};
console.log(product2.address) // undefined
console.log(product2.address.province) // undefined.provinve => แตก
console.log(product2.address?.province) // ใช้ optional chaining ในการตรวจด้านหน้าก่อนว่าเป็น object ไหม


  console.log(product1.distributor.address.province)
  console.log()