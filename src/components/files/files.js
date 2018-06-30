import "./files.css";

export class Files {
  constructor({ el, parent }) {
    this.el = el;
    this.parent = parent;
  }

  render() {
    this.el.innerHTML = `
      <input type="file" id="chat-controls-buttons__upload" multiple accept="file_extension">
      <label class="chat-controls-buttons__attach" for="chat-controls-buttons__upload">
        <i class="fa fa-paperclip"></i>
      </label>
    `;
    const files = this.parent.querySelector(".files");
    files.append(this.el);
  }

  init() {
    const textArea = this.parent.querySelector(".chat-controls__textarea");
    const fileElem = this.el.querySelector("#chat-controls-buttons__upload");
    fileElem.addEventListener("change", handleFiles.bind(fileElem.files));

    function handleFiles(files) {
      files = [...files.target.files];
      files.forEach(previewFile);
    }

    function previewFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (
          file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif"
        ) {
          const img = document.createElement("img");
          img.src = reader.result;
          img.classList.add("message__newImg");
          textArea.appendChild(img);
        } else {
          const doc = document.createElement("img");
          doc.src = "../src/assets/img/doc.png";
          doc.classList.add("message__newImg");
          textArea.appendChild(doc);
        }
      };
    }
  }
}
