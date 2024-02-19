const allSeatsBtn = document.getElementsByClassName("seat");
let count = 0;
let availableSeats = 40;

for (const seat of allSeatsBtn) {
  seat.addEventListener("click", function (e) {
    // selected seats disabled
    if (seat.classList.contains("disabled")) {
      return;
    }
    seat.classList.add("disabled");

    // counting the selected seat
    count = count + 1;

    availableSeats = availableSeats - 1;

    // alert for more than 4 selection
    if (count > 4) {
      alert("You can only select 4 seats ");
      return;
    }

    e.target.style.backgroundColor = "#1DD100";

    const seatName = e.target.innerText;

    const ul = document.getElementById("selected-seats-info");

    let li = document.createElement("li");
    let seatNameShow = document.createElement("p");
    seatNameShow = seatName;

    let seatClass = document.createElement("p");
    seatClass.innerText = "Economoy";

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

    // coupon button open
    const couponBtn = document.getElementById("coupon-btn");
    const couponInput = document.getElementById("coupon-input");

    if (count === 4) {
      couponInput.removeAttribute("readonly");
      couponBtn.style.backgroundColor = "#1DD100";
    } else {
       couponInput.setAttribute('readonly', true);
      couponBtn.style.backgroundColor = "";
    }

    // discount option after applying coupon
    const grandTotal = document.getElementById("grand-total");

    if (count === 4) {
      couponBtn.addEventListener("click", function (e) {
        const coupon = document.getElementById("coupon-input").value;

        // FOR 15% DISCOUNT
        if (coupon === "NEW15") {
          let discount = totalPrice * 0.15;
          let grandTotalUpdated = totalPrice - discount;
          showInnerText("grand-total", grandTotalUpdated);
          console.log(grandTotalUpdated);
        }
        // FOR 20% DISCOUNT
        if (coupon === "Couple 20") {
          let discount = totalPrice * 0.2;
          let grandTotalUpdated = totalPrice - discount;

          showInnerText("grand-total", grandTotalUpdated);
          console.log(grandTotalUpdated);
        }
      });
    }

    // call the show inner text set function
    showInnerText("count-buy-seats", count);
    showInnerText("available-seats", availableSeats);

    showInnerText("total-price", totalPrice);

    showInnerText("grand-total", totalPrice);
  });
}
