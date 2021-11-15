# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Project Summery
This website has made to sales Moto Bikes.My website name is Best Bike.
Customer can visit this website  & buy a bike.


1. Home page have a header, banner, products/bikes, reviews, gallery and footer. On the home page, the products have shown of 6 items/products.
Each product contain a relevant name, image, short description, add a purchase or buy now button. 
If a user clicks on the purchase or buy now button it will take the user to the purchase page.

2. In header section have another page named all products.
Clicking on the All Products will take the user to the  All Services page. On this page, users will see all the Bikes. 
User will see at least 10 products on this page. Each product have a name, description, image, price and button.
Once a user clicks on this button, it will take the user to the purchase page.

3. If the customer want to purchase a product He /she have to login. if the user is not logged in & purchase a product, user redirects to the login page. 
After login, the user will be redirected to the page he/she wanted to go to. Also after reloading the page of a private route, the user is not redirected to the login page.
The purchase page should display detailed information of the item the user has clicked.
It will also display the user's name and email address from the login system and the user have a field to provide address, phone number and necessary information to place the order or to complete the purchase.

4. User can registration using her email,password & user name. User can login using her/his email & password or google signin.

5. If a user is logged in, he/she will see another option on the header is called Dashboard and inside that dashboard a normal user (not an admin) 
will see options like pay,My Orders, Review, Logout Button.

6. On the my orders page, the logged in user will see only his/her orders.

7. On the Review page, users should be able to add a review and that review appear on the home age. You will see every review on the home page.

8. If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see Manage All Orders, Add A Product, Make Admin, Manage Products 
Logout.

9. An Admin will be able to make another user an admin. If an admin wants, he/she will be able to add a product on the add a product page.
After adding the product, this product appear on the All Services.For testing purpose you can check admin panel using the email address: admin@admin.com with password: 123456

For developing this website we used mongodb atlas (noSQL database),React, firebase, react router, node, express,axios etc.