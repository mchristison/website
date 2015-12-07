var title = {title:"Molly Christison"};
var subtitle = {subtitle:"Web Developer"};

var templateScript = $('.home').html();
var template = Handlebars.compile(templateScript);
$(document.body).append(template(title, subtitle));
