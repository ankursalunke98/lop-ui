const mockLopPage = {
  content: [
    {
      id: 14,
      employee: { employeeNumber: 'EMP022', fullName: 'Fatima Shaikh', joinDate: '2020-10-05' },
      entryMode: 'CONSOLIDATED',
      totalWorkdays: 31,
      eligibleDays: 20,
      lopDays: 3,
      paymentDays: 17,
      remarks: 'Notice period absences',
      updatedAt: '2026-10-19T12:26:00Z',
      dates: [],
    },
    {
      id: 13,
      employee: { employeeNumber: 'EMP021', fullName: 'Omkar Jadhav', joinDate: '2026-10-17' },
      entryMode: 'CONSOLIDATED',
      totalWorkdays: 31,
      eligibleDays: 15,
      lopDays: 1,
      paymentDays: 14,
      remarks: null,
      updatedAt: '2026-10-18T09:23:00Z',
      dates: [],
    },
    {
      id: 10,
      employee: { employeeNumber: 'EMP008', fullName: 'Ishita Nair', joinDate: '2021-12-13' },
      entryMode: 'DATE_WISE',
      totalWorkdays: 31,
      eligibleDays: 31,
      lopDays: 2,
      paymentDays: 29,
      remarks: null,
      updatedAt: '2026-10-15T13:10:00Z',
      dates: [
        { id: 1, date: '2026-10-12', days: 1, remarks: null },
        { id: 2, date: '2026-10-13', days: 1, remarks: 'No leave balance' },
      ],
    },
  ],
  page: 0,
  size: 10,
  totalElements: 3,
  totalPages: 1,
}

export default mockLopPage