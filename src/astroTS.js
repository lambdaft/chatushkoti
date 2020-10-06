// Swiss Ephemeries javascript library from 
var swisseph = require('swisseph');
// Moment time utility javascript library from
var moment = require('moment');
var now = moment();

// Flags for setting as following

var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SIDEREAL;

// Ephemeries file from astro.com
swisseph.swe_set_ephe_path('C:\\Users\\madhu\\Downloads\\ephe');

// Empty Structure for planetary positions in degrees.
var planetory_positions = {
    sun: 0.0,
    moon: 0.0,
    mars: 0.0,
    mercury: 0.0,
    jupiter: 0.0,
    venus: 0.0,
    saturn: 0.0,
    rahu: 0.0,
    ketu: 0.0
};
//Planetary speed in degrees/day
var planetory_speed = {
    sun: 0.0,
    moon: 0.0,
    mars: 0.0,
    mercury: 0.0,
    jupiter: 0.0,
    venus: 0.0,
    saturn: 0.0,
    rahu: 0.0,
    ketu: 0.0
};
// Planet combust or not
// TODO: Sun gets combust during eclipse. Need to include that.
var planetory_combust = {
    sun: 'NEVER',
    moon: '',
    mars: '',
    mercury: '',
    jupiter: '',
    venus: '',
    saturn: '',
    rahu: '',
    ketu: ''
};

// Types of planetary speed.
var planetory_speed_type = {
    sun: 'normal',
    moon: 'normal',
    mars: '',
    mercury: '',
    jupiter: '',
    venus: '',
    saturn: '',
    rahu: 'retro',
    ketu: 'retro'
};

