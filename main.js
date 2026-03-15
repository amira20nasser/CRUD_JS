let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let category = document.getElementById("category");
let count = document.getElementById("count");
let submit = document.getElementById("submit");
let search = document.getElementById("search");

document.body.onload = () => search.focus();

function getTotal() {
    if (!price.value.trim()) {
        total.textContent = "";
        total.style.background = "#662626";
        return;
    }

    let result =
        (+price.value || 0) +
        (+taxes.value || 0) +
        (+ads.value || 0) -
        (+discount.value || 0);

    total.textContent = result;
    total.style.background = "#233053";
}

[price, taxes, ads, discount].forEach(input => {
    input.addEventListener("keyup", getTotal);
});

function moveNext(current, next) {
    current.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            next.focus();
        }
    });
}

moveNext(title, price);
moveNext(price, taxes);
moveNext(taxes, ads);
moveNext(ads, discount);
moveNext(discount, count);
moveNext(count, category);
moveNext(category, submit);