function calculation() {
    // กำหนดค่า
    //รับค่า
    let priceDOM = document.getElementById('price');
    let vatDOM = document.getElementById('vat-7');

    let beforevat = 0
    let includesvat = 0
    let valuevat = 0
    // คำนวณ
        // ราคาก่อน vat
    beforevat = priceDOM.value
        // ภาษีมูลค่าเพิ่ม
    valuevat = priceDOM.value * vatDOM.value / 100
        // ราคารวม vat แล้ว
    priceDOM = Number(priceDOM.value)
    vatDOM = Number(vatDOM.value)

    includesvat = priceDOM + valuevat

    //แสดงผล
    console.log(beforevat);
    console.log(includesvat);
    console.log(valuevat);
    
    let result = [
        document.querySelector('.item1'),
        document.querySelector('.item2'),
        document.querySelector('.item3')
    ]

    result[0].innerText = beforevat
    result[1].innerText = includesvat
    result[2].innerText = valuevat

    console.log(result);
}















