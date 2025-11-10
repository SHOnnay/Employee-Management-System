const employees = [ 
    {
        "id": 1,
        "firstname": "Rakib",
        "email": "employee1@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Prepare Monthly Report",
                "description": "Compile and submit the monthly financial report",
                "date": "2025-10-30",
                "category": "Finance",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Client Follow-up",
                "description": "Call clients to follow up on pending invoices",
                "date": "2025-10-31",
                "category": "Sales",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Team Meeting",
                "description": "Discuss project progress with the team",
                "date": "2025-11-01",
                "category": "Management",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Mitu",
        "email": "employee2@example.com",
        "password": "1234",
        "taskCounts": { "active": 3, "new_task": 2, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Website Update",
                "description": "Update homepage and add new blog posts",
                "date": "2025-10-30",
                "category": "Development",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Bug Fix",
                "description": "Resolve reported bugs in the user login module",
                "date": "2025-10-31",
                "category": "Development",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Design Review",
                "description": "Review UI design drafts for new app feature",
                "date": "2025-11-02",
                "category": "Design",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            },
            {
                "taskNumber": 4,
                "title": "Documentation",
                "description": "Update API documentation",
                "date": "2025-11-03",
                "category": "Documentation",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Sabbir",
        "email": "employee3@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Market Research",
                "description": "Analyze competitor strategies and market trends",
                "date": "2025-10-30",
                "category": "Marketing",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Social Media Campaign",
                "description": "Plan and schedule posts for the upcoming week",
                "date": "2025-10-31",
                "category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Email Newsletter",
                "description": "Draft and send the monthly newsletter",
                "date": "2025-11-01",
                "category": "Marketing",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Nusrat",
        "email": "employee4@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Server Maintenance",
                "description": "Perform routine checks and updates on the server",
                "date": "2025-10-30",
                "category": "IT",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Security Audit",
                "description": "Audit system for potential security vulnerabilities",
                "date": "2025-10-31",
                "category": "IT",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Software Installation",
                "description": "Install required software on new employee computers",
                "date": "2025-11-02",
                "category": "IT",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Tanjila",
        "email": "employee5@example.com",
        "password": "1234",
        "taskCounts": { "active": 3, "new_task": 2, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Customer Support",
                "description": "Respond to support tickets and resolve issues",
                "date": "2025-10-30",
                "category": "Support",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Knowledge Base Update",
                "description": "Add new FAQs and update existing articles",
                "date": "2025-10-31",
                "category": "Support",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Training Session",
                "description": "Conduct training session for new support team members",
                "date": "2025-11-01",
                "category": "Support",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            },
            {
                "taskNumber": 4,
                "title": "Customer Feedback",
                "description": "Collect and analyze feedback from customers",
                "date": "2025-11-03",
                "category": "Support",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "1234"
}];


export const setLocaLStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocaLStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin };
}