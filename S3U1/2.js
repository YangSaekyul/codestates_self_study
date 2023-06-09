function fac(num) {
  if (num <= 1) return num;

  return num * fac(num - 1);
}
