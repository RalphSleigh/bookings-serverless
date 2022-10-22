//shared permission checks
//these functions are then wrapped by the client and server ready for use


export const isAdmin = (user) => {
    if (user.roles.find(role => role.name === "admin")) return true //admin can always
    return false;
};

export const editEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true //admin can always
    return user.id === event.userId
};

export const createEvent = user => {
    if (user.roles.find(role => role.name === "admin")) return true //admin can always
    return false;
};

export const applyToBookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return false; //admin does not need to apply
    if (event.userId === user.id) return false; //owner can
    if (user.id === 1) return false; //guest can't apply
    if (user.roles.find(role => role.name === "book" && role.eventId === event.id)) return false; //are we approved?
    if (user.applications.find(a => a.eventId === event.id)) return false; //did we apply already?
    if (event.bookingPolicy === 'approved') return true; //event needs to be approved
    return false;
};

export const bookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (event.userId === user.id) return true; //owner can
    if (event.bookingPolicy === 'guest') return true; //anyone can book
    if (event.bookingPolicy === 'approved' && user.roles.find(role => role.name === "book" && role.eventId === event.id)) return true; //booking approved
    if (event.bookingPolicy === 'registered'
        && user.roles.find(role => role.name === "book" && role.eventId === event.id)) return true; //book role can book after deadline
    if (event.bookingPolicy === 'registered' && user.id !== 1 && new Date(event.bookingDeadline) > new Date()) return true; //non guest can book registered events

    if (user.roles.find(role => role.eventId === event.id
            && role.name === "Manage")) return true; //anyone with event management permissions can.

    return false;
};

export const deleteBooking = (user, event, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (booking.userId === user.id) return true; //owner can
    if (event.userId === user.id) return true; //event owner can
    if (user.roles.find(role => role.eventId === booking.eventId
            && role.name === "Manage"
            && (role.villageId === null || role.villageId === booking.villageId)
            && (role.organisationId === null || role.organisationId === booking.organisationId))) return true; //event manager
};

export const viewBooking = (user, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (booking.userId === user.id) return true; //owner can
    if (booking.event.userId === user.id) return true; //event owner can
    if (user.roles.find(role => role.eventId === booking.eventId
            && (role.name === "Manage" || role.name === 'View')
            && (role.villageId === null || role.villageId === booking.villageId)
            && (role.organisationId === null || role.organisationId === booking.organisationId))) return true; //event manager
    return false;
};

export const viewOrganisation = (user, event, organisation) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (event.userId === user.id) return true; //owner can
    if (user.roles.find(role => role.eventId === event.id
            && (role.organisationId === null || role.organisationId === organisation.id))) return true;
    return false;
};

export const viewVillage = (user, event, village) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (event.userId === user.id) return true; //owner can
    if (user.roles.find(role => role.eventId === event.id
            && (role.villageId === null || role.villageId === village.id))) return true;
    return false;
};

export const manageEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can always
    if (event.userId === user.id) return true;  //event owner can manage
    if (user.roles.find(role => role.eventId === event.id && role.name !== "book")) return true; //do we have an event management role?
    return false;
};

export const manageWholeEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can always
    if (event.userId === user.id) return true;  //event owner can manage
    if (user.roles.find(role => role.eventId === event.id && role.name !== "book" && role.villageId === null && role.organisationId === null)) return true; //do we have a whole event management role?
    return false;
};

export const decideApplication = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can always
    if (event.userId === user.id) return true;  //event owner can manage
    if (user.roles.find(role => role.eventId === event.id
            && role.name === "Manage"
            && role.villageId === null
            && role.organisationId === null)) return true; //event manager
    return false;
};

export const editBooking = (user, event, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true; //naturally...
    if (booking.eventId !== event.id) return false; //do the booking/event match?
    if (user.id === booking.userId) return true; //booking owner can edit
    if (user.id === event.userId) return true; //event owner can edit
    if (user.roles.find(role => role.eventId === booking.eventId
            && role.name === "Manage"
            && (role.villageId === null || role.villageId === booking.villageId)
            && (role.organisationId === null || role.organisationId === booking.organisationId))) return true;//event/org/village manager can
    if (user.roles.find(role => role.eventId === event.id
            && role.name === "book")) return true; //do we have a book role?
    return false;
};

export const bookIntoOrganisation = (user, event, booking, organisation) => {
    if (booking !== null && booking.organisationId === organisation.id) return true; //always allow previous org
    if (user.roles.find(r => r.name === "book"
            && r.eventId === event.id
            && r.organisationId !== null
            && r.organisationId !== organisation.id)) return false; //we have a book role for another org in the event.
    return true;
};

export const assignVillage = (user, event) => {
    return manageEvent(user, event); //for now the same as an event manager, this will change
};

export const addVillage = (user, event) => {
    return manageEvent(user, event); //for now the same as an event manager, this will change
};

export const getUserList = (user, event) => {
    if (user.id === event.userId) return true; //event owner can
    if (user.roles.find(role => role.name === "admin")) return true;
    if (user.roles.find(role => role.name === "create")) return true;
    if (user.roles.find(role => (role.name === "Manage" || role.name === "View") && role.organisationId === null && role.villageId === null)) return true;
    return false;
};

export const createRole = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true;
    if (event === null) return false;
    if (user.id === event.userId) return true; //event owner can
    if (user.roles.find(role => role.eventId === event.id && role.name === "Manage" && role.villageId === null && role.organisationId === null)) return true;
    return false
};

export const viewMoney = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true;
    if (user.id === event.userId) return true; //event owner
    if (user.roles.find(role => role.name === "Money" && role.eventId === event.id)) return true;
    return false
};

export const addPayment = (user, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true;
    if (user.id === booking.event.userId) return true; //event owner can
    if (user.roles.find(role => role.name === "Money" && role.eventId === booking.event.id && role.organisationId === null)) return true; //global money role
    if (user.roles.find(role => role.name === "Money" && role.eventId === booking.event.id && role.organisationId === booking.organisationId)) return true; //org money
    return false;
};

