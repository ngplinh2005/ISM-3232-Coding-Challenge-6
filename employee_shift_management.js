// Task 1: Create an Employees Array of Employee Objects

const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 5 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 4 }, { day: 'Thursday', hours: 6 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 7 }, { day: 'Friday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Wednesday', hours: 5 }, { day: 'Saturday', hours: 8 }] }
]

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Assigned shifts for ${employee.name} are:`)
    employee.shifts.forEach(shift => {
        console.log(`${shift.day}: ${shift.hours} hours`)
    })
}
