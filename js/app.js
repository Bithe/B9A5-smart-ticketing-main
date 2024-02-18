const allSeatsBtn = document.getElementsByClassName("seat");
let count = 0;

for (const seat of allSeatsBtn) {
  seat.addEventListener("click", function (e) {
    count = count + 1;

    const seatName = e.target.innerText;

    showInnerText("count-buy-seats", count);

    const ul = document.getElementById("selected-seats-info");

    let li = document.createElement("li");
    let seatNameShow = document.createElement("p");
    seatNameShow = seatName;

    let seatClass = document.createElement("p");
    seatClass.innerText = " Economoy";

    let seatPrice = document.createElement("p");
    seatPrice = 550;

    ul.append(li);
    li.append(seatNameShow);
    li.append(seatClass);
    li.append(seatPrice);

    const totalPriceText = document.getElementById("total-price").innerText;
    const totalPriceConvertToNum = parseInt(totalPriceText);

    let ticketPrice = parseInt(seatPrice);

    let totalPrice = totalPriceConvertToNum + ticketPrice;

    showInnerText("total-price", totalPrice);
  });
}
