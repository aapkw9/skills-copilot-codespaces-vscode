// Create web server using node.js

// Import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

// Create web server
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // Get query data
    var pathname = url.parse(_url, true).pathname; // Get pathname

    // If pathname is root
    if(pathname === '/'){
        if(queryData.id === undefined){ // If id is undefined
            fs.readdir('./data', function(error, filelist){ // Read directory
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = template.list(filelist); // Get list of files
                var html = template.HTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`); // Create html
                response.writeHead(200); // Write status code
                response.end(html); // Send html
            });
        } else { // If id is not undefined
            fs.readdir('./data', function(error, filelist){ // Read directory
                var filteredId = path.parse(queryData.id).base; // Get filtered id
                fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){ // Read file
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDescription = sanitizeHtml(description, {
                        allowedTags:['h1']
                    });
                    var list = template.list(filelist); // Get list of files
                    var html = template.HTML(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`, `
                        <a href="/create">create</a>
                        <a href="/update?id=${sanitizedTitle}">update</a>
                        <form action="delete_process" method="post">
                            <input type="hidden" name="id" value="${sanitizedTitle}">
                            <input type="submit" value="delete">
                        </form>
                    `); // Create html
                    response.writeHead(200); // Write status code
                    response.end(html); // Send html

