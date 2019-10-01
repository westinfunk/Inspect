export const getInspections = async function() {
    return inspections;
}

export const getInspection = async function(inspectionId) {
     const inspection = inspections.filter((inspection) => inpsectionId == inspection.id);
     return inspection.length ? inspection[0] : null;
}



const inspections = [
    { 
        id: 1,
        address: "9878 First Street",
        city: "Orem",
        state: "UT",
        summary: "This is a summarry of the inspection",
        inspectorName: "Todd P",
        clientName: "Jefferson Anders",
        photos: [],
        categories: [
            {
                name: "Roof",
                description: ipsum,
                icon: "check",
                photos: [""],
                subcategories: [
                    {
                        name: "Shingles",
                        description: ipsum,
                        icon: "check",
                        photos: [""]
                    }
                ]
            },
            {
                name: "Foundation",
                description: ipsum,
                icon: "warning",
                photos: [""],
                subcategories: [
                    {
                        name: "Walls",
                        description: ipsum,
                        icon: "check",
                        photos: [""]
                    },
                    {
                        name: "Concrete",
                        description: ipsum,
                        icon: "warning",
                        photos: [""]
                    }
                ]
            },            {
                name: "Plumbing",
                description: ipsum,
                icon: "check",
                photos: [""],
                subcategories: [
                    {
                        name: "Pipes",
                        description: ipsum,
                        icon: "check",
                        photos: [""]
                    },
                    {
                        name: "Faucets",
                        description: ipsum,
                        icon: "check",
                        photos: [""]
                    },
                    {
                        name: "Toilets",
                        description: ipsum,
                        icon: "warning",
                        photos: [""]
                    },
                ]
            },            {
                name: "Electric",
                description: ipsum,
                icon: "check",
                photos: [""],
                subcategories: [
                    {
                        name: "Wiring",
                        description: ipsum,
                        icon: "check",
                        photos: [""]
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        address: "382 Maple",
        city: "Pleasant Grove",
        state: "UT"
    },
    {
        id: 3,
        address: "10982 Oak",
        city: "Provo",
        state: "UT"
    },
    {
        id: 4,
        address: "2082 Presidents",
        city: "Salt Lake City",
        state: "UT"
    }
]

const ipsum = "Interdum posuere lorem ipsum dolor sit amet. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Eget velit aliquet sagittis id consectetur purus ut. Consectetur adipiscing elit ut aliquam purus. Nulla facilisi nullam vehicula ipsum. Urna et pharetra pharetra massa massa ultricies mi quis. Mi in nulla posuere sollicitudin aliquam. Eros donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. At ultrices mi tempus imperdiet. Nibh ipsum consequat nisl vel pretium. Ut sem viverra aliquet eget sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Orci phasellus egestas tellus rutrum tellus pellentesque. Laoreet sit amet cursus sit amet dictum sit amet justo. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Blandit volutpat maecenas volutpat blandit aliquam. Non tellus orci ac auctor augue."