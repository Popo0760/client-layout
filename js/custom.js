$(function (){
    var userVal = $("#usernameBE").val();
    if(userVal == ""){
        $("#row-login").css("display","block");
        $("#row-logout").css("display","none");
        $("#ps__cart").css("display","none");
    }else{
        $("#row-login").css("display","none");
        $("#row-logout").css("display","block");
        $("#hello-name").html("Xin chào, " + userVal)
    }
});

$(function(){
    var giaPK = $("#giaPK-input").val();
    var sL = $("#input__number").val();
    var giapk = $("#giaPK-span").text();
    var resultTongTien = parseInt(giaPK) * parseInt(sL);
    $("#tongTien").prepend('<span> '+ resultTongTien + ' đ </span>');
    $("#tamTinh").prepend('<span class="prices__value">'+ resultTongTien + ' đ </span>');
    $("#tongTienFinal").prepend('<span class="prices__value prices__value-final">'+ resultTongTien + ' đ </span>');
})

function cong(){
    var t =  document.getElementById("input__number").value;
    document.getElementById("input__number").value = parseInt(t) + 1;
}

function tru(){
    var t =  document.getElementById("input__number").value;
    if(t>1){
        document.getElementById("input__number").value = parseInt(t) - 1;
    }
}

$(function(){
    var giaTriAmount = $(".checkout-product-ordered-list-item__header--amount").html();
    var giaTriTongTien = $(".checkout-product-ordered-list-item__header--subtotal").html();
    $("._2hlLyg").prepend('Tổng số tiền ( ' + giaTriAmount + ' sản phẩm ) :');
    $("._7IQQY9").prepend(giaTriTongTien);
    $("._34fUBg").prepend(giaTriTongTien);
    $('._2ghey').prepend(giaTriTongTien);

    console.log(giaTriTongTien);
    
})

