## "Moment" - todo list with notifications turned prompt beach holiday booker

Sync Crome Ext will transform your todo to a packing list. Don’t forget your passport!
JavaScript front-end, Rails API backend 

This project was demoed on 3/8/2018 Science Fair end of Module 3, 9 weeks into Flatiron's Software Engineering Immersive.

## Team:

Pair-programmed with @16sheep

## Functionality:

Toggle "Bucket list" button to see/hide the list of your editable tasks. Add a new task. Delete one. Check off a completed one.

By refreshing the page you will get a new background picture and a quote.

Click on a beach destination under it's weather to be redirected to Skyscanner, then click on your Crome Ext icon to see your todo changed to "packing list" with an extra "take your passport" task in there. 

Notifications of your todos!


## How to run:

BACKEND: 

```cd task-lister-backend```

```rake db:create```    (we're using  Postgresql database)

```rake db:migrate```

```rails s```     then =>    http://localhost:5000  (```ctrl C``` to stop)



FRONTEND:

```cd task-frontend```

```npm install -g serve```    (to install npm)

```serve```    (to run, ```ctrl C``` to stop) 

