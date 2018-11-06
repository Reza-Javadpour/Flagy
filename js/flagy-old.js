$.fn.flagy = function() {


    // var $flagy = $('<div id="flagy" data-country-name="iran" data-country-code="+98" data-user-number="" class="input-group">\
    //         <div class="input-group-prepend">\
    //           <div class="input-group-text" id="country_code">\
    //             <div class="dropdown">\
    //                 <div class="dropbtn">\
    //                     <span id="down_sign" class="fas fa-sort-down"></span>\
    //                 </div>\
    //             </div>\
    //           </div>\
    //         </div>\
    //     </div>');
    // var $flag_img = $('<img  id="flag_img" src="./img/flag/Iran.png" alt="">');
    // var $myDropdown = $('<div id="myDropdown" class="dropdown-content">\
    //                     <input type="text" placeholder="Search.." id="search_input" onkeyup="filterFunction()">\
    //                     <a id="france" class="country" data-code="+33" href="#"><img class="inlist_flag" src="./img/flag/France.png" alt="">France</a>\
    //                     <a id="germany" class="country" data-code="+49" href="#"><img class="inlist_flag" src="./img/flag/Germany.png" alt="">Germany</a>\
    //                     <a id="iran" class="country" data-code="+98" href="#"><img class="inlist_flag" src="./img/flag/Iran.png" alt="">Iran</a>\
    //                     <a id="italy" class="country" data-code="+39" href="#"><img class="inlist_flag" src="./img/flag/Italy.png" alt="">Italy</a>\
    //                     <a id="uk" class="country" data-code="+44" href="#"><img class="inlist_flag" src="./img/flag/uk.png" alt="">United Kingdom</a>\
    //                     <a id="us" class="country" data-code="+1" href="#"><img class="inlist_flag" src="./img/flag/us.png" alt="">United State</a>\
    //                 </div>');
    // var $dd_btn = $('<div id="dropdown_btn" ></div>');
    // var $number_input = $('<input type="number" id="number_input" value="" class="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon">');
    // var $code_input = $('<input type="text" id="code_input" value="+98" class="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon">');

    // $('.dropbtn').prepend($flag_img);
    // $('.dropbtn').append($dd_btn);
    // $('.dropdown').append($myDropdown);
    // $('.input-group-text').append($code_input);
    // $code_input.after($number_input);
    // this.html($flagy);


    $.fn.set_data = function(key,value) {
        this.each(function() {
            this.value = value;
            $flagy.attr(key,value);
        });
        return this;
    };


    // $.fn.change_flag = function(flag) {
    //     var new_flag = './img/flag/'+flag+'.png';
    //     $flag_img.attr('src', new_flag);
    //     return this;
    // };


    $("a").click(function(e) {
        var data_code = $(this).attr("data-code");
        
        $code_input.set_data('data-country-code',data_code);
        
        $flagy.set_data('data-country-name',e.target.id);
        
        $flag_img.change_flag(e.target.id);
        
        $myDropdown.toggle("show");
    });


    $number_input.on('keyup', function(){
        var number = $number_input.val();
        $number_input.set_data('data-user-number',number);
    });
     
     
    $($code_input).keyup( function() {
        var code = $code_input.val();
        var t = $("[data-code='"+code+"']");
        var founded_code = t.attr('data-code');
        var founded_country = t.attr('id');
        if ( founded_code != null){
           $code_input.set_data('data-country-code',founded_code);
           $flagy.set_data('data-country-name',founded_country);
           $flag_img.change_flag(founded_country);
        }


    $.fn.get_data = function(key) {
        if (key) {
            return $flagy.attr(key);
        }else if(key == 'code'){
            return $flagy.attr(key);
        }else if(key == 'number'){
            return $flagy.attr(key);
        }else{
            return 'Undefine Parameter';
        }
    };

     // Toggle DropDown button

    });

    $dd_btn.on('click',function() {
        $myDropdown.toggle("show");
    });



};



//  Search bar in Dropdown
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search_input");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}