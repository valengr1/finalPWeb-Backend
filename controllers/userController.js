const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  await req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("select * from users", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
};

const getAnUserById = async (req, res) => {
  await req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "select * from users where id = ?",
      [req.params.id],
      (err, row) => {
        if (err) return res.send(err);
        res.json(row);
      }
    );
  });
};

const addAnUser = async (req, res) => {
  try {
    const { username, password, mail } = await req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = { username, password: hashPassword, mail };

    await req.getConnection((err, conn) => {
      if (err) return res.send(err);
      conn.query("insert into users set ?", [user], (err) => {
        if (err) return res.send(err);
        res.send("user added");
      });
    });
  } catch (error) {
    console.log(error)
  }
};

const updateAnUserById = async (req, res) => {
  await req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "update users set ? where id = ?",
      [req.body, req.params.id],
      (err) => {
        if (err) return res.send(err);
        res.send(`user ${req.params.id} updated`);
      }
    );
  });
};

const deleteAnUserById = async (req,res)=>{
  await req.getConnection((err,conn)=>{
    if(err) return res.send(err)
    conn.query("delete from users where id = ?",[req.params.id],(err)=>{
      if(err) return res.send(err)
      res.send(`user n${req.params.id} deleted`)
    })
  });
}

module.exports = {
  getAllUsers,
  getAnUserById,
  addAnUser,
  updateAnUserById,
  deleteAnUserById
};
