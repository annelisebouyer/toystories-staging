loadSpreadsheet('1136ZTgKP2IAEqVxwu5MFndHRQd-h8N0nuIfRXUDjAIk', 1, rows => {

  const grid = document.querySelector('#fh5co-board')
  const items = rows.map(r => {

    const {title, link, date, name, quote} = r

    const element = document.createElement('div')
    element.setAttribute('class', 'item')
    element.setAttribute('style', "cursor: pointer;" )
    element.setAttribute('onclick', `window.location='${link}';`)
    element.innerHTML = `
      <div class="animate-box">
        <div class="fh5co-desc">
          <div class="jag-title">${title}</div>
          <div class="jag-message">
            <i class="fa fa-quote-left"></i>${quote}<i class="fa fa-quote-right"></i>
          </div>
          <div class="jag-name">${name}</div>
          <div class="jag-date">${date}</div>
        </div>
      </div>
    `
    return element
  })

  salvattore.appendElements(grid, items)

})


