This project can be used to display and resize images into our frontend with the size set via url parameters.


 


   Start the server:
   npm run dev

   formatting
   npm run prettier

   Linting   
   npm run lint

   Testing
   npm run test


 Homepage endpoint   :
 http://localhost:3000

 Url
 http://localhost:3000/api/image?imageName=fjord&width=300&hight=400


 ::1 - GET /favicon.ico HTTP/1.1 404 150 - 4.721 ms
::1 - GET /api/image?imageName=fjord&width=300&hight=400 HTTP/1.1 200
18636 - 4214.535 ms
::1 - GET / HTTP/1.1 304 - - 0.825
ms
::1 - GET /api/image?imageName=fjord&width=300&hight=400 HTTP/1.1 304
- - 117.225 ms
::1 - GET /api/image?imageName=fjord&width=300&hight=500 HTTP/1.1 200
23238 - 263.917 ms