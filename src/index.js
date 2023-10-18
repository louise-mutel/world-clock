function updateTime() {
  let reykjavikElement = document.querySelector("#reykjavik");
  if (reykjavikElement) {
    let reykjavikDateElement = reykjavikElement.querySelector(".date");
    let reykjavikTimeElement = reykjavikElement.querySelector(".time");
    let reykjavikTime = moment().tz("Atlantic/Reykjavik");
    reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM Do YYYY");
    reykjavikTimeElement.innerHTML = reykjavikTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let belemElement = document.querySelector("#belem");
  if (belemElement) {
    let belemDateElement = belemElement.querySelector(".date");
    let belemTimeElement = belemElement.querySelector(".time");
    let belemTime = moment().tz("America/Belem");
    belemDateElement.innerHTML = belemTime.format("MMMM Do YYYY");
    belemTimeElement.innerHTML = belemTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let damascusElement = document.querySelector("#damascus");
  if (damascusElement) {
    let damascusDateElement = damascusElement.querySelector(".date");
    let damascusTimeElement = damascusElement.querySelector(".time");
    let damascusTime = moment().tz("Asia/Damascus");
    damascusDateElement.innerHTML = damascusTime.format("MMMM Do YYYY");
    damascusTimeElement.innerHTML = damascusTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityNameDisplay = cityName.toUpperCase();
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `<div class="city">
          <div>
            <h2>${cityNameDisplay}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
