// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
// Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});