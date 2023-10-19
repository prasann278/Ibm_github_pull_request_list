To clone my project of github for github_pull_requests_list use this link 

- https://github.com/prasann278/Ibm_github_pull_request_list.git

Steps to clone my project
  - Open Your Command Line or Terminal
  - Navigate to the Directory Where You Want to Clone the Repository - use cd to change directory
  - Clone the Repository using link -https://github.com/prasann278/Ibm_github_pull_request_list.git 
    use command git clone https://github.com/username/repo.git
  - Wait for the Clone to Complete
  - cd repo Ibm_github_pull_request_list and npm install it will download all the dependency.
   
and after that 

Steps to run react project
- Navigate to Your Project Directory - cd projectName
- Install Dependencies by using - cd npm install - it will download all the dependency which is listed in package.json file.
- Once it will complete will run on the browser tab - if in case it is not poping up just type - http://localhost:3000


Then i will open the page with a heading "Github's Pull Requests Viewer"
- There is a input box and button to fetch the pull request
- In the input box you can type "facebook/react" and click fetch button
- This will give you list of pull_requests from that particular owner and repo eg. Owner facebook and repo is react - facebook/react
- Cards will populate below which will give information of
    - Pull Request.
    - Author.
    - Commets.

It is limited to fetching details from public repositories due to security reasons and you do not want to use authentication with a bearer token,
certainly work with public GitHub repositories without authentication.

if the owner and repo does not exsits it will give an error and shows the error message with erroe code.


Thank you.
