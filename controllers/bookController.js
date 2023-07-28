getAllBooks = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "select b.id,b.titulo,b.edicion,b.autor,c.nombre as categoria from books as b inner join categories as c on b.idCategoria = c.id",
      (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
      }
    );
  });
};

getABookById = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "select b.id,b.titulo,b.edicion,b.autor,c.nombre as categoria from books as b inner join categories as c on b.idCategoria = c.id where b.id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
      }
    );
  });
};

addANewBook = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("insert into books set ?", [req.body], (err) => {
      if (err) return res.send(err);
      res.send("book added");
    });
  });
};

deleteABookById = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("delete from books where id = ?", [req.params.id], (err) => {
      if (err) return res.send(err);
      res.send("book deleted");
    });
  });
};

updateABookById = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "update books set ? where id = ?",
      [req.body, req.params.id],
      (err) => {
        if (err) return res.send(err);
        res.send(`book n${req.params.id} updated`);
      }
    );
  });
};

module.exports = {
  getAllBooks,
  addANewBook,
  getABookById,
  deleteABookById,
  updateABookById,
};
