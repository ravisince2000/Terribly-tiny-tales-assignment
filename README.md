The Frontend Part or UI interaction website is also hosted in netlify and you can checkout by visiting the following URLs:
https://netlify-hostedapp-raviranjan.netlify.app/


EXPLAINATION of the code:

The following assignment  is based on React component that utilizes the following libraries and plugins:

React: A JavaScript library for building user interfaces. It allows you to create reusable UI components.

useState: A React hook that enables functional components to have stateful logic. It is used to define and update the state variable data.

useEffect: Another React hook that allows you to perform side effects in functional components. It is used in two places in the code to fetch data when the component mounts and to render the chart when the data state variable changes.

axios: A popular JavaScript library for making HTTP requests. It is used to send an HTTP GET request to fetch the data from a URL.

Chart.js: A versatile JavaScript charting library that provides various types of charts. It is used to render the bar chart based on the word frequency data.

Now let's break down the code step by step:

The code starts by importing the required libraries and plugins.

The App component is defined as a functional component.

Inside the component, the data state variable is defined using the useState hook. It is initialized with null.

The first useEffect hook is used to fetch data when the component mounts. The hook runs only once because an empty dependency array is passed. It calls the fetchData function.

The fetchData function is an asynchronous function that makes an HTTP GET request to the URL 'https://www.terriblytinytales.com/test.txt'.

If the response is successful, the fetched text is split into an array of words using the regular expression /\\s+/.

The word frequency is calculated by creating a wordCountMap, which is an instance of Map. It stores each word as the key and its count as the value.

The array representation of wordCountMap is sorted in descending order based on the count of each word.

The top 20 words are extracted from the sorted word count array.

The labels and counts are extracted from the top 20 words array.

The chartData object is created, which contains the labels, data, and other configuration options for the chart.

The chartData is set as the new value for the data state variable using the setData function.

If there is an error in the HTTP request, it is caught in the catch block, and the error is logged to the console.

The handleExport function is defined to handle the export functionality. It generates a CSV content string by mapping over the labels and counts in the data object and joins them with '\n'. Then it creates a download link for the CSV file and triggers the download.

The second useEffect hook is used to render the chart using Chart.js when the data state variable changes. It runs whenever the data state variable changes. It selects the canvas element with the id 'chart' and creates a new Chart instance with the chart configuration.

The JSX returned by the component contains the UI elements to be rendered.

The UI includes a heading, a submit button that triggers the fetchData function when clicked, and a canvas element with the id 'chart' where the chart will be rendered.

If the data state variable is available, it renders the chart canvas and an export button.

Finally, the App component is exported as the default export.

Please note that for the code to work, you need to have the required dependencies (React, axios, and Chart.js) installed and properly configured in your development environment
