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

This application was created utilizing React, CSS, Vanilla Javascript and HTML. React allows one to create application using components. This allows for easier coding and debugging, as well as optimization of the rendering time. In this app, we first created a component that would fetch data from the backend data. This data was then passed to the child component of the Fetch Container (FetchContainer.js) which included the TransactionList, TransactionForm and the SearchFilter. The Transaction List was used to generate the list of past transaction from the database. The SearchFilter component was used to search and filter the components. Finally, the TransactionForm was used to add new Transactions to the Database. The new Trasaction we added through Fetch and Post.

5.0.    Status 

The application is fully functional and ready for use. 

6.0.    License 
This project is licensed under the MIT License