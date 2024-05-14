document.addEventListener('contextmenu', event => event.preventDefault());

let icon = document.getElementById('icon');
let name = document.getElementById('name');
let coin_ = document.getElementById('coin_');
let again = document.getElementById('again');
let progress = document.getElementById('progress');

let buy = document.getElementById('buy');

let health1 = document.getElementById('health1');
let health2 = document.getElementById('health2');
let health3 = document.getElementById('health3');

//Создание вопросов
class Question {
  constructor(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
}

var healthes = [
	health1,
	health2,
	health3
];

var questions = [
	new Question('Что такое Minecraft?', ['игра про строительство и выживание','игра о приключениях и исследованиях','игра-головоломка','игра о сражениях и войнах'], 1),
	new Question('Как называется блок, который используется для строительства домов и других сооружений?', ['камень','дерево','кирпич','бетон'], 2),
	new Question('Что можно использовать для создания инструментов и оружия?', ['палки','камни','железо','золото'], 3),
	new Question('Как можно получить еду в Minecraft?', ['охотиться на животных','выращивать растения','собирать фрукты','готовить пищу'], 2),
	new Question('Что нужно сделать, чтобы победить в Minecraft?', ['построить самый высокий дом','выжить в течение определённого времени', 'победить дракона', 'исследовать все биомы'], 3),
	new Question('Что такое биом в Minecraft?', ['тип моба', 'вид блока', 'область с определёнными условиями окружающей среды', 'способ страительства'], 3),
	new Question('Как обычно перемещаться в Minecraft?', ['бегать','прыгать','плавать','летать'], 1),
	new Question('Что такое мобы в Minecraft?', ['игроки','животные','существа','предметы'], 3),
	new Question('Какой инструмент обычно используется для добычи руды?', ['щиток','лопата','кирка','топор'], 3),
  new Question('Чего не хватает для создания закалённого стекла в Minecraft?', ['песка и угля','песка и пустоты','песка и воды','песка и дерева'], 3),
  new Question('Какое животное можно приручить и использовать в качестве транспорта?', ['козу','кролика','лошадь','свинью'], 3),
  new Question('Как называется альтернативный мир в Minecraft, где обитают опасные существа?', ['Энд','Ад','Тёмный мир','Неземной'], 2),
  new Question('Что произойдет, если игрок упадет с большой высоты без парашюта?', ['погибнет','получит ранения','останется целым','превратится в снежного голема'], 1),
  new Question('Как называется структура, в которой обитают пауки и сундуки с сокровищами?', ['пещера','логово','подземелье','деревня'], 2),
  new Question('Какое оружие эффективнее всего против скелетов?', ['меч','арбалет','лук','кирка'], 3),
  new Question('Что можно найти в подземельях Minecraft?', ['алмазы','зелья','зомби','грибы'], 1),
  new Question('Какое дерево самое подходит для строительства жилых домов?', ['дуб','береза','джунглевое','сосна'], 3),
  new Question('Что необходимо для создания портала в Край?', ['глаза края','алмазы','блоки из магмы','книги'], 1),
  new Question('Какой предмет поможет игроку спасти свои вещи после смерти?', ['кровать','ковёр','ловушка','череп'], 2),
  new Question('Что будет, если поставить воду и лаву близко друг к другу?', ['образуется пар','начнется горение','призывается дьявол','образуется камень'], 4),
  new Question('Какие растения можно использовать для создания красителей?', ['розы','кактусы','пшеница','дубовые листья'], 2),
  new Question('Какие инструменты можно сделать из железных слитков?', ['грабли','кирки','колчаны','красители'], 2),
  new Question('Что необходимо для приручения волка?', ['еда','кость','стрела','цветы'], 2),
  new Question('Как называется невраждебное моб-существо в Minecraft?', ['зомби','крипер','лягушка','кошка'], 4),
  new Question('Чем можно убить эндермана?', ['лавой','мечом','огнеметом','водой'], 2),
  new Question('Что нужно сделать, чтобы призвать дракона в Источнике Края?', ['разгадать головоломки','собрать яйца дракона','активировать кристаллы','разгадать зачарованные книги'], 3),
  new Question('Какое оружие эффективнее всего против окуней?', ['мина','удочка','арбалет','топор'], 2),
  new Question('Какое растение используется для создания зельеварения?', ['пшеница','розы','кактусы','свёкла'], 4),
  new Question('Что нужно сделать, чтобы встретить эндермана в Майнкрафт?', ['использовать удочку','искать в пещерах','строить портал в Край','использовать кровать'], 3),
  new Question('Какое растение можно выращивать для получения хлеба?', ['кактусы','тростник','тыква','пшеница'], 4),
  new Question('Какой предмет используется для получения дерева?', ['кирка','топор','лопата','меч'], 2),
 	new Question('Что такое редстоун в Minecraft?', ['материал для строительства','порошок для создания механизмов','драгоценный ресурс','пища для животных'], 2),
	new Question('Как называется умерший главный босс в Minecraft?', ['Великий злодей','Дракон края','Краевик','Иссушитель'], 2),
	new Question('Какое животное даёт молоко, которым можно сделать торт?', ['овца','корова','свинья','коза'], 2),
	new Question('Как называется портителя предметов в Minecraft?', ['лавовый паук','проклятый зомби','скелет-вор','голодный пёс'], 4),
	new Question('Что нужно сделать, чтобы вызвать голема-железа в деревне?', ['поставить розы вокруг деревни','подарить ресурсы деревне','построить железный крест','разгадать загадки монахов'], 2),
	new Question('Какое оружие нужно использовать для защиты от эндерманов?', ['арбалет','меч','лук','топор'], 2),
	new Question('Как называется кубический мир, в котором живут игроки в Minecraft?', ['Земля','Минехейм','Миркия','Игрокия'], 3),
	new Question('Что можно найти в заброшенных шахтах в Minecraft?', ['слитки редстоуна','алмазы','зелья','грибы'], 2),
	new Question('Какой предмет необходим для создания факела в Minecraft?', ['уголь','еда','вода','песок'], 1),
	new Question('Как называется мир, в котором игроки строят свои постройки на сервере?', ['Окраина','Минемир','Игровой мир','Сервер'], 4),
	new Question('Что является основным ресурсом для создания оружия в Minecraft?', ['алмазы','золото','железо','камень'], 3),
	new Question('Какой моб считается самым опасным в Minecraft?', ['крипер','паук-убийца','скелет','эндерман'], 1),
	new Question('Что можно приготовить из грибов в Minecraft?', ['пирог','зелье ловкости','отвар','компот'], 1),
	new Question('Как называется предмет, который позволяет игроку спасти вещи после смерти?', ['торба','инвентарь','сундук','ячейка'], 3),
	new Question('Чем можно заменить доски при строительстве в Minecraft?', ['бетоном','кирпичами','землёй','листвой'], 2),
	new Question('Какой предмет нужен для создания обычной карты в Minecraft?', ['пергамент','золотой слиток','красители','редстоун'], 1),
	new Question('Чем можно обработать руду, чтобы получить металлы в Minecraft?', ['ключ','кирка','вилка','нож'], 2),
	new Question('Какое растение можно использовать для создания красной краски?', ['розы','кактусы','пшеница','тыква'], 1),
	new Question('Что будет, если поджечь дерево в Minecraft?', ['вырастет новое дерево','появится костёр','загорится лес','появится уголь'], 3),
	new Question('Какое животное дает шерсть, из которой можно сделать предметы?', ['овца','корова','свинья','коза'], 1),
	new Question('Какой предмет нужен для создания факела в Minecraft?', ['уголь','железо','алмаз','золото'], 1),
	new Question('Что произойдет, если игрок накормит волка костями?', ['он станет другом игрока','он убежит','он умрет','он атакует игрока'], 1),
	new Question('Как называется строение, где можно хранить предметы в Minecraft?', ['кладовая','склад','магазин','сундук'], 4),
	new Question('Что сделает паук-убийца, если на него нападет игрок?', ['убежит','атакует игрока','прячется','пытается укусить игрока'], 2),
	new Question('Как называется мобыльная версия игры Minecraft?', ['Майнкрафт ПК','Minecraft PE','Мобильный крафт','Майнкрафт Бедрок'], 2),
	new Question('Как называется существо, которое охраняет территорию в деревне в Minecraft?', ['убийца','страж','воин','охранник'], 2),
	new Question('Что можно сделать из кожи диких животных в Minecraft?', ['доспехи','мечи','зелья','факелы'], 1),
	new Question('Какой предмет необходим для создания стрел в Minecraft?', ['камень','палка','железо','золото'], 2),
	new Question('Как называется существо, которое плавает в глубоких водах Майнкрафта и атакует игрока?', ['дельфин','кракен','примор','утопец'], 1),
	new Question('Что произойдет, если игрок отравится в Майнкрафте?', ['замедлится','потеряет здоровье','начнет светиться','станет невидимым'], 2),
	new Question('Какой блок используется для создания портала в Ад?', ['обсидиан','камень','кирпич','камень'], 1),
	new Question('Как можно защитить свой дом от мобов в Minecraft?', ['строить ограждение','ставить ловушки','пользоваться магией','искать укрытие'], 1),
	new Question('Какие инструменты обычно используют для добычи дерева?', ['кирки','молотки','топоры','ложки'], 3),
	new Question('Как называется структура, в которой обитают обитатели деревни?', ['изба','каменный дом','кустарник','дача'], 1),
	new Question('Как можно получить опыт в Minecraft?', ['сражаться с монстрами','строить дома','плавать в океане','исследовать пещеры'], 1),
	new Question('Какой предмет поможет игроку видеть в темноте в Minecraft?', ['факелы','очки ночного видения','кактусы','эндерперлы'], 1),
	new Question('Где обычно можно найти алмазы в Minecraft?', ['в пещерах','на деревьях','под землей','на поверхности'], 3),
	new Question('Какой предмет используется для возрождения в кровати в Minecraft?', ['блок земли','подушка','одеяло','конфеты'], 2),
	new Question('Как называется структура, в которой обитают страшные загадочные существа?', ['хранительница','призрачный корабль','дэджайл','крепость края'], 4),
	new Question('Как можно создать портал в Нижний Мир в Minecraft?', ['сжечь портал из очага','использовать эндерманов','разбить глаза края','использовать кирку на обсидиане'], 1),
	new Question('Какие предметы можно найти в сундуках в пещерах Minecraft?', ['алмазы','кактусы','стекло','дерево'], 1),
	new Question('Что нужно сделать, чтобы обучить лошадь прыжкам в Minecraft?', ['кормить яблоками','строить гитару','домашние задания','прыгать вместе'], 1),
	new Question('Какие ресурсы используют для создания факелов в Minecraft?', ['уголь и дерево','алмазы и железо','золото и серебро','лед и снег'], 1),
	new Question('Как называется структура, которая используется для создания зелий в Minecraft?', ['стол столообразов','сундук с зелиями','стол зачарования','станция зелий'], 4),
	new Question('Какое оружие эффективнее всего против зомби?', ['булава','кинжал','лук','пистолет'], 3),
	new Question('Что можно использовать для улучшения брони в Minecraft?', ['атомная бомба','череп дракона','графен','зачарование'], 4),
	new Question('Как называется цветок, который используется для создания красных красителей?', ['кактус','роза','мак','коралл'], 3),
	new Question('Что нужно сделать, чтобы выжить первую ночь в Minecraft?', ['построить убежище','зарыться в землю','использовать тотем бессмертия','выходить на улицу'], 1),
	new Question('Как можно вызвать молнию в Minecraft?', ['использовать эндерперлу','использовать книгу молний','сотворить дождь','поставить блок из магмы'], 3),
	new Question('Какой блок обычно используется для создания кроватей в Minecraft?', ['бамбук','металл','дерево','пластик'], 3),
	new Question('Что нужно сделать, чтобы приручить попугая в Minecraft?', ['покормить семечками','назвать по имени','построить клетку','покормить мясом'], 1),
	new Question('Как называется структура, где расположены сундуки с сокровищами и монстры?', ['подземелье','замок','затонувший корабль','реактор'], 1),
	new Question('Что можно использовать для создания взрывчатки в Minecraft?', ['топливо','сахар','песок','алмазы'], 3),
	new Question('Какой предмет используется для создания напитков зелиев в Minecraft?', ['зельевар','зачарованная книга','бутылочка','сот'], 3),
	new Question('Как называется структура, в которой обитают злые ведьмы?', ['кузница','зачарованный лес','шалаш ведьмы','болото ведьм'], 4),
	new Question('Какой предмет используется для создания инструментов в Minecraft?', ['слиток угля','глиняная плитка','батон','дерево'], 4),
	new Question('Что нужно сделать, чтобы создать портал в Мир Источника в Minecraft?', ['украсть у дракона яйцо','использовать голову дракона','разгадать тайну края','поставить блок из кристалла'], 2),
	new Question('Как называется структура, в которой обитают зловещие скелеты?', ['четыре стены','костяное логово','скелетованное подземелье','гробница'], 2),
	new Question('Что можно использовать для восстановления здоровья в Minecraft?', ['космический корабль','зелья','магический амулет','печенье'], 2),
];

var health = 3;
var errors = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

questions = shuffleArray(questions);

//Работа с вопросами
const table = document.querySelector('table');
const buttons = document.querySelectorAll('button');
const header = document.querySelector('h1');
let currentQuestionIndex = 0;

var currentQuestion = questions[currentQuestionIndex];
var finishQuestion = questions.length;
// var finishQuestion = 3;
header.innerText = currentQuestion.question;
for (let i = 0; i < 4; i++) {
	buttons[i].innerText = currentQuestion.answers[i];
	console.log(currentQuestion);
}


buttons.forEach((button, i) => {
	button.addEventListener('click', () => {


		var currentQuestion = questions[currentQuestionIndex];
		var ca = currentQuestion.answers[currentQuestion.correct - 1]; //correct
		var str = button.innerText; //selected

		console.log(i);
		console.log(ca);
		console.log(str);
		console.log(i != (currentQuestion.correct - 1));


		if (i != (currentQuestion.correct - 1)) 
		{
			errors ++;
			health = health - 1;
			
			if (health == 2) {
				health3.src = `res/images/empty_health.png`;
			}
			if (health == 1) {
				health2.src = `res/images/empty_health.png`;
			}
			if (health == 0) {
				health1.src = `res/images/empty_health.png`;
			}

			if (health == 0) {
				buy.style.display = 'flex';
			}
		}

		currentQuestionIndex++;

			//Если последний вопрос
    	if (currentQuestionIndex >= finishQuestion) {
    		document.querySelector('table').style.display = 'none';
    		document.querySelector('h1').style.display = 'none';

    		icon.style.display = 'block';
    		name.style.display = 'block';
    		coin_.style.display = 'block';
    		again.style.display = 'block';

    		let c = get_final_image();

    		icon.src = `${c}`;
    		finishQuestion = questions.length;

    		coin_.innerText = "Вы настоящий игрок в Майнкрафт!" + "\n" + `Вы ошиблись: ${errors} раз`

    	} else {
    		var currentQuestion = questions[currentQuestionIndex];
				header.innerText = currentQuestion.question;
				for (let i = 0; i < currentQuestion.answers.length; i++) {
  					buttons[i].innerText = currentQuestion.answers[i];
				}
    	}
  	});
});

var finalImages = [
	`res/images/hero_1.png`,
	`res/images/hero_2.webp`,
	`res/images/hero_3.png`,
	`res/images/hero_4.png`,
	`res/images/hero_5.png`,
]

function get_final_image() {
	const randomIndex = Math.floor(Math.random() * finalImages.length);
	const randomFinalImages = finalImages[randomIndex];
	return randomFinalImages;
}

again.addEventListener('click', () => {
	document.querySelector('table').style.display = 'inline-table';
  document.querySelector('h1').style.display = 'block';

  icon.style.display = 'none';
  name.style.display = 'none';
  coin_.style.display = 'none';
  again.style.display = 'none';
  buy.style.display = 'none';

  currentQuestionIndex = 0;
  health = 3;
  finishQuestion = questions.length;

  health3.src = `res/images/health.webp`;
  health2.src = `res/images/health.webp`;
  health1.src = `res/images/health.webp`;
});

function restart(){
	document.querySelector('table').style.display = 'inline-table';
  document.querySelector('h1').style.display = 'block';

  icon.style.display = 'none';
  name.style.display = 'none';
  coin_.style.display = 'none';
  again.style.display = 'none';
  buy.style.display = 'none';

  currentQuestionIndex = 0;
  health = 3;
  finishQuestion = questions.length;

  health3.src = `res/images/health.webp`;
	health2.src = `res/images/health.webp`;
	health1.src = `res/images/health.webp`;
}

//Ads
function buy_health() {
		progress.style.display = 'flex';
		ysdk.adv.showRewardedVideo({
    callbacks: {
        onOpen: () => {
        	progress.style.display = 'none';
          console.log('Video ad open.');
          hide_buy_health();
        },
        onRewarded: () => {
        	progress.style.display = 'none';
          console.log('Rewarded!');
          health = 3;

          health3.src = `res/images/health.webp`;
  				health2.src = `res/images/health.webp`;
  				health1.src = `res/images/health.webp`;
        },
        onClose: () => {
        	progress.style.display = 'none';
          console.log('Video ad closed.');
        }, 
        onError: (e) => {
        	progress.style.display = 'none';
          console.log('Error while open video ad:', e);
          hide_buy_health();
          health = 3;

          health3.src = `res/images/health.webp`;
  				health2.src = `res/images/health.webp`;
  				health1.src = `res/images/health.webp`;
        }
    }
		});
}

function show_buy_health() {
	// if (currentQuestionIndex >= (finishQuestion - 3)) {
	// 	buy.style.display = 'none';
	// } else {
	// 	buy.style.display = 'block';
	// }
}
function hide_buy_health() {
	buy.style.display = 'none';
}

//Yandex Games
var player;
YaGames
	.init()
	.then(ysdk => {
		window.ysdk = ysdk;
		console.log("Yandex SDK initialized");

		ysdk.features.LoadingAPI?.ready();
		ysdk.adv.showFullscreenAdv({
    callbacks: {
        onClose: function(wasShown) {
          console.log("Full screen adv shown");
        },
        onError: function(error) {
          console.log("Full screen adv error");
        }
    }
	})
});