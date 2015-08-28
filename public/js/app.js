var quotes = [
	{
		"quote": "I do not fear computers. I fear the lack of them.",
		"author": "Isaac Asimov"
	}, 
	{
		"quote": "I'm too shy to express my sexual needs except over the phone to people I don't know.",
		"author": "Garry Shandling"
	},

	 {
	 	"quote": "There is an evil tendency underlying all our technology - the tendency to do what is reasonable even when it isn't any good.",
	 	"author": "Robert Pirsig"
	 },

	 {
	 	"quote": "TThe deepest definition of youth is life as yet untouched by tragedy.",
	 	"author": "Alfred North Whitehead"
	 },

	 {
	 	"quote": "At least half the mystery novels published violate the law that the solution, once revealed, must seem to be inevitable.",
	 	"author": "Raymond Chandler "
	 },

	 {
	 	"quote": "The shortest verse in the Bible is 'Jesus wept.' The only thing wrong with it is the past tense.",
	 	"author": "Randy K. Milholland"
	 }
]; 

function getQuote() {
	var quoteId = Math.floor(Math.random() * quotes.length);

	console.log('Your current quote is ', quotes[quoteId].quote + ' the author is ' + quotes[quoteId].author);
}

getQuote();