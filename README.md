# Scheduling-App-Database-Google-Script

This is the database spreadsheet for the scheduling app that was written for a bar.  It utilizes a frontend app (spreadsheet) also written in JS (Google Script) and two Google Forms that are interconnect for this app to function.  Currently, the roles in the schedule app can not be changed. If this scheduling app needed to be used for a business with completely different roles a future PR will be needed to make roles more dynamic.

## Required files:
  - Scheduling App repo: https://github.com/Brian-Demon/Scheduling-App-Google-Script
       - *REQUIRED* -- Follow the read me in that repo for this databse to work
  - Make a copy of the following Google spreadsheet: https://docs.google.com/spreadsheets/d/13r68j68qE8r5Knwu03I_b2i8essVrncscJ5niXvm0BQ/
  - Make a copy of the following Google Forms:
  - Request Off Form: https://docs.google.com/forms/d/13AmjgmDPejRbCacIjDjs96_l-DTSjXhaaDWUMjZfVo0/edit
  - Availability Form: https://docs.google.com/forms/d/1P3azxAduBQqrLSaY7Bw27DJGiR4hyXm6bhz8CcwNCZ0/edit

## Link both newly made Forms to the newly made Scheduling App Database spreadsheet:
1) Open the newly copied Availability Form
2) Selected "Responses" tab next to "Questions" tab
3) Click the three dots to the right of "0 responses"
4) Click "Select response destination"
5) Select radio button "Select existing spreadsheet" then click "Select"
6) Select the Scheduling App Databse (be sure it's the databse)
7) Open the Scheduling App Databse spreadsheet
8) Change the name of the sheet named "Form Responses 1" to "Availability Data From Form"
9) Repeat all the steps for the Request Off Form

## Google Apps GitHub Assistant:
To clone project:
Add Google Apps Script GitHub Assistant (https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo/related) to gain access to GitHub functionalty

## Change Sheet ID:
  - After cloning the repo and making a copy of the Google spreadsheet, open the spreadsheet and do the following:
    1) Tools->Script editor->in "0) Global Variables" change `var ss = SpreadsheetApp.openById( --THE ID OF THE DATABSE SPREADSHEET-- );`
      - The ID can be found in the URL for your newly copied SCHEDULING APP spreadsheet, *not the database spreadsheet*
         - ( https://.../spreadsheets/d/THE-SPREADSHEET-ID-IS-HERE/... )
      - *REQUIRED* -- If you do not change the ID the code will explode

## Google Authorization Steps:
![Google Script Authorization Step 1](https://user-images.githubusercontent.com/74803363/115067475-9b335080-9eb6-11eb-89c7-6f7d055f6c65.PNG)
![Google Script Authorization Step 2](https://user-images.githubusercontent.com/74803363/115067480-9cfd1400-9eb6-11eb-8848-edc1edff84f7.PNG)
![Google Script Authorization Step 3](https://user-images.githubusercontent.com/74803363/115067484-9e2e4100-9eb6-11eb-8a62-6b15acdf0989.PNG)
![Google Script Authorization Step 4](https://user-images.githubusercontent.com/74803363/115067490-9f5f6e00-9eb6-11eb-8cb3-01b2c24e411d.PNG)
![Google Script Authorization Step 5](https://user-images.githubusercontent.com/74803363/115067494-a0909b00-9eb6-11eb-837a-bd78f5641112.PNG)
