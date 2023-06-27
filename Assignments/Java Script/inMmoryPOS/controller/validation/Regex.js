export class Regex {

    static test(regex, input,button) {
        const reg=regex;
        if (reg.test(input.val())){
            input.css('color',"black");
            button.attr("disabled",false);
        }else {
            input.css('color',"red");
            button.attr("disabled",true);
        }
    }
}