

let thumbnails = [
    {
        key: 1,
        id: 1,
        url: "https://i.imgur.com/qXAxHWf.png",
        nome: "25Abril",
        titulo: "25 Abril",
        desc: "Cartaz",
        ferramenta1: "Illustrator",
        ferramenta2: "| Photoshop",
        imgUrl1: "https://i.imgur.com/c6VNEFb.png",
        imgUrl2: "https://i.imgur.com/cf31NhI.jpg",
        alt1: "25Abril1",
        alt2: "25ABril2"
            
    },
    {   
        key: 2,
        id: 2,
        url: "https://i.imgur.com/yvKE597.png",
        nome: "Forgotten Winter",
        titulo: "Forgotten Winter",
        desc: "Ilustração",
        ferramenta1: "Illustrator",
        ferramenta2: "| Photoshop",
        imgUrl1: "https://i.imgur.com/V9LWe6d.png",
        imgUrl2: "https://i.imgur.com/Z9qlf7e.png",
        alt1: "ForgottenWinter",
        alt2: "ForgottenWinter2" 
    },
    {   
        key:3,
        id: 3,
        url: "https://i.imgur.com/CShq9qY.png",
        nome: "Covid",
        titulo: "Infografia",
        desc: "Infografia",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/qymT1po.png",
        alt1: "covid"

    },
    {   
        key:4,
        id: 4,
        url: "https://i.imgur.com/PRS4PQO.png",
        nome: "Gradiva",
        titulo: "Gradiva",
        desc: "Logotipo",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/yxRfA1w.png",
        imgUrl2: "https://i.imgur.com/RiohTdJ.png",
        alt1: "Gradiva1",
        alt2: "Gradiva2"
    },
    {   
        key: 5,
        id: 5,
        url: "https://i.imgur.com/JbDR3te.png",
        nome: "Halloween",
        titulo: "Halloween",
        desc: "Cartaz",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/qePcaNL.png",
        alt: "Halloween"
    },
    {   
        key: 6,
        id: 6,
        url: "https://i.imgur.com/YhX8Q3J.png",
        nome: "Casamento Ivo e Vanessa",
        titulo: "Vanessa & Ivo",
        desc: "Cartaz",
        ferramenta1: "Illustrator",
        ferramenta2: "|  Lápis de cor",
        imgUrl1: "https://i.imgur.com/wea0TOe.jpg",
        imgUrl2: "https://i.imgur.com/GhkSnvg.png",
        alt1: "VanessaIvo",
        alt2: "VanessaIvo2"
    },
    {   
        key: 7,
        id: 7,
        url: "https://i.imgur.com/W7ch23J.png",
        nome: "Leiria",
        titulo: "Monumentos de Leiria",
        desc: "Infografia",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/sDIRH4Z.png",
        alt1: "Monumentos"
    },
    {   
        key: 8,
        id: 8,
        url: "https://i.imgur.com/Lhxio5n.png",
        nome: "Mastodon",
        titulo: "Dry Bone Valley",
        desc: "Capa CD",
        ferramenta1: "Illustrator",
        ferramenta2: "|  Photoshop",
        imgUrl1: "https://i.imgur.com/znVXWhl.png",
        alt1: "Dry Bone Valley"
    },
    {   
        key: 9,
        id: 9,
        url: "https://i.imgur.com/3xxN7mD.png",
        nome: "Paha",
        titulo: "Paha",
        desc: "Logotipo",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/NJ4phXn.jpg",
        imgUrl2: "https://i.imgur.com/ZyLAypx.png",
        alt1: "Paha",
        alt2: "Paha2"
        
    },
    {   
        key: 10,
        id: 10,
        url: "https://i.imgur.com/MG94Lti.png",
        nome: "Patricia e Tiago",
        titulo: "Tiago & Patricia",
        desc: "Convite",
        ferramenta1: "Illustrator",
        ferramenta2: "|  Tinta preta ",
        imgUrl1: "https://i.imgur.com/yLAZyP9.png",
        alt: "Tiago e Patricia"
    },
    {
        key: 11,
        id: 11,
        url: "https://i.imgur.com/grxq434.png",
        nome: "Postais",
        titulo: "Postais Monumentos",
        desc: "Ilustração",
        ferramenta1: "Illustrator",
        ferramenta2: "|  Tinta preta ",
        imgUrl1: "https://i.imgur.com/y72upup.png",
        alt1: "Postais"
    },
    {   
        key: 12,
        id: 12,
        url: "https://i.imgur.com/kuIgLPC.png",
        nome: "Vinho",
        titulo: "Monte Novo Figueirinha",
        desc: "Rótulo",
        ferramenta1: "Illustrator",
        ferramenta2: " ",
        imgUrl1: "https://i.imgur.com/j0f2y15.png",
        alt1: "Vinho"
    }
];


export function getThumbnails() {
    return thumbnails;
}


export function getWork(nome) {
    return thumbnails.find( work => work.nome === nome);
}