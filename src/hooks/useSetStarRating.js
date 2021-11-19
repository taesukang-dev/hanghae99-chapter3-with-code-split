import { useState } from 'react'

export default function useSetStarRating(rate) {
  // 적용 안됨
  let [select, setSelect] = useState(0)
  setSelect(rate)

  return select
}
