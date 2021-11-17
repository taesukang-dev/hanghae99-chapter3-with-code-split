import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import '../styles/detail.scss'

const Detail = () => {
  let [select, setSelect] = useState([0, 0, 0, 0, 0])
  let navigate = useNavigate()
  let { id } = useParams()
  // useEffect(() => {
  //   window.addEventListener('keydown', (e) => {
  //     if (Number(e.key) >= 0 && 6 > Number(e.key)) {
  //       ratingValue(Number(e.key))
  //     }
  //   })
  // })
  const ratingValue = (e) => {
    let temp = Array(select.length).fill(0)
    if (e === parseInt(e)) {
      for (let i = 0; i < e; i++) {
        temp[i] = 1
      }
    } else {
      for (let i = 0; i < Number(e.target.attributes.value.nodeValue); i++) {
        temp[i] = 1
      }
    }
    return setSelect([...temp])
  }
  return (
    <div className="detail--wrapper">
      <h3 className="detail--title">
        <span className="detail--hr">{id}요일</span> 평점 남기기
      </h3>
      <div className="detail--rate">
        {select.map((el, i) => {
          return (
            <div
              key={i}
              value={i + 1}
              className={
                select[i] === 1 ? 'rate__selected' : 'rate__nonselected'
              }
              onClick={(e) => {
                ratingValue(e)
              }}
            ></div>
          )
        })}
      </div>
      <button className="detail--submit" onClick={() => navigate('/')}>
        평점 남기기
      </button>
    </div>
  )
}
export default Detail
