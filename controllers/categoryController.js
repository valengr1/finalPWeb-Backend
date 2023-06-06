function getAllCategories(req, res) {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("select * from categories", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
}

module.exports = {getAllCategories}
