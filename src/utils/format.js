const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// '2020-10-05'  ->  '05 Oct 2020'
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-')
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`
}

// '2026-10-19T12:26:00Z'  ->  '19 Oct 2026 05:56 PM'  (in the viewer's time zone)
export function formatDateTime(isoDateTime) {
  const d = new Date(isoDateTime)
  const day = String(d.getDate()).padStart(2, '0')
  const hours24 = d.getHours()
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const amPm = hours24 < 12 ? 'AM' : 'PM'
  return `${day} ${MONTHS[d.getMonth()]} ${d.getFullYear()} ${String(hours12).padStart(2, '0')}:${minutes} ${amPm}`
}