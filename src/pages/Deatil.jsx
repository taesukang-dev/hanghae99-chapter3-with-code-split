import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../styles/detail.scss'

const Detail = () => {
  let [select, setSelect] = useState(0)
  let { id } = useParams()

  // url 제어
  const navigate = (url) => {
    import('../hooks/useNavigateToDetail').then((result) => result.default(url))
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      // type check
      if (Number(e.key) === parseInt(e.key)) {
        import('../actions/keydownAction').then((res) =>
          setSelect(res.default(e.key))
        )
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
