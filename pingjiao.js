// ==UserScript==
// @name 广东海洋大学评教插件(正方教务)
// @namespace http://tampermonkey.net/
// @version 1.0
// @description 按回车键填充
// @author Archill311
// @match *://*.edu.cn/*
// @run-at document-end
// ==/UserScript==
(function () {
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const radioElements = document.querySelectorAll(".radio-pjf");
      const executedTr = new Set();
      radioElements.forEach(function (radio) {
        const trElement = radio.closest(".tr-xspj");
        if (!executedTr.has(trElement)) {
          radio.setAttribute("checked", "true");
          executedTr.add(trElement);
        }
      });
      const evaluationList = [
        "老师答疑认真，对同学们提出的问题能够详尽的解答，态度和蔼，十分有耐心，深得学生好评。",
        "老师治学严谨，对学生严格要求。课堂中，他循循善诱，强调独立思考，引导学生进行启发式思维。",
        "老师上课诙谐有趣，他善于用凝练的语言将复杂难于理解的过程公式清晰、明确的表达出来。",
        "老师讲课十分认真投入，内容纲举目分，条理性很强，而且特别善于举例，让同学理论联系实际",
      ];
      // 从评价列表中抽取评价
      let pj = document.querySelectorAll(".input-xspj>textarea");
      pj.forEach((i) => {
        i.value =
          evaluationList[Math.floor(Math.random() * evaluationList.length)];
      });
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
})();
