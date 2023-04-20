function fam1() {
    const data = [
        {
            id: "muchtar",
            data: {
                firstName: "Muchtar",
                lastName: "",
                birthday: "",
                gender: "M",
                genderDesc: "Pria"
                // avatar: "https://pbs.twimg.com/profile_images/1338923150050902016/kpHZyNUF_400x400.jpg",
            },
            rels: {
                spouses: ["mursiyah"],
                children: [
                    "miftachurrohmah",
                    "mbasori",
                    "rochmatmawardi",
                    "sitisaadah",
                    "komsatunlailiyah",
                    "badrussantosa",
                ]
            },
        },
        {
            id: "mursiyah",
            data: {
                firstName: "Mursiyah",
                lastName: "",
                birthday: "",
                gender: "F",
                genderDesc: "Wanita",
                avatar: ""
            },
            rels: {
                spouses: ["muchtar"],
                children: [
                    "miftachurrohmah",
                    "mbasori",
                    "rochmatmawardi",
                    "sitisaadah",
                    "komsatunlailiyah",
                    "badrussantosa",
                ]
            }
        },
        {
            id: "miftachurrohmah",
            data: {
                firstName: "Miftachur",
                lastName: "Rohmah",
                birthday: "",
                gender: "F",
                genderDesc: "Wanita",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        },
        {
            id: "mbasori",
            data: {
                firstName: "M",
                lastName: "Basori",
                birthday: "",
                gender: "M",
                genderDesc: "Pria",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        },
        {
            id: "rochmatmawardi",
            data: {
                firstName: "Rochmat",
                lastName: "Mawardi",
                birthday: "",
                gender: "M",
                genderDesc: "Pria",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        },
        {
            id: "sitisaadah",
            data: {
                firstName: "Siti",
                lastName: "Sa'adah",
                birthday: "",
                gender: "F",
                genderDesc: "Wanita",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        },
        {
            id: "komsatunlailiyah",
            data: {
                firstName: "Komsatun",
                lastName: "Lailiyah",
                birthday: "",
                gender: "F",
                genderDesc: "Wanita",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        },
        {
            id: "badrussantosa",
            data: {
                firstName: "Badrus",
                lastName: "Santosa",
                birthday: "",
                gender: "M",
                genderDesc: "Pria",
                avatar: ""
            },
            rels: {
                father: "muchtar",
                mother: "mursiyah",
                // spouses: [""],
                // children: [""]
            }
        }
    ];
    return data
}