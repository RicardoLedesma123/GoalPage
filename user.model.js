module.exports = {
    create: (connection, body, callback) => {
    connection.query('insert into reg SET ?', body, (err, results) => {
    if (err) {
    callback({ array: null, id: null, success: false, err: JSON.stringify(err) }); return;
    }
    callback({ array: null, id: null, success: true });
    }); },

    create2: (connection, body, callback) => {
        connection.query('insert into usuario SET ?', body, (err, results) => {
        if (err) {
        callback({ array: null, id: null, success: false, err: JSON.stringify(err) }); return;
        }
        callback({ array: null, id: null, success: true });
        }); },

    getAll: (connection, callback) => {
    connection.query('select * from reg', (err, results) => {
    if (err) {
    callback({ array: null, id: null, success: false, err: JSON.stringify(err) }); return;
    }
    callback({ array: results, id: null, success: true });
    }) },

    baja: (connection, body, callback ) => {

        connection.query(`delete from reg where id=${body.id}`, (err, results) =>{

            if (err) {

                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });

                return;

            }

                callback({ array: results, id: null, success: true });

        })

    }

    }