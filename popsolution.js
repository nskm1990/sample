//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Fantastic job!"
compliments[1]="You're doing great! Get it!"
compliments[2]="Are you a genius? Because, that's right!"
compliments[3]="Right on."
compliments[4]="That is correct!"
compliments[5]="Wow, you're really good at this!"
compliments[6]="You got it!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="A linguist is a professional who:"
choice1[1]="learns several languages for translation purposes. "
choice1[2]="studies the biology of the tongue."
choice1[3]="uses the scientific method to investigate various systems underlying language. "
choice1[4]="investigates the relationship between numbers in nature. "

question[2]="According to Ethnologue, how many languages are there in the world?"
choice2[1]="100"
choice2[2]="700"
choice2[3]="1,000"
choice2[4]="7,000+"

question[3]="The linguistic discipline that focuses on the study of how a language builds its sentences is called what?"
choice3[1]="Sentensis"
choice3[2]="Syntax"
choice3[3]="Phonology"
choice3[4]="Morphology"

question[4]="The alphabet used to derive phonetic transcriptions from a language is called what?"
choice4[1]="The International Phonetic Alphabet"
choice4[2]="The Inaugural Phonological Alphabet"
choice4[3]="The Widely-Accepted Phonetic Standard Alphabet"
choice4[4]="None of the above"

question[5]="The linguistic discipline that focuses on the study of how a language's sounds pattern and interact is called what?"
choice5[1]="Audiology"
choice5[2]="Phonetics"
choice5[3]="The Sound of Science"
choice5[4]="Phonology"

question[6]="The linguistic discipline that focuses on the physical properties of a language's sounds is called what?"
choice6[1]="Phonology"
choice6[2]="Sonic Physics"
choice6[3]="Phonetics"
choice6[4]="Phonocophysics"

question[7]="Grammar that is defined and characterized by an idealized or perceived standard of how a language should be spoken is called what?"
choice7[1]="Standardized Grammar"
choice7[2]="Descriptive Grammar"
choice7[3]="Prescriptive Grammar"
choice7[4]="Forced Grammar"

question[8]="The linguistic discipline that focuses on the study of how a language constructs its words is called what?"
choice8[1]="Terminologics"
choice8[2]="Morphology"
choice8[3]="Syntax"
choice8[4]="Phonology"

question[9]="Grammar that is defined and characterized by what is heard or observed in a language is called what?"
choice9[1]="Descriptive Grammar"
choice9[2]="Observational Grammar"
choice9[3]="Prescriptive Grammar"
choice9[4]="Objective Grammar"

question[10]="The linguistic discipline that focuses on the study of literal meaning in language is called what?"
choice10[1]="Pragmatics"
choice10[2]="Logics"
choice10[3]="Syntax"
choice10[4]="Semantics"

solution[1]="c"
solution[2]="d"
solution[3]="b"
solution[4]="a"
solution[5]="d"
solution[6]="c"
solution[7]="c"
solution[8]="b"
solution[9]="a"
solution[10]="d"

