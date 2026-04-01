const button = document.querySelector("button");

if (!button) {
  throw new Error("Button element not found");
  button.addEventListener("click");
  window.location.href = "test.html";
}
