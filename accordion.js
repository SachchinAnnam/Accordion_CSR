/*************************
** Project                  :       SharePoint Online
** File                     :       Accordion.js
** Name                     :       Accordion Template
** Description              :       This javascript is used to create accordion control using jslink approach.
** Authorizer               :       NA
** Date                     :       11/02/2017 
** Modified On              :      
************************** 
** Change History 
************************** 
** Version  Date               Author                   Description 
** --  --------           -------                  ------------------------------------  
** 01  11/02/2017         Sachchin Annam            This javascript is used to create accordion control using jslink approach.

**************************/
(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
    (window.jQuery || document.write('<script src="/SiteAssets/jquery1.11.min.js"><\/script>')); 
    (window.load || document.write('<link rel="stylesheet" href="/SiteAssets/Accordion/accordion.css">')); 

    // Create object that have the context information about the field that we want to change it's output render  
    var accordionCSRCtx = {}; 
    accordionCSRCtx.Templates = {}; 
 
    // Be careful when add the header for the template, because it's will break the default list view render 
    accordionCSRCtx.Templates.Header = "<ul class='accordion'>"; 
    accordionCSRCtx.Templates.Footer = "</ul>";

    //template ID of Custom List - this line will make sure that CSR will render for custom list only
    accordionCSRCtx.ListTemplateType = 100;

 
    // Add OnPostRender event handler to add accordion click events and style 
    accordionCSRCtx.OnPostRender = accordionOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    accordionCSRCtx.Templates.Item = accordionTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(accordionCSRCtx); 
 
})(); 
 
// This function is used for creating logic 
function accordionTemplate(ctx) { 
    var title = ctx.CurrentItem["Title"]; //internal name of the column
    var description = ctx.CurrentItem["Answer"]; //internal name of the column
 
    // Return whole item html 
    return "<li><a>" + title + "</a><div>" + description + "</div></li>"; 
} 
 
function accordionOnPostRender() { 
 
 $(document).ready(function () {
           // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

            $('.accordion a').click(function (j) {
                var dropDown = $(this).closest('li').find('div');

                $(this).closest('.accordion').find('div').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('a.active').removeClass('active');
                    $(this).addClass('active');
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });

        });    
}