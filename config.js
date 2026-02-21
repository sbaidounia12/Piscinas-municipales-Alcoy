var config = {
    style: 'mapbox://styles/dounia112/cmlwjn8n5000201r6216d0tv5',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZG91bmlhMTEyIiwiYSI6ImNtbG1yY2x6ZTBsNGUzZHM5a253ajdnMjUifQ.r1k6QMHTQrYsk6X9ePPBlQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Piscinas Alcoy',
    subtitle: 'Storymaps de las piscinas de Alcoy.',
    byline: 'Dounia Sbai',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Piscina municipal de Caramanchel',
            image: 'https://www.alcoi.org/export/sites/default/es/areas/deportes/instalaciones/imagenes/otras/piscina_caramanxel_1.JPG',
            description: 'Piscina al aire libre 25 x 12,5m. Dispone también de piscina infantil y vestuarios. Horario de lunes a domingo: de 10h a 22h.',
            location: {
                center: [-0.46719879179217155, 38.70731145733336],
                zoom: 17,
                pitch: 69,
                bearing: 56
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Piscina municipal Eduardo Latorre',
            image: 'https://www.alcoi.org/export/sites/default/es/portal/imagenes2025/Piscina-Complex-Eduardo-Latorre.jpg_1612302774.jpg',
            description: 'Piscina cubierta 25 x 16,5m, sin zona exterior. Dispone también de vestuarios. Horario de lunes a domingo: de 10h a 22h.',
            location: {
                center: [-0.47311442271493254, 38.70516092673443],
                zoom: 18,
                pitch: 10,
                bearing: -137.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Piscina municipal José Trezano Alós',
            image: 'https://www.alcoi.org/export/sites/default/es/areas/deportes/instalaciones/imagenes/otras/piscina_Jose_Trenzano1.JPG_1819530902.jpg',
            description: 'Piscina de 50 x 15 m al aire libre. Dispone de piscina infantil asi como de vestuarios. Horario de lunes a domingo: de 10h a 22h',
            location: {
                center: [-0.47924822066531086, 38.70766520346225],
                zoom: 19,
                pitch: 8.01,
                bearing: -123.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Piscina municipal San Vicente de Paúl',
            image: 'https://www.alcoi.org/es/areas/deportes/instalaciones/imagenes/otras/piscina_paulas.jpeg?__scale=w:250,h:188,t:1,p:6',
            description: 'Piscina al aire libre 25 x 14m. Dispone de piscina infantil y también de vestuarios. Horario: de 10h a 20h.',
            location: {
                center: [-0.48951, 38.69707],
                zoom: 18.07,
                pitch: 0,
                bearing: 15.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Piscina municipal de Batoi',
            image: 'https://www.alcoi.org/export/sites/default/es/areas/deportes/instalaciones/imagenes/otras/piscina_batoi_2.JPG_1819530902.jpg',
            description: 'Piscina al aire libre 25 x 14m. Dispone de otra piscina infantil y vestuarios. Horario: de 10h a 20h.',
            location: {
                center: [-0.4939193123676246, 38.68847994333299],
                zoom: 17.19,
                pitch: 0,
                bearing: -59.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
