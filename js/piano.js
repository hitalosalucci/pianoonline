//js do piano

//audio das teclas

var tocando_agora = false;


do4 = new Audio("audio/C4.wav");
reb4 = new Audio("audio/Db4.wav");
re4 = new Audio("audio/D4.wav");
mib4 = new Audio("audio/Eb4.wav");
mi4 = new Audio("audio/E4.wav");
fa4 = new Audio("audio/F4.wav");
solb4 = new Audio("audio/Gb4.wav");
sol4 = new Audio("audio/G4.wav");
lab4 = new Audio("audio/Ab4.wav");
la4 = new Audio("audio/A4.wav");
sib4 = new Audio("audio/Bb4.wav");
si4 = new Audio("audio/B4.wav");

do5 = new Audio("audio/C5.wav");
reb5 = new Audio("audio/Db5.wav");
re5 = new Audio("audio/D5.wav");
mib5 = new Audio("audio/Eb5.wav");
mi5 = new Audio("audio/E5.wav");
fa5 = new Audio("audio/F5.wav");
solb5 = new Audio("audio/Gb5.wav");
sol5 = new Audio("audio/G5.wav");
lab5 = new Audio("audio/Ab5.wav");
la5 = new Audio("audio/A5.wav");
sib5 = new Audio("audio/Bb5.wav");
si5 = new Audio("audio/B5.wav");

do6 = new Audio("audio/C6.wav");
reb6 = new Audio("audio/Db6.wav");
re6 = new Audio("audio/D6.wav");
mib6 = new Audio("audio/Eb6.wav");
mi6 = new Audio("audio/E6.wav");

const tocar_som = audio => {
	const clone = audio.cloneNode();
	clone.play();
	setTimeout(() => (clone.volume = 0.8), 200);
	setTimeout(() => (clone.volume = 0.6), 400);
	setTimeout(() => (clone.volume = 0.4), 800);
	setTimeout(() => (clone.volume = 0.2), 1200);
	setTimeout(() => (clone.volume = 0), 2400);
  };

  
