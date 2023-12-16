const advicePlace = document.getElementById("adviceId");
const adviceTitlePlace = document.getElementById("adviceNumber");
const adviceButton = document.getElementById("adviceButtonId");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    headers: {
      Accept: "applecation/json",
    },
  });
  const advice = await response.json();
  adviceTitlePlace.innerText = `#${advice.slip.id}`;
  advicePlace.innerHTML = `&ldquo;${advice.slip.advice}&rdquo;`;
};

adviceButton.addEventListener("click", getAdvice);
document.addEventListener("DOMContentLoaded", getAdvice);
