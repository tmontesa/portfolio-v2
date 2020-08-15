var pageTarget = document.getElementById("section-container")

const SECTION_TYPE  = {
    default: "",
    small: "small",
    stub: "stub"
}

class Link {
    constructor(name = "", href = "") {
        this.name = name;
        this.href = href;
    }
}

class Content {
    constructor(title = "", subtitle = "", text = "") {
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.html = this.generate()
    }

    generate() {
        var title = this.title != null ? `<h3>${this.title.replace("\n", "<br />")}</h3>` : ``;
        var subtitle = this.subtitle != null ? `<div class="subtitle">${this.subtitle.replace("\n", "<br />")}</div>` : ``;
        var text = this.text != null ? `<p class="text">${this.text.replace("\n", "<br />")}</p>` : ``;
        return `
            <div class="content">
                ${title}
                ${subtitle}
                ${text}
            </div>
        `;
    }
}


class ShowcaseContent {
    constructor(title = "", subtitle = "", text = "", tags = [], link = null) {
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.tags = tags;
        this.link = link;
        this.html = this.generate()
    }

    
    generate() {
        var title = this.title != null ? `<h3>${this.title.replace("\n", "<br />")}</h3>` : ``;
        var subtitle = this.subtitle != null ? `<div class="subtitle">${this.subtitle.replace("\n", "<br />")}</div>` : ``;
        var text = this.text != null ? `<p class="text">${this.text.replace("\n", "<br />")}</p>` : ``;

        var tags = "";

        if (this.tags != []) {
            tags += `<div class="tags">`;
            for (var tag of this.tags) {
                tags += `<div class="tag">` + tag + `</div>`;
            }
            tags += `</div>`;
        }

        

        var link = (this.link != null) ? `<div class="link"><a href="${this.link.href}">${this.link.name}</a></div>` : "";

        return `
            <div class="content">
                ${title}
                ${subtitle}
                ${tags}

                ${text}
                ${link}
            </div>
        `;
    }
}


class Section {
    constructor(type = SECTION_TYPE.default, title = "", contents = []) {
        this.title = title;
        this.contents = contents;
        this.type = type;
        this.html = this.generate()
    }

    generate() {
        var content_html = "";
        for (var content of this.contents) {
            content_html += content.html
        }

        var title = (this.title != null) ? `<h2>${this.title}</h2>` : "";

        return `
            ${title}
            <div class="content-grid ${this.type}">${content_html}</div>
        `;
    }
}

class Page {
    constructor(title = "", sections = []) {
        this.title = title;
        this.sections = sections;
        this.html = this.generate();
    }

    generate() {
        var section_html = "";
        for (var section of this.sections) {
            section_html += section.html
        }
        return section_html;
    }

    render() {
        pageTarget.innerHTML = this.html;
    }

}

