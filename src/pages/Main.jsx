import { useEffect, useState } from 'react'
import Star from '../components/Star'
import '../styles/Main.scss'

const Main = () => {
  let [todayWeek, setTodayWeek] = useState([])
  // url 제어
  const navigate = (url) => {
    import('../hooks/useNavigateToDetail').then((result) => result.default(url))
  }
  // 초기 배열 셋팅
  const dataSet = () => {
    import('../actions/dataSetAction').then((result) =>
      setTodayWeek(result.default())
    )
  }

  useEffect(() => {
    dataSet()
  }, [])

  return (
    <div className="list--wrapper">
      <h3>강태수의 일주일은?</h3>
      {todayWeek.map((el, i) => {
        return (
          <div key={i} className="star--wrapper">
            <p>{el.date}</p>
            <Star rate={el.rate} clName="star--el" />
            <div
              className="star--arrow"
              onClick={() => {
                navigate(`detail/${el.date}`)
              }}
            >
              화살표
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Main
