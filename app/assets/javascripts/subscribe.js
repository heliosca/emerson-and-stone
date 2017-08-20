var globals = {
  subscribeShown: false,
  optedOut: false
};

document.addEventListener("turbolinks:load", function() {
  var esCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaCookie\s*=\s*[^;]+(.*)?$/);
  if (!esCookie) {
    if (!globals.optedOut) {
      if (!globals.subscribeShown) {
        setTimeout(function() {
          $("#subscribe-window").fadeIn(400);
          globals.subscribeShown = true;
        }, 1500);
      } else {
        $("#subscribe-window").show();
      }
    }

    $("#subscribe-window .close").click(function() {
      $("#subscribe-window").fadeOut(function() {
        $("#subscribe-window").remove();
      });
      globals.optedOut = true;
    });

    $("#subscribe-form").submit(function() {
      event.preventDefault();
      console.log($(this).attr('action'));

      var url = $(this).attr('action'),
          data = $(this).serialize(),
          success = subscribeSuccess;

      $.post(url, data, success);
    });
  }

  function subscribeSuccess(response) {
    $("#subscribe-window").fadeOut();
    setCookie();
  }

  function setCookie() {
    document.cookie = "EmersonAndStoneCookie=scumptious; expires="+dateYearFromNow();
  }

  function dateYearFromNow() {
    return new Date(new Date().getTime()+365*24*60*60*1000).toGMTString();
  }
});
