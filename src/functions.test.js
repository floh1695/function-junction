const max = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
}

const maxOfThree = (x, y, z) => {
  return max(max(x, y), z);
}

const sum = (x, y) => {
  return x + y;
}

const sumOfArray = (arr) => {
  let s = 0;
  arr.forEach((element) => {
    s += element;
  });
  return s;
}

const isIt = (isItThis) => {
  const isItF = (s) => {
    return isItThis.includes(s);
  }
  return isItF;
}

const isVowel = isIt('aeiouAEIOU');
const isDigit = isIt('0123456789');

const isConsonant = (s) => {
  return !isVowel(s) && !isDigit(s)
}

const rovarspraket = (input) => {
  input = String(input);
  let newString = '';
  input.split('').forEach((s) => {
    if (isConsonant(s)) {
      newString += s + 'o' + s;
    }
    else {
      newString += s;
    }
  });
  return newString;
}

const reverse = (input) => {
  let newString = '';
  for (let i = 0; i < input.length; i++) {
    newString = input[i] + newString;
  }
  return newString;
}

const findLongestWord = (input) => {
  let longest = '';
  input.split(' ').forEach((s) => {
    if (s.length > longest.length) {
      longest = s;
    }
  });
  return longest;
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
