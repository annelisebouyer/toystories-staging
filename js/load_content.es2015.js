'use strict';

loadSpreadsheet('1136ZTgKP2IAEqVxwu5MFndHRQd-h8N0nuIfRXUDjAIk', 1, function (rows) {

  var grid = document.querySelector('#fh5co-board');
  var items = rows.map(function (r) {
    var title = r.title,
        link = r.link,
        date = r.date,
        name = r.name,
        quote = r.quote;


    var element = document.createElement('div');
    element.setAttribute('class', 'item');
    element.setAttribute('style', "cursor: pointer;");
    element.setAttribute('onclick', 'window.location=\'' + link + '\';');
    element.innerHTML = '\n      <div class="animate-box">\n        <div class="fh5co-desc">\n          <div class="jag-title">' + title + '</div>\n          <div class="jag-message">\n            <i class="fa fa-quote-left"></i>' + quote + '<i class="fa fa-quote-right"></i>\n          </div>\n          <div class="jag-name">' + name + '</div>\n          <div class="jag-date">' + date + '</div>\n        </div>\n      </div>\n    ';
    return element;
  });

  salvattore.appendElements(grid, items);
});

