import styled from 'styled-components'
const Star = ({ rate }) => {
  let rateArr = Array(rate).fill(1)
  let unRateArr = Array(5 - rate).fill(0)
  let setRate = rateArr.concat(unRateArr)

  return (
    <>
      {setRate.map((el, i) =>
        el === 1 ? <ColoredStar key={i} /> : <UnColoredStar key={i} />
      )}
    </>
  )
}

const ColoredStar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background: #ffeb3b;
`

const UnColoredStar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: #ddd;
`

export default Star
