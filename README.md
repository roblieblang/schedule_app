# schedule_app

CSC 394: Group 3 Capstone Project.

## Setup

Clone the repositiory to your local machine.

#### Backend

1. From root directory of project, create a virtual environment with: `python -m venv ./venv`
2. Activate virtual environment: `.\venv\Scripts\activate` or `.\venv\bin\activate` or whatever the path to your activate script is
3. `pip install -r requirements.txt`
4. `python .\manage.py migrate`
5. Good to go: `python .\manage.py runserver`

#### Frontend

1. change directory to frontend `cd .\frontend\`
2. Install dependencies: `npm install`
3. `npm start`
