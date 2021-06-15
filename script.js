var p1score = 0;
var p2score = 0;
var ties = 0;
var turn = 1;



function checkWinner(XorO) {
    if ($(".row-1 .box." + XorO).length === 3 ||
        $(".row-2 .box." + XorO).length === 3 ||
        $(".row-3 .box." + XorO).length === 3 ||
        $(".col-1." + XorO).length === 3 ||
        $(".col-2." + XorO).length === 3 ||
        $(".col-3." + XorO).length === 3 ||
        ($("#1").hasClass(XorO) && $("#5").hasClass(XorO) && $("#9").hasClass(XorO)) ||
        ($("#3").hasClass(XorO) && $("#5").hasClass(XorO) && $("#7").hasClass(XorO))
    ) {
        $(".X").removeClass("X");
        $(".O").removeClass("O");

        return true
    }
}


function checkIfGameTied() {
    if ($(".X").length + $(".O").length === 9) {
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        alert("Game Draw !!")
        ties++;
        $(".box").empty();
        $("#ties").text(ties)
    }

}


$(".box").click(function() {
    if (turn === 1) {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2
        if (checkWinner("X")) {
            alert("Player-1 wins the game !! Congratulations !!")
            $(".box").empty();
            p1score++;
            $("#player-1").text(p1score);

        } else checkIfGameTied()
    } else {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1
        if (checkWinner("O")) {
            alert("Player-2 wins the game !! Congratulations !!")
            $(".box").empty();

            p2score++;
            $("#player-2").text(p2score);

        } else checkIfGameTied()
    }
    $("#turn").text(turn)
})