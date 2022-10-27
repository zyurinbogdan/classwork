//*1. спрятать клад
//*2. получить координаты клика
//*3. выяснить расстояние от координат клика до сокровища
//*4. градация тепло-холодно
//*5. подсказки
//*6. показать сокровище

import TreasureWithHints from "./TreasureWithHints.js";

const mapWrapper = document.getElementById('mapWrapper');
const hintElement = document.getElementById('hint');
const treasure = new TreasureWithHints(mapWrapper);

const gameHandler = ({offsetX, offsetY, currentTarget}) => {
    const clickCoords = {
        x: offsetX,
        y: offsetY
    };

    const distanceToTreasure = treasure.getLengthTo(clickCoords);
    const hint = treasure.getHintByLength(distanceToTreasure);

    if (hint === TreasureWithHints.hints[0]) {
        treasure.show();
        currentTarget.removeEventListener('click', gameHandler);
    }
    hintElement.innerText = hint;
    
}
mapWrapper.addEventListener('click', gameHandler) 

