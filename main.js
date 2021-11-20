$('#guardar').click(function() {
    nom = $("#nombre").val();
    trab = $("#trabajo").val();
    $.ajax(
        {
          url : "https://reqres.in/api/users",
          type: "POST",
          data : {nombre: nom, trabajo: trab},

            success : function (json) {
                $("#resultadoid").html(json.id); 
                $("#resultadoNombre").html(json.nombre);  
                $("#resultadoTrabajo").html(json.trabajo);  
                $("#resultadoCreado").html(json.createdAt);  
            },

        }).done(function() {
            $("#resultadoAlmacenado").html("Registro Almacenado");
        }).fail(function() {
            $("#resultadoAlmacenado").html("Registro Fallido");
        });
})



























/* var create = $("#guardar");


create.click(function() {
    nom = $("#nombre").val();
    tra = $("#trabajo").val();
    $.ajax(
        {
          url : "https://reqres.in/api/users",
          type: "POST",
          data : {nombre: nom, trabajo: tra},

            success : function (json) {

                $("#resultadoNombre").html(json.nombre);  
                $("#resultadoTrabajo").html(json.trabajo);  
                $("#resultadoid").html(json.id);  
                $("#resultadoCreado").html(json.createdAt);  
            }
        }).done(function() {
            $("#resultadoAlmacenado").html("Registro Almacenado");
          }).fail(function() {
            $("resultadoAlmacenado").html("Registro Fallido");
          });
});
 */