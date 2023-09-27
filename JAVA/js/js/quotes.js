
const quotes = [
    {
      quote: "가정을 통해 인생을 살지 말고 내가 알고 있는 대로 살아라.",
      author: "마르코 주니가",
    },
    {
        quote: "그들이 죽음을 두려워하는 것이 이상합니다. 삶이 죽음보다 훨씬 더 아프다.",
        author: "짐 모리슨",
    },
    {
        quote: "죽은 자만이 전쟁의 끝을 보았다.",
        author: "플라톤",
    },
    {
        quote: "1온스의 행동은 1톤의 이론 가치가 있습니다.",
        author: "랄프 왈도 에머슨   ",
    },
    {
        quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다.",
        author: "생텍쥐페리",
    },
    {
        quote: "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
        author: "매튜슨",
    },
    {
        quote: "두려움 때문에 갖는 존경심만큼 비열한 것은 없다.",
        author: "카뮈",
    },
    {
        quote: "당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다. ",
        author: "러셀",
    },
    {
        quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다. ",
        author: "에릭 프롬",
    },


  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
