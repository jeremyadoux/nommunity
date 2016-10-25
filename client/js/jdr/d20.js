/**
 * d20.js
 *
 * Javascript library for rolling dice. Supports strings written in a dice-rolling syntax, eg. "d20", "4d6", "1d8+1".
 *
 * @author Michael Enger <mike@thelonelycoder.com>
 * @licence MIT
 */
(function() {
  "use strict";

  var d20 = {

    /**
     * Roll a number of dice and return the result.
     *
     * @param dice Type of dice to roll, can be represented in various formats:
     *               - a number (6, 12, 42)
     *               - dice syntax (d20, 4d6, 2d8+2)
     * @param verbose Whether or not all dice rolls should be returned as an array
     * @return Number|Array
     */
    roll: function(dice, verbose) {
      var result = d20.verboseRoll(dice),
        num = 0;

      if(verbose) {
        var str = "";
        for (var i in result) {
          num += result[i];
          str = str + "/"+result[i];
        }

        return {total: num, verbose: [str]};
      } else {
        for (var i in result) {
          num += result[i];
        }

        return num;
      }
    },

    /**
     * Roll a number of dice and return the result as an array.
     *
     * @param dice Type of dice to roll, can be represented in various formats:
     *               - a number (6, 12, 42)
     *               - dice syntax (d20, 4d6, 2d8+2)
     * @return Array
     */
    verboseRoll: function(dice) {
      var amount = [],
        mod = 0,
        results = [],
        returnedDice = [],
        match,
        num,
        modifiers;

      if (!dice) {
        throw new Error('Missing dice parameter.');
      }

      if (!isNaN(dice) &&
        parseInt(Number(dice)) == dice &&
        !isNaN(parseInt(dice, 10))) {
        return parseInt(dice);
      }

      if (typeof dice == 'string') {

        var listDice = dice.split("+");

        for(var diceList = 0; diceList < listDice.length; diceList++) {
          if(!isNaN(listDice[diceList]) &&
            parseInt(Number(listDice[diceList])) == listDice[diceList] &&
            !isNaN(parseInt(listDice[diceList], 10))) {
            mod += parseInt(listDice[diceList]);
          }

          match = listDice[diceList].match(/^\s*(\d+)?\s*d\s*(\d+)\s*(.*?)\s*$/);
          if (match) {
            if (match[1]) {
              amount.push(parseInt(match[1]));
            }
            if (match[2]) {
              returnedDice.push(parseInt(match[2]));
            }
          }
        }
      }

      for (var i = 0; i < returnedDice.length; i++) {
        /* We dont want to ruin verbose, so we dont skip the for loop */
        for(var j = 0; j < amount[i]; j++) {
          if (returnedDice[i] !== 0) {
            num = Math.floor(Math.random() * returnedDice[i] + 1);
          } else {
            num = 0;
          }
          results.push(num);
        }
      }

      if (mod != 0) {
        results.push(mod);
      }

      return results;
    }
  };

  if (typeof window != 'undefined') {
    window.d20 = d20;
  } else if (typeof exports != 'undefined') {
    for (var k in d20) {
      exports[k] = d20[k];
    }
  }

})();
