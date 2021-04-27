"use strict";

exports.parseCookies = (cookies) => {
  let list = {};

  cookies &&
    cookies.split(";").forEach(function (cookie) {
      const parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
};
