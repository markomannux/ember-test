<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6"> <![endif]--> <!--[if IE 7 ]>    <html lang="en" class="ie7"> <![endif]--> <!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]--> <!--[if IE 9 ]>    <html lang="en" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="stylesheet" href="css/style.css?v=2">

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
 </head>
<body>
 <script type="text/x-handlebars" data-template-name="profile">
    <div>
      profile detail {{content.firstName}}
    </div>
  </script>

 <script type="text/x-handlebars" data-template-name="contacts">
      {{this}}
      <a {{action addContact target="this"}}>add contact</a>
      <ul>
        {{#each contact in controller}}
        <li>{{contact.firstName}} {{contact.lastName}} - {{contact.email}}</li>
        {{/each}}
        </ul>
  </script>
 <script type="text/x-handlebars" data-template-name="about">
    <div>
      About
    </div>
  </script>

  <script type="text/x-handlebars" data-template-name="application">
    <h1>{{title}}</h1>
    <div>
      {{#with profile}}
      Hello, <strong>{{firstName}} {{lastName}}</strong>!
      <strong>{{id}}</strong>
      {{/with}}
      <a {{action showProfile profile}}>profilo</a>
      <a {{action showAbout}}>about</a>
      <a {{action showHome}}>home</a>
      <a {{action showContacts}}>contacts</a>
      {{outlet}}
    </div>
  </script>

  <!-- The missing protocol means that it will match the current protocol, either http or https. If running locally, we use the local jQuery. -->
  <script src="js/libs/jquery-1.7.2.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.min.js"><\/script>')</script>
  <script src="js/libs/handlebars-1.0.0.beta.6.js"></script>
  <script src="js/libs/ember-1.0.0-pre.2.min.js"></script>
  <script src="js/libs/ember-data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
