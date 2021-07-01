var currentAngle = 162,
    width = 513,
    height = 513,
    baseTop = 0,
    down = 5,
    count = 0;

function arrow(){
    var baseX = 82; // x координата центра окружности
    var baseY = 8; // y координата центра окружности

    var radius = 109;
    var arrow = document.querySelector("#arrow");
    var vx =  Math.cos(currentAngle) * radius;
    var vy = 110.5 + Math.sin(currentAngle) * radius;

    arrow.style.marginTop =  baseY + vy + "px";
    arrow.style.marginLeft = baseX + vx + "px";
    currentAngle += 0.1;
}


function bigEllipse(){
    var ellipse = document.querySelector("#big-ellipse");

    if(count !== 28 && count >= 0) {
        width -= 10;
        height -= 10;
        baseTop += down;
        ellipse.style.width = width - 10 + 'px';
        ellipse.style.height = height - 10 + 'px';
        ellipse.style.marginTop = baseTop + down + 'px';
    }else{
        if(count === 28){
            count = -28
        }
        width += 10;
        height += 10;
        baseTop -= down;
        ellipse.style.width = width + 10 + 'px';
        ellipse.style.height = height + 10 + 'px';
        ellipse.style.marginTop = baseTop - down + 'px';
    }
    console.log(count)
    console.log(width, height, baseTop)
    count += 1
}

// let m = document.getElementById('loader');
// m.addEventListener('click', bigEllipse, false);


$(window).on('load', function () {
    var $preloader = $('.loader'),
        $main = $('.main');

    setInterval(function (){
        arrow()
        bigEllipse()

    }, 35);
    //$preloader.fadeOut().end().delay(400).fadeOut('slow');
//
    //window.setTimeout(function (){
    //    $main.css({'visibility': 'visible'});
    //    $main.fadeIn().end().delay(500).fadeIn('slow');
    //}, 500);
})