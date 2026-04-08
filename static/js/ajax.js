function http_call(url, method, headers, data, sucessfnCB, failfnCB){
    // , failfunction
    console.log(url);
    $.ajax({type: method, url: url, data: data, headers: headers, async: true,
        success: function(response){
            sucessfnCB(response);
        }
        ,
        error:function(jqXHR) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            failfnCB(msg);
            }
    }
    );
  
  };