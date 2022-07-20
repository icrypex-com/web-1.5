var dataSet = [
  {
    coin_name: "Bitcoin",
    coin_short_name: "BTC",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Ethereum",
    coin_short_name: "ETH",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Avalanche",
    coin_short_name: "AVAX",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Avalanche",
    coin_short_name: "AVAX",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Avalanche",
    coin_short_name: "AVAX",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Avalanche",
    coin_short_name: "AVAX",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
  {
    coin_name: "Avalanche",
    coin_short_name: "AVAX",
    price: "$999.999,99",
    price_change: "+120,23%",
    volume: "$557.524,05M",
    market_cap: "$557.524,05M",
  },
];

var ICRYPEX = (function () {
  "use strict";
  var hideTableColumns = false;

  function buildCarousels() {
    $("#header-carousel").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      //autoplay: true,
      //autoplayTimeout: 3000
    });
    $("#banner-area-carousel").owlCarousel({
      loop: false,
      items: 3,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        768: {
          items: 2,
          dots: true,
        },
        992: {
          items: 3,
          dots: true,
        },
      },
    });
    $("#video-carousel").owlCarousel({
      loop: false,
      items: 2,
      margin: 24,
      dots: true,
      nav: false,
      navText: [
        '<i class="icon-arrow-left-1 fs-5xl"></i>',
        '<i class="icon-arrow-right-1 fs-5xl"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        768: {
          items: 2,
          stagePadding: 16,
          nav: true,
        },
      },
    });
    $("#blog-carousel").owlCarousel({
      loop: false,
      items: 3,
      margin: 24,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        768: {
          items: 2,
          dots: true,
        },
        992: {
          items: 3,
          dots: false,
        },
      },
    });
  }

  function buildDataTables() {
    var table = $("#market_datatable").DataTable({
      data: dataSet,
      info: false,
      paging: false,
      lengthChange: false,
      searching: false,
      columnDefs: [
        {
          targets: 0,
          width: "10",
          orderable: false,
          render: function (data, type, row, meta) {
            return '<a href="#"><i class="icon-star-1 text-blue-900"></i></a>';
          },
        },
        {
          targets: 1,
          render: function (data, type, row, meta) {
            return (
              '<span><img class="me-1" src="media/icon/icon-bitcoin.svg" />' +
              '<span class="align-middle">' +
              data.coin_short_name +
              "</span></span>"
            );
          },
        },
        {
          targets: 2,
          orderable: false,
          render: function (data, type, row, meta) {
            return (
              '<span class="fs-sm fw-400 text-black-500">' +
              data.coin_name +
              "</span>"
            );
          },
        },
        {
          targets: 4,
          render: function (data, type, row, meta) {
            return (
              '<span class="text-success">' + data.price_change + "</span>"
            );
          },
        },
        {
          targets: 7,
          width: "100",
          orderable: false,
          render: function (data, type, row, meta) {
            return '<div class="text-end"><button class="btn btn-primary">Hemen Al</button></div>';
          },
        },
      ],
      columns: [
        { data: null, title: "" },
        { data: null, title: "Coin" },
        { data: null, title: "" },
        { data: null, title: "Fiyat", render: "price" },
        { data: null, title: "Değişim" },
        { data: null, title: "Hacim", render: "volume" },
        { data: null, title: "Değer", render: "market_cap" },
        { data: null, title: "" },
      ],
    });

    $(window).on("load resize", function () {
      if ($(window).width() < 992 && !hideTableColumns) {
        hideTableColumns = true;
        table.columns([0, 5, 6, 7]).visible(false);
      }
      if ($(window).width() > 992 && hideTableColumns) {
        hideTableColumns = false;
        table.columns([0, 5, 6, 7]).visible(true);
      }
    });
  }

  function buildSelects() {
    function templateSelection(state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "/user/pages/images/flags";
      var $state = $(
        '<div class="select2-selection-label">Uyruk</div> <div><img class="img-flag" /> <span></span></div>'
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

    var select2_coin_1 = $("#select2_coin_1").select2({
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
    select2_coin_1.data("select2").$container.addClass("flex-grow-0");
    select2_coin_1.one("select2:open", function (e) {
      $("input.select2-search__field").prop("placeholder", "Search");
    });

    var select2_coin_2 = $("#select2_coin_2").select2({
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
    select2_coin_2.data("select2").$container.addClass("flex-grow-0");
    select2_coin_2.one("select2:open", function (e) {
      $("input.select2-search__field").prop("placeholder", "Search");
    });
  }

  return {
    init: function () {
      buildDataTables();
      buildCarousels();
      buildSelects();
    },
  };
})();

$(document).ready(function () {
  ICRYPEX.init();
});
