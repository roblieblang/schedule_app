# schedule_app

CSC 394: Group 3 Capstone Project.

## Setup

Clone the repositiory to your local machine.

#### Backend

1. From root directory of project, create a virtual environment with: `python -m venv ./venv`
2. Activate virtual environment: `.\venv\Scripts\activate` or `.\venv\bin\activate` (the path to your `activate ` script)
3. `pip install -r requirements.txt`
4. `python .\manage.py migrate`
5. Good to go: `python .\manage.py runserver`

#### Frontend

1. Message @roblieblang to get the `.env` needed for the app to work with Auth0
	1. Place it in the root of the `frontend` directory
2. Change directory to frontend `cd .\frontend\`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
