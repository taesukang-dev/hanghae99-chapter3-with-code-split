import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Star from '../components/Star'
import '../styles/Main.scss'

const Main = () => {
  let [todayWeek, setTodayWeek] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    let week = [
      { id: 0, date: '일', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 1, date: '월', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 2, date: '화', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 3, date: '수', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 4, date: '목', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 5, date: '금', rate: Math.floor(Math.random() * 5 + 1) },
      { id: 6, date: '토', rate: Math.floor(Math.random() * 5 + 1) },
    ]
    let date = new Date()
    let temp = []
    for (let i = 0; i < week.length; i++) {
      if (i === date.getDay()) {
        temp.push(...week.slice(i, week.length))
        temp.push(...week.slice(0, i))
      }
    }
    setTodayWeek(temp)
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
              onClick={() => navigate(`detail/${el.date}`)}
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
