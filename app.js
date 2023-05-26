const express = require('express');
const app = express();
const heading = "Blogs - Web Development";
const blogHeadings = ["Difference between HTTP1.1 vs HTTP2", "JavaScript Object", "JavaScript Basics", "Permutations of a Number"];
const blogURLs = ["https://shekhar403.github.io/home/blogs/blog1/", "https://shekhar403.github.io/home/blogs/blog2/", "https://webdiary360.blogspot.com/2023/05/js.html", "https://webdiary360.blogspot.com/2023/05/jspermutations.html", "https://shekhar403.github.io/home/blogs/blog3/"];
const blogDates = ["16th April 2023", "16th April 2023", "10th May 2023", "10th May 2023", "26th May 2023"];

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("home", {Title : heading, Blogs: blogHeadings, URLs: blogURLs, Dates: blogDates});
});

app.listen(3000, function() {
    console.log("port : 3000");
});


