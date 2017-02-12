Accordion_CSR
Create accordion using jslink in SharePoint 2013.

As a developer, we often come across client requirements that involve extending or enhancing SharePoint in terms of branding or aesthetics. In short, clients looks for a WOW factor on site. 
 
Recently, I came across one such requirement where client wanted to have some collapsible content. In technical terms, we call it as Accordion.
Accordions are useful when you want to toggle between hiding and showing large amount of contents. Contents can be text or images.
Creating accordion web part using Server Side Object Model is quite easy.
Is it worth creating a Server Side control for this?
 
With this post, I will walk you through creating Accordion using Client Side Rendering in SharePoint 2013.
 
Client Site Rendering is a mechanism through which we can transform data using the client rather than the server. This means using client-side technologies, such as HTML, CSS and JavaScript. It allows us to style SharePoint elements using JavaScript, rather than having to write XSLT or server side code.
 
Advantages of Client-Side Rendering
 
1.Performance
The rendering is done Client Side. Means that the pages can load faster when using CSR.
2.Easy Development – 
Being developers, we’re familiar with JavaScript, which makes CSR a lot easier to pick up. 
3.Flexibility
Use CSR to overwrite just a particular field, the header, footer, or the entire view. Moreover, you’re free to use any jQuery plugin with it.

Create a list of your choice, in my case I will go with custom list and will name it as 'FAQs'.
Note: You can also go for announcement list as well.

Rename Title Column as Question and create another multiline column (plain text) name it as Answer.


create a page and FAQs list view web part to it. Make sure, 'Question' and 'Answer' columns are visible on the view. Now edit the webpart properties to link you CSR code to it.

If your CSR code resides at site collection level use :  ~sitecollection/SiteAssets/Accordion.js  while linking it to list view. 
For site level user :  ~site/SiteAssets/Accordion.js  

