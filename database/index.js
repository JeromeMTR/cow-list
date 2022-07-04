const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

let get = (callback = () => {}) => {
  connection.query('SELECT * FROM cowlist', (err, results, fields) => {
    if (err) {
      return callback(err);
    }
    console.log(results);
    return callback(null, results);
  })
}

let post = (cow, callback = () => {}) => {

  let placeholder = [cow.name, cow.description];
  connection.query('INSERT INTO cowlist (name, description) VALUES(?, ?)', placeholder, (err) => {
    return callback(null, err);
  })
}
get();
// Don't forget to export your functions!
module.exports = {
  get: get,
  post: post,
};
