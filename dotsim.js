const dinner = [
  '짐빔',
  '랭스',
  '조니워커 블랙라벨',
  '조니워커 레드라벨',
  '블랙보틀',
  '몽키숄더',
  '칼라일',
  '블랙벨벳',
  '고든스',
  '호세쿠엘보',
  '제임슨',
  '제이미스튜어트',
  '탈리스만',
  '블랙엔 화이트',
  '버터스카치 디카이퍼',
  '트리플섹 볼스'
]

Math.random(dinner)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
   //최댓값은 제외, 최솟값은 포함
}

const cost = [
  '1000',
  '2000',
  '3000',
  '4000',
  '5000',
  '6000',
  '7000',
  '8000',
  '9000'
]

Math.random(cost)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
   //최댓값은 제외, 최솟값은 포함
}