$(document).ready(function(){
    
    //animações teclas brancas
    $(".tecla-do4").mousedown(function(){
		
		tocar_som(do4);

        $(".tecla-do4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do4").removeAttr( 'style' );
        }, 100);
    }); 

    
    $(".tecla-re4").mousedown(function(){

			tocar_som(re4);

        $(".tecla-re4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-mi4").mousedown(function(){

			tocar_som(mi4);

        $(".tecla-mi4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-fa4").mousedown(function(){

			tocar_som(fa4);

        $(".tecla-fa4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-fa4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-sol4").mousedown(function(){

			tocar_som(sol4);

        $(".tecla-sol4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-sol4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-la4").mousedown(function(){

		tocar_som(la4);

		$(".tecla-la4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-la4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-si4").mousedown(function(){

			tocar_som(si4);

        $(".tecla-si4").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-si4").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-do5").mousedown(function(){

			tocar_som(do5);

        $(".tecla-do5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-re5").mousedown(function(){

			tocar_som(re5);

        $(".tecla-re5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-mi5").mousedown(function(){

			tocar_som(mi5);

        $(".tecla-mi5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-fa5").mousedown(function(){

			tocar_som(fa5);

        $(".tecla-fa5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-fa5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-sol5").mousedown(function(){

			tocar_som(sol5);

        $(".tecla-sol5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-sol5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-la5").mousedown(function(){

			tocar_som(la5);

        $(".tecla-la5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-la5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-si5").mousedown(function(){

			tocar_som(si5);

        $(".tecla-si5").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-si5").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-do6").mousedown(function(){

			tocar_som(do6);

        $(".tecla-do6").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do6").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-re6").mousedown(function(){

			tocar_som(re6);

        $(".tecla-re6").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re6").removeAttr( 'style' );
        }, 100);
    });

    $(".tecla-mi6").mousedown(function(){

			tocar_som(mi6);

        $(".tecla-mi6").css({
            transform: "translateY(3px)",
            background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi6").removeAttr( 'style' );
        }, 100);
    });

    //teclas pretas

$(".tecla-reb4").mousedown(function(){

		tocar_som(reb4);

        $(".tecla-reb4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb4").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-mib4").mousedown(function(){

		tocar_som(mib4);

        $(".tecla-mib4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib4").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-solb4").mousedown(function(){

		tocar_som(solb4);

        $(".tecla-solb4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-solb4").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-lab4").mousedown(function(){

		tocar_som(lab4);

        $(".tecla-lab4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-lab4").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-sib4").mousedown(function(){

		tocar_som(sib4);

        $(".tecla-sib4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-sib4").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-reb5").mousedown(function(){

		tocar_som(reb5);

        $(".tecla-reb5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb5").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-mib5").mousedown(function(){

		tocar_som(mib5);

        $(".tecla-mib5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib5").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-solb5").mousedown(function(){

		tocar_som(solb5);

        $(".tecla-solb5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-solb5").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-lab5").mousedown(function(){

		tocar_som(lab5);

        $(".tecla-lab5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-lab5").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-sib5").mousedown(function(){

		tocar_som(sib5);

        $(".tecla-sib5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-sib5").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-reb6").mousedown(function(){

		tocar_som(reb6);

        $(".tecla-reb6").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb6").removeAttr( 'style' );
        }, 100);
    });
$(".tecla-mib6").mousedown(function(){

		tocar_som(mib6);

        $(".tecla-mib6").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib6").removeAttr( 'style' );
        }, 100);
});


//controles -- tecla preta


//tecla 01
$(document).keypress(function(e){
    if(e.wich == 49 || e.keyCode == 49){
        tocar_som(reb4);

        $(".tecla-reb4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 02
$(document).keypress(function(e){
    if(e.wich == 50 || e.keyCode == 50){
        tocar_som(mib4);

        $(".tecla-mib4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib4").removeAttr( 'style' );
        }, 100);
    }1
    
});

//tecla 03
$(document).keypress(function(e){
    if(e.wich == 51 || e.keyCode == 51){
        tocar_som(solb4);

        $(".tecla-solb4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-solb4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 04
$(document).keypress(function(e){
    if(e.wich == 52 || e.keyCode == 52){
        tocar_som(lab4);

        $(".tecla-lab4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-lab4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 05
$(document).keypress(function(e){
    if(e.wich == 53 || e.keyCode == 53){
        tocar_som(sib4);

        $(".tecla-sib4").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-sib4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 06
$(document).keypress(function(e){
    if(e.wich == 54 || e.keyCode == 54){
        tocar_som(reb5);

        $(".tecla-reb5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 07
$(document).keypress(function(e){
    if(e.wich == 55 || e.keyCode == 55){
        tocar_som(mib5);

        $(".tecla-mib5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 08
$(document).keypress(function(e){
    if(e.wich == 56 || e.keyCode == 56){
        tocar_som(solb5);

        $(".tecla-solb5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-solb5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 09
$(document).keypress(function(e){
    if(e.wich == 57 || e.keyCode == 57){
        tocar_som(lab5);

        $(".tecla-lab5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-lab5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla 0
$(document).keypress(function(e){
    if(e.wich == 48 || e.keyCode == 48){
        tocar_som(sib5);

        $(".tecla-sib5").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-sib5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla -
$(document).keypress(function(e){
    if(e.wich == 45 || e.keyCode == 45){
        tocar_som(reb6);

        $(".tecla-reb6").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-reb6").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla =
$(document).keypress(function(e){
    if(e.wich == 61 || e.keyCode == 61){
        tocar_som(mib6);

        $(".tecla-mib6").css({
            transform: "translateY(3px)",
            background: "#1b1b1b"
        });

        setTimeout(function(){
            $(".tecla-mib6").removeAttr( 'style' );
        }, 100);
    }
    
});

//CONTROLES -- TECLAS BRANCAS

//tecla A
$(document).keypress(function(e){
    if((e.wich == 97 || e.keyCode == 97) || (e.wich == 65 || e.keyCode == 65 )){
        tocar_som(do4);

        $(".tecla-do4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla S
$(document).keypress(function(e){
    if((e.wich == 83 || e.keyCode == 83) || (e.wich == 115 || e.keyCode == 115 )){
        tocar_som(re4);

        $(".tecla-re4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla D
$(document).keypress(function(e){
    if((e.wich == 68 || e.keyCode == 68) || (e.wich == 100 || e.keyCode == 100 )){
        tocar_som(mi4);

        $(".tecla-mi4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla F
$(document).keypress(function(e){
    if((e.wich == 70 || e.keyCode == 70) || (e.wich == 102 || e.keyCode == 102 )){
        tocar_som(fa4);

        $(".tecla-fa4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-fa4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla G
$(document).keypress(function(e){
    if((e.wich == 71 || e.keyCode == 71) || (e.wich == 103 || e.keyCode == 103 )){
        tocar_som(sol4);

        $(".tecla-sol4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-sol4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla H
$(document).keypress(function(e){
    if(( e.wich == 72 || e.keyCode == 72) || (e.wich == 104 || e.keyCode == 104 )){
        tocar_som(la4);

        $(".tecla-la4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-la4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla J
$(document).keypress(function(e){
    if(( e.wich == 74 || e.keyCode == 74) || (e.wich == 106 || e.keyCode == 106 )){
        tocar_som(si4);

        $(".tecla-si4").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-si4").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla K
$(document).keypress(function(e){
    if((e.wich == 75 || e.keyCode == 75) || (e.wich == 107 || e.keyCode == 107 )){
        tocar_som(do5);

        $(".tecla-do5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla L
$(document).keypress(function(e){
    if((e.wich == 76 || e.keyCode == 76) || (e.wich == 108 || e.keyCode == 108 )){
        tocar_som(re5);

        $(".tecla-re5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla Z
$(document).keypress(function(e){
    if((e.wich == 90 || e.keyCode == 90) || (e.wich == 122 || e.keyCode == 122 )){
        tocar_som(mi5);

        $(".tecla-mi5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla X
$(document).keypress(function(e){
    if((e.wich == 88 || e.keyCode == 88) || (e.wich == 120 || e.keyCode == 120 )){
        tocar_som(fa5);

        $(".tecla-fa5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-fa5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla C
$(document).keypress(function(e){
    if((e.wich == 67 || e.keyCode == 67) || (e.wich == 99 || e.keyCode == 99 )){
        tocar_som(sol5);

        $(".tecla-sol5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-sol5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla V
$(document).keypress(function(e){
    if((e.wich == 118 || e.keyCode == 118) || (e.wich == 86 || e.keyCode == 86 )){
        tocar_som(la5);

        $(".tecla-la5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-la5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla B
$(document).keypress(function(e){
    if((e.wich == 66 || e.keyCode == 66) || (e.wich == 98 || e.keyCode == 98 )){
        tocar_som(si5);

        $(".tecla-si5").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-si5").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla N
$(document).keypress(function(e){
    if((e.wich == 78 || e.keyCode == 78) || (e.wich == 110 || e.keyCode == 110 )){
        tocar_som(do6);

        $(".tecla-do6").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-do6").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla M
$(document).keypress(function(e){
    if((e.wich == 109 || e.keyCode == 109) || (e.wich == 77 || e.keyCode == 77 )){
        tocar_som(re6);

        $(".tecla-re6").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-re6").removeAttr( 'style' );
        }, 100);
    }
    
});

//tecla X
$(document).keypress(function(e){
    if((e.wich == 44 || e.keyCode == 44) || (e.wich == 60 || e.keyCode == 60 )){
        tocar_som(mi6);

        $(".tecla-mi6").css({
            transform: "translateY(3px)",
			background: "#e2e0e0"
        });

        setTimeout(function(){
            $(".tecla-mi6").removeAttr( 'style' );
        }, 100);
    }
    
});


    

}); 