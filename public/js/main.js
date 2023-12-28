var kiemtra = false;
var batdau = true;
var finishLine = document.getElementById('destination');

function start() {
    var domRed = document.getElementById('red');
    var domYellow = document.getElementById('yellow');
    var domGreen = document.getElementById('green');

    setTimeout(function () {
        domRed.style.backgroundColor = 'red'; 
        kiemtra = false;
    }, 2000);

    setTimeout(function () {
        domYellow.style.backgroundColor = 'yellow'; 
        kiemtra = false;
    }, 3000);

    setTimeout(function () {
        domGreen.style.backgroundColor = 'green'; 
        kiemtra = true;

        // âm thanh 1
        var carAT1 = document.getElementById("car1Sound");
        carAT1.play();

        //  âm thanh 2
        var carAT2 = document.getElementById("car2Sound");
        carAT2.play();
    }, 4000);
}

var a = 0;
var b = 0;
var x1 = 148;
var x2 = 148;

document.addEventListener("keydown", function (even) {
    domCar1 = document.getElementById('car1');
    domCar2 = document.getElementById('car2');
    domX1 = document.getElementById('xang1');
    domX2 = document.getElementById('xang2');

    if (kiemtra) {
        switch (even.key) {
            case "ArrowRight":
                a += 10;
                domCar1.style.marginLeft = a + 'px';
                x1 -= 1;
                domX1.style.width = x1 + 'px';
                if (a >= 1200) { 
                    thongBao("Xe 1");
                }
                break;
            case "d":
                b += 10;
                domCar2.style.marginLeft = b + 'px';
                x2 -= 1;
                domX2.style.width = x2 + 'px';
                if (b >= 1200) { 
                    thongBao("Xe 2");
                }
                break;
        }
    }
});

// âm thanh
var startBT = document.querySelector('.btn-dark');
startBT.addEventListener('click', function () {
    var carAT1 = document.getElementById("at1");
    carAT1.play();

    var carAT2 = document.getElementById("at2");
    carAT2.play();
});

setTimeout(batdau, 2000);

// bắt đầu lại
function again(){
    kiemtra = false;
    a = 0;
    b = 0;
    x1 = 148;
    x2 = 148;

    domCar1.style.marginLeft = a + 'px';
    domCar2.style.marginLeft = b + 'px';

    domX1.style.width = x1 + 'px';
    domX2.style.width = x2 + 'px';

    // Reset màu
    document.getElementById('red').style.backgroundColor = '';
    document.getElementById('yellow').style.backgroundColor = '';
    document.getElementById('green').style.backgroundColor = '';

    // 
    var carAT1 = document.getElementById("car1Sound");
    carAT1.pause();
    carAT1.currentTime = 0;

    var carAT2 = document.getElementById("car2Sound");
    carAT2.pause();
    carAT2.currentTime = 0;

    
    finishLine.style.left = '1100px';
}


// về đích
function thongBao(thongbao){
    alert(thongbao +" chiến thắng");
    kiemtra = false;
}

