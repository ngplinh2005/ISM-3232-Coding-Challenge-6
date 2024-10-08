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

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(employee => employee.name === employeeName)

    if (!employee) {
        console.log(`Employee ${employeeName} is not found.`)
        return
    }

    for (let i = 0; i < employee.shifts.length; i++) {
        if (employee.shifts[i].day === day) {
            console.log(`${employeeName} is already assigned a shift for ${day}.`)
            return
        }
    }

    employee.shifts.push({ day, hours})
    console.log(`${employeeName} has been assigned a ${hours} shift on ${day}.`)
}

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    const employee = employees.find(employee => employee.name === employeeName)

    if (!employee) {
        console.log(`Employee ${employeeName} is not found.`)
        return 0
    }

    return employee.shifts.reduce((total, shift) => total + shift.hours, 0)
}

// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    employees.forEach(employee => {
        const employeeHasShift = employee.shifts.find(shift => shift.day === day)
        
        if(!employeeHasShift) {
            console.log(`${employeeName} hasn't been assigned a shift on ${day}.`)
        }
    })
}