export default function data() {
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
  temp.push(...week.slice(date.getDay(), week.length))
  temp.push(...week.slice(0, date.getDay()))
  return temp
}
