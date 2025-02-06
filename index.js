$(document).ready(function () {
    $(".hopque img").click(function (e) {
        var ketqua = Math.floor((Math.random() * 10) + 1);
        console.log(ketqua);
        var outputP = document.getElementById("trave");
        var manhinh = screen.width;
        var hieuung = document.getElementById("animate");
        if (manhinh > 799) {
            console.log("May tinh");
            outputP.style.fontSize = "3vw";
        } else {
            outputP.style.fontSize = "5vw";
        }
        if (manhinh > 799) {
            traketqua();
        } else {
            setTimeout(traketqua, 1500);

        }
        function traketqua() {
            if (ketqua == 1) {
                outputP.innerHTML = "Lì xì niềm vui"
            } else if (ketqua == 2) {
                outputP.innerHTML = "20K"
            } else if (ketqua == 3) {
                outputP.innerHTML = "10K"
            } else if (ketqua == 4) {
                outputP.innerHTML = "15K"
            } else if (ketqua == 5) {
                outputP.innerHTML = "5K"
            } else if (ketqua == 6) {
                outputP.innerHTML = "2K"
            } else if (ketqua == 7) {
                outputP.innerHTML = "22K"
            } else if (ketqua == 8) {
                outputP.innerHTML = "100K (Độc đắc)"
            } else if (ketqua == 9) {
                outputP.innerHTML = "10K"
            } else {
                outputP.innerHTML = "1K"
            }
            hieuung.style.animation = "none";
        }






    });
});