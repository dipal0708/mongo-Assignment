module.exports = (item) => {
    // console.log("item",item);
    let today = new Date(),
        overdue_count = 0,
        overdue_percentage = 0,
        today_count = 0,
        today_percentage = 0,
        tomorrow_count = 0,
        tomorrow_percentage = 0,
        later_count = 0,
        later_percentage = 0;

    for (let task of item.tasks) {
        let task_due_date = new Date(task.dueDate)
        if (today.getTime() < task_due_date.getTime()) {
            overdue_count += 1
            // overdue_percentage += 1

            later_count += 1
            // later_percentage += 1
        }

        if (today.getTime() == task_due_date.getTime()) {
            today_count += 1
            // today_percentage += 1
        }

        if (today.getTime() > task_due_date.getTime()) {
            tomorrow_count += 1
            // tomorrow_percentage += 1
        }
    }

    overdue_percentage = parseFloat((overdue_count / item.tasks.length) * 100).toFixed(2);
    later_percentage = parseFloat((later_count / item.tasks.length) * 100).toFixed(2);
    today_percentage = parseFloat((today_count / item.tasks.length) * 100).toFixed(2);
    tomorrow_percentage = parseFloat((tomorrow_count / item.tasks.length) * 100).toFixed(2);

    return {
        user: {
            userName: item.userName,
            empCode: item.empCode,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            managerId: item.managerId,
        },
        userOverall: {
            overdue_count,
            overdue_percentage,
            today_count,
            today_percentage,
            tomorrow_count,
            tomorrow_percentage,
            later_count,
            later_percentage
        }
    }

}