<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".feedback-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
      }

      alert("Thank you for your feedback, " + name + "!");
      form.reset(); // clear the form
    });
  });
</script>
