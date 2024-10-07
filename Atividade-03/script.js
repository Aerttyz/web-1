window.onload = function() {
    var quadro = document.getElementById("quadro");
    var ctx = quadro.getContext("2d");

    var desenhando = false;

    quadro.onmousedown = function(evt) {
        var rect = quadro.getBoundingClientRect(); 
        ctx.beginPath();
        ctx.moveTo(evt.clientX - rect.left, evt.clientY - rect.top); 
        desenhando = true;
    }

    quadro.onmouseup = function() {
        desenhando = false;
    }

    quadro.onmousemove = function(evt) {
        if (desenhando) {
            var rect = quadro.getBoundingClientRect();
            ctx.lineTo(evt.clientX - rect.left, evt.clientY - rect.top); 
            ctx.stroke();
        }
    }
    var limpar = document.getElementById("btn");
    limpar.onclick = function(){
        ctx.clearRect(0, 0, quadro.width, quadro.height);
    }
}

