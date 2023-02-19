let arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 6];
function removeDuplicate(arr) {
  let data = [...new Set(arr)];
  let count = 0;
  data.forEach(() => {
    return count++;
  });
  return count;
}
console.log("@SN ", removeDuplicate(arr));
