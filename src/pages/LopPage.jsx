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
        </div>
    )
}
 
export default LopPage