Swal.fire({
            title:'Error Server',
            icon:'error',
            confirmButtonText:'Buy Version Vip',
            backdrop:true,
            position:'center',
            confirmButtonColor:'#0073ff',
            confirmButtonAriaLabel:'Aceptar',
            allowOutsideClick:false,
            allowEscapeKey:false,
            stopKeydownPropagation:false
        }).then(function () {
          window.location.href = "https://es.hackersteam.xyz/volt/login";
        })
