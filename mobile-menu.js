document.addEventListener("DOMContentLoaded", function () {
  const toggleListButton = document.getElementById("toggleListButton");
  const closeListButton = document.getElementById("closeListButton");
  const listContainer = document.getElementById("listContainer");

  toggleListButton.addEventListener("click", function () {
    if (
      listContainer.style.display === "none" ||
      listContainer.style.display === ""
    ) {
      listContainer.style.display = "block";
      toggleListButton.style.display = "none";
      closeListButton.style.display = "block";
    } else {
      listContainer.style.display = "none";
      toggleListButton.style.display = "block";
      closeListButton.style.display = "none";
    }
  });

  closeListButton.addEventListener("click", function () {
    listContainer.style.display = "none";
    toggleListButton.style.display = "block";
    closeListButton.style.display = "none";
  });
});
