# Snake game built with React

## Over view
### This README lays out the steps to deploy the front end of a sanke game onto Netlify.com. It also has a form the will send a notification to an email of your choosing. The back end can be found https://github.com/sobrien-banyan/snake-game-backend

## If you haven't done so fork both the front end and back end repos to your github account.
https://github.com/sobrien-banyan/snake-game

https://github.com/sobrien-banyan/snake-game-backend

## Steps to deploy front end repo to [Netlify.com](https://www.netlify.com/)

1. Log into or create a netlify account
2. From the dashboard select `Add new site` and select from the dropdown `Import an existing project`
3. Select `GitHub` and grant netlify permission to access your GitHub repo. Once permission is granted you should be on step two 'Pick a repository'. Pick the forked repo 'snake-game' from your github account.
4. Select `Deploy site`. It will take time to deploy the site.
5. Next we add the email address take will receive the form submition.
- From the dashboard select the site you just deployed.
- Select `Site settings`
- From the left side nav section select `Forms` that will open more option below it and select `Form notifications`
- Select `Add notification` and then select `Email notification`
- Under `Email to notify` enter your email address
- Under `Form` select from the dropdown `contact` and then select `Save`
- Test it by going the site and submit the contact form. You should receive an email with the input form data.
- F.Y.I. there is a hidden form in index.html thats connect the the Contact.jsx form that makes it work.

## To go forward you will need to deploy the back end repo: https://github.com/sobrien-banyan/snake-game-backend. Once you are done with deploying the back end, you will need to insert the server domain name into the .env file using netlify's dashboard.

6. From the dashboard select the website.
7. Select `Site settings`
8. Select `Environment variables`
9. Select `Add a variable`
10. For the `Key` input enter `REACT_APP_SERVER_DOMAIN`
11. For the `Values` input enter the domain for your backend server.
12. Select `Create variable`
13. The site needs to be redeplyed. Select the website from the dashboard. Select `Deploys`
14. Select `Trigger deploy` then select `Deploy site`
15. All done!


## The following steps are for using a custom domain name from namecheap for the application

16. Register a domain name at [namecheap](https://www.namecheap.com/). Cost is a few dollor.
17. Go to netlify, select the site and then select `Domains`
18. Select `Add or register domain`
19. For input `Domain of subdomain` enter the domain name from netlify and click `Verify`. You may be asked to Activate Netlify DNS.
20. From `Domains` select the domain and it will take you to `DNS settings`. Find section `Name servers`. Copy the four name servers. They will look something like `dns.p01.nsone.net`. The name will need to by copied your namecheap account.
21. Go to the namecheap dashboard. Select `Domain List`
22. Find the domain name and select `Manage`
23. Scroll down and find the `NAMESERVERS` section. Select `+ ADD NAMESERVER` and copy the 'Name servers' from Netlify one-by-one. e.g. `dns.p01.nsone.net` 
24. All done!

