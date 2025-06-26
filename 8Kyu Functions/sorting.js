function twoSort(s) {
  const sorted_s = s.sort()
  const str = sorted_s[0]
  return str.split("").join("***")
}