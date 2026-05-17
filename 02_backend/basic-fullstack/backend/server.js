import express from "express";
import "dotenv/config";
const app = express();


app.get("/", (req, res ) => {
    res.send(`Server is working`)
});


//array of objects
const jokes = [
    {
        "id": 1,
        "title": "The SQL Query",
        "content": "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'"
    },
    {
        "id": 2,
        "title": "Binary People",
        "content": "There are 10 types of people in the world: those who understand binary, and those who don't."
    },
    {
        "id": 3,
        "title": "Hardware Issue",
        "content": "How many programmers does it take to change a light bulb? None, that's a hardware problem."
    },
    {
        "id": 4,
        "title": "Dark Mode",
        "content": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25."
    },
    {
        "id": 5,
        "title": "Bugs",
        "content": "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
        "id": 6,
        "title": "Grocery Shopping",
        "content": "A programmer's wife says, 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' The programmer returns with 12 loaves of bread."
    },
    {
        "id": 7,
        "title": "Knock Knock Java",
        "content": "Knock, knock. Who's there? ... [very long pause] ... Java."
    },
    {
        "id": 8,
        "title": "TCP Protocol",
        "content": "A TCP packet walks into a bar and says, 'I'd like a beer.' The bartender says, 'You want a beer?' The packet says, 'Yes, I'd like a beer.'"
    },
    {
        "id": 9,
        "title": "Hide and Seek",
        "content": "Why did the database administrator leave his wife? She had one-to-many relationships."
    },
    {
        "id": 10,
        "title": "Frayed Knot",
        "content": "A string walks into a bar. The bartender says, 'We don't serve strings.' The string ties himself into a loop, messes up his top, and goes back. The bartender asks, 'Aren't you that string?' The string replies, 'I'm a frayed knot.'"
    }
];

//standardization /api/route
app.get("/api/jokes", (req, res) => {
    res.send(jokes)
});


//now i want to load this data in the frontend





const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})