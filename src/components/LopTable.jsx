import LopRow from './LopRow.jsx'

function LopTable({ entries }) {
  return (
    <table className="lop-table">
      <thead>
        <tr>
          <th>Employee Details</th>
          <th>Join Date</th>
          <th>Work Days</th>
          <th>LOP</th>
          <th>Payment Days</th>
          <th>Remarks</th>
          <th>Updated Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <LopRow key={entry.id} entry={entry} />
        ))}
      </tbody>
    </table>
  )
}

export default LopTable