const db = require('../db')

const User = db.defineModel('speech', {
  number: {
    type: db.STRING(10),
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  name: {
    type: db.STRING(10),
    allowNull: false
  },
  sex: {
    type: db.STRING(5),
    allowNull: false
  },
  academic: {
    type: db.STRING(15),
    allowNull: false
  },
  aclass: {
    type: db.STRING(11),
    allowNull: false
  },
  qq: {
    type: db.STRING(15),
    allowNull: false
  },
  tel: {
    type: db.STRING(15),
    allowNull: false
  },
  email: {
    type: db.STRING(20),
    allowNull: false
  },
  declaration: {
    type: db.STRING(100),
    allowNull: true,
  },
  introduction: {
    type: db.STRING(200),
    allowNull: true
  },
  understand: {
    type: db.STRING(200),
    allowNull: true
  }
})

module.exports = {
  create: async (Number, Name, Sex, Academic, Aclass, QQ, Tel, Email, Declaration, Introduction, Understand) => {
    let res
    await User.create({
      number: Number,
      name: Name,
      sex: Sex,
      academic: Academic,
      aclass: Aclass,
      qq:QQ,
      tel: Tel,
      email: Email,
	    declaration:Declaration,
	    introduction:Introduction,
	    understand:Understand
      }).then(
      result => {
        res = result
      })
    return res
  }
}

