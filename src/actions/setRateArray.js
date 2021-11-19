export default function setRateArray(rate) {
  // 적용 안됨
  let rateArr = Array(rate).fill(1)
  let unRateArr = Array(5 - rate).fill(0)
  let setRate = rateArr.concat(unRateArr)
  return setRate
}
