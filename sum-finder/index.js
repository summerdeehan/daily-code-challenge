const finder = (arr, k) => {
  let sorted = arr.sort((a,b) => a - b);
  let i = 0;
  let j = arr.length -1;
  while (i < j) {
    let sum = sorted[i] + sorted[j];
    if (sum === k) return true;
    if (sum > k) j--;
    if (sum < k) i++;
  }
  return false;
}