IDEAS:

- Implement welcoming funfact/useless fact ? https://uselessfacts.jsph.pl/

- Get your visitor's country from their IP http://country.is/

- 1 password affilate link
- host finder https://youtu.be/hxLW4FPDJuc

TO ADD:

- Privacy policy.
- Comming soon page.
- Captcha in requests
- Google Analytics added, check if it is working.

VIDEOS:

Passwords
https://youtu.be/xHSnHj-zKF4

BUGS:

- [BUG-1] JWT, show raw payload when cant decode.
- [FIXED][BUG-2] http http://example.com/ https://whynohttps.com/


# BACKEND

Amplify

## Lambda functions

Now there is one lambda function for quering GCP Web Risk API.

This lambda function has a dependency on 

"@google-cloud/web-risk": "^3.1.1",

and a environmental variable for authentication:

GOOGLE_APPLICATION_CREDENTIALS="/Users/mnapoli/Documents/04-ManuNapo/toolkys-web/private/toolkys-8e8b404e83cd.json"

"amplify function build" builds all of your functions currently in the project

"amplify mock function <functionName>" runs your function locally

To access AWS resources outside of this Amplify app, edit the /Users/mnapoli/Documents/04-ManuNapo/toolkys-web/amplify/backend/function/amplifygcpwebrisk/custom-policies.json

"amplify push" builds all of your local backend resources and provisions them in the cloud

"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud

## API GraphQL

This will automatically generate GraphQL documents (queries, mutations, and subscriptions) and generate types for your JavaScript, TypeScript, or Flow application. If you modify the generated documents or your API's schema, you can regenerate the client code anytime with:

amplify codegen

Check to see if the updates to your schema are compiled successfully by running the following command:

amplify api gql-compile

## HTML - boostrap text style

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>