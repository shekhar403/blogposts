const express = require('express');
const app = express();
const heading = "Blogs - Web Development";
const blogHeadings = ["Difference between HTTP1.1 vs HTTP2", "JavaScript Object"];
const blogURLs = ["https://shekhar403.github.io/home/blogs/blog1/", "https://shekhar403.github.io/home/blogs/blog2/"];

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("home", {Title : heading, Blogs: blogHeadings, URLs: blogURLs});
});

app.listen(3000, function() {
    console.log("port : 3000");
});


