import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { orm, lambda_wrapper_json } from '../../lambda-common'
//@ts-ignore
import  { faker } from '@faker-js/faker/locale/en_GB'
//@ts-ignore
//import momentRandom from 'moment-random'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

 export const lambdaHandler = lambda_wrapper_json([],
    async (lambda_event, db, config, current_user) => {

        const models: {[index: string]: any} = {};

        function createUsers() {
            const users = new Array(10).fill("").map(() => {
                return db.user.create({
                    userName: faker.name.fullName(),
                    password: '',
                    email: faker.internet.exampleEmail(),
                    source: 'google',
                    remoteId: 'hmm'
                                })
            });
            return Promise.all(users).then(users => {
                models.users = users;
                return true
            })
        }

        function createEvents() {
            const events = [{
                name: 'Ealing Style Camp',
                description:
                    `
This event is configured with the options used for Ealing events:

* Small camp mode for single people/families booking themselves in.
* Users must be registered to book, but approval is not required.
* No organisations, villages, or partial attendance.
* Ealing's fee structure based on our pricing policy (including the weird defaults on £35)`,
                startDate: new Date("2025-08-06T00:00:00Z"),
                endDate: new Date("2025-08-10T00:00:00Z"),
                bookingDeadline: new Date("2025-08-01T00:00:00Z"),
                userId: 2,
                feeModel: "ealing",
                feeData: { amount: 35 },
                bookingPolicy: 'registered',
                paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
                paymentInfo: "Ho Ho Ho",
                organisationsEnabled: false,
                bigCampMode: false,
                customQuestions: { ageWidgets: 'groupings' },
            }, {
                name: 'Common Ground Style',
                description:
                    `
 This event is configured to represent a much larger event:

* Assumed one person will book a whole group of people in.
* Users must apply to book before being allowed.
* Bookings are sorted into organisations and villages.
* Three attendance options available
* Large camp fee structure, early, normal and late rates, cancellation fee and woodchip discount. 
* Should have ~300 people booked in already`,
                startDate: new Date("2025-10-08T00:00:00Z"),
                endDate: new Date("2025-10-14T00:00:00Z"),
                bookingDeadline: new Date("2025-06-01T00:00:00Z"),
                userId: 2,
                feeModel: "commonground",
                feeData: {
                    buckets: [{
                        id: 'early',
                        date: new Date('2024-04-01T00:00:00Z'),
                        amount: { 'Whole Event': 90, 'First Half': 50, 'Second Half': 50 }
                    },
                    {
                        id: 'normal',
                        date: new Date('2024-06-01T00:00:00Z'),
                        amount: { 'Whole Event': 100, 'First Half': 55, 'Second Half': 55 }
                    },
                    {
                        id: 'late',
                        date: new Date('2025-01-01T00:00:00Z'),
                        amount: { 'Whole Event': 150, 'First Half': 100, 'Second Half': 100 }
                    }],
                    orgs:
                        `70:4
50:5`,
                    foodOptOut: 30,
                    cancel: 50,
                    desc: `This camp costs £100 for the whole time, or £55 for half the camp.
There is a £10/5 discount for booking before the 1st of April, and it costs a lot more if you book in 2019.

Woodchips are half price, and there is a £50 charge for cancelled bookings.`
                },
                bookingPolicy: 'approved',
                paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
                paymentInfo: `plz give us *all* teh monies`,
                organisationsEnabled: true,
                bigCampMode: true,
                partialDates: 'presets',
                partialDatesData: [{ id: 0, name: 'Whole Event', mask: 127 }, { id: 1, name: 'First Half', mask: 15 }, {
                    id: 2,
                    name: 'Second Half',
                    mask: 120
                }],
                customQuestions: {
                    adultFirstAid: true,
                    adultEmail: true,
                    foodOptOut: true,
                    photoConsent: true
                }
            }, {
                name: 'Venturer Camp 2019',
                description: `Event with the venturer camp options`,
                startDate: new Date("2025-08-03T00:00:00Z"),
                endDate: new Date("2025-08-10T00:00:00Z"),
                bookingDeadline: new Date("2025-06-14T00:00:00Z"),
                userId: 2,
                feeModel: "vcamp",
                feeData: {
                    buckets: [{
                        id: 'early',
                        date: new Date('2025-01-18T00:00:00Z'),
                        whole: 125,
                        a: 20,
                        b: 17
                    },
                    {
                        id: 'normal',
                        date: new Date('2025-06-14T00:00:00Z'),
                        whole: 135,
                        a: 20,
                        b: 17
                    },
                    {
                        id: 'late',
                        date: new Date('2025-08-10T00:00:00Z'),
                        whole: 150,
                        a: 35,
                        b: 17
                    }],
                    cancel: 25,
                    desc: `TODO`
                },
                bookingPolicy: 'approved',
                paymentTypes: ["Cheque", "Bank Transfer"],
                paymentInfo: `plz give us *all* teh monies`,
                organisationsEnabled: false,
                bigCampMode: true,
                partialDates: 'free',
                customQuestions: {
                    adultFirstAid: true,
                    adultEmail: true,
                    emailReply: 'vcamp@woodcraft.org.uk'
                }
            }
            ];
            const promises = events.map(e => {//@ts-ignore
                return db.event.create(e)
            });
            return Promise.all(promises).then(e => {
                models.events = e;
                return true
            })

        }

        function createOrganisations() {
            const promises = [{
                name: 'Woodcraft Folk',
                eventId: models.events[1].id
            }, {
                name: 'Forestlore Faries',
                eventId: models.events[1].id
            }, {
                name: "Big Jim's Big Gang",
                eventId: models.events[1].id
            }, {
                name: "Slightly discounted Org",
                eventId: models.events[1].id
            }, {
                name: "More Discounted Org",
                eventId: models.events[1].id//@ts-ignore
            }].map(o => db.organisation.create(o));
            return Promise.all(promises).then(o => {
                models.organisations = o;
                return true
            })
        }

        function createVillages() {
            let i = 0;
            const promises = new Array(5).fill("").map(() => {
                i++;
                return db.village.create({ name: 'Village-' + i, eventId: models.events[1].id })
            });
            return Promise.all(promises).then(v => {
                models.villages = v;
                return true
            })
        }

        function createBookings() {
            const promises = new Array(16).fill("").map(() =>//@ts-ignore
                db.booking.create({
                    //@ts-ignore
                    userName: faker.name.fullName(),
                    userEmail: faker.internet.exampleEmail(),
                    userContact: faker.phone.number(),
                    district: faker.address.city(),//@ts-ignore
                    paymentType: getRandomPaymentType(),//@ts-ignore
                    guestUUID: faker.datatype.uuid(),//@ts-ignore
                    eventId: models.events[1].id,//@ts-ignore
                    villageId: models.villages.random().id,//@ts-ignore
                    organisationId: models.organisations.random().id,//@ts-ignore
                    campWith: getRandomCampWith()//@ts-ignore
                }));//@ts-ignore
            return Promise.all(promises).then(b => {
                models.bookings = b;
                return true
            })
        }

        function createParticipants() {
            const promises = new Array(getRandomInt(290, 310)).fill("").map(() =>
                db.participant.create({
                    name: faker.name.fullName(),
                    age: faker.date.between( "1980-01-01T00:00:00Z", "2022-01-01T00:00:00Z"),
                    diet: getRandomDiet(),
                    dietExtra: getRandomDietExtra(),
                    medical: getRandomMedical(),
                    bookingId: models.bookings.random().id,
                    days: getDays(),
                    externalExtra: { adultEmail: faker.internet.exampleEmail() },
                    internalExtra: {}
                }));
            return Promise.all(promises).then(p => {
                models.participants = p;
                return true
            })
        }

        function createApplications() {
            let i = 0;
            const promises = new Array(7).fill("").map(() => {
                return db.application.create({
                    message: 'Let me book please',
                    eventId: models.events.filter((e:any) => e.bookingPolicy === 'approved').random().id,
                    userId: models.users[i++].id
                })
            });
            return Promise.all(promises).then(a => {
                models.applications = a;
                return true
            })
        }

        function getRandomInt(min: number, max: number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function getRandomDiet() {
            const diets = ["omnivore", "omnivore", "omnivore", "vegetarian", "vegetarian", "vegan"];
            return diets[getRandomInt(0, 6)]
        }

        function getDays() {
            if (Math.random() < 0.90) return 127;
            if (Math.random() < 0.50) return 120;
            return 15
        }

        function getRandomDietExtra() {
            const extras = [
                "Allergic to nuts",
                "Eats plain food only",
                "No tomatoes please",
                "Severe nut allergy",
                "Does not like potatoes",
                "Will only eay dinosaur shaped food",
                "Has a seafood allergy",
                "lactose intolerent, no dairy",
                "Subsists by consuming the souls of those around them",
                "Hematophageous",
                "Allergic to lentils",
                "Needs meat supplements",
                "No rabbit food please",
                "NO NUTS! THEY WILL DIE"
            ];
            return Math.random() > 0.95 ? extras[getRandomInt(0, extras.length)] : "";
        }

        function getRandomMedical() {
            const medical = [
                "Asthma",
                "Occasional migranes, takes Aspirin when needed",
                "server allergies, carries epipen",
                "diabetic",
                "Asthma, carries inhaler",
                "fluoxetine 2mg",
                "venlafaxine",
                "methyltestosterone",
                "drostanolone propionate",
                "Cebocap 50g daily",
                "diabeties injects daily",
                "Moody"

            ];
            return Math.random() > 0.95 ? medical[getRandomInt(0, medical.length)] : "";
        }

        function getRandomCampWith() {
            if (Math.random() < 0.75) return '';

            return "We would like to camp with " + faker.address.city();

        }

        function getRandomPaymentType() {
            const types = ["Cheque", "Cheque", "Bank Transfer", "Bank Transfer", "Bank Transfer", "Cash"];
            return types[getRandomInt(0, 6)]
        }

        //@ts-ignore
        Array.prototype.random = function () {
            return this[Math.floor((Math.random() * this.length))];
        };

        return Promise.resolve("go")
        .then(createUsers)
        .then(createEvents)
        .then(createOrganisations)
        .then(createVillages)
        .then(createBookings)
        .then(createParticipants)
        .then(createApplications)
        .then(() => {
            console.log("Done Seeding");
            return "ok"
        });






        //***********************************
    })