function Join(items = []) {
    var html = ``;

    if (items != []) {
        for (item of items) {
            html += item;
        }
    }

    return html;
}

function List(items = []) {
    var html = ``;

    if (items != []) {
        html += `<ul>`;

        for (item of items) {
            html += `<li>` + item + `</li>`;
        }

        html += `</ul>`;
    }

    return html;
}

function Tags(s = ``) {
    return `<div class="tags">
        Tags: ${s}
    </div>`
}

function Link(title = ``, url = ``) {
    return `<a href="${url}">${title}</a>`
}


function Entry(title = "", subtitle = "", text = "") {
    var titleHtml = (title == "") ? "" :
        `<h3>${title}</h3>`;

    var subtitleHtml = (subtitle == "") ? "" :
        `<div class="subtitle">${subtitle}</div>`;

    var textHtml = (text == "") ? "" :
        `<p class="text">${text}</p>`;

    return `
        <div class="content">
            ${titleHtml}
            ${subtitleHtml}
            ${textHtml}
        </div>
    `;
}

const SectionType = {
    DEFAULT: "default",
    SMALL: "small",
    STUB: "stub",
}

function Section(title = "", entries = [], type = SectionType.DEFAULT) {
    var titleHtml = (title == "") ? "" :
        `<h2>${title}</h2>`;

    var sectionHtml = Join(entries);

    return `
        ${titleHtml}
        <div class="section ${type}">
            ${sectionHtml}
        </div>
    `;
}

function Page(sections = []) {
    var sectionHtml = Join(sections);

    return `
        ${sectionHtml}
    `;
}


