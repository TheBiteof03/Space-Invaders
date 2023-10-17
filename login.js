const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  const authenticated = authentication(username, password);

  if (authenticated) {
    window.location.href = "index.html";
  } else {
    alert("Wrong");
  }
});

function authentication(username, password) {
  return true; 
}