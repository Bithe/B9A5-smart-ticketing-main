function showInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function couponApply(value) {
  const couponForm = document.getElementById("coupon-from");
  couponForm.classList.add("hidden");

  const discountInfo = document.getElementById("discount-info");
  const li = document.createElement("li");
  const discountShow = document.createElement("p");
  discountShow.innerText = "Discount";
  const discountAmount = document.createElement("p");
  discountAmount.innerText = value;

  discountInfo.append(li);
  li.append(discountShow);
  li.append(discountAmount);
}

// clear all after clicking continue
function clearAll(){
    location.reload();
}


