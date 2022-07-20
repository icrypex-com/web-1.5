(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");

        $("#tab-email").removeClass("show active");
        $("#tab-success").addClass("show active");
      },
      false
    );
  });
})();

/*function onSubmit() {
  grecaptcha.enterprise.ready(function () {
    grecaptcha.enterprise
      .execute("6Ld2UscgAAAAAK60K4BvB6Cavmd5Ks5caGNm3ecA", {
        action: "login",
      })
      .then(function (token) {
        console.log("token:", token);
      });
  });
}*/
