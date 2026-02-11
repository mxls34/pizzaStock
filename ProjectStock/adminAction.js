let Stock = []

function addStock(nameIngredient, numberIngredient) {

    let products = {
        name: nameIngredient,
        number: numberIngredient
    }

    Stock.push(products)
}

function back() {
    document.getElementById('addContainer').style.display = "none";

    document.getElementById('container').style.display = "block";
}

function checkSelect() {
    let typeSelect = document.getElementById('menu').value;

    // console.log(typeSelect);

    if (typeSelect == "add") {
        document.getElementById('container').style.display = "none";
        document.getElementById('addContainer').style.display = "block";

        let nameIngredient = document.getElementById('').value;
        let numberIngredient = document.getElementById('').value;

        addStock(nameIngredient, numberIngredient);
    }

}