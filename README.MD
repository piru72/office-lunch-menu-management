# Office Lunch Menu Management System
## Description
The Office Lunch Menu Management System is a web application designed to streamline the process of managing daily lunch options in an office environment. Admins can easily add and manage daily lunch menus, while employees can view these menus and select their lunch preferences. This system aims to simplify the lunch ordering process and ensure that all employees' choices are recorded efficiently.

## Technologies Used
- Backend: Node.js with Express.js
- Frontend: React.js
- Database: PostgreSQL

## Features for MVP (Minimum Viable Product)

### Admin Interface:
- Add Daily Menu Options: Admins can add new lunch options for specific dates.
- View Employee Choices: Admins can view which employees have chosen which lunch options.

### Employee Interface:
- View Daily Menu: Employees can see the lunch options available for the current day.
- Select Lunch Choice: Employees can select their preferred lunch option from the daily menu.

## Database schema
```mermaid
erDiagram
    ROLES {
        int role_id PK
        varchar name
        text description
    }

    PERMISSIONS {
        int permission_id PK
        varchar name
        text description
    }

    ROLES_PERMISSIONS {
        int role_permission_id PK
        int role_id FK
        int permission_id FK
    }

    USERS {
        int user_id PK
        int role_id FK
        varchar username
        text password_hash
        timestamp created_at
    }

    LUNCH_OPTIONS {
        int lunch_option_id PK
        varchar name
        text description
        timestamp created_at
    }

    DAILY_MENUS {
        int daily_menu_id PK
        date menu_date
        timestamp created_at
    }

    DAILY_MENU_OPTIONS {
        int daily_menu_option_id PK
        int daily_menu_id FK
        int lunch_option_id FK
    }

    USER_CHOICES {
        int user_choice_id PK
        int user_id FK
        int daily_menu_id FK
        int lunch_option_id FK
        timestamp chosen_at
    }

    ROLES ||--o{ USERS: "has"
    ROLES ||--o{ ROLES_PERMISSIONS: "defines"
    PERMISSIONS ||--o{ ROLES_PERMISSIONS: "assigned to"
    USERS ||--o{ USER_CHOICES: "makes"
    DAILY_MENUS ||--o{ DAILY_MENU_OPTIONS: "contains"
    LUNCH_OPTIONS ||--o{ DAILY_MENU_OPTIONS: "available in"
    DAILY_MENUS ||--o{ USER_CHOICES: "selected in"
    LUNCH_OPTIONS ||--o{ USER_CHOICES: "chosen"

```
## Setup instructions for both backend and frontend

### Using Docker

```bash
git clone https://github.com/piru72/office-lunch-menu-management.git
cd office-lunch-menu-management
docker-compose up -d
```

### Using npm
## Instructions on how to run the projects
