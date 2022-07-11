# Portfolio

- [Portfolio](#portfolio)
  - [Describtion](#describtion)
- [Documentation](#documentation)
  - [Installation process](#installation-process)
    - [Prerequisites](#prerequisites)
    - [Requirements/Packages installation](#requirementspackages-installation)
  - [Run project](#run-project)
  - [License](#license)


---
## Describtion
This repository is all about my current portfolio website. If you want to look at what I've made here go ahead and watch :D

---

# Documentation
You can read full documentation in [_docs folder](_docs/0-contents.md)

---
## Installation process
### Prerequisites
- Python [3.10.x](https://www.python.org/downloads/)
- install [npm](https://nodejs.org/en/download/)

### Requirements/Packages installation
- install python packages ``./backend/requirements.txt`` 
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
- go back to root dir
    ```bash
    cd ..
    ```
- install npm packages ``./frontend/package.json``
    ```bash
    cd frontend
    npm install
    ```


---
## Run project
- Frontend:
    ```bash
    cd frontend
    npm run dev
    ```
- Backend:
  - go to backend dir
        ```bash
        cd backend
        ```
  - set global varibles:
    - linux:
        ```bash
        export FLASK_APP=index.py
        ```
    - windows:
        ```bash
        set FLASK_APP=index.py
        ```
  - run flask:
        ```bash
        flask run
        ```

---
## License
Restricted for now [read](LICENSE)
