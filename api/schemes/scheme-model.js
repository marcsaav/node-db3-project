const db = require('../../data/db-config')

module.exports = {
    find() {
        return db('schemes')
    },
    findById(id) {
        return db('schemes')
            .where('id', id)
    },
    findSteps(id) {
        // select
        //     sc.scheme_name,
        //     step_number,
        //     instructions
        // from steps st
        // join schemes sc
        //     on st.scheme_id = sc.id
        // where sc.id = 2
        // order by step_number asc
        return db('steps as st')
            .join('schemes as sc', 'st.scheme_id', 'sc.id' )
            .select('sc.scheme_name', 'step_number', 'instructions')
            .where('sc.id', id)
            .orderBy('step_number', 'asc')
    },
    add(scheme) {
        return db('schemes')
            .insert(scheme)
            .then(([id]) => {
                return db('schemes')
                    .where('id', id)
            })
    },
    update(id, changes) {
        return db('schemes')
            .where('id', id)
            .update(changes)
            .then(([id]) => {
                return db('schemes')
                    .where('id', id)
            })
    },
    remove(id) {
        return db('schemes')
            .where('id', id)
            .del()
    }
}
