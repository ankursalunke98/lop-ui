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
          <tr key={entry.id}>
            <td>
              <div>{entry.employee.fullName}</div>
              <div>#{entry.employee.employeeNumber}</div>
            </td>
            <td>{entry.employee.joinDate}</td>
            <td>{entry.totalWorkdays}</td>
            <td>{entry.lopDays}</td>
            <td>{entry.paymentDays}</td>
            <td>{entry.remarks ?? '--'}</td>
            <td>{entry.updatedAt}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LopTable