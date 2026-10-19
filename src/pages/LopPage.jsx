import LopTable from '../components/LopTable.jsx'
import mockLopPage from '../data/mockLopEntries.js'

function LopPage() {
    return (
        <div className="lop-page">
            <p className="breadcrumb">Home &gt; Payroll &gt; Employee LOP Days</p>

            <div className="tabs">
                <button className="tab tab-active">LOP</button>
                <button className="tab">LOP Reversal</button>
                <button className="tab">Retrospective LOP</button>
            </div>

            <div className="info-banner">
                <p>Loss of pay (LOP) is when salary is reduced for unpaid days.</p>
                <button className="primary-button">Add LOP Days</button>
            </div>
            <LopTable entries={mockLopPage.content} />
            <p className="table-footer">Total Items: {mockLopPage.totalElements}</p>
        </div>
    )
}
 
export default LopPage