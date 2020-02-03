const handleProfileGet = (req, res, db) => {
    const { id } = req.params;

    db.select('*').from('users').where({
        id: id
    })
    .then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('Not found')
        }
    })
    .catch(err => res.status(400).json('Not found'))
}

const handleProfilePut = (req, res, db) => {
    const { id, name, email, number, linkedin, mentor, years, industry, current, mentorfrom, seniority } = req.body;
    // if(!id ) {
    //   return  res.status(400).json('incorrect form submission');
    // }

    db('users').where('id',id).update({
        id,
        name,
        email,
        number,
        linkedin,
        mentor,
        years,
        industry,
        current,
        mentorfrom,
        seniority
    }
    .then(user => {
        res.json(user[0])
    })
    .catch(err => res.status(400).json('wrong credentials'))

}

module.exports = {
    handleProfileGet
}