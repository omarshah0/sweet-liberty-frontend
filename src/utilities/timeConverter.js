export default function timeConverter(time) {
  time = time.toString()
  const omarTime = time.match(/(\d*)(:)(\d*)(:)(\d*)/)
  const hour = omarTime[1] % 12 || 12
  const zone = omarTime[1] < 12 ? "AM" : "PM"
  const minute = omarTime[3]
  return ` ${hour} : ${minute} ${zone}`
}
