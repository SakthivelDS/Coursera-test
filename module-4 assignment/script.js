var array = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
function Hellospeaker(speaker) {
			console.log("Good bye "+array[speaker]);
		};
function Goodbyespeaker(speaker) {
			console.log("Hello "+array[speaker]);
		};



for (var names in array) {
	if (array[names][0]==="J" || array[names][0]==="j")
		
		Hellospeaker(names);


		
	else 
		
		Goodbyespeaker(names);

}
	
