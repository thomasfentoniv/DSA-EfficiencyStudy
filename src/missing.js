function missing1(A) {
  let N = A.length + 1;
  for (let i = 1; i <= N; i++) {
    let found = false;
    let j = 0;
    while (!found && j < A.length) {
      if (i === A[j]) {
        found = true;
      }
      j++;
    }
    if (!found) {
      return i;
    }
  }
}

function missing2(A) {
  let N = A.length + 1;
  let fullSum = (N * (N + 1)) / 2;
  let sum = A.reduce((acc, val) => acc + val, 0);
  return fullSum - sum;
}

module.exports = { missing1, missing2 };
