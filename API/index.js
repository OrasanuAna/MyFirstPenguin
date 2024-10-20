const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const db = new sqlite3.Database('db.sqlite3');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
 next();
});
app.get('/', (req, res) => res.send('Hello World!'));

app.post("/login", (req, res) => {
    const { name, password } = req.body;
    
    db.get("SELECT id, password FROM users WHERE name = ?", [name], (err, row) => {
        if (err) { 
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        } else if (row) {
            bcrypt.compare(password, row.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({message: "Internal Server Error"});
                } else if (result) {
                    res.status(200).json({message: "Login Successful", id: row.id });
                } else {
                    res.status(401).json({message: "Incorrect Password"});
                }
            });
        } else {
            res.status(404).json({message: "User Not Found"});
        }
    });
});

app.post("/register", (req, res) => {
    const { name, age, password } = req.body;
    db.get("SELECT * FROM users WHERE name = ?", [name], (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        } else if (row) {
            res.status(409).json({message: "User Already Exists"});
        } else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({message: "Internal Server Error"});
                } else {
                    db.run("INSERT INTO users (name, age, password) VALUES (?, ?, ?)", [name, age, hash], (err) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({message: "Internal Server Error"});
                        } else {
                            res.status(201).json({message: "User Created"});
                        }
                    });
                }
            });
        }
    });
});


app.get("/user", (req, res) => {
    const { id } = req.query;

    db.get("SELECT id, name, age, isadmin FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        } else if (row) {
            res.status(200).json({message: "User Found" , data: row});
        } else {
            res.status(404).json({message: "User Not Found"});
        }
    });
});

app.post("/changepassword", (req, res) => {
    const { oldpassword, newpassword } = req.body;
    const { id } = req.query;
    
    db.get("SELECT password FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        } else if (row) {
            bcrypt.compare(oldpassword, row.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({message: "Internal Server Error"});
                } else if (result) {
                    bcrypt.hash(newpassword, 10, (err, hash) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({message: "Internal Server Error"});
                        } else {
                            db.run("UPDATE users SET password = ? WHERE id = ?", [hash, id], (err) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).json({message: "Internal Server Error"});
                                } else {
                                    res.status(200).json({message: "Password Changed"});
                                }
                            });
                        }
                    });
                } else {
                    res.status(401).json({message: "Incorrect Password"});
                }
            });
        } else {
            res.status(404).json({message: "User Not Found"});
        }
    });
});

app.post("/changeuser", (req, res) => {
    const name  = req.body.newusername;
    const { id } = req.query;
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
        if (err) { 
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        } else if (row) {
            db.get("SELECT * FROM users WHERE name = ?", [name], (err, row) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({message: "Internal Server Error"});
                } else if (row) {
                    res.status(409).json({message: "User Already Exists"});
                } else {
                    db.run("UPDATE users SET name = ? WHERE id = ?", [name, id], (err) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({message: "Internal Server Error"});
                        } else {
                            res.status(200).json({message: "Username Changed"});
                        }
                    });
                }
            });
        } else {
            res.status(404).json({message: "User Not Found"});
        }
    });
});



app.listen(port, () => console.log(`My Penguin API listening on port ${port}!`));


