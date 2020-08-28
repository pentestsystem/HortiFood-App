/*
códigos usados em registro_loja.html
*/

/*

exibir imagem de perfil ao subir ela

*/

$("#inputFile").change(function () {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

/*
para ativar e desativar grupos de campos secundários
*/

enable_cb();
//dias da semana
$("#domingo").click(enable_cb);
$("#segunda").click(enable_cb);
$("#terca").click(enable_cb);
$("#quarta").click(enable_cb);
$("#quinta").click(enable_cb);
$("#sexta").click(enable_cb);
$("#sabado").click(enable_cb);

//tipo de pagamento
$("#creditoTipos").click(enable_cb);
$("#debitoTipos").click(enable_cb);
$("#voucherTipos").click(enable_cb);
$("#voucherSodexo").click(enable_cb);
$("#voucherAlelo").click(enable_cb);
$("#voucherVR").click(enable_cb);
$("#voucherTicket").click(enable_cb);




function enable_cb() {
  var groupID = $(this).attr('id');
  if (this.checked) {
    $("input." + groupID).removeAttr("disabled");

    $("select." + groupID).removeAttr("disabled");
  } else {
    $("input." + groupID).attr("disabled", true);
    $("input." + groupID).prop("checked", false);

    $("select." + groupID).attr("disabled", true);
    $("select." + groupID).prop("checked", );
  }
}
