// Shri Guruve Namah
// Shri Ganeshay Namah
var swisseph = require('swisseph');
var moment = require('moment');
var now = moment();
//var now = now1.add(30, 'days');
console.log('Year: ', now.year());
console.log('Month: ', now.month() + 1);
console.log('Date: ', now.date());
console.log('Hour: ', now.hour());
var date = {
    year: now.year(),
    month: now.month() + 1,
    day: now.date(),
    hour: now.hour()
};
/* var date = {
    year: 2017,
    month: 1,
    day: 23,
    hour: 14
}; */
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

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
var rashi_names = {
    'mes_01': 'Mesha Rashi or Aries Sign',
    'vru_02': 'Vrushabha Rashi or Taurus Sign',
    'mit_03': 'Mituna Rashi or Gemini Sign',
    'kar_04': 'Karka Rashi or Cancer Sign',
    'sim_05': 'Simha Rashi or Leo Sign',
    'kan_06': 'Kanya Rashi or Virgo Sign',
    'tul_07': 'Tula Rashi or Libra Sign',
    'vrs_08': 'Vrushchika Rashi or Scorpo Sign',
    'dha_09': 'Dhanu Rashi or Sagittarius Sign',
    'mak_10': 'Makara Rashi or Capricorn Sign',
    'kum_11': 'Kumbha Rashi or Aquarius Sign',
    'mee_12': 'Meena Rashi or Pisces Sign'
};

