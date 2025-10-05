jQuery(function ($) {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  /**
   * Newsletter support
   */
  $(".tb-form-newsletter")
    .attr("novalidate", true)
    .each(function () {
      var $this = $(this),
        $input = $this.find('input[name="ne"]'),
        $noti = $this.find(".notification"),
        $submit = $this.find('input[type="submit"]'),
        showNoti = function (txt, error) {
          var $msg = $noti.clone();
          $noti.before($msg);
          $noti.remove();
          $msg
            .text(txt)
            .addClass("vaporize " + error)
            .attr("aria-hidden", "false");
          $input.addClass(error);
        },
        success = function () {
          $this.fadeOut("slow", function () {
            $this.parent().addClass("sucess");
            $this.replaceWith('<p class="msg">Inscrição feita com sucesso!</p>');
          });
        };
      // Submit handler
      $this.submit(function (e) {
        var serializedData = $this.serialize();
        $noti = $this.find(".notification");

        e.preventDefault();

        // validate
        if (validateEmail($input.val())) {
          var data = {};

          // Prepare ajax data
          data = {
            action: "tb_newsletter_subscribe",
            nonce: ajax.ajax_nonce,
            data: serializedData,
          };

          // send ajax request
          $.ajax({
            method: "POST",
            url: ajax.url,
            data,
            beforeSend: function () {
              $input.prop("disabled", true);
              $submit.val("Aguarde...").prop("disabled", true);
            },
            success: function (data) {
              if (data.status == "success") {
                success();
              } else {
                $input.prop("disabled", false);
                $submit.val("Inscrever-se!").prop("disabled", false);

                showNoti(data.msg, "error");
              }
            },
          });
        } else {
          showNoti("Insira um e-mail válido!", "error");
        }
      });
    });
});
