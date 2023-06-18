# NumToWord.js

### NumToWord.js | MIT License | https://github.com/dak-ia/NumToWord.js/blob/main/LICENSE

# Japanese

数字を各言語の単語に変換します。
以下の関数があります。

_NumToWord.toLocaleString_  
_NumToWord.toSi_  
_NumToWord.toEn_  
_NumToWord.toJp_  
_NumToWord.toJpDaiji_

## 構文

```javascript
let word = NumToWord.toEn(number);
let word = NumToWord.toLocaleString(locale, number);
```

## 引数

### number

number 型でも string 型でもどちらでも入力できます。半角でも全角でもどちらでも問題ありません。  
しかし、引数は string 型推奨です。number 型の場合、内部で使用している toString()などの処理の都合上、予期せぬ結果になることがあります。  
数字以外の文字を入力すると*NaN*エラーが発生します。  
同様に*123.456.789*のように小数点を 2 つ入力以上すると、自然数ではないのでエラーが発生します。  
引数が空だと*undefined*エラーが発生します。引数が大きく、辞書の範囲外になる場合は*overflow*エラーが発生します。  
内部でカンマを消しているため*123,456,789*のような入力値の場合は*123456789*に変換されるのでそのまま利用できます。  
指数表記の入力には現在未対応です。

- *NumToWord.toEn*は数字を英単語の数字に変換します。10^306（uncentillion）まで対応しています。
- *NumToWord.toJp*は数字を漢数字に変換します。10^68（無量大数）まで対応しています。
- *NumToWord.toJpDaiji*は数字を漢数字に変換したうえで、対応している文字を大字に変換します。10^68（無量大数）まで対応していますが変換されるのは萬（万）までです。

### locale

言語を選択できます。En、Jp などの NumToWord が対応している言語すべてに対応しています。

## 返値

### word

出力です。文字型になります。

## 例

### 入力

_123456.789_

### 出力

- _NumToWord.toLocaleString("en",123456.789)_ →
  - _One hundred twenty-three thousand four hundred fifty-six point seven eight nine_
- _NumToWord.toSi_ →
  - _123.457K_
- _NumToWord.toEn_ →
  - _One hundred twenty-three thousand four hundred fifty-six point seven eight nine_
- _NumToWord.toJp_ →
  - _十二万三千四百五十六・七八九_
- _NumToWord.toJpDaiji_ →
  - _拾弐萬参阡肆陌伍拾陸・漆捌玖_

## やるかもしれないこと（予定）

- 他言語対応
- 数字の区切り文字は世界を見渡すとをカンマだけではないようなので、ピリオドやスペースに対応
- 指数表記の入力に対応
- 数学的な記号に対応
- （あれば）quadragintillion の先
- （あれば）無量大数の先
- （あれば）萬の先
- Short scale と Long scale についての対応
- 逆変換の対応

# English

Converts numbers to words in each language.
There are the following functions.

_NumToWord.toLocaleString_  
_NumToWord.toSi_  
_NumToWord.toEn_  
_NumToWord.toJp_  
_NumToWord.toJpDaiji_

## Syntax

```javascript
let word = NumToWord.toEn(number);
```

## argument

### number

Both number and string types can be used as input, regardless of whether they are half-width or full-width characters.  
However, string type is recommended for arguments. If a number type is used, unexpected results may occur due to processing such as toString().  
Entering characters other than numbers will result in a NaN error.  
Similarly, if two or more decimal points are entered, such as 123.456.789, an error will occur because it is not a natural number.  
If the argument is empty, an undefined error will occur. If the argument is large and outside the range of the dictionary, an overflow error will occur.  
Commas are removed internally, so input values such as 123,456,789 can be used as they are.  
Exponential notation is currently not supported.

- NumToWord.toEn converts numbers to English word numbers and supports up to 10^306 (uncentillion).
- NumToWord.toJp converts numbers to Kanzi numerals and supports up to 10^68 (無量大数).
- NumToWord.toJpDaiji converts numbers to Kanzi numerals and then converts the corresponding characters to large letters. It supports up to 10^68 (無量大数), but only up to 萬 (万) is converted.

### locale

You can choose your language. It supports all languages supported by NumToWord such as En, Jp.

## Return value

### word

The output. It will be a character type.

## example

### input

_123456.789_

### output

- _NumToWord.toLocaleString("en",123456.789)_ →
  - _One hundred twenty-three thousand four hundred fifty-six point seven eight nine_
- _NumToWord.toSi_ →
  - _123.457K_
- _NumToWord.toEn_ →
  - _One hundred twenty-three thousand four hundred fifty-six point seven eight nine_
- _NumToWord.toJp_ →
  - _十二万三千四百五十六・七八九_
- _NumToWord.toJpDaiji_ →
  - _拾弐萬参阡肆陌伍拾陸・漆捌玖_

## What I might do (planned)

- Support for other languages
- Support for decimal separators other than commas, such as periods or spaces, as they are used in different parts of the world
- Support for input in exponential notation
- Support for mathematical symbols
- Beyond quadragintillion, if applicable
- Beyond the "無量大数" (10^68), if applicable
- Beyond "萬" (10,000), if applicable
- Support for both short scale and long scale number naming systems
- Support for converting numbers back to their original form

## Version

- Ver.0.1.0 earlier are beta versions
- 0.1.0 2023/06/18(UTC+09) : First release
