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
                title: "Roof",
                subcategories: [{
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
                title: "Attic",
                subcategories: [{
                    title: "Framing"
                }]
            },
            {
                title: "Garage",
                subcategories: [{
                    title: "Garage Door"
                }]
            },
            {
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
            title: "Attic",
            subcategories: [{
                title: "Framing"
            }]
        },
        {
            title: "Garage",
            subcategories: [{
                title: "Garage Door"
            }]
        },
        {
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
    id: 83029,
    title: "Template C",
    categories: [
        {
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
            title: "Attic",
            subcategories: [{
                title: "Framing"
            }]
        },
        {
            title: "Garage",
            subcategories: [{
                title: "Garage Door"
            }]
        },
        {
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
                title: "",
                description: "",
                subcategories: [
                    {
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

