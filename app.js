// delgetstei hariltsah controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
    inc,
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//sanhuutei hariltsah controller
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// programiin holbogch controller
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    // 1t oruulah ugugduliig delgetsees olj awna
    console.log(uiController.getInput());
    //2t olj awsan ugugduluu sanhuugiin controllert damjuulj hadgalna.
    //3 web deeree tohiroh hesegt in gargana
    //4 tusuwiig tootsoolno
    //5 etssiin uldegdel tootsoog delgets deer gargana
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("App started");
      setupEventListeners();
    },
  };
})(uiController, financeController);
appController.init();
