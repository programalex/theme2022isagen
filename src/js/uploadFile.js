$(function() {
  var dropZoneId = "drop-zone";
  var mouseOverClass = "mouse-over";
  var dropZone = $("#" + dropZoneId);
  var inputFile = dropZone.find("input");
  var finalFiles = [];
  var counter = 0, restante = 3;
  
  var ooleft = dropZone.offset().left;
  var ooright = dropZone.outerWidth() + ooleft;
  var ootop = dropZone.offset().top;
  var oobottom = dropZone.outerHeight() + ootop;
 
  document.getElementById(dropZoneId).addEventListener("dragover", function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.addClass(mouseOverClass);
  }, true);

  document.getElementById(dropZoneId).addEventListener("drop", function(e) {
    $("#" + dropZoneId).removeClass(mouseOverClass);
  }, true);


  inputFile.on('change', function(e) {
    validateSize(this.files, function(data){
        if(data.estado){
            if(addFiles(data.files)){
                listFiles();
                //inputFile.val(finalFiles);
                $('#list-file').show();
                $("#addFile").addClass('hasFile');
                $("#fileToUpload").addClass('hasFile');
                $("#file-message").hide();
            }
        }
    })
    

  });

function validateSize(files, callback){
    var fileSmall = true;
    $.each(files,function(idx,elm){
        if((elm.size / 1000) > 1000){
            $('#msn-files').html( "El tamaño por archivo 1MB.");
            fileSmall = false;
        }
    });
    callback({ estado: fileSmall, files: files });
}

function listFiles(){
    $('#list-file').html("");
    var cantFiles = finalFiles.length;
    initial = 0;
    for (initial; initial < cantFiles; initial++) {
        var file = '<li id="file_'+ initial +'" class="file"><div class="file-name">' + finalFiles[initial].name + '</div><div class="file-size">'+ (finalFiles[initial].size / 1000) +' KB</div><div onclick="window.removeFile(this)" class="delete-file"></div></li>';
        $('#list-file').append(file);
    }
}

function addFiles(files){
    var fileNum = files.length;
    if(fileNum <= 3){
        if(counter <= 3){
            $.each(files,function(idx,elm){
                finalFiles.push(elm);
                //finalFiles[counter] = elm;
                counter++;
                restante--;
                $('#msn-title').html("Añade más archivos");
                $('#msn-files').html( "archivos añadidos " + counter + " - restantes "+ restante);
            });
            if(counter == 3){
                $('#uploadFile').hide();
                $('#fileToUpload').hide();
            }
            return true;
        }
    }
    return false;
}

window.removeFile = function removeFile(obj)
{
    var jqObj = $(obj);
    var container = jqObj.closest('li');
    var index = container.attr("id").split('_')[1];
    container.remove(); 

    //delete finalFiles[index];
    finalFiles.splice(index,1);
    counter--;
    restante++;
    if(counter < 3){
        $('#uploadFile').show();
        $('#fileToUpload').show();
    }
    if(counter == 0){
        $('#msn-title').html("Añade tus archivos");
        $('#msn-files').html( "Añade hasta 3 archivos");
        $('#list-file').hide();
        $("#addFile").removeClass('hasFile');
        $("#fileToUpload").removeClass('hasFile');
        $("#file-message").show();
    }else{
        listFiles();
        $('#msn-files').html( "archivos añadidos " + counter + " - restantes "+ restante);
    }
 }

})
