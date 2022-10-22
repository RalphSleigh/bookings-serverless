export function updateAssociation(db, instance, key, Association, values) {

    let ops:any[] = [];
	//delete no longer present
	ops = [...ops, ...instance[key].filter(p => !values.find(q => q.id === p.id)).map(p => p.destroy())];
	//update existing
	ops = [...ops, ...values.filter(p => p.id).map(p => Association.findOne({ where: { id: p.id } }).then(q => q ? q.update(p) : null))];
	//add new ones
	ops = [...ops, ...values.filter(p => !p.id).map(p => {
        p[Association.associations[instance.constructor.name].foreignKey] = instance.id;
		return Association.create(p);
	})];
	return Promise.all(ops);
};

/*
module.exports.getEventDetails = async id => {

	/*
 models.event.addScope('details',
     {
         include: [{model: models.role, include: [models.user, models.organisation, models.village]},
             {model: models.organisation},
             {model: models.application, include: [models.user]},
             {model: models.village},
             {model: models.user}]
     },
     {override: true});

	let event = await db.event.findOne({where: {id: id}})
	if (event === null) return null;
	else {
		const roles = await db.role.findAll({where: {eventId: event.id}})
		const villages = await db.village.findAll({where: {eventId: event.id}})
		const organisations = await db.organisation.findAll({where: {eventId: event.id}})
		const applications = await db.application.findAll({where: {eventId: event.id}})
		const users = await db.user.findAll();

		event = event.get({raw: true})

		event.roles = roles.map(role => {
			const r = role.get({raw: true})
			r.user = users.find(u => u.id === r.userId)
			r.village = villages.find(v => v.id === r.villageId)
			r.organisation = organisations.find(o => o.id === r.organisationId)
			return r
		})
		event.applications = applications.map(app => {
			const a = app.get({raw: true})
			a.user = users.find(u => u.id === a.userId)
			return a
		})
		event.organisations = organisations
		event.villages = villages
		event.user = users.find(u => u.id === event.userId)
		return event;
	}
}

*/
