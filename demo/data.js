var stage, chart0, chart1, chart, chart3, chart4, chart5, chart6, chart;
//anytest.time('onDocumentReady'); // засекаем когда началась грузится страница (без учета загрузки anytest
//anytest.time('scriptLoad'); // засекаем когда начался грузится скрипт anychart
//anytest.timeEnd('scriptLoad'); // засекаем когда начался грузится скрипт anychart
anychart.onDocumentLoad(function() {
    anytest.setUp();
    chart = anychart.cartesian();
    chart.area([1,3,4,-2,-7]);


    anytest.stageListen(function () {
        anytest.step(function () {
            anytest.log(1,2,3);
            anytest.CAT.getScreen();
        });

        anytest.exit();
    }).charts4modes("chart");
    anytest.drawInStage(chart);

    stage.resume();
});
