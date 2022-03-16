# NumToWord.js
### NumToWord.js | MIT License | https://github.com/dak-ia/NumToWord.js/blob/main/LICENSE

# Japanese
数字を各言語の単語に変換します。
以下の関数があります。

*num_to_word_en*  
*num_to_word_jp*  
*num_to_word_jp_dai*  

## 構文
```javascript
let word = num_to_word_en(number);
```

## 引数
### number
引数（入力）です。数値型でも文字型でもどちらでも入力できます。半角でも全角でもどちらでも問題ありません。  
数字以外の文字を入力すると*NaN*エラーが発生しますが*πΠeEｅ*Ｅの6つは例外で、それぞれ円周率とネイピア数に変換して処理します。  
引数が空だと*undefined*エラーが発生します。引数が大きく、辞書の範囲外になる場合は*overflow*エラーが発生します。  
内部でカンマを消しているため*123,456,789*のような入力値の場合は*123456789*に変換されるのでそのまま利用できます。  
指数表記の入力には現在未対応です。*123.456.789*のように小数点を2つ入力以上すると*123.456*のみの結果が表示され*789*以下は出力されず無視されます。  
*num_to_word_en*は数字を英数字（？）に変換します。10^123（quadragintillion）まで対応しています。  
*num_to_word_jp*は数字を漢数字に変換します。10^68（無量大数）まで対応しています。  
*num_to_word_jp_dai*は数字を漢数字に変換したうえで対応している文字を大字に変換します。10^68（無量大数）まで対応していますが変換されるのは萬（万）までです。  

## 返値
### word
出力です。文字型になります。  

## 例
### 入力
*123456.789*
### 出力
*num_to_word_en*→*One hundred twenty three thousand four hundred fifty six point seven eight nine*  
*num_to_word_jp*→*十二万三千四百五十六・七八九*  
*num_to_word_jp_dai*→*拾弐萬参阡肆陌伍拾陸・漆捌玖*  

## やるかもしれないこと（予定）
* 他言語対応
* 数字の区切り文字をカンマだけでなくピリオドやスペースに対応。（小数点はについても指定可能）
* 指数表記の入力に対応
* quadragintillionの先（一般的なもののみ）
* 無量大数の先（一般的なもののみ）
* 萬の先（一般的なもののみ）

# English by Google Translate
Converts numbers to words in each language.
There are the following functions.

*num_to_word_en*  
*num_to_word_jp*  
*num_to_word_jp_dai*  

## Syntax
```javascript
let word = num_to_word_en (number);
```

## argument
### number
It is an argument (input). You can enter either a numeric type or a character type. It doesn't matter whether it is half-width or full-width.
If you enter characters other than numbers, a * NaN * error will occur, with the exception of * πΠeEe * E, which will be converted to pi and the number of Napiers, respectively.
If the argument is empty, a * undefined * error will occur. If the argument is large and out of range of the dictionary, a * overflow * error will occur.
Since the comma is deleted internally, input values such as * 123,456,789 * will be converted to * 123456789 * and can be used as they are.
Input of exponential notation is not currently supported. If two or more decimal points are entered, such as * 123.456.789 *, the result of only * 123.456 * will be displayed, and the following * 789 * will not be output and will be ignored.
* num_to_word_en * converts numbers to alphanumericals (?). It supports up to 10 ^ 123 (quadragintillion).
* num_to_word_jp * converts numbers to Kanzi numerals. It supports up to 10 ^ 68 (immeasurables).
* num_to_word_jp_dai * converts numbers to Kanji numerals and then converts the corresponding characters to Daiji. It supports up to 10 ^ 68 （無量大数）, but only up to 萬（万）.

## Return value
### word
The output. It will be a character type.

## example
### input
*123456.789*
### output
*num_to_word_en*→*One hundred twenty three thousand four hundred fifty six point seven eight nine*  
*num_to_word_jp*→*十二万三千四百五十六・七八九*  
*num_to_word_jp_dai*→*拾弐萬参阡肆陌伍拾陸・漆捌玖*  

## What I might do (planned)
* Supports other languages  
* Supports number delimiters not only commas but also periods and spaces. (The decimal point can also be specified)  
* Supports input of exponential notation  
* Beyond quadragintillion (general only)  
* Beyond 無量大数(general only)  
* Beyond 萬(general only)  


# English by DeepL
Converts numbers to words in each language.
The following functions are available

*num_to_word_en*  
*num_to_word_jp*  
*num_to_word_jp_dai*

## Syntax
```javascript
let word = num_to_word_en(number);
```

## Arguments
### number
Argument (input). You can input either numeric or character type. Either one-byte or two-byte characters are acceptable.  
If you enter non-numeric characters, a *NaN* error will occur, with the exception of *πΠeEe*E, which will be converted to pi and Napier numbers, respectively, and processed.  
If the argument is empty, an *undefined* error is generated. If the argument is large and outside the range of the dictionary, an *overflow* error is raised.  
Because of internal comma erasing, input values such as *123,456,789* are converted to *123456789* and can be used as they are.  
Exponential notation is currently not supported. If you enter two or more decimal points, such as *123.456.789*, only *123.456* will be displayed and anything below *789* will be ignored.  
*num_to_word_en* converts numbers to alphanumeric (?) characters. It supports up to 10^123 (quadragintillion).  
*num_to_word_jp* converts numbers to Kanji numerals, up to 10^68 (a countless number).  
*num_to_word_jp_dai* converts numbers to Kanji numerals and then converts the corresponding characters to Daiji, up to 10^68 (無量大数) but only up to 萬（万） are converted.  

## Return value
### word
Output. Character type.  

## Example
### Input
*123456.789*
### Output
*num_to_word_en*→*One hundred twenty three thousand four hundred fifty six point seven eight nine*  
*num_to_word_jp*→*十二万三千四百五十六・七八九*  
*num_to_word_jp_dai*→*拾弐萬参阡肆陌伍拾陸・漆捌玖*

## Things we may do (planned)
* Support for other languages
* Support for period and space as well as comma as number separators. (Decimal point can be specified as well.)
* Support for input of exponential notation
* Beyond quadragintillion (general only)
* Beyond 無量大数(general only)
* Beyond 萬(general only)




#### 2022/03/16 First Upload
