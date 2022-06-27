const timestamp = require('time-stamp');
const md5 = require('md5');
const uniqid = require('uniqid');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.resolve(__dirname, 'database/tmp/db.sqlite'));

const dateAndHours = timestamp('YYYY/MM/DD HH:mm:ss');

db.serialize(()=>{
    
    db.run("CREATE TABLE IF NOT EXISTS calendar (id INT, date INT, title TEXT, desciption TEXT, createdAt DATETIME, updatedAt DATETIME)");

    db.run("INSERT INTO calendar VALUES ($id, $date, $title, $description, $createdAt, $updatedAt)", {
        $id: md5(uniqid()),
        $date: '25/05/2022',
        $title: 'Alguma coisa',
        $description: 'Uma descrição',
        $createdAt: dateAndHours,
        $updatedAt: dateAndHours
    });

    db.each("SELECT * FROM calendar", (err, row) => {
        // console.log(row);
    });
});

db.close();