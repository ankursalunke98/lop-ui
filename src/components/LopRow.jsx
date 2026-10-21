import { useState } from 'react'
import { formatDate, formatDateTime } from '../utils/format.js'

function LopRow({ entry }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasDates = entry.dates.length > 0

  return (
    <>
      <tr>
        <td>
          {hasDates && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? '−' : '+'}
            </button>
          )}
          <div>{entry.employee.fullName}</div>
          <div>#{entry.employee.employeeNumber}</div>
        </td>
        <td>{formatDate(entry.employee.joinDate)}</td>
        <td>{entry.totalWorkdays}</td>
        <td>{entry.lopDays}</td>
        <td>{entry.paymentDays}</td>
        <td>{entry.remarks ?? '--'}</td>
        <td>{formatDateTime(entry.updatedAt)}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan={8}>
            <table>
              <thead>
                <tr>
                  <th>LOP Date</th>
                  <th>LOP Days</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {entry.dates.map((d) => (
                  <tr key={d.id}>
                    <td>{formatDate(d.date)}</td>
                    <td>{d.days}</td>
                    <td>{d.remarks ?? '--'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  )
}

export default LopRow