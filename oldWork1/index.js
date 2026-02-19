product = [
    { id: 1, name: "Tomato", quantity: 50, type: "vegetable", status: "normal" },
    { id: 2, name: "Ham", quantity: 10, type: "processed", status: "low" },
    { id: 3, name: "Cheese", quantity: 0, type: "processed", status: "out" }
];

let html = "";

for (let i = 0; i < product.length; i++) {

    let id, name, quantity, type, status;

    id = product[i].id;
    name = product[i].name;
    quantity = product[i].quantity;
    type = product[i].type;
    status = product[i].status;

    html += "<tr>";
    html += "<td>" + id + "</td>";
    html += "<td>" + name + "</td>";
    html += "<td>" + quantity + "</td>";
    html += "<td>" + type + "</td>";
    html += "<td>" + status + "</td>";
    html += `<td align="center">
                <button onclick="editProduct(${id},${name},${quantity},${type},${status})">แก้ไข</button>
                <button onclick="deleteProduct(${id},${name},${quantity},${type},${status})">ลบ</button>
            </td>`
    html += "</tr>";
}

document.getElementById("showBody").innerHTML = html;

function findCategory() {
    let name = document.getElementById('categoryName').value;
    let type = document.getElementById('categoryType').value;
    let status = document.getElementById('status').value;

    if (isNaN(name) && isNaN(type) && isNaN(status)) {

        if (name == product[0].name || name == product[0].id || type == product[0].type || status == product[0].status) {
            for (let i = 0; i < product.length; i++) {
                let id, name, quantity, type, status;

                id = product[i].id;
                name = product[i].name;
                quantity = product[i].quantity;
                type = product[i].type;
                status = product[i].status;

                html += "<tr>";
                html += "<td>" + id + "</td>";
                html += "<td>" + name + "</td>";
                html += "<td>" + quantity + "</td>";
                html += "<td>" + type + "</td>";
                html += "<td>" + status + "</td>";
                html += `<td align="center">
                <button onclick="editProduct(${id},${name},${quantity},${type},${status})">แก้ไข</button>
                <button onclick="deleteProduct(${id},${name},${quantity},${type},${status})">ลบ</button>
            </td>`
                html += "</tr>";
            }
        } else {

        }
    } else {
        alert("กรุณากรอกข้อมูลให้ \"ครบถ้วน\"");
    }

}

