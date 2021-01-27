// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var progLangCreators = [
  [
    "Java",
    "James Gosling"
  ],
  [
    "C",
    "Dennis Ritchie"
  ],
  [
    "Python",
    "Guido van Rossum"
  ],
  [
    "PHP",
    "Rasmus Lerdorf"
  ],
  [
    "Perl",
    "Larry Wall"
  ],
  [
    "JavaScript",
    "Brendan Eich"
  ],
  [
    "Ruby",
    "Yukihiro Matsumoto"
  ],
  [
    "Lisp",
    "John McCarthy"
  ],
  [
    "Pascal",
    "Niklaus Wirth"
  ]
];

progLangCreators.filter(function (x) {
      return x[0].startsWith("P");
    });

var mh = {
  state: "Maharasthra",
  count: 2342
};

var ka = {
  state: "Karnataka",
  count: 745
};

var dl = {
  state: "Delhi",
  count: 385
};

var wb = {
  state: "West Bengal",
  count: 621
};

var jh = {
  state: "Jharkand",
  count: 111
};

var tn = {
  state: "Tamil Nadu",
  count: 770
};

var totalRecovered = [
    mh,
    ka,
    dl,
    wb,
    jh,
    tn
  ].reduce((function (acc, param) {
        return acc + param.count | 0;
      }), 0);

var dailyRecovered_1 = {
  hd: ka,
  tl: {
    hd: dl,
    tl: {
      hd: wb,
      tl: {
        hd: jh,
        tl: {
          hd: tn,
          tl: /* [] */0
        }
      }
    }
  }
};

var dailyRecovered = {
  hd: mh,
  tl: dailyRecovered_1
};

function toDisplayMetric(metric) {
  return [
          metric.state,
          String(metric.count)
        ];
}

var convertedMetrics = Belt_List.map(dailyRecovered, toDisplayMetric);

var filteredMetrics = Belt_List.keep(dailyRecovered, (function (param) {
        return param.count >= 500;
      }));

var totalRecovered2 = Belt_List.reduce(dailyRecovered, 0, (function (acc, param) {
        return acc + param.count | 0;
      }));

function myCustomMap(xs, f) {
  return Belt_List.reverse(Belt_List.reduce(xs, /* [] */0, (function (acc, x) {
                    return {
                            hd: Curry._1(f, x),
                            tl: acc
                          };
                  })));
}

function myCustomFilter(xs, f) {
  return Belt_List.reverse(Belt_List.reduce(xs, /* [] */0, (function (acc, x) {
                    if (Curry._1(f, x)) {
                      return {
                              hd: Curry._1(f, x),
                              tl: acc
                            };
                    } else {
                      return acc;
                    }
                  })));
}

function describeList(xs) {
  if (xs) {
    return "The first item in this list is: " + xs.hd + " and there are other " + String(Belt_List.length(xs.tl)) + " items.";
  } else {
    return "This list is empty";
  }
}

describeList({
      hd: "hello",
      tl: {
        hd: "world",
        tl: {
          hd: "good",
          tl: {
            hd: "bye",
            tl: /* [] */0
          }
        }
      }
    });

function getSecondListItem(xs) {
  if (!xs) {
    return ;
  }
  var match = xs.tl;
  if (match) {
    return Caml_option.some(match.hd);
  }
  
}

var secondListItem2 = getSecondListItem({
      hd: 1,
      tl: /* [] */0
    });

var secondListItem3 = getSecondListItem({
      hd: "hello",
      tl: {
        hd: "world",
        tl: /* [] */0
      }
    });

