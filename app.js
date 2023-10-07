// delgetstei hariltsah controller

var uiController = (function () {})();

//sanhuutei hariltsah controller
var financeController = (function () {})();

// programiin holbogch controller
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    console.log("ugugdluu olj awna");
    // 1t oruulah ugugduliig delgetsees olj awna
    //2t olj awsan ugugduluu sanhuugiin controllert damjuulj hadgalna.
    //3 web deeree tohiroh hesegt in gargana
    //4 tusuwiig tootsoolno
    //5 etssiin uldegdel tootsoog delgets deer gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {
      console.log("uur towch daragdsan bain");
    }
  });
})(uiController, financeController);
