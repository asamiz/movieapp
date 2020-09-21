# Movies App

An application for searching and seeing the details of the movies using React Native - Redux - TypeScript.

## Main functionality

- User can search for any film by **title** by entering it in the input field in the first screen.
- User can see search result while typing and also if he/sher clicks on the search icon at the end of the input field.
- User can see all the details related to the movie on click on the movie card.
- Once user clicks on the movie card the app will store the search history and show it to the user when he opens the app.

## Setup

**IMPORTANT NOTE**

I am using API provided by http://www.omdbapi.com/

**Please navigate to the site and ge your (API_KEY) and put in the Variable API_KEY in the following Path:**

`./src/common/apiConfig.ts`

Should be look like that after you add your **API_KEY**

```typescript
export const API_KEY: string = '**YOUR_API_KEY**';
export const baseURL: string = 'http://www.omdbapi.com';
```

## Prerequisites

- React Native CLI to be installed. You can install it by running the command:

`npm install -g react-native-cli`

- Simulator or emulator to run the app on.

### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/asamiz/movieapp.git`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run Unit Test

- run `yarn jest` to run all unit test suites.

### Used dependencies

```json
		"@react-native-community/async-storage": "^1.12.0",  // community async storage
		"@react-native-community/masked-view": "^0.1.10",
		"@react-navigation/native": "^5.7.3", // react navigation core
		"@react-navigation/stack": "^5.9.0", //to create navigation stack
		"axios": "^0.20.0", // to make async API calls and use interceptors
		"formik": "^2.1.5",
		"react": "16.13.1",
		"react-dom": "^16.13.1",
		"react-native": "0.63.2",
		"react-native-fast-image": "^8.3.2", // to use the cache functionality for images
		"react-native-gesture-handler": "^1.8.0",
		"react-native-reanimated": "^1.13.0",
		"react-native-responsive-screen": "^1.4.1", // to build utils functions to make design responsive
		"react-native-safe-area-context": "^3.1.7",
		"react-native-screens": "^2.10.1",
		"react-native-splash-screen": "^3.2.0", // to build a native splash screen for both IOS and android
		"react-native-star-rating": "^1.1.0",
		"react-native-vector-icons": "^7.1.0", // to import app icons
		"react-redux": "^7.2.1", // redux support for react
		"redux": "^4.0.5", // state management
		"redux-logger": "^3.0.6",  // to log redux actions and store state
		"redux-persist": "^6.0.0",  // to persist data in the async storage using redux
		"redux-thunk": "^2.3.0", // to handle async state update in redux reducers
		"use-state-if-mounted": "^1.0.4" // to prevent memory leakage after component un mount
```

Also I am using `eslint` and prettier for better code formatting alongside [husky hooks](https://github.com/typicode/husky) to apply linting and formatting before each commit

### Future Improvements

- Complete all the unit tests for all app components and add more unit tests to the existing ones.

- Better handling for TS types and interfaces.

- Add pagination to the test results.

## Screenshots (IOS)

<p float="left">
<a href="https://ibb.co/F7SG1J0"><img src="https://i.ibb.co/pXtCTZR/IOS-1.png" alt="IOS-1" border="0"></a>

<a href="https://ibb.co/BfBn9S9"><img src="https://i.ibb.co/51LKPfP/IOS-2.png" alt="IOS-2" border="0"></a>

<a href="https://ibb.co/gRQH6M6"><img src="https://i.ibb.co/crRMxcx/IOS-3.png" alt="IOS-3" border="0"></a>

<a href="https://ibb.co/ZgHXBNk"><img src="https://i.ibb.co/C9J8bWT/IOS-4.png" alt="IOS-4" border="0"></a>

<a href="https://ibb.co/KNYCWGX"><img src="https://i.ibb.co/M8bq7hs/IOS-5.png" alt="IOS-5" border="0"></a>

<a href="https://ibb.co/xJ7Pv91"><img src="https://i.ibb.co/YpLY9nc/IOS-6.png" alt="IOS-6" border="0"></a>

</p>

## Screenshots (Android)

<p float="left">

<a href="https://ibb.co/Z8fPqWc"><img src="https://i.ibb.co/XsWgcSF/Android-1.jpg" alt="Android-1" border="0"></a>

<a href="https://ibb.co/rfm648d"><img src="https://i.ibb.co/mFGq6ZN/Android-2.jpg" alt="Android-2" border="0"></a>

<a href="https://ibb.co/V9SJf1W"><img src="https://i.ibb.co/MSVZFvD/Android-3.jpg" alt="Android-3" border="0"></a>

<a href="https://ibb.co/Zxsw9d9"><img src="https://i.ibb.co/gJ1XYyY/Android-4.jpg" alt="Android-4" border="0"></a>

<a href="https://ibb.co/qD6kHfz"><img src="https://i.ibb.co/51ZBQyd/Android-5.jpg" alt="Android-5" border="0"></a>

<a href="https://ibb.co/nB1rg8X"><img src="https://i.ibb.co/XD5X2kn/Android-6.jpg" alt="Android-6" border="0"></a>

</p>
