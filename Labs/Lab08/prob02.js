/*{
    "_id": "5bbbb564dd4eb69795fb4f5e",
    "ISBN": "105122",
    "bookName": "Node.js",
    "author": "Ryan :)",
    "tags": [
       "MWA",
       "Programming"
    ],
    "borrowedBy": {
       "stdName": "Ahmed",
       "stdId": "1",
       "startDate": "10/10/2018",
       "endDate": "11/10/2018",
       "phoneNumber": "6416416411"
    }
 }
 */
 
//  Create 3 indexes over the book collection one index for the following properties:
//   - ISBN
//   - Author
//   - Tags
//   And another indexes for borrowedBy for properties:
//   - endDate+phoneNumber