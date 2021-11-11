import { Injectable } from '@angular/core';
import { JulianDateService } from './julian-date.service';

@Injectable({
  providedIn: 'root'
})
export class SolarPositionService {

  constructor(
    private _julianDateService: JulianDateService
  ) { }

  radToDeg(angleRad: number) {
    return (180.0 * angleRad / Math.PI);
  }
  
  degToRad(angleDeg: number) {
    return (Math.PI * angleDeg / 180.0);
  }
  
  calcGeomMeanLongSun(t: number) {
    var L0 = 280.46646 + t * (36000.76983 + t*(0.0003032))
    while(L0 > 360.0) {
      L0 -= 360.0
    }
    while(L0 < 0.0) {
      L0 += 360.0
    }
    return L0		// in degrees
  }
  
  calcGeomMeanAnomalySun(t: number) {
    var M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
    return M;		// in degrees
  }
  
  calcEccentricityEarthOrbit(t: number) {
    var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
    return e;		// unitless
  }
  
  calcSunEqOfCenter(t: number) {
    var m = this.calcGeomMeanAnomalySun(t);
    var mrad = this.degToRad(m);
    var sinm = Math.sin(mrad);
    var sin2m = Math.sin(mrad+mrad);
    var sin3m = Math.sin(mrad+mrad+mrad);
    var C = sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) + sin2m * (0.019993 - 0.000101 * t) + sin3m * 0.000289;
    return C;		// in degrees
  }
  
  calcSunTrueLong(t: any) {
    var l0 = this.calcGeomMeanLongSun(t);
    var c = this.calcSunEqOfCenter(t);
    var O = l0 + c;
    return O;		// in degrees
  }
  
  calcSunTrueAnomaly(t: any) {
    var m = this.calcGeomMeanAnomalySun(t);
    var c = this.calcSunEqOfCenter(t);
    var v = m + c;
    return v;		// in degrees
  }
  
  calcSunRadVector(t: any) {
    var v = this.calcSunTrueAnomaly(t);
    var e = this.calcEccentricityEarthOrbit(t);
    var R = (1.000001018 * (1 - e * e)) / (1 + e * Math.cos(this.degToRad(v)));
    return R;		// in AUs
  }
  
  calcSunApparentLong(t: number) {
    var o = this.calcSunTrueLong(t);
    var omega = 125.04 - 1934.136 * t;
    var lambda = o - 0.00569 - 0.00478 * Math.sin(this.degToRad(omega));
    return lambda;		// in degrees
  }
  
  calcMeanObliquityOfEcliptic(t: number) {
    var seconds = 21.448 - t*(46.8150 + t*(0.00059 - t*(0.001813)));
    var e0 = 23.0 + (26.0 + (seconds/60.0))/60.0;
    return e0;		// in degrees
  }
  
  calcObliquityCorrection(t: number) {
    var e0 = this.calcMeanObliquityOfEcliptic(t);
    var omega = 125.04 - 1934.136 * t;
    var e = e0 + 0.00256 * Math.cos(this.degToRad(omega));
    return e;		// in degrees
  }
  
  calcSunRtAscension(t: any) {
    var e = this.calcObliquityCorrection(t);
    var lambda = this.calcSunApparentLong(t);
    var tananum = (Math.cos(this.degToRad(e)) * Math.sin(this.degToRad(lambda)));
    var tanadenom = (Math.cos(this.degToRad(lambda)));
    var alpha = this.radToDeg(Math.atan2(tananum, tanadenom));
    return alpha;		// in degrees
  }
  
  calcSunDeclination(t: any) {
    var e = this.calcObliquityCorrection(t);
    var lambda = this.calcSunApparentLong(t);
    var sint = Math.sin(this.degToRad(e)) * Math.sin(this.degToRad(lambda));
    var theta = this.radToDeg(Math.asin(sint));
    return theta;		// in degrees
  }
  
  calcEquationOfTime(t: number) {
    var epsilon = this.calcObliquityCorrection(t);
    var l0 = this.calcGeomMeanLongSun(t);
    var e = this.calcEccentricityEarthOrbit(t);
    var m = this.calcGeomMeanAnomalySun(t);
  
    var y = Math.tan(this.degToRad(epsilon)/2.0);
    y *= y;
  
    var sin2l0 = Math.sin(2.0 * this.degToRad(l0));
    var sinm   = Math.sin(this.degToRad(m));
    var cos2l0 = Math.cos(2.0 * this.degToRad(l0));
    var sin4l0 = Math.sin(4.0 * this.degToRad(l0));
    var sin2m  = Math.sin(2.0 * this.degToRad(m));
  
    var Etime = y * sin2l0 - 2.0 * e * sinm + 4.0 * e * y * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;
    return this.radToDeg(Etime)*4.0;	// in minutes of time
  }
  
  calcHourAngleSunrise(lat: any, solarDec: any) {
    var latRad = this.degToRad(lat);
    var sdRad  = this.degToRad(solarDec);
    var HAarg = (Math.cos(this.degToRad(90.833))/(Math.cos(latRad)*Math.cos(sdRad))-Math.tan(latRad) * Math.tan(sdRad));
    var HA = Math.acos(HAarg);
    return HA;		// in radians (for sunset, use -HA)
  }
  
  isNumber(inputVal: string) {
    var oneDecimal = false;
    var inputStr = "" + inputVal;
    for (var i = 0; i < inputStr.length; i++) {
      var oneChar = inputStr.charAt(i);
      if (i == 0 && (oneChar == "-" || oneChar == "+")) {
        continue;
      }
      if (oneChar == "." && !oneDecimal) {
        oneDecimal = true;
        continue;
      }
      if (oneChar < "0" || oneChar > "9") {
        return false;
      }
    }
    return true;
  }
  
  calcRefraction(elev: number) {
  
    if (elev > 85.0) {
      var correction = 0.0;
    } else {
      var te = Math.tan(this.degToRad(elev));
      if (elev > 5.0) {
        var correction = 58.1 / te - 0.07 / (te*te*te) + 0.000086 / (te*te*te*te*te);
      } else if (elev > -0.575) {
        var correction = 1735.0 + elev * (-518.2 + elev * (103.4 + elev * (-12.79 + elev * 0.711) ) );
      } else {
        var correction = -20.774 / te;
      }
      correction = correction / 3600.0;
    }
  
    return correction
  }
  
  calcAzEl(T: any, localtime: number, latitude: number, longitude: number, zone: number) {
  
    var eqTime = this.calcEquationOfTime(T)
    var theta  = this.calcSunDeclination(T)
  
    var solarTimeFix = eqTime + 4.0 * longitude - 60.0 * zone
    var earthRadVec = this.calcSunRadVector(T)
    var trueSolarTime = localtime + solarTimeFix
    while (trueSolarTime > 1440) {
      trueSolarTime -= 1440
    }
    var hourAngle = trueSolarTime / 4.0 - 180.0;
    if (hourAngle < -180) {
      hourAngle += 360.0
    }
    var haRad = this.degToRad(hourAngle)
    var csz = Math.sin(this.degToRad(latitude)) * Math.sin(this.degToRad(theta)) + Math.cos(this.degToRad(latitude)) * Math.cos(this.degToRad(theta)) * Math.cos(haRad)
    if (csz > 1.0) {
      csz = 1.0
    } else if (csz < -1.0) { 
      csz = -1.0
    }
    var zenith = this.radToDeg(Math.acos(csz))
    var azDenom = ( Math.cos(this.degToRad(latitude)) * Math.sin(this.degToRad(zenith)) )
    if (Math.abs(azDenom) > 0.001) {
      var azRad = (( Math.sin(this.degToRad(latitude)) * Math.cos(this.degToRad(zenith)) ) - Math.sin(this.degToRad(theta))) / azDenom
      if (Math.abs(azRad) > 1.0) {
        if (azRad < 0) {
          azRad = -1.0
        } else {
          azRad = 1.0
        }
      }
      var azimuth = 180.0 - this.radToDeg(Math.acos(azRad))
      if (hourAngle > 0.0) {
        azimuth = -azimuth
      }
    } else {
      if (latitude > 0.0) {
        var azimuth = 180.0
      } else { 
        var azimuth = 0.0
      }
    }
    if (azimuth < 0.0) {
      azimuth += 360.0
    }
    var exoatmElevation = 90.0 - zenith
  
    // Atmospheric Refraction correction
    var refractionCorrection = this.calcRefraction(exoatmElevation)
  
    var solarZen = zenith - refractionCorrection;
    var elevation = 90.0 - solarZen
  
    return {"azimuth": azimuth, "elevation": elevation}
  }
  
  calcSolNoon(jd: number, longitude: number, timezone: number) {
    var tnoon = this._julianDateService.calcTimeJulianCent(jd - longitude/360.0)
    var eqTime = this.calcEquationOfTime(tnoon)
    var solNoonOffset = 720.0 - (longitude * 4) - eqTime // in minutes
    var newt = this._julianDateService.calcTimeJulianCent(jd + solNoonOffset/1440.0)
    eqTime = this.calcEquationOfTime(newt)
    var solNoonLocal = 720 - (longitude * 4) - eqTime + (timezone*60.0)// in minutes
    while (solNoonLocal < 0.0) {
      solNoonLocal += 1440.0;
    }
    while (solNoonLocal >= 1440.0) {
      solNoonLocal -= 1440.0;
    }
  
    return solNoonLocal
  }
}
