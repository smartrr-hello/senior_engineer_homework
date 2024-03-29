# Back End Engineer (TypeScript) take-home exam

## Project Overview

Your task is to develop a TypeScript / React application that interacts with the [Currency Converter API](https://rapidapi.com/natkapral/api/currency-converter5). The goal is to continuously fetch and display the currency conversion rates between USD and BRL for the last 24 hours.

## Prerequisites

1. NodeJS v16 or later.

## Directions

1. Building the Application

Develop a TypeScript / React application. Your application should be well-structured and follow best TypeScript and React development practices. You should also ensure your code is clean, efficient, and well-documented.

2. Developing the Function

Write a function that uses the Currency Converter API to pull the USD / BRL currency conversion rates. This function should be scheduled to run every hour, ensuring that your application is continuously updated with the most recent conversion rates. Consider retry logic, timeouts, and other error-handling strategies to ensure your application is robust.

3. Displaying the Conversion Rates

Create a React page that displays the conversion rates for the last 24 hours.

Your application should update this page every time it fetches new conversion rates, ensuring that your users can access the most recent data.

4. Writing Tests

Include tests to validate your application's functionality.

You should write tests for your currency conversion function and tests for your React components.

5. Updating the README

Update the `README` file with clear and concise instructions on how to run your application. Include any necessary setup steps, such as installing dependencies or setting up an API key for the Currency Converter API.

Make sure to write your instructions in a way that developers of all experience levels can understand.

6. Submitting Your Code

Once you have completed your application, push your code to a remote repository (GitHub or GitLab) so that it can be reviewed. Ensure you include all necessary files and exclude files that should not be in source control (like `node_modules` or your `.env` file with your API keys).

If we schedule an interview, we will ask you to walk us through your code and explain your thought process. We will also ask you to change your code to add a new feature and appropriate tests, so be prepared to make some adjustments.

Good luck, and happy coding!
