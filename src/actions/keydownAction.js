export default function keydownAction(e) {
  if (Number(e) >= 0 && 6 > Number(e)) {
    return e
  }
}
