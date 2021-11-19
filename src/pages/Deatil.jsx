import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import '../styles/detail.scss'

const Detail = () => {
  let [select, setSelect] = useState(0)
  let navigate = useNavigate()
  let { id } = useParams()
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (Number(e.key) >= 0 && 6 > Number(e.key)) {
        setSelect(e.key)
      }
    })
  }, [])
  return (
    <div className="detail--wrapper">
      <h3 className="detail--title">
        <span className="detail--hr">{id}요일</span> 평점 남기기
      </h3>
      <div className="detail--rate">
        {[0, 1, 2, 3, 4].map((el, i) => {
          return (
            <div
              key={i}
              value={i + 1}
              className={select > i ? 'rate__selected' : 'rate__nonselected'}
              onClick={() => {
                setSelect(i + 1)
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
