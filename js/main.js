$(document).ready(function() {



// ЦЕНЫ

    var price_material_white = 7.5,
        price_material_gold = 10.9,
        price_material_silver = 10.9,
        price_material_pearl = 10.9,
        price_material_transparent = 13,
        price_thickness_slim = 1.5,
        price_embossing_gold = 1.5,
        price_embossing_silver = 1.5,
        price_magnet_loco = 1,
        price_magnet_hico = 1.5,
        price_signature_standart = 1.8;





// СТАРТОВАЯ АНИМАЦИЯ

    setTimeout( function() {
        $('#card_rotating').addClass('rotate');
    }, 500 );
    setTimeout( function() {
        $('#card_rotating').removeClass('animated');
    }, 1000 );





// РАСЧЕТ ЦЕНЫ И ВЕСА

    var price = 0,
        price_material = 0,
        price_thickness = 0,
        price_embossing = 0,
        price_magnet = 0,
        price_signature = 0;
    
    price_material = price_material_white;
    
    function priceRecount() {
        price = price_material + price_thickness + price_embossing + price_magnet + price_signature;
        $('#card_price').html(price + ' тг');
        totalRecount();
    }
    
    function totalRecount() {
        amount = $('#card_amount').val();
        $('#card_weight').html( 0.005 * amount + ' кг' );
        $('#card_total').html( price * amount + ' тг' );
    }
    
    $('#card_amount').on('input',function(e){
        totalRecount();
    });
    
    priceRecount();
    totalRecount();





// ВРАЩЕНИЕ КАРТЫ ВРУЧНУЮ

    var offset = 30, startX;
    var elem = document.getElementById('card_rotating');
    $('#card_preview').on('mousedown', function (e) {
            startX = e.pageX - offset;
        })
        .on('mouseup', function() {
            startX = null;
        })
        .on('mousemove', function (e) {
            if(startX) {
               offset = e.pageX - startX;
               elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
            }
    });
    $('#card_preview').bind('touchstart', function (e) {
            startX = e.pageX - offset;
            console.log('Touch Start');
        })
        .bind('touchend', function() {
            startX = null;
            console.log('Touch End');
        })
        .bind('touchmove', function (e) {
            console.log('Touch Move');
            if(startX) {
               offset = e.pageX - startX;
               elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
            }
    });





// ВЫБОР МАТЕРИАЛА

    $('input[name="card_color"]').change(function() {
        if (this.value == 'white') {
            $('#card_front').removeClass();
            $('#card_back').removeClass();
            price_material = price_material_white;
        }
        else if (this.value == 'gold') {
            $('#card_front').removeClass().addClass('gold');
            $('#card_back').removeClass().addClass('gold');
            price_material = price_material_gold;
        }
        else if (this.value == 'silver') {
            $('#card_front').removeClass().addClass('silver');
            $('#card_back').removeClass().addClass('silver');
            price_material = price_material_silver;
        }
        else if (this.value == 'pearl') {
            $('#card_front').removeClass().addClass('pearl');
            $('#card_back').removeClass().addClass('pearl');
            price_material = price_material_pearl;
        }
        else if (this.value == 'transparent') {
            $('#card_rotating').addClass('transparent');
            $('#card_front').removeClass().addClass('transparent');
            $('#card_back').removeClass().addClass('transparent');
            price_material = price_material_transparent;
        }
        priceRecount();
    });





// ПЕРЕМЕННАЯ 1

    $('#card_var_01').on('input',function(e){
        var o = ( offset % 360 + 360 + 180 ) % 360;
        if (o <= 100 | o >= 260 ) {
            offset = offset - o + 210;
        }
        $('#card_rotating').addClass('animated');
        elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
        setTimeout( function() {
            $('#card_rotating').removeClass('animated');
        }, 500 );
        var value = $('#card_var_01').val();
        $('#card_front text').each( function() {
            $(this).html(value);
        });
        $('#card_back text').html(value);
    });





// ВЫДАВЛИВАНИЕ

    $('input[name="card_var_01_color"]').change(function() {
        var o = ( offset % 360 + 360 + 180 ) % 360;
        if (o <= 100 | o >= 260 ) {
            offset = offset - o + 210;
        }
        $('#card_rotating').addClass('animated');
        elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
        setTimeout( function() {
            $('#card_rotating').removeClass('animated');
        }, 500 );
        if (this.value == 'no') {
            $('#card_front text').each( function() {
                $(this).removeClass('gold').removeClass('silver');
            });
            $('#card_back text').addClass('hidden');
            price_embossing = 0;
        }
        else if (this.value == 'gold') {
            $('#card_front text').each( function() {
                $(this).removeClass('silver').addClass('gold');
            });
            $('#card_back text').removeClass('hidden');
            price_embossing = price_embossing_gold;
        }
        else if (this.value == 'silver') {
            $('#card_front text').each( function() {
                $(this).removeClass('gold').addClass('silver');
            });
            $('#card_back text').removeClass('hidden');
            price_embossing = price_embossing_silver;
        }
        priceRecount();
    });





// МАГНИТНАЯ ПОЛОСА

    $('input[name="card_magnet"]').change(function() {
        var o = ( offset % 360 + 360 ) % 360;
        if (o <= 100 | o >= 260 ) {
            offset = offset - o + 210;
        }
        $('#card_rotating').addClass('animated');
        elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
        setTimeout( function() {
            $('#card_rotating').removeClass('animated');
        }, 500 );
        if (this.value == 'no') {
            $('#card_back magnet').addClass('hidden');
            price_magnet = 0;
        } else if (this.value == 'hico') {
            $('#card_back magnet').removeClass('hidden');
            price_magnet = price_magnet_hico;
        } else if (this.value == 'loco') {
            $('#card_back magnet').removeClass('hidden');
            price_magnet = price_magnet_loco;
        }
        priceRecount();
    });





// ПОЛОСА ДЛЯ ПОДПИСИ

    $('#card_signature').change(function() {
        var o = ( offset % 360 + 360 ) % 360;
        if (o <= 100 | o >= 260 ) {
            offset = offset - o + 210;
        }
        $('#card_rotating').addClass('animated');
        elem.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
        setTimeout( function() {
            $('#card_rotating').removeClass('animated');
        }, 500 );
        if($(this).is(":checked")) {
            $('#card_rotating signature').removeClass('hidden');
            price_signature = price_signature_standart;
        } else {
            $('#card_rotating signature').addClass('hidden');
            price_signature = 0;
        }
        priceRecount();
    });
    
    
    
    
    
// POPUP
    
    function popdown() {
        $('fade').addClass('hidden');
        $('popup').each( function() {
            $(this).addClass('hidden');
        });
    }
    
    $('fade').click( function() {
        popdown();
    });
    
    $('.icon-close').click( function() {
        popdown();
    });
    
    $('#get_result button.cta').click( function() {
        popdown();
    });
    

	
})