var secondListItem4 = getSecondListItem({
      hd: mh,
      tl: {
        hd: ka,
        tl: {
          hd: dl,
          tl: {
            hd: wb,
            tl: {
              hd: jh,
              tl: {
                hd: tn,
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

function whatNumberAmIThinking(myNumber) {
  if (myNumber !== undefined) {
    return "My number is: " + String(myNumber);
  } else {
    return "I'm not thinking of any number!";
  }
}

if (whatNumberAmIThinking(undefined) !== "I'm not thinking of any number!") {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          360,
          0
        ],
        Error: new Error()
      };
}

if (whatNumberAmIThinking(7) !== "My number is: 7") {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          361,
          0
        ],
        Error: new Error()
      };
}

function safeDivide(dividend, divisor) {
  return Caml_int32.div(dividend, divisor);
}

var bukowski = "If you're going to try, go all the way...";

function printMessage(message) {
  if (message !== undefined) {
    return message;
  } else {
    return "The message is empty";
  }
}

function mapOption(f, opt) {
  if (opt !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(opt)));
  }
  
}

function $$double(i) {
  return (i << 1);
}

if (mapOption($$double, undefined) !== undefined) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          404,
          9
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(mapOption($$double, 2), 4)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          406,
          9
        ],
        Error: new Error()
      };
}

if (Belt_Option.map(undefined, $$double) !== undefined) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          424,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(Belt_Option.map(2, $$double), 4)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "chap_4_polymorphic.res",
          425,
          0
        ],
        Error: new Error()
      };
}

var exampleHTML = {
  TAG: /* Division */0,
  _0: [
    {
      TAG: /* Heading */1,
      _0: [{
          TAG: /* Anchor */3,
          _0: {
            TAG: /* Fragment */0,
            _0: "hello-world"
          },
          _1: "Jump to here"
        }]
    },
    {
      TAG: /* Paragraph */2,
      _0: "Hello, world!"
    },
    {
      TAG: /* Anchor */3,
      _0: {
        TAG: /* MailTo */1,
        _0: "nowhere@mozilla.org"
      },
      _1: "Send email to nowhere"
    }
  ]
};

function hrefToHTML(href) {
  if (href.TAG) {
    return "mailto:" + href._0;
  } else {
    return "#" + href._0;
  }
}

function anchorToHTML(href, displayText) {
  return "<a href=" + hrefToHTML(href) + ">" + displayText + "</a>";
}

function paragraphToHTML(text) {
  return "<p>" + text + "</p>";
}

function renderHTML(html) {
  var aux = function (depth, x) {
    var indent = " ".repeat((depth << 1));
    var toHTML = function (tag, xs) {
      var partial_arg = depth + 1 | 0;
      var innerHTML = Belt_Array.map(xs, (function (param) {
                return aux(partial_arg, param);
              })).join("\n");
      return indent + "<" + tag + ">\n" + innerHTML + "\n" + indent + "</" + tag + ">";
    };
    switch (x.TAG | 0) {
      case /* Division */0 :
          return toHTML("div", x._0);
      case /* Heading */1 :
          return toHTML("h2", x._0);
      case /* Paragraph */2 :
          return indent + paragraphToHTML(x._0);
      case /* Anchor */3 :
          return indent + anchorToHTML(x._0, x._1);
      
    }
  };
  return aux(0, html);
}

var secondListItem;

var nothing;

var nothing2;

exports.progLangCreators = progLangCreators;
exports.mh = mh;
exports.ka = ka;
exports.dl = dl;
exports.wb = wb;
exports.jh = jh;
exports.tn = tn;
exports.totalRecovered = totalRecovered;
exports.dailyRecovered = dailyRecovered;
exports.toDisplayMetric = toDisplayMetric;
exports.convertedMetrics = convertedMetrics;
exports.filteredMetrics = filteredMetrics;
exports.totalRecovered2 = totalRecovered2;
exports.myCustomMap = myCustomMap;
exports.myCustomFilter = myCustomFilter;
exports.describeList = describeList;
exports.getSecondListItem = getSecondListItem;
exports.secondListItem = secondListItem;
exports.secondListItem2 = secondListItem2;
exports.secondListItem3 = secondListItem3;
exports.secondListItem4 = secondListItem4;
exports.nothing = nothing;
exports.nothing2 = nothing2;
exports.whatNumberAmIThinking = whatNumberAmIThinking;
exports.safeDivide = safeDivide;
exports.bukowski = bukowski;
exports.printMessage = printMessage;
exports.mapOption = mapOption;
exports.$$double = $$double;
exports.exampleHTML = exampleHTML;
exports.hrefToHTML = hrefToHTML;
exports.anchorToHTML = anchorToHTML;
exports.paragraphToHTML = paragraphToHTML;
exports.renderHTML = renderHTML;
/*  Not a pure module */
