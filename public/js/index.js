var data = require('../json/QuestDatabase.json');

var questRead = JSON.parse(quest);
for (int i = 0; i < quest.length(); i++) {
	output += questRead.questText[i].questTitle;
}
console.log(output);