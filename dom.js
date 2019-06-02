$(document).ready(function() {
$('#botao').click(function() {
    // alert($('#pesquisa').val());

    if($('#pesquisa').val() == "Farinha de Trigo - 50 Km"){
        
        window.location.assign("farinha%20cristal.html");
    }
    

    if($('#pesquisa').val() == "Farinha de Trigo - 25 Km"){
        
        window.location.assign("farinha%20nordeste.html");
    }

    if($('#pesquisa').val() == "Farinha de Trigo - 230 Km"){
        
        window.location.assign("farinha%20criciuma.html");
    }

    if($('#pesquisa').val() == "Farinha de Trigo - 700 Km"){
        
        window.location.assign("farinha%20saopaulo.html");
    }
    
    if($('#pesquisa').val() == "Farinha de Trigo - 3189 Km" || $('#pesquisa').val()>700){
        
        window.location.assign("farinha%20amapa.html");
    }
    
    
}) ;   
 

});

