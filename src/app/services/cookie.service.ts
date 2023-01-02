import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getCookieVal (offset: number | undefined) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    // return unescape(document.cookie.substring(offset, endstr));
  }
  
  GetCookie (name: string) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i,j) == arg)
        return this.getCookieVal(j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
    }
    return null;
  }
  
  SetCookie (name: string, value: string) {
    var argv = this.SetCookie.arguments;
    var argc = this.SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : null;
    document.cookie = name + "=" + escape (value) + 
      ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
      ((path == null) ? "" : ("; path=" + path)) +
      ((domain == null) ? "" : ("; domain=" + domain)) +
      ((secure == null) ? "; secure" : "");
  }
  
  DeleteCookie (name: string) {
    var exp = new Date();
    exp.setTime (exp.getTime() - 1);
    var cval = this.GetCookie(name);
    // if (cval != null)
    //   document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
  }
  
  saveCookie () {
    var expdate = new Date();
    expdate.setTime (expdate.getTime() + (365 * 24 * 60 * 60 * 1000));
    // this.SetCookie ("lat", document.getElementById("latbox").value, expdate, null, null, false);
    // this.SetCookie ("lng", document.getElementById("lngbox").value, expdate, null, null, false);
    // this.SetCookie ("gmt", document.getElementById("zonebox").value, expdate, null, null, false);
    // this.SetCookie ("tz", document.getElementById("tz").value, expdate, null, null, false);
  }
}
