# mod-3-project

Crome Ext "Moment", draggable todo list with notifications turned prompt beach holiday booker. JS front-end, Rails API backend //pair-programmed with @16sheep, Mod3 project demoed in Science Fair 3/8/2018

Toggle "Bucket list" button to see/hide the list of your editable tasks. Add a new task. Delete one. Check off a completed one.

By refreshing the page you will get a new background picture and a quote.

Click on a beach destination under it's weather to be redirected to Skyscanner, then click on your Crome Ext icon to see your todo changed to "packing list" with an extra "take your passport" task in there. 


Set Up:

BACKEND: 

cd task-lister-backend

rake db:create    (we're using  Postgresql database)

rake db:migrate 

rails s     (to run rails server, then =>    http://localhost:5000 , ctrl C to stop) 



FRONTEND:
cd task-frontend

npm install -g serve    (to install npm)

serve    (everytime to run it, ctrl C to stop) 

