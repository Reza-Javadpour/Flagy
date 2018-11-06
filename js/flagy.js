$.fn.flagy = function() {
    // Start Each
    return this.each(function() {


        // #####################################
        // ######## Variables & Appends ########
        var _this = this;
        var $this = $(this);

        var flags_db = {'Iran':'+98','Germany':'+49','Italy':'+39','France':'+33','US':'+1'}
        var drdp='<div id="myDropdown" class="dropdown-content">';
        Object.keys(flags_db).forEach(function(k){
            drdp+= '<a data-country="'+k+'" data-code="'+flags_db[k]+'" href="#"><img class="inlist_flag" src="./img/flags/'+k+'.png" alt="">'+k+'</a>';
        });
        drdp+='</div>';
        var $myDropdown = $(drdp);

        var $flagy = $('<div id="flagy" data-country-name="iran" data-country-code="+98" data-user-number="" class="input-group">\
            <div class="input-group-prepend">\
            </div>');
        var $input_group_text = $('<div class="input-group-text" id="country_code">\
                  </div>');
        var $dropdown = $('<div class="dropdown">\
                    </div>');
        var $dropbtn = $('<div class="dropbtn">\
                    <span id="down_sign" class="fas fa-sort-down"></span>\
                    </div>');
        var $flag_img = $('<img  id="flag_img" src="./img/flags/Iran.png" alt="">');
        var $dd_btn = $('<div id="dropdown_btn" ></div>');

        var $search_input = $('<input type="text" placeholder="Search.." id="search_input">')
        var $number_input = $('<input type="number" id="number_input" value="" class="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon">');
        // var $code_input = $('<input type="text" id="code_input" value="+98" class="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon">');
        var $code_input = $('<span class="code_input">+98</span>');
        
        $flagy.append($input_group_text);
        $input_group_text.append($dropdown,$code_input);
        $dropdown.append($dropbtn,$myDropdown);
        $myDropdown.prepend($search_input);
        $dropbtn.prepend($flag_img).append($dd_btn);
        $code_input.after($number_input);

        $this.replaceWith($flagy);


        // #####################################
        // ############ Functions ##############
        _this.set_data = function(key,value){
            $flagy.attr(key,value);
        };

        _this.change_flag = function(flag){
            var new_flag = './img/flags/'+flag+'.png';
            $flag_img.attr('src', new_flag);
        };

        _this.select_item = function(country,code){
            _this.set_data('data-country-code',code);
            $code_input.html(code);
            _this.set_data('data-country-name',country);
            _this.change_flag(country);
            $myDropdown.css("display","none");
        };

        _this.check_code = function(code){
            var t = $("[data-code='"+code+"']");
            var founded_code = t.attr('data-code');
            var founded_country = t.attr('data-country');
            if ( founded_code != null){
               _this.set_data('data-country-code',founded_code);
               _this.set_data('data-country-name',founded_country);
               _this.change_flag(founded_country);
            }
        };

        _this.filterFunction = function(input){
            var filter, ul, li, a, i;
            filter = input.toUpperCase();
            a = $myDropdown.find("a");
            for (i = 0; i < a.length; i++) {
                if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        };

        $search_input.on('keyup', function(){
            var word = $search_input.val();
            _this.filterFunction(word)
        });


        $dd_btn.click(function(){
            $myDropdown.toggle("show");
        });

        
        $myDropdown.find('a').on('click', function(){
            data_country = ($(this).attr('data-country'));
            data_code = ($(this).attr('data-code'));                
            _this.select_item(data_country,data_code);
        });
     

        $number_input.on('keyup', function(){
            var number = $number_input.val();
            _this.set_data('value',number)
        });


        $code_input.keyup( function() {
            var code = $code_input.val();
            _this.check_code(code);
        });


    });
};

