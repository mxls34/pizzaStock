let Stock = [];
let htmlEdit = ``;

function addStock() {
    let idIngredient = `S${Stock.length}`;
    let nameIngredient = document.getElementById('nameIngredient').value;
    let numberIngredient = document.getElementById('numberIngredient').value;

    let formatTime = new Date();
    
    let products = {
        ID: idIngredient,
        name: nameIngredient,
        number: numberIngredient,
        day: `${formatTime.getDate()}/${formatTime.getMonth()}/${formatTime.getFullYear()} เวลา ${formatTime.getHours()}:${formatTime.getMinutes()}`
    }
    Stock.push(products);
    
    alert('เพิ่มข้อมูลเสร็จสิ้น');
    
    // clear input
    document.getElementById('nameIngredient').value = '';
    document.getElementById('numberIngredient').value = '';
}

function back() {
    document.getElementById('addContainer').style.display = "none";
    document.getElementById('editContainer').style.display = "none";

    document.getElementById('container').style.display = "block";
}

function checkSelect() {
    let typeSelect = document.getElementById('menu').value;

    // console.log(typeSelect);

    if (typeSelect == "add") {
        document.getElementById('container').style.display = "none";
        document.getElementById('addContainer').style.display = "block";

    } else if (typeSelect == "edit") {
        document.getElementById('container').style.display = "none";
        document.getElementById('editContainer').style.display = "block";

        htmlEdit = '';  // รีเซ็ตเพื่อไม่ให้ซ้ำ
        for (let i = 0; i < Stock.length; i++) {
            htmlEdit += `<tr>`;
            htmlEdit += `<td>${Stock[i].ID}</td>`;
            htmlEdit += `<td>${Stock[i].name}</td>`;
            htmlEdit += `<td>${Stock[i].number}</td>`;
            htmlEdit += `<td>${Stock[i].day}</td>`;

            htmlEdit += `<td>
                            <button class="editBtn1" onclick="">แก้ไข</button>                       
                            <button class="editBtn2" onclick="">ลบ</button>                       
                        </td>`
            htmlEdit += `</tr>`;
        }
        // ใส่ข้อมูลลงใน DOM
        document.getElementById('showEdit').innerHTML = htmlEdit;

    }

}