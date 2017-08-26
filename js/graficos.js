var dato, datoDefault, url = null;

function getData(url) {

    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
}


$(function () {

    Highcharts.theme = {
        colors: ['#eaa4a9', '#e6c3a0', '#c8e6a0', '#a4e6a0', '#a0e6dc', '#a0d2e6']
    };
    Highcharts.setOptions(Highcharts.theme);

});
