# Chosen technologies

which technologies I've used, why, and what were the options

[go back](0-contents.md)

## Contents
- [Chosen technologies](#chosen-technologies)
  - [Contents](#contents)
  - [- Final stack for version 1.0](#--final-stack-for-version-10)
  - [Requirements for page:](#requirements-for-page)
  - [Project](#project)
    - [Domain:](#domain)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
      - [programming language:](#programming-language)
      - [REST API framework:](#rest-api-framework)
    - [hosting](#hosting)
    - [CI:](#ci)
  - [Final stack for version 1.0](#final-stack-for-version-10)
---

## Requirements for page:
- Content manager system - easy to edit elements of the page, allows to create a blog in future
- reliability - always work
- good look - need to impress
- ease of code maintenance - If I'll need to change something it should be easy
- low architecture cost - I'm a student that's why
- fast - faster loading time is better loading time
- expandable in future
- supported browser:
  - chrome
  - firefox
  - opera
  - safari
- REST API - I want to separate frontend and backend

---
## Project
### Domain:
- [x] ovh.com
  - pros:
    - I've had 3 domains in there
    - give plenty of room to domain control
    - cheap

### Frontend:
- [ ] pure JS + static html and css/scss
    - pros:
      - I know it well
    - cons:
      - not that easy to extend
- [ ] jQuery + ajax + static
    - pros:
      - I know it well
    - cons:
      - there are better technologies today
- [x] Vue.js
    - pros:
      - I have one project in it
      - component-based
      - relatively easy
    - cons:
      - I don't know it well but the best from the new frontend technologies
- [ ] Gridsome
    - pros:
      - Vue.js extension
      - static side generator
    - cons:
      - I don't know it
    - note:
      - maybe in version 2.0 I'll change technology from pure vue to gridsome
- [ ] react
    - pros:
      - component-based
    - cons:
      - I don't know it
- [ ] angualr.js
    - pros:
      - component-based
    - cons:
      - I don't know it
      - Hard
      - I don't know typescript
### Backend:
it is not necessary in this project when I use graphCMS, graphQL and gridsome but for now it is okey
#### programming language:
  - [x] python:
    - pros:
      - easy
      - fast to create REST API in there
      - 3 years of working with this language
      - I feel the most comfortable with this language
      - My favorite language
      - I know with 3 web frameworks in there
    - cons:
      - relatively slow
  - [ ] C#:
    - pros:
      - easy
      - objective only
    - cons:
      - 1 years of working with this language
      - I've never worked with REST API frameworks in it, but I've seen Nancy
  - [ ] node.js:
    - pros:
      - I feel very good in js
    - cons:
      - But in basic js and jQuery
      - Never work with it
  - [ ] PHP:
    - cons:
      - I've worked only with pure php without any framework, so it is no go for me in this moment
  - other:
    - I don't know it enough like java or is too harsh for me like in C++
#### REST API framework:
  - [ ] DRF
    - pros:
      - great for big projects
      - ORM
    - cons:
      - very complex
      - a lot to setup
  - [x] Flask
    - pros:
      - easy
      - fast
    - cons:
      - don't have ORM
      - don't have that many future that you could need
  - [ ] FastAPI
    - similar to Flask in pros and cons
    - pros as addition:
      - Json only - ideal for API
      - some kind of swagger like API auto documentation tool installed on top called redoc
    - cons as addition:
      - I never work with it

### hosting
- [ ] AWS
    - cons:
      - I've never work with AWS
    - note:
      - maybe in version 2.0 I'll host frontend there for performence
- [ ] ovh.com VPS:
    - pros:
      - same place where domain is
    - cons:
      - overkill a bit
      - subscription
- [ ] Heroku
    - pros:
      - It can be free
      - work with docker
    - cons:
      - limitations
      - I tried once to deploy the app there and I had a hard time during that so move to the home brew server
- [x] vercel.app
    - pros:
      - automaticly self hosted from Github (CI integrated)
      - free for non-commercial & hobby sites
      - I've had one project hosted in there
      - very easy to setup
    - cons:
      - slow load times when there was a long time between entrance by visitors
- [ ] python anywhere
    - pros:
      - fast
      - I've had one project hosted in there
    - cons:
      - 5$ per month minimum
- [ ] Own home brew server on docker or kubernets
    - pros:
      - full control over it
    - cons:
      - not reliable - at any time I can have a blackout or lost ethernet connection or OS/server just crash

### CI:
  - [ ] CircleCI:
    - a bit to setup
    - probably I'll move to it on version 2.0
  - [x] vercel.app integrated CI
    - good for fast start

## Final stack for version 1.0
- domain: **ovh.com**
- frontend: **Vue.js**
- backend: **python**3.10 + **Flask**
- hosting: **vercel.app**
- CI: vercel.app **integrated CI**

[goto top](#chosen-technologies)
