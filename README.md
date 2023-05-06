TABLE OF CONTENTS

1.  Introduction 

2.  Technologies used

3.  Setup/Installation

4.  Approach

5.  Status

6.  Licence

1.0.    INTRODUCTION.

This application was created to help the Galactic overlord with personnel management. Due to trust issues, a galactic overlord has to directly manage his workforce without any middlemen. For a large workforce, this process becomes very complicated and would be prone to mistake. This app solves this problem by creating a list of all robots under management. The overlord can thus enlist robots to carry out a specific function, they can add a robot to the database, they can also completely remove a robot from the backend server.

2.0.    Technologies used

React.js
Javascript
CSS
HTML
API

3.0.    Setup and Installation

a.  Clone the repository to your local machine.
b.  Install the required dependencies using npm install
c.  Run server using the following command "npm run server"
d. Run the following command "npm start" to initiate the application

4.0.    Approach 

This application was created utilizing React, CSS, Vanilla Javascript and HTML. For the Project, The FetchContainer held 90% of the functionalities which include the fetch functions, the delete functions, the filter and also search functions. Most of the other components (child components) just styled the final rendered page. The FetchContainer access our db.json from http://localhost:8001/bots. this data was then passed as props to all the other components. No Fetching was carried out separate from the FetchContainer.

5.0.    Status 

The application is 95% complete with the final css styling remaining.

6.0.    License 
This project is licensed under the MIT License