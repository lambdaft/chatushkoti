var swisseph = require('swisseph');

var date = { year: 2020, month: 4, day: 5, hour: 0 };

var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SIDEREAL

swisseph.swe_set_ephe_path('C:\\Users\\madhu\\Downloads\\ephe');

swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function (julday_ut) {
    console.log('Julian UT day for date:', julday_ut);

    // Sun position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_SUN, flag, function (body) {
        console.log('Sun position:', body);
    });

    // Moon position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_MOON, flag, function (body) {
        console.log('Moon position:', body);
    });

    // Mars position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_MARS, flag, function (body) {
        console.log('Mars position:', body);
    });

    // Mercury position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_MERCURY, flag, function (body) {
        console.log('Mercury position:', body);
    });

    // Jupiter position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_JUPITER, flag, function (body) {
        console.log('Jupiter position:', body);
    });

    // Venus position
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_VENUS, flag, function (body) {
        console.log('Venus position:', body);
    });
    
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_TRUE_NODE, flag, function (body) {
        console.log('True node', body);
	});
});

