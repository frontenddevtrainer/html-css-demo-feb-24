"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person = {
    name: "abc",
    age: 19,
};
var employment = {
    title: "manager",
    company: "Edureka",
};
var number = [2344, 423, 442, 3423];
var combined = __assign(__assign(__assign(__assign({}, person), employment), { title: "Sr Manager" }), number);
var personalContacts = [423421514353, 55236254646];
var corporateContacts = [4253546464, 6456464, 64563456546, 64564563456];
var contacts = __spreadArray(__spreadArray([], personalContacts, true), corporateContacts, true);
console.log(contacts);
// combined.name = person.name;
// combined.age = person.age;
// combined.title = employment.title;
// combined.company = employment.company;
// Object.assign(combined, person, employment)
console.log(combined);
