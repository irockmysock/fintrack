### FinTrack (Project 2) ###

### Problem Statement
In 2015 money management apps market in the U.S. was estimated worth $24.5 million dollars and the number of users who are over 18 equaled to ~ 12,816,140 (according to the research by Askwonder). This statistic reveals the incentive to develop an app for personal finance. 

There are 2 kinds of personal finance management apps in general:

- Manual entry apps;

- Linked-apps (which connect to your financial accounts and allow management of assets and transactions)

However, the disadvantage of linked-apps are the security issues and dealing with users' concerns of performing finance related actions on mobile devices.

FinTrack was thus created with the intent of being an on-the-go expense tracking app for individuals, with a simple, seamless and convenient way of entering transactions for easy consolidation.

### Approach

FinTrack was developed with the end-user experience in mind. A simple expense tracking app which allows for easy maunal entry of data and a feature to allow optional upload of receipts. 

The app should fulfill the basic requirements which allow for adding, editing and deleting entries. Users should be able to view their entries and the app would provide a snapshot of their expenditure trends/habits. 

### App Features and Technology Used

FinTrack is a basic CRUD app built with PostgresSQL, React, Node and Express stack.

The dashboard gives users a breakdown of expenses by category as well as by accounts (credit card, cash etc) for the current month. Latest transactions are also displayed together with the total expenditure for the current month. Adding a transaction is done with a simple click on the 'Add Transaction' button and users can choose from a pre-defined list of categories which the expense belongs to. Future versions of the app will allow users to create their own categories. Receipt image upload is done through cloudinary. 

In the 'All Transactions' view, spending is broken down by month in the form of a bar chart to provide visual representation of users spending trends, and all transactions are listed here. Users can edit/delete transactions from here. 

Lastly, the 'All Accounts' view allows users to see their existing accounts as well as add a new (expense)account either from the pre-defined list or manually enter the details of their new account. Clicking on the individual accounts will take the user to the page with a breakdown of all transactions performed on that account.


### Future versions

Future versions of FinTrack would include a budget function which would allow users to set budgets by category or by account. This would be in line with the goal of providing personal finance management on-the-go. 

Users would also be able to feedback any bugs and/or improvements to be made to enhance the user experience of FinTrack.