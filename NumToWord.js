/*! NumToWord.js ver0.2 | MIT License | https://github.com/dak-ia/NumToWord.js/blob/main/LICENSE */
const NumberToWordDictionaryAndFunction = {
    en_ones_place: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    en_tens: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    en_tens_place: ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    en_others_place: ["", " thousand ", " million ", " billion ", " trillion ", " quadrillion ", " quintillion ", " sextillion ", " septillion ", " octillion ", " nonillion ", " decillion ", " undecillion ", " duodecillion ", " tredecillion ", " quattuordecillion ", " quindecillion ", " sexdecillion ", " septendecillion ", " octodecillion ", " novemdecillion ", " vigintillion ", " unvigintillion ", " duovigintillion ", " tresvigintillion ", " quattuorvigintillion ", " quinvigintillion ", " sesvigintillion ", /*googol*/ " trestrigintillion ", " quattuortrigintillion ", " quintrigintillion ", " sestrigintillion ", " septentrigintillion ", " octotrigintillion ", " noventrigintillion ", " quadragintillion " /*??????????????????????????????quinquagintillion*/ ],
    jp_ones_place: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    jp_others_place: ["", "万", "億", "兆", "京", "垓", "秭", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数"],
    replace_num_A: function(n) {
        n = n.toString().replace(/[\uFF10-\uFF19]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        }).replace(/．/g, ".").replace(/，/g, "").replace(/\,/g, "").replace(/\s/g, "").replace(/＾/g, "^").replace(/[πΠ]/g, Math.PI).replace(/[eE]/g, Math.E).trim().split(".");
        n[0] = n[0].replace(/^0*/g, "");
        if (typeof n[1] != "undefined") {
            n[1] = n[1].replace(/0*$/g, "");
        } else {
            n[1] = ""
        }
        if (isNaN(n[0]) || (isNaN(n[1]) != "" && isNaN(n[1]))) {
            throw new Error("NaN");
        }
        n[0] = n[0].trim();
        n[1] = n[1].trim();
        return n;
    },
    en_under: function(x) {
        x = x.replace(/^0*/g, "");
        let y = "";
        if (Number(x) > 99) {
            y = x.slice(0, 1);
            x = x.slice(1);
            for (let i = 0; i <= 9; i++) {
                a = new RegExp(i, "g");
                y = y.replace(a, this.en_ones_place[i] + " hundred ");
            }
        }
        x = x.replace(/^0*/g, "");
        if (Number(x) > 19) {
            let t1 = x.slice(0, 1);
            let t2 = x.slice(-1);
            for (let i = 0; i <= 9; i++) {
                let a = new RegExp(i, "g");
                t1 = t1.replace(a, this.en_tens_place[i] + " ");
                if (t2 == "0") {
                    t2 = "";
                } else {
                    t2 = t2.replace(a, this.en_ones_place[i] + " ");
                }
            }
            x = t1 + t2;
        } else if (Number(x) > 9) {
            for (let i = 0; i <= 9; i++) {
                a = new RegExp("1" + i, "g");
                x = x.replace(a, this.en_tens[i] + " ");
            }
        } else if (Number(x) > 0) {
            for (let i = 0; i <= 9; i++) {
                a = new RegExp(i, "g");
                x = x.replace(a, this.en_ones_place[i] + " ");
            }
        } else {
            x = "";
        }
        return (y + x).trim();
    },
    jp_under: function(x) {
        x = x.replace(/^0*/g, "");
        let t1 = x.slice(-1);
        let t2 = x.slice(-2, -1);
        let t3 = x.slice(-3, -2);
        let t4 = x.slice(-4, -3);
        for (let i = 0; i <= 9; i++) {
            let a = new RegExp(i, "g");
            if (i == 0 && (t2 != "" || t3 != "" || t4 != "")) {
                t1 = t1.replace(a, "");
            } else {
                t1 = t1.replace(a, this.jp_ones_place[i]);
            }
            if (i == 0) {
                t2 = t2.replace(a, "");
                t3 = t3.replace(a, "");
                t4 = t4.replace(a, "");
            } else if (i == 1) {
                t2 = t2.replace(a, "十");
                t3 = t3.replace(a, "百");
                t4 = t4.replace(a, "千");
            } else {
                t2 = t2.replace(a, this.jp_ones_place[i] + "十");
                t3 = t3.replace(a, this.jp_ones_place[i] + "百");
                t4 = t4.replace(a, this.jp_ones_place[i] + "千");
            }
        }
        return (t4 + t3 + t2 + t1).trim();
    },
};

