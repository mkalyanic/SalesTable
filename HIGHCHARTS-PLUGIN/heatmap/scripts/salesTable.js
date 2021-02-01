function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

/*
    The Heat Map Series is defined by setting the type to HeatMap

    A Heat Map has an X and Y axis like any cartesian series.
    
    The Point definitions however takes Three Values

        App Name
        WeekDay
        Value- Status of Application as well as Value, which serves as the value for color coding the point.
        

    These Values can be given as an array of three numbers/


*/

const bgColor = "white"
const textColor = "#3D70B2"
const borderColor = "white"

const errorColor = "#E71D32"
const sucessColor = "#5AA700"
const infoColor = "#3D70B2"
const alertColor = "#FDD600"

Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
        backgroundColor:bgColor,
        borderColor:borderColor
    },

    title: {
        text: 'Sales per employee per weekday',
        style:{
            color: textColor
        }
    },
    credits:{
        // enabled: false,
        text: "Kalyani",
        // href ="",
    },

    xAxis: {
        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
        labels : {
            formatter: function(){
                return this.value.slice(0,17)
            },
            rotation: -40,
            style:{
                color:textColor
            }
        },

    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        title: null,
        reversed: true,
        labels : {
            formatter: function(){
                return this.value.slice(0,10)
            },
            style:{
                color:textColor
            }
        },
    },

    // accessibility: {
    //     point: {
    //         descriptionFormatter: function (point) {
    //             var ix = point.index + 1,
    //                 xName = getPointCategoryName(point, 'x'),
    //                 yName = getPointCategoryName(point, 'y'),
    //                 val = point.value;
    //             return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
    //         }
    //     }
    // },

    colorAxis: {
        // min: 0,
        // minColor: '#FFFFFF',
        // maxColor: Highcharts.getOptions().colors[0]
        dataClasses :[
            {
                from: 0,
                to:30,
                color: errorColor,
                name :'Down'
             },{
                from: 30,
                to:80,
                color: alertColor,
                name :'Warning'
             },{
                from: 80,
                color: sucessColor,
                name :'Active'
             },        
        ]
    },

    legend: {
        align: 'right',
        // layout: 'vertical',
        layout: 'proximate',
        y: 40,
        margin: 0,
        // verticalAlign: 'top',
        // symbolHeight: 280
        itemStyle:{
            color: textColor
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        borderColor :borderColor,
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
        dataLabels: {
            enabled: false,
            color: textColor
        }
    }],

    // responsive: {
    //     rules: [{
    //         condition: {
    //             maxWidth: 500
    //         },
    //         chartOptions: {
    //             yAxis: {
    //                 labels: {
    //                     formatter: function () {
    //                         return this.value.charAt(0);
    //                     }
    //                 }
    //             }
    //         }
    //     }]
    // }

});