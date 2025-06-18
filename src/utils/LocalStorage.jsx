const employee = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design Landing Page",
        "description": "Create the UI for the product landing page.",
        "date": "2025-06-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Submit Resume",
        "description": "Upload latest resume to HR portal.",
        "date": "2025-06-15",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client Demo",
        "description": "Prepare and present the demo to client.",
        "date": "2025-06-17",
        "category": "Client"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Fix Login Bug",
        "description": "Resolve issue with login not redirecting.",
        "date": "2025-06-19",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Team Meeting",
        "description": "Weekly sync with the development team.",
        "date": "2025-06-21",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Documentation",
        "description": "Complete module documentation.",
        "date": "2025-06-10",
        "category": "Docs"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Database Backup",
        "description": "Automate daily database backups.",
        "date": "2025-06-16",
        "category": "Database"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Optimize Images",
        "description": "Compress images for faster load time.",
        "date": "2025-06-22",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Write Blog",
        "description": "Publish a blog on the latest project.",
        "date": "2025-06-14",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review teammate’s pull requests.",
        "date": "2025-06-19",
        "category": "Development"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Deploy Backend",
        "description": "Deploy updated backend APIs to production.",
        "date": "2025-06-20",
        "category": "Deployment"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Research New Tools",
        "description": "Look into new analytics tools.",
        "date": "2025-06-23",
        "category": "Research"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "UI Testing",
        "description": "Test all components on staging.",
        "date": "2025-06-21",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Submit Timesheet",
        "description": "Send timesheet to project manager.",
        "date": "2025-06-13",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Sprint Goal Missed",
        "description": "Missed sprint goal due to time constraints.",
        "date": "2025-06-18",
        "category": "Sprint"
      }
    ]
  }
]

const admin =[
    {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}

]

export const setLocalStorage = () =>{
    localStorage.setItem("employee",JSON.stringify(employee))
    localStorage.setItem("admin",JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employee'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        return {employees,admin}
}