function num_to_word_en(n) {
    try {
        if (n == "" | n == undefined) {
            throw new Error("undefined");
        }
        n = NumberToWordDictionaryAndFunction.replace_num_A(n);
        let over_point = n[0];
        let under_point = "";
        if (n[1] != "") {
            under_point = "point " + n[1];
        }
        if (over_point.length < 127) {
            let over_array = [];
            for (let i = 0; i <= 9; i++) {
                a = new RegExp(i, "g");
                under_point = under_point.replace(a, NumberToWordDictionaryAndFunction.en_ones_place[i] + " ");
            }
            for (let i = 0; i < Math.ceil(over_point.length / 3); i++) {
                if (i == 0) {
                    over_array.push(over_point.slice(-3));
                } else {
                    over_array.push(over_point.slice(-i * 3 - 3, -i * 3));
                }
            }
            let t = "";
            for (let i = 0; i < over_array.length; i++) {
                if (over_array[i] != "000") {
                    t = NumberToWordDictionaryAndFunction.en_under(over_array[i]) + NumberToWordDictionaryAndFunction.en_others_place[i] + t;
                }
            }
            if (t.trim() == "ten duotrigintillion") {
                t = "googol";
            }
            over_point = t;
            if (over_point == "") {
                over_point = "Zero";
            }
            return (over_point.slice(0, 1).toUpperCase() + over_point.slice(1) + " " + under_point).trim();
        } else {
            throw new Error("overflow");
        }
    } catch (e) {
        throw new Error(e);
    }
}

function num_to_word_jp(n) {
    try {
        if (n == "" | n == undefined) {
            throw new Error("undefined");
        }
        n = NumberToWordDictionaryAndFunction.replace_num_A(n);
        let over_point = n[0];
        let under_point = "";
        if (n[1] != "") {
            under_point = "・" + n[1];
        }
        if (over_point.length < 73) {
            let over_array = [];
            for (let i = 0; i <= 9; i++) {
                a = new RegExp(i, "g");
                under_point = under_point.replace(a, NumberToWordDictionaryAndFunction.jp_ones_place[i]);
            }
            for (let i = 0; i < Math.ceil(over_point.length / 4); i++) {
                if (i == 0) {
                    over_array.push(over_point.slice(-4));
                } else {
                    over_array.push(over_point.slice(-i * 4 - 4, -i * 4));
                }
            }
            let t = "";
            for (let i = 0; i < over_array.length; i++) {
                if (over_array[i] != "0000") {
                    t = NumberToWordDictionaryAndFunction.jp_under(over_array[i]) + NumberToWordDictionaryAndFunction.jp_others_place[i] + t;
                }
            }
            over_point = t;
            if (over_point == "") {
                over_point = "〇";
            }
            return over_point + under_point;
        } else {
            throw new Error("overflow");
        }
    } catch (e) {
        throw new Error(e);
    }
}

function num_to_word_jp_dai(n) {
    try {
        let jp_dai_before = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"];
        let jp_dai_after = ["零", "壱", "弐", "参", "肆", "伍", "陸", "漆", "捌", "玖", "拾", "陌", "阡", "萬"];
        n = num_to_word_jp(n);
        for (let i = 0; i <= 13; i++) {
            let a = new RegExp(jp_dai_before[i], "g");
            n = n.replace(a, jp_dai_after[i]);
        }
        return n;
    } catch (e) {
        throw new Error(e);
    }
}
