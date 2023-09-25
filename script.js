const billAmountInput = document.getElementById("bill");
const customTipInput = document.getElementById("custom_tip");
const numberOfPeopleInput = document.getElementById("people_num");
const tipAmountDisplay = document.getElementById("tip_amount");
const totalAmountDisplay = document.getElementById("total_amount");
const tipButtons = document.querySelectorAll(".tip_block button");
const resetButton = document.getElementById("resetBtn");

// tipButtons_code

tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tip_percentage = e.target.innerHTML;
    tip_percentage = tip_percentage.substr(0, tip_percentage.length - 1);

    if (billAmountInput.value === "") {
      resteverything();
      return;
    }

    if (numberOfPeopleInput.value === "") numberOfPeopleInput.value = 1;

    tip_calculator(
      parseFloat(billAmountInput.value),
      parseInt(tip_percentage),
      parseInt(numberOfPeopleInput.value)
    );
  });
});

// customTipInput

customTipInput.addEventListener("blur", (e) => {
  if (billAmountInput.value === "") {
    resteverything();
    return;
  }

  if (numberOfPeopleInput.value === "") numberOfPeopleInput.value = 1;

  tip_calculator(
    parseFloat(billAmountInput.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeopleInput.value)
  );
});

// function_tip_calculator

function tip_calculator(bill_amount, tip_percnt, num_of_people) {
  let tip_amount = (bill_amount * (tip_percnt / 100)) / num_of_people;

  tip_amount = tip_amount.toFixed(2);

  let per_person_tip = tip_amount * num_of_people + bill_amount / num_of_people;

  per_person_tip = per_person_tip.toFixed(2);

  tipAmountDisplay.innerHTML = `$${tip_amount}`;

  totalAmountDisplay.innerHTML = `$${per_person_tip}`;
}

// function_resteverything

function resteverything() {
  billAmountInput.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";
  tipAmountDisplay.innerHTML = "$0.00";
  totalAmountDisplay.innerHTML = "$0.00";
}

// rest_Btn

resetButton.addEventListener("click", resteverything);
