let  strtBtn = document.getElementById('start-btn');
let  questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answersBtns = document.getElementById('answer-buttons');
let nxtBtn = document.getElementById('next-btn');
let hideBtn = document.getElementById('end-btn');
let shuffledQuestion,currentQuestionIndex;
nxtBtn.addEventListener('click', ()=>{
currentQuestionIndex++;
	setNextQuestion();

})





strtBtn.addEventListener('click',startGame)
function startGame(){
	strtBtn.classList.add('hide');
	
	 shuffledQuestion = Questions.sort();
      currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
setNextQuestion();
}





function setNextQuestion(){
	resetState();
	showQuestion(shuffledQuestion[currentQuestionIndex]);

}
function showQuestion(question){
questionElement.innerHTML = question.Question;
	question.Answers.forEach(answer =>{
	let button = document.createElement('button');
		button.classList = 'btn';
		
		button.innerText = answer.text;
		if(answer.correct){
		button.dataset.correct = answer.correct
		
		}
		button.addEventListener('click',selectAnswer)
		answersBtns.appendChild(button);
	
	})

}



function resetState(){
	
	nxtBtn.classList.add('hide');
while(answersBtns.firstChild){
answersBtns.removeChild(answersBtns.firstChild)
}

}








function selectAnswer(e){
	let selectedBtn = e.target;
	let correct = selectedBtn.dataset.correct
	
	Array.from(answersBtns.children).forEach(button =>{
	
	setStateClass(button,button.dataset.correct);
	})
	if(shuffledQuestion.length > currentQuestionIndex + 1){
		nxtBtn.classList.remove('hide');
	
	}else{
	
	hideBtn.classList.remove('hide-btn');
	
	}
	

}

function setStateClass(element,correct){
	clearStateClass(element);
if(correct){
	element.classList.add('correct');
}else{
	element.classList.add('wrong');
}


}

function clearStateClass(element){

element.classList.remove('correct');
	element.classList.remove('wrong');

}





let Questions = [
	{
		Question : 'How much weight do you want to lose in the next 30 days?',
			Answers :[
			{ text: '10lbs' , correct: true}, 
			{ text: '25lbs' , correct: true},
			{ text: '35lbs' , correct: true}
			]
		
		},

	{
	Question : 'How much physical activity do you do during the day ?',
		Answers :[
		{ text: 'Almost none' , correct: true}, 
		{ text: 'Less than 30 minutes' , correct: true},
		{ text: 'More than 30 minutes' , correct: true}, 
		{ text: "I'm super active" , correct: true}
		]
	
	},
	
	{
	Question : 'How much water do you drink a day ? ',
		Answers :[
		{ text: '2 Litres' , correct: true}, 
			{ text: '3 Litres' , correct: true},
			{ text: 'Less than 3 litres' , correct: true},
		{ text: 'More Than 3 litres' , correct: true}
			
		]
	
	},
	
	{
	Question : 'what flavor do you like  the most?',
		Answers :[
		{ text: 'cinnamon' , correct: true}, 
		{ text: 'Black CURRANT' , correct: true}
		]
	
	},
	
	{
	Question : 'How many times a day do you eat? ',
		Answers :[
		{ text: '2 meals' , correct: true}, 
		{ text: '3 meals' , correct: true},
		{ text: '4 meals' , correct: true}, 
		{ text: '5+ meals' , correct: true},
		{ text: "I'm almost no eating at all" , correct: true}
		]
	
	},
	{
		Question : 'Are you allergic to any of these spices?',
			Answers :[
			{ text: 'Chilli' , correct: true}, 
			{ text: 'Saffron' , correct: true},
			{ text: 'Cardamon' , correct: true},
			]
		
		},
		{
			Question : 'We found for you a UNIQUE combination of 8 natural fat-burning nutrients with 8 more natural ingredients To Rapid weight loss!',
				Answers :[
				{ text: 'click here  to see it' , correct: true}
				]
			
			}

		

]


 