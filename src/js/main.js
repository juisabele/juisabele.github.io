const WEIGHTS = [500, 700, 900];
const MAX_ROTATE = 20;
const MAX_SCALE = 1;
const MIN_SCALE = 0.5;
const IS_RANSOM = false;

const el = document.querySelector('.sketchy');
const text = el.innerText;
const spans = [];

const convertToSpans = () => {
  const words = text.split(' ');

  el.innerHTML = '';
  words.forEach((word) => {
    const letters = word.split('').filter(letter => !!letter.trim().length);
    const wordSpan = document.createElement('span');
    letters.forEach((letter) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.innerText = letter;
      wordSpan.appendChild(span);
      spans.push(span);
    })
    el.appendChild(wordSpan);
  });
}

const sketchify = () => {
  const scaleDiff = MAX_SCALE - MIN_SCALE
  spans.forEach((span) => {
    const rotate = MAX_ROTATE * (Math.random() - Math.random());
    const scale = MIN_SCALE + (scaleDiff * Math.random());
    if (IS_RANSOM) {
      span.style.fontWeight = WEIGHTS[Math.floor(WEIGHTS.length * Math.random())];
    }
    span.style.transform = `rotate(${rotate}deg) scale(${scale})`;
  });
};

convertToSpans();
sketchify();