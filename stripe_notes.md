1 create stripe account 2. inside API keys you will find Publishable Key ( which will be used in client side) and secret key ( which will be used in API)

Working steps:

1. client makes request to server and server generates client secret and send to frontend
2. client gets secret -> after that clent shows widget to take credit card details from user
3. npm i stripe (Backend)
4. Frontend: npm i @stripe/stripe-js @stripe/react-stripe-js
