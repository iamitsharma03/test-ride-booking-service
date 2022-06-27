# test-ride-booking-service
Test Ride Booking System

Abstract

Ather test ride booking system helps interested customers to book test ride through the platform. The platform also enables Ather admins to assign vehicle to the booked slots as well as monitor the dashboard of all the bookings in the respected test centers.

Personas

-	Customer
-	Admins

Features

-	Customers
o	A customer can choose any metro city and available test center in that city to book a test ride.
o	A customer can book any available slot from the selected test center by providing the preferred date and time.
o	A customer can choose home delivery option for the test ride.
o	A customer can choose the vehicle model he/she is interested in.
-	Admin
o	An Admin can login to the platform by providing username and password.
o	An Admin can be assigned to more than one city to handle and monitor the bookings.
o	An Admin can assign the vehicle to a booked slot by looking at the model preference of the customer.
o	An Admin can monitor and generate report for all the booked test rides in the assigned cities.

Architecture

 


Security

Admin micro frontend application is secured with authentication and authorization handled by AWS Cognito. AWS Cognito generates JWT Token after getting the correct credentials by acting as an OAuth server with Open ID Connect and the JWT token is validated in the backend by the public keys of the Cognito server.

The Backend APIs are secured with required security specific request headers like Content Security Policy, No Sniff etc.

All the communications happen using HTTPS for the data in transit and data in rest in encrypted using SHA-256 algorithm.

Deployment

All the applications including frontend React applications and backend NodeJS applications are containerized and deployed using Kubernetes.
ReactJS applications are containerized using two step approach. After building the react app using webpack, the static files are served using Nginx server.

Assignment specific Details:

-	Completed activities
o	NodeJS backend application
o	Database Integration with MongoDB.
o	API exposed for frontend consumption.

-	Incomplete Activities
o	ReactJS frontend
o	Frontend backend Integration using APIs
o	Authentication feature in backend
-	Steps to run backend
o	Create a .env file with value 
	NODE_ENV=development
	PORT=8000
	MONGO_DB_URL = mongodb+srv://amitsharma10:9911432028@cluster0.x1a5m.mongodb.net/test-ride-booking?retryWrites=true&w=majority
o	Run command npm install
o	RUN command npm run dev
o	The node application is running on port 8000
o	Access the APIs using following POSTMAN collections. (Pushed in Repo)


	



![image](https://user-images.githubusercontent.com/41181359/175945278-2cc209a7-a747-4df3-a32f-2ff62ec3ac13.png)

