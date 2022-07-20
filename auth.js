(function () {
  /**
   * Show/Hide password
   */
  $('[data-toggle="show-password"]').click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var type = $(this).parent().children("input").attr("type");
    if (type === "password") {
      $(this).children("i").removeClass("icon-eye").addClass("icon-eye-slash");
      $(this).parent().children("input").attr("type", "text");
    } else {
      $(this).children("i").removeClass("icon-eye-slash").addClass("icon-eye");
      $(this).parent().children("input").attr("type", "password");
    }
  });

  /**
   * Login
   * Membership Information -> Sms Verify
   * Tab Change
   */
  $("#btn-mem-info").click(function () {
    const tabTriggerEl = document.querySelector("#pills-sms-verify-tab");
    const tab = new bootstrap.Tab(tabTriggerEl);
    tab.show();
  });

  /**
   * Register
   * Pre-Membership -> Personal Information
   * Tab Change
   */
  $("#btn-pre-subscription").click(function () {
    const tabTriggerEl = document.querySelector("#pills-per-info-tab");
    const tab = new bootstrap.Tab(tabTriggerEl);
    tab.show();
  });

  /**
   * Register
   * Personal Information -> Sms Verify
   * Tab Change
   */
  $("#btn-register-per-info").click(function () {
    const tabTriggerEl = document.querySelector("#pills-sub-sms-verify-tab");
    const tab = new bootstrap.Tab(tabTriggerEl);
    tab.show();
  });

  /**
   * Register / Personal Information
   * onChange Nationality
   */
  $("#form_register_nationality")
    .on("load change", function (e) {
      var value = e.target.value;
      var tcknEl = $("#form_register_tckn").parent();
      var yknEl = $("#form_register_ykn").parent();
      var countryEl = $("#select2_register_country").parent();
      if (value === "1") {
        tcknEl.removeClass("d-none");
        yknEl.addClass("d-none");
        countryEl.addClass("d-none");
      } else {
        tcknEl.addClass("d-none");
        yknEl.removeClass("d-none");
        countryEl.removeClass("d-none");
      }
    })
    .triggerHandler("load");

  /**
   * Select2
   * Country
   */
  function Select2Country() {
    function templateSelection(state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "/user/pages/images/flags";
      var $state = $(
        '<div class="text-start"><img class="img-flag" /> <span></span></div>'
      );

      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $state.find("span").text(state.text);
      $state
        .find("img")
        .attr(
          "src",
          baseUrl + "/" + state.element.value.toLowerCase() + ".png"
        );

      return $state;
    }

    function templateResult(state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "/user/pages/images/flags";
      var $state = $(
        '<span><img src="' +
          baseUrl +
          "/" +
          state.element.value.toLowerCase() +
          '.png" class="img-flag" /> ' +
          state.text +
          "</span>"
      );
      return $state;
    }

    var select2_country = $("#select2_register_country").select2({
      theme: "bootstrap-5",
      placeholder: $(this).data("placeholder"),
      language: {
        noResults: function (params) {
          return "Bulunamadı";
        },
      },
      templateSelection: templateSelection,
      templateResult: templateResult,
    });
    select2_country.data("select2").$container.addClass("flex-grow-0");
    select2_country.one("select2:open", function (e) {
      $("input.select2-search__field").prop("placeholder", "Search");
    });
  }

  /**
   * Select2
   * Country Code
   */
  function Select2CountryCode() {
    function templateSelection(state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "/user/pages/images/flags";
      var $state = $('<div><img class="img-flag" /> <span></span></div>');

      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $state.find("span").text(state.element.value);
      $state
        .find("img")
        .attr(
          "src",
          baseUrl + "/" + state.element.value.toLowerCase() + ".png"
        );

      return $state;
    }

    function templateResult(state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "/user/pages/images/flags";
      var $state = $(
        '<span><img src="' +
          baseUrl +
          "/" +
          state.element.value.toLowerCase() +
          '.png" class="img-flag" /> ' +
          state.text +
          "</span>"
      );
      return $state;
    }

    var select2_country_code = $("#select2_country_code").select2({
      theme: "bootstrap-5",
      placeholder: $(this).data("placeholder"),
      language: {
        noResults: function (params) {
          return "Bulunamadı";
        },
      },
      templateSelection: templateSelection,
      templateResult: templateResult,
    });
    select2_country_code
      .data("select2")
      .$container.addClass("select-gray-200 flex-grow-0");
    select2_country_code
      .data("select2")
      .dropdown.$dropdown.addClass("select-gray-200");
    select2_country_code.one("select2:open", function (e) {
      $("input.select2-search__field").prop("placeholder", "Search");
    });
  }

  var elem = document.querySelector("#form_register_birth_date");
  new Datepicker(elem, {
    autohide: true,
  });

  Select2Country();
  Select2CountryCode();
})();
