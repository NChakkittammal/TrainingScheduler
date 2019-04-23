const Events = require('../models').Events;

const getAll = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, Events;
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }
    if (req.query.isCompleted) {
        whereStatement.isCompleted = {
            $eq: (req.query.isCompleted === 'true')
        };
    }
    whereStatement.userId = {
        $eq: req.user.id
    };
    [err, Events] = await to(Events.findAll({ where: whereStatement, order: [['orderId', 'ASC']] }));
    if (err) console.log(err.message);
    return res.json(Events);
}
module.exports.getAll = getAll;

const get = async function (req, res) {
    let err, events;
    let Id = parseInt(req.params.Id);
    res.setHeader('Content-Type', 'application/json');
    [err, events] = await to(Events.findByPk(Id));
    if (!events) {
        res.statusCode = 404;
        return res.json({ success: false, error: err });
    }
    return res.json(events);
}
module.exports.get = get;

const create = async function (req, res) {
    res.setHeader('ContentType', 'application/json');
    const body = req.body;

    [err, orderId] = await to(Events.max('orderId'));
    if (err) console.log(err.message);

    body.userId = req.user.id;
    body.orderId = orderId || orderId === 0 ? orderId + 1 : 0;
    if (!body.name) {
        return ReE(res, 'Please enter a name', 422);
    } else {
        let err, events;

        [err, events] = await to(Events.create(body));
        if (err) return ReE(res, err, 422);

        return ReS(res, events, 201);
    }
};
module.exports.create = create;

const update = async function (req, res) {
    let err, events;
    events = req.body;
    [err, events] = await to(
        Events.update(events, {
            where: {
                id: events.id,
            },
        }),
    );
    if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
            err = err.message;
        }

        if (typeof code !== 'undefined') res.statusCode = code;
        res.statusCode = 422;
        return res.json({ success: false, error: err });
    }

    return res.json(events);
};
module.exports.update = update;