function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const object = {};

  if (arr.length === 0) {
    return {};
  } else {
    const key = arr[0];
    const value = arr[arr.length - 1];

    object[key] = value;
  }

  return object;
}

function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  let years = 0;
  let principal = 1; // 원금

  while (principal < 2) {
    // 원금이 2배 이상이면 종료
    let interest = principal * (interestRate / 100);
    principal += interest;
    years++;
  }
  return years;
}

// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.
function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  let i = 1;
  while (i < num) {
    i *= 2;
  }
  return i === num;
}
