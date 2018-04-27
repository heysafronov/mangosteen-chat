const buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
for (let i = 0, button; button = buttons[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(button);
}

const nodes = document.querySelectorAll('.mdc-icon-toggle');
for (let i = 0, node; node = nodes[i]; i++) {
    mdc.iconToggle.MDCIconToggle.attachTo(node);
}

const checkboxes = document.querySelectorAll('.mdc-checkbox');
for (let i = 0, checkbox; checkbox = checkboxes[i]; i++) {
    new mdc.checkbox.MDCCheckbox(checkbox);
}

const radios = document.querySelectorAll('.mdc-radio');
for (let i = 0, radio; radio = radios[i]; i++) {
    new mdc.radio.MDCRadio(radio);
}

const interactiveListItems = document.querySelectorAll('.mdc-list-item');
for (let i = 0, li; li = interactiveListItems[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(li);
    li.addEventListener('click', function (evt) {
        evt.preventDefault();
    });
}
