# plantr: plant care mangaing app
This **React** app was created as my final project at Flatiron School. The [backend](https://github.com/christinamcmahon/plantr-backend) was made with **Ruby on Rails**. This app also utitlizes **Redux** in order to decouple data management and UI. User passwords are encrypted using **Bcrypt** for increased security. **Material UI** was used for styling.

## About
plantr allows users to add plants to their profile with relevant care information and functionality to add reminders for watering or other care to their preferred calendar app (Google Calendar, Apple Calendar, Outlook, etc) with prefilled plant information. 

## How to Use
1. Clone this repo as well as [this one](https://github.com/christinamcmahon/plantr-backend).
2. In plantr-backend's terminal run bundle, rails db:migrate, rails db:seed, and rails s to populate the database.
3. In plantr-frontend's terminal run npm start.
4. Go to localhost:3001/login to get started (this should happen automatically).

## Walkthrough
### Login Page
!["login page"](/screenshots/login.png)

### Add a Plant Modal
!["Add Plant"](/screenshots/add_plant.png)

### Prefilled Reminder
Uses information from form to prefill event
!["Prefilled Reminder"](/screenshots/add_reminder.png)

### My Plants
!["All Plants"](/screenshots/plants.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
