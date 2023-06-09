// 재귀함수 문제 풀이
// 모든 문제에 for / while은 사용 금지라고 봐야함
// head : 배열의 첫 요소
// tail : head를 뺀 남은 배열

// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
function sumTo(num) {
  if (num <= 1) return num;
  return num + sumTo(num - 1);
}

// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
function isOdd(num) {
  if (num === 0) return false;
  if (num === 1) return true;
  if (num < 0) {
    return isOdd(num + 2);
  } else {
    return isOdd(num - 2);
  }
}

// 수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴해야 합니다.
// n! 은 1부터 n까지 1씩 증가한 모든 값의 곱입니다.
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.
function arrSum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] + arrSum(arr.slice(1));
}

// 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.
function arrProduct(arr) {
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0];
  return arr[0] * arrProduct(arr.slice(1));
}

// 배열을 입력받아 그 길이를 리턴해야 합니다.
function arrLength(arr) {
  if (arr.isEmpty()) return 0;
  return 1 + arrLength(arr.slice(1));
}

// 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
function drop(num, arr) {
  if (num === 0 || arr.length === 0) return arr;
  else return drop(num - 1, arr.slice(1));
}

// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
function take(num, arr) {
  if (num === 0 || arr.length === 0) return [];

  // 배열의 첫 요소
  const head = arr[0];
  // 나머지 배열
  const tail = arr.slice(1);

  // head와 num이 1 줄어든 상태의 재귀 함수 결과를 합친 새 배열 반환
  return [head].concat(take(num - 1, tail));
  // num이 3일 경우, arr는 [1,2,3,4]일 경우
  // 처음 호출: take(3, [1,2,3,4]) -> [1].concat(take(2, [2,3,4]))
  // 두번째 호출: take(2, [2,3,4]) -> [2].concat(take(1, [3,4]))
  // 세번째 호출: take(1, [3,4]) -> [3].concat(take(0, [4]))
  // 마지막 호출: take(0, [4]) -> []
  // [1,2,3].concat([]) -> [1,2,3]
}

// 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.
function and(arr) {
  if (arr.length === 0) return true;

  const head = arr[0];
  const tail = arr.slice(1);

  if (!head) return false;
  return and(tail);
}

// 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.
function or(arr) {
  if (arr.length === 0) return false;

  const head = arr[0];
  const tail = arr.slice(1);

  return head || or(tail);
  // [false, false, true]
  // 1. head : false / tail : [false, true]
  // 2. head : false / tail : [true]
  // 3. head : true / tail : []
}

// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
function reverseArr(arr) {
  if (arr.length === 0) return [];

  const head = arr[0];
  const tail = arr.slice(1);

  return reverseArr(tail).concat(head);
}

// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
function findMatryoshka(matryoshka, size) {
  if (matryoshka === null || typeof matryoshka !== "object") return false;
  if (matryoshka.size === size) return true;
  return findMatryoshka(matryoshka.matryoshka, size);
}

// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.
function unpackGiftbox(giftBox, wish) {
  // 빈 배열이거나 빈 문자열일 경우 false
  if (giftBox.length === 0 || wish === "") return false;

  // giftBox 각 요소 반복
  for (let i = 0; i < giftBox.length; i++) {
    // 현재 요소가 배열인 경우 재귀 함수
    if (Array.isArray(giftBox[i])) {
      if (unpackGiftbox(giftBox[i], wish)) return true;
    } else if (giftBox[i] === wish) return true;
  }

  return false;
}

// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
function flattenArr(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArr(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