// take 5000 days before date
var then = now.subtract(5000, 'd');
//console.log(then.format('L'), 'THIS IS DATE BEFORE 5000 DAYS');
var d = then.add(1, 'd');
//console.log(d.format('L'), 'this is next date');
// Loop over next 6000 days calculating the requirements. 
for (i = 0; i < 6000; i++) {
    //console.log(i, 'this is index number');
    // temp structure for input parsing and data storage
    var date = {
        year: d.year(),
        month: d.month() + 1,
        day: d.date(),
        hour: d.hour()
    };
    //console.log(date, 'this is input date');

    swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function(julday_ut) {
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_SUN, flag, function(body) {
            planetory_positions.sun = body.longitude;
            planetory_speed.sun = body.longitudeSpeed;
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_MOON, flag, function(body) {
            planetory_positions.moon = body.longitude;
            planetory_speed.moon = body.longitudeSpeed;
            // If moon is 12 degrees within sun's position, its combust.
            if (Math.abs(planetory_positions.sun - planetory_positions.moon) < 12) {
                planetory_combust.moon = true;
            } else {
                planetory_combust.moon = false;
            }
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_MARS, flag, function(body) {
            planetory_positions.mars = body.longitude;
            planetory_speed.mars = body.longitudeSpeed;
            if (Math.abs(planetory_positions.sun - planetory_positions.mars) < 17) {
                planetory_combust.mars = true;
            } else {
                planetory_combust.mars = false;
            }
            if (body.longitudeSpeed < 0) {
                planetory_speed_type.mars = 'retro';
            } else if (body.longitudeSpeed < 0.523889) {
                planetory_speed_type.mars = 'slow';
            } else if (body.longitudeSpeed < 0.650278) {
                planetory_speed_type.mars = 'medium';
            } else if (body.longitudeSpeed < 0.769722) {
                planetory_speed_type.mars = 'fast';
            } else if (body.longitudeSpeed > 0.769722) {
                planetory_speed_type.mars = 'very_fast';
            }
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_MERCURY, flag, function(body) {
            planetory_positions.mercury = body.longitude;
            planetory_speed.mercury = body.longitudeSpeed;

            if (body.longitudeSpeed < 0) {
                planetory_speed_type.mercury = 'retro';
            } else if (body.longitudeSpeed < 0.985556) {
                planetory_speed_type.mercury = 'slow';
            } else if (body.longitudeSpeed < 1.746111) {
                planetory_speed_type.mercury = 'medium';
            } else if (body.longitudeSpeed < 1.892222) {
                planetory_speed_type.mercury = 'fast';
            } else if (body.longitudeSpeed > 1.892222) {
                planetory_speed_type.mercury = 'very_fast';
            }
            if (planetory_speed_type.mercury == 'retro' && Math.abs(planetory_positions.sun - planetory_positions.mercury) < 12) {
                planetory_combust.mercury = true;
            } else {
                planetory_combust.mercury = false;
            }
            if (Math.abs(planetory_positions.sun - planetory_positions.mercury) < 14) {
                planetory_combust.mercury = true;
            } else {
                planetory_combust.mercury = false;
            }
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_JUPITER, flag, function(body) {
            planetory_positions.jupiter = body.longitude;
            planetory_speed.jupiter = body.longitudeSpeed;
            if (body.longitudeSpeed < 0) {
                planetory_speed_type.jupiter = 'retro';
            } else if (body.longitudeSpeed < 0.083333) {
                planetory_speed_type.jupiter = 'slow';
            } else if (body.longitudeSpeed < 0.206111) {
                planetory_speed_type.jupiter = 'medium';
            } else if (body.longitudeSpeed < 0.234444) {
                planetory_speed_type.jupiter = 'fast';
            } else if (body.longitudeSpeed > 0.234444) {
                planetory_speed_type.jupiter = 'very_fast';
            }

            if (Math.abs(planetory_positions.sun - planetory_positions.jupiter) < 11) {
                planetory_combust.jupiter = true;
            } else {
                planetory_combust.jupiter = false;
            }
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_VENUS, flag, function(body) {
            planetory_positions.venus = body.longitude;
            planetory_speed.venus = body.longitudeSpeed;
            if (body.longitudeSpeed < 0) {
                planetory_speed_type.venus = 'retro';
            } else if (body.longitudeSpeed < 0.985556) {
                planetory_speed_type.venus = 'slow';
            } else if (body.longitudeSpeed < 1.228611) {
                planetory_speed_type.venus = 'medium';
            } else if (body.longitudeSpeed < 1.261667) {
                planetory_speed_type.venus = 'fast';
            } else if (body.longitudeSpeed > 1.261667) {
                planetory_speed_type.venus = 'very_fast';
            }
            if (planetory_speed_type.venus == 'retro' && Math.abs(planetory_positions.sun - planetory_positions.venus) < 8) {
                planetory_combust.mercury = true;
            } else {
                planetory_combust.mercury = false;
            }
            if (Math.abs(planetory_positions.sun - planetory_positions.venus) < 10) {
                planetory_combust.mercury = true;
            } else {
                planetory_combust.mercury = false;
            }

        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_SATURN, flag, function(body) {
            planetory_positions.saturn = body.longitude;
            planetory_speed.saturn = body.longitudeSpeed;
            if (body.longitudeSpeed < 0) {
                planetory_speed_type.saturn = 'retro';
            } else if (body.longitudeSpeed < 0.033333) {
                planetory_speed_type.saturn = 'slow';
            } else if (body.longitudeSpeed < 0.090833) {
                planetory_speed_type.saturn = 'medium';
            } else if (body.longitudeSpeed < 0.129167) {
                planetory_speed_type.saturn = 'fast';
            } else if (body.longitudeSpeed > 0.129167) {
                planetory_speed_type.saturn = 'very_fast';
            }
            if (Math.abs(planetory_positions.sun - planetory_positions.saturn) < 15) {
                planetory_combust.saturn = true;
            } else {
                planetory_combust.saturn = false;
            }
        });
        swisseph.swe_calc_ut(julday_ut, swisseph.SE_TRUE_NODE, flag, function(body) {
            planetory_positions.rahu = body.longitude;
            planetory_speed.rahu = body.longitudeSpeed;
            planetory_speed.ketu = body.longitudeSpeed;
            planetory_positions.ketu = body.longitude + 180;
            if (planetory_positions.ketu > 360) {
                planetory_positions.ketu = planetory_positions.ketu - 360;
            }
        });
    });
    console.log(d.format('L'), planetory_positions);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    //console.log(d.format('L'), planetory_positions.moon, planetory_speed.moon, planetory_speed_type.moon, planetory_combust.moon);
    //console.log(d.format('L'), planetory_positions.mars, planetory_speed.mars, planetory_speed_type.mars, planetory_combust.mars);
    //console.log(d.format('L'), planetory_positions.mercury, planetory_speed.mercury, planetory_speed_type.mercury, planetory_combust.mercury);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    //console.log(d.format('L'), planetory_positions.sun, planetory_speed.sun, planetory_speed_type.sun, planetory_combust.sun);
    // console.log(d.format('L'), planetory_positions.sun - planetory_positions.moon);
    d = d.add(1, 'd');
}