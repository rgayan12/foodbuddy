import axios from 'axios';

// Define your API endpoint for checking authentication status
const AUTH_CHECK_ENDPOINT = '/auth/userinfo';

// Function to check if the user is authenticated
async function isAuthenticated() {
    try {
        // Send a GET request to the authentication check endpoint
        const response = await axios.get(AUTH_CHECK_ENDPOINT);

        // Check the response status and return true or false based on the result
        if (response.status === 200) {
            // If the response indicates authentication success, return true
            return true;
        } else if(response.status === 401) {
            // If the response indicates authentication failure, return false
            return false;
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error checking authentication status:', error);
        // Return false by default if an error occurs
        return false;
    }
}

export default isAuthenticated;
