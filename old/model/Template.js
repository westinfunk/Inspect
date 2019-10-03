export const getTemplates = async function() {
    return templates;
}

export const getTemplate = async function (id) {
    const template =  templates.filter(t => t.id == id);
    if (template.length) {
        return template[0];
    } else {
        return null;
    }
}

export const initializeTemplate = async function(title) {
    const templateExists = templates.filter(template => template.title == title).length > 0;
    if (templateExists) {
        throw new Error("A template already exists with that title");
    } else {
        const id = await generateTemplateId(title);
        const template = {
            id,
            title,
            lastUsed: Date.now(),
            categories: []
        }
        templates.push(template);
        return id;
    }
}

export const generateTemplateId = async function(title) {
    return Math.ceil(Math.random() * 100000);
}



const templates = [
    {
        id: 9832,
        title: "Template A",
        lastUsed: Date.now(),
        information: {
            address: "",
            city: "",
            state: "",
            zip: "",
            temperature: "",
            timeStart: "",
            timeEnd: "",
            clientName: "",
            summary: ""
        },
        categories: [
            {
                id: 390832,
                title: "Roof",
                subcategories: [{
                        id: 9827343,
                        title: "Covering",
                        params: [{
                            title: "Material",
                        }]
                    }, {
                        title: "Drainage"
                    }, {
                        title: "Plumbing"
                    }
                ]
            },
            {
                id: 390833,
                title: "Exterior",
                subcategories: [{
                    title: "Driveway"
                }, {
                    title: "Sidewalk"
                }, {
                    title: "Patio"
                }]
            },
            {
                id: 390834,
                title: "Attic",
                subcategories: [{
                    title: "Framing"
                }]
            },
            {
                id: 390835,
                title: "Garage",
                subcategories: [{
                    title: "Garage Door"
                }]
            },
            {
                id: 390836,
                title: "Kitchen",
                subcategories: [{
                    title: "Appliances"
                }, {
                    title: "Sink"
                }, {
                    title: "Counter"
                }]
            }
        ]
    }, {
    id: 20983,
    title: "Template B",
    categories: [
        {
            id: 12093874,
            title: "Roof",
            subcategories: [{
                    title: "Covering",
                }, {
                    title: "Drainage"
                }, {
                    title: "Plumbing"
                }
            ]
        },
        {
            id: 73891236,
            title: "Exterior",
            subcategories: [{
                id: 390801,
                title: "Driveway"
            }, {
                id: 390802,
                title: "Sidewalk"
            }, {
                id: 390803,
                title: "Patio"
            }]
        },
        {
            title: "Attic",
            subcategories: [{
                id: 390878,
                title: "Framing"

            }]
        },
        {
            id: 2674382,
            title: "Garage",
            subcategories: [{
                id: 390877,
                title: "Garage Door"
            }]
        },
        {
            id: 27477743,
            title: "Kitchen",
            subcategories: [{
                id: 390876,
                title: "Appliances"
            }, {
                id: 390875,
                title: "Sink"
            }, {
                id: 390874,
                title: "Counter"
            }]
        }
    ]
    }, {
    id: 83021,
    title: "Template C",
    categories: [
        {
            id: 9877732,
            title: "Roof",
            subcategories: [{
                    title: "Covering",
                }, {
                    title: "Drainage"
                }, {
                    title: "Plumbing"
                }
            ]
        },
        {
            id: 1277322,
            title: "Exterior",
            subcategories: [{
                id: 390861,
                title: "Driveway"
            }, {
                id: 390862,
                title: "Sidewalk"
            }, {
                id: 390863,
                title: "Patio"
            }]
        },
        {
            id: 4839177,
            title: "Attic",
            subcategories: [{
                id: 390864,
                title: "Framing"

            }]
        },
        {
            id: 47392342,
            title: "Garage",
            subcategories: [{
                id: 390851,
                title: "Garage Door"
            }]
        },
        {
            id: 4738234,
            title: "Kitchen",
            subcategories: [{
                id: 390852,
                title: "Appliances"
            }, {
                id: 390853,
                title: "Sink"
            }, {
                id: 390854,
                title: "Counter"
            }]
        }
    ]
    },

]


const Inspection = {
    location: {
        address: "",
        city: "",
        state: "",
        zip: ""
    },
    client: {
        name: "",
        email: "",
        phone: ""
    },
    inspector: {
        company: "",
        name: "",
        email: "",
        phone: ""
    },
    information: {
        startTime: "",
        endTime: "",
        weather: "",
        temperature: ""
    },
    description: {

    },
    photos: [],
    inspection: {
        categories: [
            {
                id: "",
                title: "",
                description: "",
                subcategories: [
                    {
                        id: "",
                        title: "",
                        status: ["Not present", "Inspected", "Replace/Repair"],
                        notes: [""],
                        photos: [],
                        params: [{
                            title: "",
                            value: ""
                        }]
                    }
                ]
            }
        ]
    }
}

