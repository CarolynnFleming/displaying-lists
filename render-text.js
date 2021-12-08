export function renderTextMessage(textMessageData) {
    const textMesageEl = document.createElement('div');
    const textEl = document.createElement('p');

    textMesageEl.classList.add('textMessage');

    textEl.textContent = `${textMessageData.contact} lulu says: ${textMessageData.text}`;

    textMesageEl.append(textEl);

    for (let reply of textMessageData.replies) {
        const replyEl = document.createElement('p');

        replyEl.textContent = reply;

        replyEl.classList.add('reply');

        textMesageEl.append(replyEl);
    }
    return textMesageEl;
}