import{elephants} from './elephants.js'
import{renderElephants} from './render-elephants.js'
const elephantsEl = document.getElementById('elephants-list');

for (let elephant of elephants) {
    const elephantEl = renderElephant(elephant);
    elephantsEl.append(elephantEl);
}