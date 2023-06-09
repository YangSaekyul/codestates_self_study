function recursion() {
  console.log("recursion");
  recursion();
}
// 무한 반복됨

// 문제: 자연수로 이루어진 리스트(배열)를 입력받고, 리스트의 합을 리턴하는 함수 `arrSum`을 작성하세요.
// 1. 하드 코딩
arrSum([1, 2, 3, 4, 5]) === 1 + arrSum([2, 3, 4, 5]);
arrSum([2, 3, 4, 5]) === 2 + arrSum([3, 4, 5]);
arrSum([3, 4, 5]) === 3 + arrSum([4, 5]);
arrSum([4, 5]) === 4 + arrSum([5]);
arrSum([5]) === 5 + arrSum([]); // 빈 배열을 받게 됨

// 2. 위 단계 반영
function arrSum(arr) {
  // 빈 배열 받았을 때 0 리턴
  // or 재귀 멈춤
  // base case : 재귀의 탈출 조건
  if (arr.length === 0) return 0;

  // 배열의 첫 요소 + 나머지 요소가 담긴 배열을 받는 함수
  // or 재귀를 통해 쪼개나감
  // recursive case : 그렇지 않은 경우
  return arr.shift() + arrSum(arr);
}
