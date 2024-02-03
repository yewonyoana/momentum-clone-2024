// array of objects
const quotes = [
	{
		quote: '"꿈이 사라진 거지 진짜 네가 사라진 건 아니잖아."',
		author: "- 조용필",
	},
	{
		quote:
			'"어쩌면 꿈은 이루는 것이 아니라 지켜내는 것일지도 모른다. 그리고 어쩌면 내 꿈도 그 빛을 다 잃어버린 건 아닐지도 모른다."',
		author: "- 조용필",
	},
	{
		quote:
			'"너 똥 밟아 봤니? 밟았을 때는 기분 더럽고 짜증 나는데 그렇다고 내 하루를 망칠 수는 없잖아. 얼른 닦고 내 일해야지."',
		author: "- 조삼달",
	},
	{
		quote:
			'"오늘 하루도 욕심내지 말고 딱 너의 숨만큼만 있다 오라고. 평온해 보이지만 위험천만한 바닷속에서 당신의 숨만큼만 버티라고. 그리고 더 이상 버틸 수 없을 땐 시작했던 물 위로 올라와 숨을 고르라고."',
		author: "- 조삼달",
	},
	{
		quote: '"기회는 니 실력이 갖춰졌을 때나 기회지 아니면 위기야."',
		author: "- 조삼달",
	},
	{
		quote:
			'"빛나는 사람의 등 뒤엔 어둠이 있다고 한다. 화려함과 해맑은 미소 뒤에 숨겨져 쉽사리 알아챌 수 없는 어둠."',
		author: "- 조삼달",
	},
	{
		quote:
			'"매일 모든 게 빠르게 변하는 세상 속에서 휩쓸리지 않고 나 자신을 잃지 않고 살아가는 방법은 내 고향 삼달리에 있었다."',
		author: "- 조삼달",
	},
	{
		quote: '"너희, 소랑하라게."',
		author: "- 조상태",
	},
];

const quote = document.querySelector("#quote span");
const author = document.querySelector("#quote span:last-child");

// 1. get random number = Math.random()
// 2. floor the number (1.4 -> 1)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
