(function() {
  "use strict";

  var stateUrl = "https://api.spark.io/v1/devices/" + CONFIG.sparkCoreId + "/state?access_token=" + CONFIG.accessToken;

  function setCoreColour(colorObj) {
    var rgbStr = colorObj.r + "," + colorObj.g + "," + colorObj.b;
    $(".rgb-color").css("background-color", "rgb(" + rgbStr + ")");
  }

  $.get(stateUrl)
    .done(function(data) {
      var result = data["result"];

      try {
        var colorObj = JSON.parse(result);
        setCoreColour(colorObj);
      } catch(err) {
        console.log("Parse error", result, err);
      }
    })
    .fail(function(err) {
      console.log("Get state error", err);
    });

})();