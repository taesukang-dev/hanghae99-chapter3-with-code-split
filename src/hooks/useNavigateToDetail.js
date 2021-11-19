// import { useNavigate } from 'react-router'

export default function useNavigateToDetail(url) {
  // useNavigate(`detail/${url}`) 적용 안됨
  window.location.href = `${url}`
}