var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SIDEREAL;
swisseph.swe_set_ephe_path('C:\\Users\\madhu\\Downloads\\ephe');
swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function(julday_ut) {
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_SUN, flag, function(body) {
        planetory_positions.sun = body.longitude;
        planetory_speed.sun = body.longitudeSpeed;
    });
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_MOON, flag, function(body) {
        planetory_positions.moon = body.longitude;
        planetory_speed.moon = body.longitudeSpeed;
    });
    swisseph.swe_calc_ut(julday_ut, swisseph.SE_MARS, flag, function(body) {
        planetory_positions.mars = body.longitude;
        planetory_speed.mars = body.longitudeSpeed;
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

function get_rashi(input_degree) {
    let rashi = '';
    let rashi_num = input_degree / 30;
    if (rashi_num < 1) {
        rashi = 'mes_01';
    } else if (rashi_num < 2) {
        rashi = 'vru_02';
    } else if (rashi_num < 3) {
        rashi = 'mit_03';
    } else if (rashi_num < 4) {
        rashi = 'kar_04';
    } else if (rashi_num < 5) {
        rashi = 'sim_05';
    } else if (rashi_num < 6) {
        rashi = 'kan_06';
    } else if (rashi_num < 7) {
        rashi = 'tul_07';
    } else if (rashi_num < 8) {
        rashi = 'vrs_08';
    } else if (rashi_num < 9) {
        rashi = 'dha_09';
    } else if (rashi_num < 10) {
        rashi = 'mak_10';
    } else if (rashi_num < 11) {
        rashi = 'kum_11';
    } else if (rashi_num < 12) {
        rashi = 'mee_12';
    }
    return rashi;
}

function get_nakshatra(input_degree) {
    let nakshtra = '';
    if (input_degree > 0 & input_degree < 13.33333) {
        nakshtra = 'ash_01';
    } else if (input_degree >= 13.33333 & input_degree < 26.66666) {
        nakshtra = 'bha_02';
    } else if (input_degree >= 26.66666 & input_degree < 40) {
        nakshtra = 'kru_03';
    } else if (input_degree >= 40 & input_degree < 53.33333) {
        nakshtra = 'roh_04';
    } else if (input_degree >= 53.33333 & input_degree < 66.66666) {
        nakshtra = 'mru_05';
    } else if (input_degree >= 66.66666 & input_degree < 80) {
        nakshtra = 'ard_06';
    } else if (input_degree >= 80 & input_degree < 93.33333) {
        nakshtra = 'pun_07';
    } else if (input_degree >= 93.33333 & input_degree < 106.666) {
        nakshtra = 'pus_08';
    } else if (input_degree >= 106.66666 & input_degree < 120) {
        nakshtra = 'ash_09';
    } else if (input_degree >= 120 & input_degree < 133.33333) {
        nakshtra = 'mag_10';
    } else if (input_degree >= 133.33333 & input_degree < 146.60) {
        nakshtra = 'p_p_11';
    } else if (input_degree >= 146.60 & input_degree < 160) {
        nakshtra = 'u_p_12';
    } else if (input_degree >= 160 & input_degree < 173.33333) {
        nakshtra = 'has_13';
    } else if (input_degree >= 173.33333 & input_degree < 186.66666) {
        nakshtra = 'chi_14';
    } else if (input_degree >= 186.66666 & input_degree < 200) {
        nakshtra = 'swa_15';
    } else if (input_degree >= 200 & input_degree < 213.33333) {
        nakshtra = 'vis_16';
    } else if (input_degree >= 213.33333 & input_degree < 226.66666) {
        nakshtra = 'anu_17';
    } else if (input_degree >= 226.66666 & input_degree < 240) {
        nakshtra = 'jye_18';
    } else if (input_degree >= 240 & input_degree < 253.33333) {
        nakshtra = 'mul_19';
    } else if (input_degree >= 253.33333 & input_degree < 266.66666) {
        nakshtra = 'p_a_20';
    } else if (input_degree >= 266.66666 & input_degree < 276.66666) {
        nakshtra = 'u_a_21';
    } else if (input_degree >= 276.66666 & input_degree < 280.88888) {
        nakshtra = 'abh_22';
    } else if (input_degree >= 280.88888 & input_degree < 293.33333) {
        nakshtra = 'shr_23';
    } else if (input_degree >= 293.33333 & input_degree < 306.666) {
        nakshtra = 'dha_24';
    } else if (input_degree >= 306.66666 & input_degree < 320) {
        nakshtra = 'sha_25';
    } else if (input_degree >= 320 & input_degree < 333.33333) {
        nakshtra = 'p_b_26';
    } else if (input_degree >= 333.33333 & input_degree < 346.66666) {
        nakshtra = 'u_b_27';
    } else if (input_degree >= 346.66666 & input_degree <= 360) {
        nakshtra = 'rev_28';
    }
    return nakshtra;
}

function nakshatra_vedha(input_nakshatra, input_graha) {
    let vedha = {
        rs: '',
        ls: '',
        fs: ''
    };
    let vedha_list = [];
    if (input_nakshatra == 'ash_01') {
        vedha = {
            rs: 'jye_18',
            ls: 'roh_04',
            fs: 'p_p_11'
        };
    } else if (input_nakshatra == 'bha_02') {
        vedha = {
            rs: 'anu_17',
            ls: 'kru_03',
            fs: 'mag_10'
        };
    } else if (input_nakshatra == 'kru_03') {
        vedha = {
            rs: 'bha_02',
            ls: 'vis_16',
            fs: 'shr_23'
        };
    } else if (input_nakshatra == 'roh_04') {
        vedha = {
            rs: 'ash_01',
            ls: 'swa_15',
            fs: 'abh_22'
        };
    } else if (input_nakshatra == 'mru_05') {
        vedha = {
            rs: 'rev_28',
            ls: 'chi_14',
            fs: 'u_a_21'
        };
    } else if (input_nakshatra == 'ard_06') {
        vedha = {
            rs: 'u_b_27',
            ls: 'has_13',
            fs: 'p_a_20'
        };
    } else if (input_nakshatra == 'pun_07') {
        vedha = {
            rs: 'p_b_26',
            ls: 'u_p_12',
            fs: 'mul_19'
        };
    } else if (input_nakshatra == 'pus_08') {
        vedha = {
            rs: 'sha_25',
            ls: 'p_p_11',
            fs: 'jye_18'
        };
    } else if (input_nakshatra == 'ash_09') {
        vedha = {
            rs: 'dha_24',
            ls: 'mag_10',
            fs: 'anu_17'
        };
    } else if (input_nakshatra == 'mag_10') {
        vedha = {
            rs: 'ash_09',
            ls: 'shr_23',
            fs: 'bha_02'
        };
    } else if (input_nakshatra == 'p_p_11') {
        vedha = {
            rs: 'pus_08',
            ls: 'abh_22',
            fs: 'ash_01'
        };
    } else if (input_nakshatra == 'u_p_12') {
        vedha = {
            rs: 'pun_07',
            ls: 'u_a_21',
            fs: 'rev_28'
        };
    } else if (input_nakshatra == 'has_13') {
        vedha = {
            rs: 'ard_06',
            ls: 'p_a_20',
            fs: 'u_b_27'
        };
    } else if (input_nakshatra == 'chi_14') {
        vedha = {
            rs: 'mru_05',
            ls: 'mul_19',
            fs: 'p_b_26'
        };
    } else if (input_nakshatra == 'swa_15') {
        vedha = {
            rs: 'roh_04',
            ls: 'jye_18',
            fs: 'sha_25'
        };
    } else if (input_nakshatra == 'vis_16') {
        vedha = {
            rs: 'kru_03',
            ls: 'anu_17',
            fs: 'dha_24'
        };
    } else if (input_nakshatra == 'anu_17') {
        vedha = {
            rs: 'vis_16',
            ls: 'bha_02',
            fs: 'ash_09'
        };
    } else if (input_nakshatra == 'jye_18') {
        vedha = {
            rs: 'swa_15',
            ls: 'ash_01',
            fs: 'pus_08'
        };
    } else if (input_nakshatra == 'mul_19') {
        vedha = {
            rs: 'chi_14',
            ls: 'rev_28',
            fs: 'pun_07'
        };
    } else if (input_nakshatra == 'p_a_20') {
        vedha = {
            rs: 'has_13',
            ls: 'u_b_27',
            fs: 'ard_06'
        };
    } else if (input_nakshatra == 'u_a_21') {
        vedha = {
            rs: 'u_p_12',
            ls: 'p_b_26',
            fs: 'mru_05'
        };
    } else if (input_nakshatra == 'abh_22') {
        vedha = {
            rs: 'p_p_11',
            ls: 'sha_25',
            fs: 'roh_04'
        };
    } else if (input_nakshatra == 'shr_23') {
        vedha = {
            rs: 'mag_10',
            ls: 'dha_24',
            fs: 'kru_03'
        };
    } else if (input_nakshatra == 'dha_24') {
        vedha = {
            rs: 'shr_23',
            ls: 'ash_09',
            fs: 'vis_16'
        };
    } else if (input_nakshatra == 'sha_25') {
        vedha = {
            rs: 'abh_22',
            ls: 'pus_08',
            fs: 'swa_15'
        };
    } else if (input_nakshatra == 'p_b_26') {
        vedha = {
            rs: 'p_a_20',
            ls: 'pun_07',
            fs: 'chi_14'
        };
    } else if (input_nakshatra == 'u_b_27') {
        vedha = {
            rs: 'p_a_20',
            ls: 'ard_06',
            fs: 'has_13'
        };
    } else if (input_nakshatra == 'rev_28') {
        vedha = {
            rs: 'mul_19',
            ls: 'mru_05',
            fs: 'u_p_12'
        };
    }
    switch (input_graha) {
        case 'sun':
            vedha_list.push(vedha.ls);
            vedha_list.push(vedha.rs);
            vedha_list.push(vedha.fs);
            return vedha_list;
        case 'moon':
            vedha_list.push(vedha.ls);
            vedha_list.push(vedha.rs);
            vedha_list.push(vedha.fs);
            return vedha_list;
        case 'rahu':
            vedha_list.push(vedha.ls);
            vedha_list.push(vedha.rs);
            vedha_list.push(vedha.fs);
            return vedha_list;
        case 'ketu':
            vedha_list.push(vedha.ls);
            vedha_list.push(vedha.rs);
            vedha_list.push(vedha.fs);
            return vedha_list;
        case 'mars':
            switch (planetory_speed_type.mars) {
                case 'retro':
                    vedha_list.push(vedha.rs);
                    return vedha_list;
                case 'slow':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'medium':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
                case 'very_fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
            };
        case 'mercury':
            switch (planetory_speed_type.mercury) {
                case 'retro':
                    vedha_list.push(vedha.rs);
                    return vedha_list;
                case 'slow':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'medium':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
                case 'very_fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
            }
        case 'jupiter':
            switch (planetory_speed_type.jupiter) {
                case 'retro':
                    vedha_list.push(vedha.rs);
                    return vedha_list;
                case 'slow':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'medium':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
                case 'very_fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
            }
        case 'venus':
            switch (planetory_speed_type.venus) {
                case 'retro':
                    vedha_list.push(vedha.rs);
                    return vedha_list;
                case 'slow':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'medium':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
                case 'very_fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
            }
        case 'saturn':
            switch (planetory_speed_type.saturn) {
                case 'retro':
                    vedha_list.push(vedha.rs);
                    return vedha_list;
                case 'slow':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'medium':
                    vedha_list.push(vedha.fs);
                    return vedha_list;
                case 'fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
                case 'very_fast':
                    vedha_list.push(vedha.ls);
                    return vedha_list;
            }
    }
}


//=================
var grains_positive = 0;
var grains_negative = 0;
//=================
var sugarcane_positive = 0;
var sugarcane_negative = 0;
//=================
var pm_positive = 0;
var pm_negative = 0;
//=================
var spices_positive = 0;
var spices_negative = 0;
//=================
var oil_oilseeds_positive = 0;
var oil_oilseeds_negative = 0;
//=================
var pulses_positive = 0;
var pulses_negative = 0;
//=================
//=================
var fabrics_positive = 0;
var fabrics_negative = 0;
//=================
var cattle_positive = 0;
var cattle_negative = 0;

function softPlanet(planet) {
    if (planet == 'sun' || planet == 'mars' || planet == 'saturn' || planet == 'rahu' || planet == 'ketu') {
        return false;
    } else {
        return true;
    }
}

function vedh_phal(planet) {
    console.log('================================================================================');
    console.log('Nakshatr Vedh Phal for ' + planet);

    if (planet == 'sun') {
        sun_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.sun), 'sun');
        sun_vedh.forEach(vedh_phal_util);
    } else if (planet == 'moon') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.moon), 'moon');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'mars') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.mars), 'mars');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'mercury') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.mercury), 'mercury');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'jupiter') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.jupiter), 'jupiter');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'venus') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.venus), 'venus');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'saturn') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.saturn), 'saturn');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'rahu') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.rahu), 'rahu');
        moon_vedh.forEach(vedh_phal_util);
    } else if (planet == 'ketu') {
        moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.ketu), 'ketu');
        moon_vedh.forEach(vedh_phal_util);
    }

    function vedh_phal_util(value, index, array) {
        console.log('');
        let statement = softPlanet(planet) ? 'prices will fall' : 'prices will rise';
        let statement1 = 'As ' + value + ' is aimed by ' + planet + ' => ';
        if (value == 'ash_01') {
            console.log(statement1 + 'ghee, rice, grass, donkeys, camel, mules and all grains and cloths ' + statement + '.  Effect within 60 days from north side.');
            if (softPlanet) {
                console.log('oil_oilseeds_negative')
                console.log('grains_negative');
                console.log('fabrics_negative');
                console.log('cattle_negative');
            } else {
                console.log('oil_oilseeds_positive');
                console.log('grains_positive');
                console.log('fabrics_positive');
                console.log('cattle_positive');

            }
        } else if (value == 'bha_02') {
            console.log(statement1 + ' wheat, rice, jawar, ginger, black pepper, pipal and other kirana things ' + statement + '.  Effect within 8 months from south direction.');
            if (softPlanet) {
                console.log('grains_negative')
                console.log('spices_negative')
            } else {
                console.log('grains_positive')
                console.log('spices_positive')
            }
        } else if (value == 'kru_03') {
            console.log(statement1 + ' rice, barley, chana such grains and oil and oilseed, precious metals and jewls, ' + statement + '.  Effect within 8 months from south direction.');
            if (softPlanet) {
                console.log('grains_negative')
                console.log('pulses_negative')
                console.log('oil_oilseed_negative')
                console.log('precious_metals_negative')
            } else {
                console.log('grains_positive')
                console.log('pulses_positive')
                console.log('oil_oilseed_positive')
                console.log('precious_metals_positive')
            }
        } else if (value == 'roh_04') {
            console.log(statement1 + 'all types of grains, all types of rasa, all dhatu and woolen ' + statement + '. Effect within 7 days from east direction.');
            if (softPlanet) {
                console.log('grains_negative')
                console.log('metals_negative')
                console.log('fabric_negative')
            } else {
                console.log('grains_positive')
                console.log('metals_positive')
                console.log('fabric_positive')
            }
        } else if (value == 'mru_05') {
            console.log(statement1 + 'cow and cattles, lakh and millet and liquid food prices ' + statement + '. Effect within 3 days from north direction.');
            if (softPlanet) {
                console.log('animal_negative')
                console.log('millet_negative')
            } else {
                console.log('animal_positive')
                console.log('millet_positive')
            }
        } else if (value == 'ard_06') {
            console.log(statement1 + 'oil, salt, all types of salty and rasa things, sandlewood and aromatic prices ' + statement + '. Effect within 30 days from west direction.');
            if (softPlanet) {
                console.log('oil_oilseeds_negative')
                console.log('aromatic_negative')
            } else {
                console.log('oil_oilseeds_positive')
                console.log('aromatic_positive')
            }
        } else if (value == 'pun_07') {
            console.log(statement1 + ' cotton, threads, paat, baar dana, til, all gray and gerua color article prices ' + statement + '. Effect within 60 days from north, northeast direction.');
            if (softPlanet) {
                console.log('fabric_negative')
                console.log('oil_oilseeds_negative')
            } else {
                console.log('fabric_positive')
                console.log('oil_oilseeds_positive')
            }
        } else if (value == 'pus_08') {
            console.log(statement1 + ' gold, silver, ghee, rice, mineral salt, hing, vegitables, edible oils prices  ' + statement + '. Effect within 8 months from north, northwest direction.');
            if (softPlanet) {
                console.log('precious_metals_negative')
                console.log('oil_oilseeds_negative')
                console.log('grains_negative')
                console.log('veg_negative')
            } else {
                console.log('precious_metals_positive')
                console.log('oil_oilseeds_positive')
                console.log('grains_positive')
                console.log('veg_positive')
            }
        } else if (value == 'ash_09') {
            console.log(statement1 + ' gur, ginger, massor, wheat, chilli, kodrav, red rice prices  ' + statement + '. Effect within 30 days from west direction.');
            if (softPlanet) {
                console.log('sugar_negative')
                console.log('spices_negative')
                console.log('grains_negative')
            } else {
                console.log('sugar_positive')
                console.log('spices_positive')
                console.log('grains_positive');
            }
        } else if (value == 'mag_10') {
            console.log(statement1 + ' all types of oilseeds, oils, chana dal, gur prices ' + statement + '. Effect within 8 month from south direction.');
            if (softPlanet) {
                console.log('sugar_negative');
                console.log('oil_oilseeds_negative');
                console.log('grains_negative');
            } else {
                console.log('sugar_negative');
                console.log('spices_negative');
                console.log('grains_negative');
            }
        } else if (value == 'p_p_11') {
            console.log(statement1 + ' worm cloths, woolen, jawar, seasom, oils and silver price ' + statement + '. Effect within 8 month from south direction.');
        } else if (value == 'u_p_12') {
            console.log(statement1 + ' Udad, moong, rice, kondrav, mineral salt, galic prices ' + statement + '. Effect within 60 days from north direction.');
        } else if (value == 'has_13') {
            console.log(statement1 + ' white and red sandlewood, camphhor, devdaru, aagaar, tubers prices ' + statement + '. Effect within 60 days from north direction.');
        } else if (value == 'chi_14') {
            console.log(statement1 + ' gold, moong, precious stones, gur, udad, horses and 4 foot animals prices ' + statement + '. Effect within 60 days from north direction.');
        } else if (value == 'swa_15') {
            console.log(statement1 + ' dates, supari, chilli, seasom, oils, hing, rai and other kirana prices ' + statement + '. Effect within 7 days from north direction.');
        } else if (value == 'vis_16') {
            console.log(statement1 + ' barley, rice, wheat moong, rai, massor, moth prices ' + statement + '. Effect within 8 month from north direction.');
        } else if (value == 'anu_17') {
            console.log(statement1 + ' all type of daal, rice, moth, chana prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'jye_18') {
            console.log(statement1 + ' guggul, gur, lakh, chapda, mercury, hing, brass prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'mul_19') {
            console.log(statement1 + ' white iteams, cottom sugar rice salt prices ' + statement + '. Effect within 30 days from west direction.');
        } else if (value == 'p_a_20') {
            console.log(statement1 + ' tush, grains, oil, tubers, fruits medicines prices ' + statement + '. Effect within 30 days from west direction.');
        } else if (value == 'u_a_21') {
            console.log(statement1 + ' horse, bulls, elephent, iron, copper , brass prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'abh_22') {
            console.log(statement1 + ' dakh, dates, supari, moong, asthgandh, ginger, cardmom prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'shr_23') {
            console.log(statement1 + ' Sugar and other sweet items, pipli, supari, tush, grains prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'dha_24') {
            console.log(statement1 + ' gold, silver and other precious items prices ' + statement + '. Effect within 7 days from east direction.');
        } else if (value == 'sha_25') {
            console.log(statement1 + ' oils, kondrav, amla, pipli, chal, alcohole, roots prices ' + statement + '. Effect within 30 days from west direction.');
        } else if (value == 'p_b_26') {
            console.log(statement1 + ' kangni, jaiphal, kirana items, all metals, grains and medicines prices ' + statement + '. Effect within 8 months from south direction.');
        } else if (value == 'u_b_27') {
            console.log(statement1 + ' gur, sugar, oil seeds, oils prices ' + statement + '. Effect within 30 days from west direction.');
        } else if (value == 'rev_28') {
            console.log(statement1 + ' pearls, coconut, supari, kirana iteams prices ' + statement + '. Effect within 60 days from north direction.');
        }
    }
}


function rashi_phal(planet, rashi) {
    console.log('');
    console.log('++++++++++Rashi Phal +++++++++++++');
    console.log('');
    console.log(capitalize(planet) + ' in ' + rashi_names[rashi] + ' =>');
    if (planet == 'sun') {
        if (rashi == 'mes_01') {
            console.log('Fabrics & threads, Oil & Oilseeds, fruits, Sugarcane products, precious metal prices will rise.');
            console.log('Grains & pulses prices will fall.');
            //--------------------------
            fabrics_positive = fabrics_positive + 1;
            sugarcane_positive = sugarcane_positive + 1;
            oil_oilseeds_positive = oil_oilseeds_positive + 1;
            pm_positive = pm_positive + 1;
            //--------------------------
            grains_negative = grains_negative - 1;
            pulses_negative = pulses_negative - 1;
            //--------------------------
        } else if (rashi == 'vru_02') {
            console.log('Silver, gold, gur, sugar, cotton, dryfruits, supari, coconut, oil, oilseeds prices will rise.');
            console.log('Barley, Chana, Wheat, Matar, Arhar, moong, rice prices will fall.');
            //--------------------------
            pm_positive = pm_positive + 1;
            sugarcane_positive = sugarcane_positive + 1;
            fabrics_positive = fabrics_positive + 1;
            oil_oilseeds_positive = oil_oilseeds_positive + 1;
            //--------------------------
            grains_negative = grains_negative - 1;
            grains_negative = grains_negative - 1;
            //--------------------------
        } else if (rashi == 'mit_03') {
            console.log('Tubers, fruits, cloths, jute, silk, cotton, oilseeds, steel, Oils, sugar, moong, udad, wheat chana, rice and all the grains prices will rise.');
            console.log('Gold and silver will be in bullish bias.');
            //-------------------------
            fabrics_positive = fabrics_positive + 1;
            oil_oilseeds_positive = oil_oilseeds_positive + 1;
        } else if (rashi == 'kar_04') {
            console.log('Cotton, dryfruit, supari, sugar, gur, oilseeds, silver and gold prices will rise.');
            console.log('Wheat, chana, barley, peas, arhar, udad, moong, rice prices will fall.');
        } else if (rashi == 'sim_05') {
            console.log('Silver, gold, cotton, gur, sugar, oilseeds, ratn and red colored things price will rise.');
            console.log('Stock market and Grains prices will fall.');
        } else if (rashi == 'kan_06') {
            console.log('Cotton, coconut, oils and red colored things price will rise.');
            console.log('Stock Market and Silver prices will fall.');
        } else if (rashi == 'tul_07') {
            console.log('Wheat, barley, chana, flexseeds, gold, copper prices will rise.');
            console.log('Sandlewood, coconut, supari will have bullish bias');
            console.log('Cotton, silver prices will fall.');
        } else if (rashi == 'vrs_08') {
            console.log('Cotton, copper, silver, gold and woolan prices will rise.');
            console.log('Red colored things prices will fall.');
        } else if (rashi == 'dha_09') {
            console.log('Cotton, oil & oilseeds, gold dn silver prices will rise.');
            console.log('Food grain prices will fall.');
        } else if (rashi == 'mak_10') {
            console.log('Oil & Oilseeds, sugar, cotton prices will rise.');
            console.log('Wheat, grains and jute prices will fall.');
        } else if (rashi == 'kum_11') {
            console.log('Ghee, Oils, seasom, rapeseed, groundnut prices will rise.');
            console.log('Cotton, cloths, flexseed, caster, wheat and other grains, gur and sugar prices will fall.');
        } else if (rashi == 'mee_12') {
            console.log('Oil, flexseed, seasom, sugar, gur and gold prices will rise.');
            console.log('Grains will rise initially and fall in later part of month.');
            console.log('Silver will fall gradually.');
        }
    } else if (planet == 'moon') {
        if (rashi == 'mes_01') {
            console.log('Wheat, chana, barley, flexseed and aphim prices will rise.');
            console.log('Gold and silver prices will fall.');
        } else if (rashi == 'vru_02') {
            console.log('Wheat, chana, udad, flexseed, seasom, groundnut, silver and cotton prices will rise.');
            console.log('Cattle prices will fall.');
        } else if (rashi == 'mit_03') {
            console.log('Cotton, wheat, chana prices will rise in 4 days.');
        } else if (rashi == 'kar_04') {
            console.log('Cotton, silver and gold prices will fall.');
            console.log('If moon is with soft planet or in full view of any soft planet (specially jupiter), excess prices fall can happen.');
        } else if (rashi == 'sim_05') {
            console.log('Camphoor, cotton, grass, silver and gold prices will rise.');
        } else if (rashi == 'kan_06') {
            console.log('Gold, silver, steel, jeera, dhaniya, and rapeseed prices will rise.');
            console.log('Cotton prices will fall.');
        } else if (rashi == 'tul_07') {
            console.log('Rice, ghee, cotton, groundnut, rapeseed prices ------,');
            console.log(' silver and gold prices will be slightly bearish.');
        } else if (rashi == 'vrs_08') {
            console.log('Pearls, gold, silver and cotton prices will fall.');
            console.log();
        } else if (rashi == 'dha_09') {
            console.log('Seasom, oil, rapessed, cotton, cloth prices will fall.');
            console.log();
        } else if (rashi == 'mak_10') {
            console.log('All metals, cotton, cloths and fruits prices will rise.');
            console.log();
        } else if (rashi == 'kum_11') {
            console.log('Seasom, rapeseed, groundnut and oil prices will rise.');
            console.log('Cotton, silver and gold prices will fall.');
        } else if (rashi == 'mee_12') {
            console.log('Cotton, oilseeds, gold and silver prices will fall.');
        }
    } else if (planet == 'mars') {
        if (rashi == 'mes_01') {
            console.log('Gold, silver, coral, pearl, woolan, cotton, cloths, jute and gur prices will rise.');
            console.log('Effects are visible in initial 15 days.');
        } else if (rashi == 'vru_02') {
            console.log('Within a month, red colored things, all type of grains, cotton, safron, oils, gold, silver, copper, zinc and Stocks will rise.');
            console.log('If with soft planets, rise will be gradual.');
            console.log('If with hard planets, rise will be steap and sharp.');
        } else if (rashi == 'mit_03') {
            console.log('Cotton, gur, sugar, flexseed, apheem, copper and all red colored things prices will rise.');
            console.log('If combined with soft planets, these prices will fall.');
            console.log('If combined with hard planets, above item prices will rise very sharply.');
            console.log('Silver will be volatile and sideways.');
        } else if (rashi == 'kar_04') {
            console.log('Cotton can witness weakness upto 30%.');
            console.log('Rapeseed, caster, flexseed and oil prices will fall.');
            console.log('Silver will be volatile and sideways.');
            console.log('All type of grains, gur and sugar prices will rise.');
            console.log('Cattle prices will rise.');
            console.log('Aspecting the hard planet will escalate the bullishness while soft planet aspect will soften the price rally.');
        } else if (rashi == 'sim_05') {
            console.log('Silver, gold, copper, steel such metals, weapons, gur, sugar, wheat, flexseed, cotton, chilli and all red colored items prices will rise.');
            console.log('Aspect with hard planets will exagarate the rise while aspect with soft planets will limit and rise.');
        } else if (rashi == 'kan_06') {
            console.log('Cotton will rise by 30-40% while silver will rise 5-10%.');
            console.log('Gold, woolan, flexseed, wheat and all red colored items will witness strong bullishness.');
        } else if (rashi == 'tul_07') {
            console.log('Cotton, jute, sugarcane products, wheat urad, moong and other grains prices will rise.');
            console.log('Aspect will hard planet will increase the intensity of rise while aspect with soft planets will limit the rise.');
        } else if (rashi == 'vrs_08') {
            console.log('Gur, cotton, gold and silver prices will witness rise.');
            console.log('General infletion will prevail.');
            console.log('Aspect will hard planet will increase the intensity of rise while aspect with soft planets will limit the rise.');
        } else if (rashi == 'dha_09') {
            console.log('Precious metals, oilseeds, cattles and grains prices will rise.');
            console.log('Cotton will be volatile.');
        } else if (rashi == 'mak_10') {
            console.log('Cotton, gold, silver, copper gur, sugar, oil and woolan prices will rise.');
            console.log('Grain prices will fall. Aspect with soft planets will escalate the weakness.');
        } else if (rashi == 'kum_11') {
            console.log('Cotton and silver will be very volatile.');
            console.log('Grains, gur and gold prices will rise.');
            console.log('Aspect will hard planet will increase the intensity of rise while aspect with soft planets will reverse towards bearishness.');
        } else if (rashi == 'mee_12') {
            console.log('Gold, cotton, grass, cattle and wooden items prices will rise.');
            console.log('Silver volatile, initial fall and later rise.');
        }
    } else if (planet == 'mercury') {
        if (rashi == 'mes_01') {
            console.log('cattle prices will rise.');
            console.log('Coral, pearl, gold, silver, wheat, chana, barley, oilseeds, cotton gur, sugar prices will fall.');
        } else if (rashi == 'vru_02') {
            console.log('Within 15 days cotton will fall and then rise.');
            console.log('Almost every market will behave volatile and sideways.');
            console.log('Wheat, barley, chana, rice, matar, cotton, aphim and seasom oil prices will rise.');
        } else if (rashi == 'mit_03') {
            console.log('Gold, silver and cotton prices will fall in 15 days.');
            console.log('Oil seeds will remain volatile.');
            console.log('Cattle prices will rise.');
        } else if (rashi == 'kar_04') {
            console.log('Cotton prices will fall by 15%. Silver will remain volatile and remain bullish.');
            console.log('Gur, milk, oil and gold will initially rise and then weaken.');
            console.log('Cloths prices will fall while grains will remain mixed.');
        } else if (rashi == 'sim_05') {
            console.log('Silver, gold, cotton and acidic+sour prices will rise.');
            console.log('Camphoor, gur and sugar prices will fall.');
            console.log('Grains will remain mixed.');
        } else if (rashi == 'kan_06') {
            console.log('Cotton and silver prices will fall.');
            console.log('Wheat, barley, chana, sugar, turmeric prices will rise.');
        } else if (rashi == 'tul_07') {
            console.log('Cotton, gur, gold and aphim prices will rise.');
            console.log('Silver, and oilseed prices will fall.');
        } else if (rashi == 'vrs_08') {
            console.log('Oil, oilseed, cotton and silver will rise. Gold will be mixed');
            console.log('Aphim and grain prices will fall.');
        } else if (rashi == 'dha_09') {
            console.log('Cotton silver prices will fall.');
            console.log('If aspected by hard planet, prices will rise. Solo or aspected by soft planet, prices will fall more sharply.');
        } else if (rashi == 'mak_10') {
            console.log('Cotton, Gold and silver prices will rally.');
            console.log('Grains will remain mixed and volatile.');
        } else if (rashi == 'kum_11') {
            console.log('Flexseed, cotton prices will fall.');
            console.log('Silver will witness initial weakness followed by some gains.');
            console.log('Oil and Sugar prices will rise. Grains will remain mixed');
            console.log('Aspect by soft planets will trigger sharp weakness while aspect by hard planets will trigger strong rally.');
        } else if (rashi == 'mee_12') {
            console.log('Cotton and sugar prices will fall.');
            console.log('Gold and silver will witness initial rally followed by sharp weakness.');
            console.log('Oilseeds will rally.');
            console.log('Aspect by soft planet will trigger sharp weakness while aspect by hard planets will trigger strong rally.')
        }
    } else if (planet == 'jupiter') {
        if (rashi == 'mes_01') {
            console.log('Cotton will witness volatility of 60-70%.');
            console.log('Red items, coconut, gold, silver, copper, gur and silk will remain bearish.');
        } else if (rashi == 'vru_02') {
            console.log('Cotton prices will double in a year. Silver and grain prices will remain somewhat bullish.');
            console.log('Red items, pearl, coconut will remain bearish.')
            console.log('In Chaitra Month, oil and in Shravan month chana will remain bullish.')
        } else if (rashi == 'mit_03') {
            console.log('Cotton will witness 50% weakness. Gold, silver, cloths, coconut, oilseed will witness massive fall.');
            console.log('Copper and steel will rise.');
            console.log('Buy whatever falls in margashish month to sell in vaishakha month.')
        } else if (rashi == 'kar_04') {
            console.log('Cotton will rise by 100%.');
            console.log('Stock wheat, chana and grains before jupiters entry into karka rashi. Gur sugar and ghee prices will rise.');
        } else if (rashi == 'sim_05') {
            console.log('Damage to agro by massive flood. If single in this rashi, then ghee, wheat and barley will rise.');
            console.log('Silver, gold, copper and steel will remain bearish.');
            console.log('Cotton will remain volatile and bearish in initial 8 months and rise sharply in last 4 months.')
            console.log('Stocking red color items will give double profit after 4-12 months.')
        } else if (rashi == 'kan_06') {
            console.log('Cotton will witness 50% bearishness. Silver will also witness fall.');
            console.log('Jawar, rice, wheat, moong, urad chana, oilseeds and oils will witness bullishness.')
            console.log('Buying grains in vaishakh month will give good benefit in Bhadrapad month.');
            console.log('Woolan and metals will witness bearishness.')
        } else if (rashi == 'tul_07') {
            console.log('Gold, cotton, red items, supari, coconut will witness bullishness.');
            console.log('Ghee, oil and oilseeds will fall.');
            console.log('Stock food grains in Margashish and paush month and sell in chaitra month. Sugar and gur stocking will give benefit in 4 months')
            console.log('Well to do situation in agro and economy.')
        } else if (rashi == 'vrs_08') {
            console.log('Cotton will witness rally for 5 months.');
            console.log('Gold, silver cotton, copper, lead, ghee, oil and oilseed, urad daal will remain bullish.');
            console.log('cattle prices will fall.')
            console.log('Bhadrapad, ashwin and kartik month will witness rally in grains.')
        } else if (rashi == 'dha_09') {
            console.log('Cotton, sugar will witness excess production and prices will crash.');
            console.log('Sugar and gur will witness excessive weakness');
            console.log('White items, wheat, oilseeds, gold, silver, brass, steel, copper, lead will witness bearish tone.');
            console.log('If kartik month witnesses fall in oil prices, stock it to sell in Chaitra month.');
            console.log('If aspected by or with saturn, sweet things will remain up instade of down.');
        } else if (rashi == 'mak_10') {
            console.log('Cotton will crash in beginning and recover later.');
            console.log('After 5 months and before 10 months, cotton will witness 100-125% volatility.');
            console.log('Barley, chana, wheat will witness massive rally.');
            console.log('Camphoor, sandlewwod, groundnut, copper, gold, silver and rapeseed will rally.');
            console.log('Encash this rally in initial 15 days. Later prices will fall.');
        } else if (rashi == 'kum_11') {
            console.log('Cotton will rally for 6 months and later fall.');
            console.log('Cotton and white elements should be bought initially and sold after 6 months.');
            console.log('Cloths, gold, silver and base metals will witness bearishness for initial 3 months and then rally.');
        } else if (rashi == 'mee_12') {
            console.log('Cotton will rally 75-100% in initial 6 months and then crash.');
            console.log('Oilseeds and oil will witness bearishness in initial 6 months and then rally.');
            console.log('Wheat, gur, sugar supari, coconut and all white things will see bullish bias.');
        }
    } else if (planet == 'venus') {
        if (rashi == 'mes_01') {
            console.log('Grains and Ghee will rise');
            console.log('Gold and silver prices will see sharp rally.');
            console.log('Gur, Sugar and fabric will remain volatile and then rally');
            console.log('Oilseeds and oil, eggs will witness bearishness.');
        } else if (rashi == 'vru_02') {
            console.log('Cotton will witness sharp crash');
            console.log('Gold and silver will remain initially volatile and then rally.')
            console.log('Grains will have bearish bias.');
        } else if (rashi == 'mit_03') {
            console.log('cotton and other fabrics, caster, oil, daal, and guar will remain strongly bearish.');
            console.log('Flexseed, gur and ghee will remain volatile.');
            console.log('All grains will rally.');
        } else if (rashi == 'kar_04') {
            console.log('Initially cotton prices crash and then recover.');
            console.log('Flexseed, caster, oil, ghee sugar will rally.');
            console.log('Silver, wheat, barley chana, matar and daaals will weaken.');
        } else if (rashi == 'sim_05') {
            console.log('Gold, copper, barley, chana, wheat, red items, chilli, ghee and cattle will witness rally.');
            console.log('Silver will witness crash in initial 4 days. Cotton will crash for 8-10 days and then rally.');
        } else if (rashi == 'kan_06') {
            console.log('Silver will remain volatile and then rally.');
            console.log('Grains and sugarcane, grass and silk will rally');
            console.log('Rice will witness extreme rally.');
        } else if (rashi == 'tul_07') {
            console.log('Cotton, silver and aphim will initially rally and then crash.');
            console.log('Gold, gur will remain bullish.');
            console.log('If aspected by soft planets, prices will remain moderately bullish, aspect by hard planet will fuel further rally.');
        } else if (rashi == 'vrs_08') {
            console.log('Cotton, shares, silver and aphim will crash initially and then rally.');
            console.log('Gur will be volatile, All grains will rally');
            console.log('Hard planet aspect will accelerate the rally. Soft planet aspect will keep prices weak');
        } else if (rashi == 'dha_09') {
            console.log('Grains, base and precious metals, cloths and stocks will rise.');
            console.log('Cotton will initially weakness and then rally.');
        } else if (rashi == 'mak_10') {
            console.log('Stocks, aphim, ghee, wheat, sugar and grains will rally.');
            console.log('Cotton and silver will remain initially mixed and volatile, later rally.');
        } else if (rashi == 'kum_11') {
            console.log('Cotton, Silver, Gur, Sugar, Wheat, Chana, Barley, moong, jawar, bajra and whie iteams will be bearish.');
            console.log('Cotton places bottom at 24 degree');
        } else if (rashi == 'mee_12') {
            console.log('If alone, initially silver will see gradual weakness followed by rally.');
            console.log('Grains, oilseeds and sugarcane will be bearish.');
            console.log('Cotton will be bullish. Aspect by hard planet will create blast in silver.');
            console.log('Aspect by soft planets will aggregate bearishness.');
        }
    } else if (planet == 'saturn') {
        if (rashi == 'mes_01') {
            console.log('Iron, base and precious metals, oilseeds, fabric and grains will rise');
            console.log('Gur will fall');
            console.log('Bearishness will be extreme in last two and half months. Store sugarcane and oilseeds in last 75 days');
        } else if (rashi == 'vru_02') {
            console.log('Sugarcane, fabrics, base and precious metals ,oilseeds and grains prices will rise.');
            console.log('After first 2 and half months, this rally will remain till 6 months before. In last 6 months, all the gains will be reversed.')
        } else if (rashi == 'mit_03') {
            console.log('Sugarcane, salt, oilseed & oilsiron will rise broadly.');
            console.log('Red items, gold, cattle, transportation vehicles will fall.');
        } else if (rashi == 'kar_04') {
            console.log('Cotton will be bullish.');
        } else if (rashi == 'sim_05') {
            console.log('Gur and oil will witness massive rally. iron, sugar and urad daal will be bullish. Rapeseed may rise 2-4 fold.');
            console.log('Rally in oilseed starts 6 months before saturns entry in to leo. In 7-8 degree, cotton will witness 50% rally');
        } else if (rashi == 'kan_06') {
            console.log('Cotton will rise by 100%. ');
            console.log('Gold, silver, ratnas and pearl will be bearish.');
            console.log('Gur, khand, salt, grains will see initial rally.');
            console.log('Aspect by hard planets will accelerate the rally. Aspect by soft planets will reduce the extent of rally.');
            console.log('At 3 degree in Kanya, khand, gur sugar will witness massive weakness.');
        } else if (rashi == 'tul_07') {
            console.log('Cotton, gur, khand, all grains will witness bullishness');
            console.log('after 15 degree in libra, cotton will witness bearishness.');
        } else if (rashi == 'vrs_08') {
            console.log('Wheat, Chana, masoor, til, ajwain, methi, cotton, silver prices will witness strong bullishness.');
            console.log('Hard planet aspect will escalate bullishness. Soft planet aspect will cause bearishness.');
        } else if (rashi == 'dha_09') {
            console.log('Millet, chana, wheat and other grains, sugarcane, wood, coal prices will rise.');
            console.log('Grain traders will remain in profit.');
        } else if (rashi == 'mak_10') {
            console.log('Cotton, Silver, Gold, copper, fabric, wheat and oilseed prices will rise.');
            console.log('Elephents, horses and bulls price will rise.');
        } else if (rashi == 'kum_11') {
            console.log('Oilseeds, cotton, silver, shares and grains prices will rise.');
            console.log('Initial one year will cause bullishness and subsequent 1.5 years, above things will witness bearishness.');
            console.log('Hard planet aspect will increse bullishness and soft planet aspect will increase bearishness.')
        } else if (rashi == 'mee_12') {
            console.log('First six months almost all tradable things will remain dull.');
            console.log('Oil seeds will remain firm. Drought will trigger bullishness in sugarcane, oilseeds, spices and grains. ');
        }
    } else if (planet == 'rahu') {
        if (rashi == 'mes_01') {
            console.log('If aspected by hard planet, wheat, barley, chana prices will rise.');
            console.log('World will face issues due to draught');
        } else if (rashi == 'vru_02') {
            console.log('Oilseeds and kirana items, sugarcane things will rise within 6 months.');
            console.log('Fabric and cotton will have 100-200% of rise.')
        } else if (rashi == 'mit_03') {
            console.log('Cotton prices will rise.');
            console.log('Silver prices will fall.');
            console.log('Gold prices will have bearish bias.');
            console.log('Oil and Greains will initially weaken after 7 months. During seasonal demand prices will rise.');
            console.log('');
        } else if (rashi == 'kar_04') {
            console.log('Iron, zinc, copper, brass, gold, silver and cotton will have bearishness in initial 6 months and then rapid rally.');
            console.log('Wheat, rice and specially in jawar will have bullish bias.');
            console.log('If war time, 2-3 fold rise will happen');
        } else if (rashi == 'sim_05') {
            console.log('Wheat and other grains will be bearish.');
            console.log('Kirana items will be costly.');
            console.log('Black pepper, pipal, cinnamon, turmeric, coriender, ginger, coconut, musterd and other oilseeds will be costly.');
            console.log('Go long in black pepper before 5 months, will have good benefits.');
        } else if (rashi == 'kan_06') {
            console.log('Within 2 month, pipli, camphoor, sandlewwod and other aromatic components prices will rise.');
            console.log('Flexseed, mustrd, seasom will be bearish.');
            console.log('Cotton will be very bullish.');
        } else if (rashi == 'tul_07') {
            console.log('Entire grain complex will be bullish.');
            console.log('If aspected by hard planet, draught will trigger massive bullishness.');
            console.log('If aspected by soft planet, rise will be limited.');
        } else if (rashi == 'vrs_08') {
            console.log('Cotton will be bullish.');
            console.log('Gold and silver will be volatile.');
        } else if (rashi == 'dha_09') {
            console.log('Fabric items will be initially bearish, after 5 months, massive rally will happen.');
            console.log('Transportation will become costly.');
        } else if (rashi == 'mak_10') {
            console.log('Barley, chana, wheat, lead, fabric will be bearish for first 3 months and will rise exceptionally.');
            console.log('Gur will be bullish, musterd will be bearish.');
        } else if (rashi == 'kum_11') {
            console.log('oil and oilseeds will rise by 125%');
            console.log('Bearishness in stock market.');
            console.log('If aspected by hard planet, fabric and grains buying will give good profit by 6 months.');
            console.log('If aspected by hard planets, rally will be sharp, aspect by soft planet will be bearish');
        } else if (rashi == 'mee_12') {
            console.log('Oilseeds will be very bearish.');
            console.log('Possibility of draught, grains and grass & fodder shall be bought before hand.');
            console.log('Grains will be bullish for first 12 months and then turn bearish.');
        }
    }
}

function nakshatra_phal(planet, nakshatra) {
    console.log(planet + ' in ' + nakshatra + ' =>')
    if (nakshatra == 'ash_01') {
        if (planet == 'sun') {
            console.log('Flexseed, caster, sesame, oil, gold, silver, iron, copper, sandlewood, coconut, betel, asafoetida, fabrics, cloths, fenugreek, clove, cardamom, grains prices will rise.');
            console.log('Cotton will initially weaken then rally.');
        } else if (planet == 'moon') {
            console.log('Gold, silver, cotton wheat prices will fall.');
        } else if (planet == 'mars') {
            console.log('Jawar, bajra, chana, moong, wheat, gur, sugar, cotton and gold prices will rise.');
            console.log('Silver prices will fall.');
        } else if (planet == 'mercury') {
            console.log('Wheat, jawar, bajra, barley, chana, flexseed, moong, beans prices will rise.');
            console.log('Milk, ghee, gur, sugar, mustard, sesame, oils prices will fall.');
            console.log('Silver will be excepnally weak.')
        } else if (planet == 'jupiter') {
            console.log('Cotton will be bullish');
            console.log('Gold and silver will be volatile and eventually weaken.');
            console.log('Grains will be weak.')
        } else if (planet == 'venus') {
            console.log('Within 10 days, flexseed will weaken.');
            console.log('Gur, sugar, gold, silver, sesame, oils, mustard, cotton, woolan, metals,  ');
        } else if (planet == 'saturn') {
            console.log('Sesome, oils, flexseed, musturd, ghee, rice, javar, chilli, fabrics and wheat prices will rise.');
            console.log('This bullishness will remain for one month and then prices would fall.');
            console.log('In cotton, initial weakness will be followed by bullishness.')
        } else if (planet == 'rahu') {
            console.log('Gur, seedlac, lead prices will rise.');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('Cotton and flexseed prices will fall.');
            console.log('Gold, silver, copper, brass, cloths, wheat, barley, pulses, rice, millets will rise.');
        } else if (planet == 'moon') {
            console.log('Cotton, Sale, campoor, silver will be come weak.');
            console.log('');
        } else if (planet == 'mars') {
            console.log('Wheat and grains, gold, silver and cotton prices will rise.');
        } else if (planet == 'mercury') {
            console.log('Rice, wheat and other grains will rise on 8th day.');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('Precious metals, jewels, grains, beans, oilseeds, wools prices will fall.');
            console.log('');
        } else if (planet == 'venus') {
            console.log('Within 12 days, gold, silver aphim, oilseeds, pulses prices will fall.');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('Gold, silver, oilseeds, copper prices will rise.');
            console.log('Grains will be bearish. Wood prices will rise.');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'kru_03') {
        if (planet == 'sun') {
            console.log('Sesame oil, caster, flexseed, musterd, gur, sugar, ghee, wheat, barley, pulses, jawar, bajra, woolan, cotton fabric, betal, chilli prices will rise.');
            console.log('Cotton prices will weaken.');
        } else if (planet == 'moon') {
            console.log('Silver will be somewhat bearish.');
            console.log('Cotton will be volatile and end in positive.');
        } else if (planet == 'mars') {
            console.log('Within 20 days, wheat, pulses, rice, musterd, sesame, oils, silver, fabrics prices will rise.');
            console.log('Cotton initially rise and then fall.');
        } else if (planet == 'mercury') {
            console.log('Within 8 days silver and aphim will see massive volatility and eventually fall.');
            console.log('Initially grains and cotton will bull bullish and then sideways.');
        } else if (planet == 'jupiter') {
            console.log('Grains and cotton will fall.');
            console.log('Sugarcane products and silver will be volatile.');
        } else if (planet == 'venus') {
            console.log('Barley, rice, hing, sesame, oils, mustard, fabrics, cotton, silver, gold, precious stones prices will fall.');
        } else if (planet == 'saturn') {
            console.log('Gold, silver, oilseeds, copper prices will rise.');
            console.log('Grains will fall.');
            console.log('Lumber/Wood stockists will have three fold profits.');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'roh_04') {
        if (planet == 'sun') {
            console.log('Sesame oil, caster, flexseed, musterd, gur, sugar, ghee, wheat, barley, pulses, jawar, bajra, woolan, cotton, betal, chilli prices will rise.');
            console.log('Silver prices will fall.');
        } else if (planet == 'moon') {
            console.log('Wheat, pulses, sugarcane products, cotton prices will rise.');
            console.log('');
        } else if (planet == 'mars') {
            console.log('Cotton, fabrics, cloths, silk, mustard, sesame, oils, red Chilli, hing and shares prices will rise.');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('Within 8 days, cotton, fabrics, gold, silver, oilseeds, grains and softs will rise.');
            console.log('Mustard, pulses, wooland and silk prices will fall.');
            console.log('Cotton prices will initially rise and then fall.')
        } else if (planet == 'jupiter') {
            console.log('Cotton prices will be volatile.');
            console.log('Softs, gold and silver prices will fall.');
            console.log('In 2nd navmansh of rohini nakshatra, within 18 days, gems, grains, silver prices will rise. betal, chilli, mustard, turmeric prices will fall.Cotton, softs will be volatile.')
            console.log('In 3rd navmansh of rohini nakshatra, oilseeds, softs, grains pulses will rise.');
            console.log('In 4th navmansh of rohini nakshatra, grains, pulses, oilseeds, softs, spices, cotton prices will fall.')
        } else if (planet == 'venus') {
            console.log('Within 12 days, precious metals, oilseeds, softs prices will fall.');
            console.log('Aphim prices will rise.');
        } else if (planet == 'saturn') {
            console.log('In 1st Navamsh of Rohini nakshatra, cotton, cloths, gold, silver, copper, zinc, brass prices will rise and grains prices will fall.');
            console.log('In 2nd Navamsh of Rohini Nakshatra, oilseeds, pulses, grains, cotton, spices prices will rise.');
            console.log('In 3rd Navmansh of Rohini Nakshatra, gold, silver, woolan, steel, cotton prices will rise.');
            console.log('In 4th Navmansh of Rohini Nakshatra, grains prices will rise.');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'mru_05') {
        if (planet == 'sun') {
            console.log('Fabrics, aromatics, precious metals, pulses, bajra, flexseed and fruits prices will rise.');
            console.log('');
        } else if (planet == 'moon') {
            console.log('Cotton, gold, silver, mustard and groundnut prices will fall.');
            console.log('');
        } else if (planet == 'mars') {
            console.log('Seasom and silver price will rise.');
            console.log('Cotton will initially fall and then rise.');
            console.log('Other tradables will be moderately bearish.')
        } else if (planet == 'mercury') {
            console.log('Within 8 days, cotton prices will rise.');
            console.log('Silver will be volatile and eventually bearish.');
            console.log('Wheat, sesame, mustard, urad prices will fall.')
        } else if (planet == 'jupiter') {
            console.log('Overall cotton will be bullish and rice, silver, ghee and grass will be bearish.');
            console.log('In first navamsh, within 13 days, sesame and cotton will rise.');
            console.log('In second navmansh, within 50 days, grains, sesame and tubers will rise.')
            console.log('In 3rd navmanshand 4th navmansh grains prices will rise.')
        } else if (planet == 'venus') {
            console.log('Within 12 days, wheat, pupses and jawar prices will fall.');
            console.log('Sugarcane products prices will rise.');
        } else if (planet == 'saturn') {
            console.log('Cottom, gold and silver prices will be volatile.');
            console.log('Grains prices will fall.');
            console.log('2nd navmansh - catton and grains prices will fall.')
            console.log('4th navmansh - sugar, oils and salt prices will rise.')
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'ard_06') {
        if (planet == 'sun') {
            console.log('Cotton, flexseed, caster, pearls, rice, pulses, barley, silver prices will rise.');
            console.log('Gold will be volatile.');
        } else if (planet == 'moon') {
            console.log('Sugarcane products, salt, gold, silver copper prices will rise.');
            console.log('');
        } else if (planet == 'mars') {
            console.log('Cotton, oilseeds, sugarcane products will rise.');
            console.log('Silver will fall.');
        } else if (planet == 'mercury') {
            console.log('Grain, oilseeds and pulses prices will fall.');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('Cotton prices will fall. Gold and silver volatile');
            console.log('Food items will be costly for first three months and later fall..');
            console.log('1st and 2nd navmansh ')
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'pun_07') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    } else if (nakshatra == 'bha_02') {
        if (planet == 'sun') {
            console.log('');
            console.log('');
        } else if (planet == 'moon') {
            console.log('');
            console.log('');
        } else if (planet == 'mars') {
            console.log('');
            console.log('');
        } else if (planet == 'mercury') {
            console.log('');
            console.log('');
        } else if (planet == 'jupiter') {
            console.log('');
            console.log('');
        } else if (planet == 'venus') {
            console.log('');
            console.log('');
        } else if (planet == 'saturn') {
            console.log('');
            console.log('');
        } else if (planet == 'rahu') {
            console.log('');
            console.log('');
        }
    }
}

function print_nakshatra_phal() {
    nakshatra_phal('sun', get_nakshatra(planetory_positions.sun));
    nakshatra_phal('moon', get_nakshatra(planetory_positions.moon));
    nakshatra_phal('mars', get_nakshatra(planetory_positions.mars));
    nakshatra_phal('mercury', get_nakshatra(planetory_positions.mercury));
    nakshatra_phal('jupiter', get_nakshatra(planetory_positions.jupiter));
    nakshatra_phal('venus', get_nakshatra(planetory_positions.venus));
    nakshatra_phal('saturn', get_nakshatra(planetory_positions.saturn));
    nakshatra_phal('rahu', get_nakshatra(planetory_positions.rahu));

}

function print_nakshatra_vedh_phal() {
    vedh_phal('sun');
    vedh_phal('moon');
    vedh_phal('mars');
    vedh_phal('mercury');
    vedh_phal('jupiter');
    vedh_phal('venus');
    vedh_phal('saturn');
    vedh_phal('rahu');
}

function print_rashi_phal() {
    rashi_phal('sun', get_rashi(planetory_positions.sun));
    rashi_phal('moon', get_rashi(planetory_positions.moon));
    rashi_phal('mars', get_rashi(planetory_positions.mars));
    rashi_phal('mercury', get_rashi(planetory_positions.mercury));
    rashi_phal('jupiter', get_rashi(planetory_positions.jupiter));
    rashi_phal('venus', get_rashi(planetory_positions.venus));
    rashi_phal('saturn', get_rashi(planetory_positions.saturn));
    rashi_phal('rahu', get_rashi(planetory_positions.rahu));
}
print_nakshatra_vedh_phal();
print_rashi_phal()
print_nakshatra_phal();

function jpm_log() {
    console.log('grains_positive: ', grains_positive)
    console.log('grains_negative: ', grains_negative);
    /* //=================
    sugarcane_positive = 0;
    sugarcane_negative = 0;
    //=================
    pm_positive = 0;
    pm_negative = 0;
    //=================
    spices_positive = 0;
    spices_negative = 0;
    //=================
    oil_oilseeds_positive = 0;
    oil_oilseeds_negative = 0;
    //=================
    pulses_positive = 0;
    pulses_negative = 0;
    //=================
    //=================
    fabrics_positive = 0;
    fabrics_negative = 0;
    //=================
    cattle_positive = 0;
    cattle_negative = 0 */
}


jpm_log();
/* console.log('-----------------------------------------------------------------------------')
console.log('sun Nakshatra: ', get_nakshatra(planetory_positions.sun));
console.log('sun Rashi: ', get_rashi(planetory_positions.sun));
sun_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.sun), 'sun');
console.log('sun Speed: ', planetory_speed_type.sun);
console.log('sun Vedha: ', sun_vedh);
sun_vedh.forEach(vedh_phal);
rashi_phal('sun', get_rashi(planetory_positions.sun));
console.log('-----------------------------------------------------------------------------')
 */
//console.log(planetory_positions)
//console.log(planetory_speed)
/* rashi_phal('sun', get_rashi(planetory_positions.sun));
rashi_phal('moon', get_rashi(planetory_positions.moon));
rashi_phal('mars', get_rashi(planetory_positions.mars));
rashi_phal('mercury', get_rashi(planetory_positions.mercury));
rashi_phal('jupiter', get_rashi(planetory_positions.jupiter));
rashi_phal('venus', get_rashi(planetory_positions.venus));
rashi_phal('saturn', get_rashi(planetory_positions.saturn));
rashi_phal('rahu', get_rashi(planetory_positions.rahu));
 */
/* console.log('moon Nakshatra: ', get_nakshatra(planetory_positions.moon));
moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.moon), 'moon');
console.log('moon Speed: ', planetory_speed_type.moon);
console.log('moon Vedha: ', moon_vedh);
moon_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')
 */
/*
console.log('-----------------------------------------------------------------------------')
console.log('-----------------Nakshatra , Planets Speed and Vedha-------------------------')


console.log('sun Nakshatra: ', get_nakshatra(planetory_positions.sun));
console.log('sun Rashi: ', get_rashi(planetory_positions.sun));
sun_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.sun), 'sun');
console.log('sun Speed: ', planetory_speed_type.sun);
console.log('sun Vedha: ', sun_vedh);
sun_vedh.forEach(vedh_phal);
rashi_phal('sun', get_rashi(planetory_positions.sun));
//nakshatra_phal('sun', get_rashi(planetory_positions.sun));
console.log('-----------------------------------------------------------------------------')


console.log('moon Nakshatra: ', get_nakshatra(planetory_positions.moon));
moon_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.moon), 'moon');
console.log('moon Speed: ', planetory_speed_type.moon);
console.log('moon Vedha: ', moon_vedh);
moon_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('mars Nakshatra: ', get_nakshatra(planetory_positions.mars));
mars_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.mars), 'mars');
console.log('mars Speed: ', planetory_speed_type.mars);
console.log('mars Vedha: ', mars_vedh);
mars_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('mercury Nakshatra: ', get_nakshatra(planetory_positions.mercury));
mercury_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.mercury), 'mercury');
console.log('mercury Speed: ', planetory_speed_type.mercury);
console.log('mercury Vedha: ', mercury_vedh);
mercury_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('jupiter Nakshatra: ', get_nakshatra(planetory_positions.jupiter));
jupiter_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.jupiter), 'jupiter');
console.log('jupiter Speed: ', planetory_speed_type.jupiter);
console.log('jupiter Vedha: ', jupiter_vedh);
jupiter_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('venus Nakshatra: ', get_nakshatra(planetory_positions.venus));
venus_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.venus), 'venus');
console.log('venus Speed: ', planetory_speed_type.venus);
console.log('venus Vedha: ', venus_vedh);
venus_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('saturn Nakshatra: ', get_nakshatra(planetory_positions.saturn));
saturn_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.saturn), 'saturn');
console.log('saturn Speed: ', planetory_speed_type.saturn);
console.log('saturn Vedha: ', saturn_vedh);
saturn_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('rahu Nakshatra: ', get_nakshatra(planetory_positions.rahu));
rahu_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.rahu), 'rahu');
console.log('rahu Speed: ', planetory_speed_type.rahu);
console.log('rahu Vedha: ', rahu_vedh);
rahu_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------')

console.log('ketu Nakshatra: ', get_nakshatra(planetory_positions.ketu));
ketu_vedh = nakshatra_vedha(get_nakshatra(planetory_positions.ketu), 'ketu');
console.log('ketu Speed: ', planetory_speed_type.ketu);
console.log('ketu Vedha: ', ketu_vedh);
ketu_vedh.forEach(vedh_phal);
console.log('-----------------------------------------------------------------------------') */