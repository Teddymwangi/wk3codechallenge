Flatdango Movie Theater
Flatdango Movie Theater is a web application that allows users to explore and purchase movie tickets for the Flatiron Movie Theater. With a user-friendly interface and real-time movie information, Flatdango simplifies the process of finding and booking tickets for your favorite movies.

Features
View Movie Details: See the details of the first movie, including its poster, title, runtime, showtime, and available tickets when the page loads.
Browse Movie Menu: Check out a list of all available movies on the left side of the page. Movies are clickable for easy access to their details.
Purchase Tickets: Buy tickets for your chosen movie with the click of a button. The available ticket count updates in real-time.
How to Use
Homepage: When you first access Flatdango, you will be greeted with the details of the first movie, along with a menu of other available movies on the left side of the page.

Explore Movies: Click on any movie in the menu to view its details, including the movie poster, title, description, runtime, showtime, and available tickets. If tickets are sold out, the "Buy Ticket" button will be disabled.

Purchase Tickets: Click the "Buy Ticket" button to purchase tickets. The available ticket count will update instantly. Note that you cannot buy tickets for sold-out shows.

Installation and Setup
To run Flatdango locally, follow these steps:

Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project directory and install dependencies:

bash
Copy code
cd flatdango-movie-theater
npm install
Start the JSON DB server to fetch movie data:

css
Copy code
json-server --watch db.json
Open index.html in your browser to access Flatdango Movie Theater.

Technologies Used
HTML
CSS
JavaScript
JSON Server
Contributing
If you find any issues with Flatdango Movie Theater or have suggestions for improvements, please feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

License
This project is licensed under the MIT License.