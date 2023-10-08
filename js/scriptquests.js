// List quests
document.addEventListener("DOMContentLoaded", 
  function (event) {
  		console.log(event)
        // Call server to get quest info
      $ajaxUtils
        .sendGetRequest("/data/quests.json",
          function (res) {
            
            var message = "<h2>Quest list</h2>";
            var quest, link;
            for (var i = 0; i < res.length; i++) {
            	quest = res[i];
            	link = "quest2.html?id=" + quest.id;
              message += "<p>&quot;" + quest.name + "&quot;: " + quest.description + "</p>";
              message += "<p>Repeatable: " + quest.repeat + ".</p>";	
              message += "<p><button id='" + quest.id + "'><a href='" + link + "'>Start quest</a></button></p>";

            };
            
            document.querySelector("#content")
              .innerHTML = message; 
          });
  //   // Unobtrusive event binding
	// document.querySelector("button")
	// 	.addEventListener("click", function () {
	// 		var self = this;
	// 		console.log(this.id);
	// 	});    
});
// console.log("test");

// Load requested quest

// document.querySelector("button")
// 	.addEventListener("click", 
// 		function (event) {

// 	// Unobtrusive event binding
// 	// document.querySelector("button")
// 	// 	.addEventListener("click", function () {
// 			var self = this;
// 			console.log(this.id);
			
// 			// Call server to get quest info
// 			$ajaxUtils
// 				.sendGetRequest("/data/quests.json",
// 					function (res) {
// 						var message = 
// 							res.quests.quest03.questText.step3
// 						console.log(res.quests)
					

// 						document.querySelector("#content")
// 							.innerHTML = message;
// 					});
				
// 	// });
// });

// // DOM Manipulation

// document.addEventListener("DOMContentLoaded", 
// 	function (event) {

// 	// Unobtrusive event binding
// 	document.querySelector("#step2")
// 		.addEventListener("click", function () {
// 			var self = this;
			

// 			// Call server to get quest info
// 			$ajaxUtils
// 				.sendGetRequest("data/quests.json",
// 					function (res) {
// 						var message = 
// 							res[this.id].quest03.questText.step3
// 						console.log(res.quests)
					

// 						document.querySelector("#step2Content")
// 							.innerHTML = message;
// 					});
				
// 	});
// });

// // document.querySelector("button")
// // 	.onclick = sayHello;

// // Event handling
// document.addEventListener("DOMContentLoaded",
//   function (event) {

//     function xpCalc (event) {
//       console.log(event);

//       // this.textContent = "Sent!";
//       var minutes =
//         Number(document.getElementById("minutes").value);
//       var choreBonus = minutes * .5;
      
//       var total = minutes + choreBonus;

//       var message = "<h3>Player rewards:</h3>";
//       message += "<ul><li>Player experience: " + minutes + "xp</li>";
//       message += "<li>Chore bonus: " + choreBonus + "xp</li>";
//       message += "<li>Quest step complete: 10xp</li></ul>";
//       message += "<p>Player gets " + total + "xp!</p>";
//       message += "<h3>Character rewards:</h3>";
//       message += "<ul><li>Character experience: " + minutes + "xp</li>";
//       message += "<li>Stamina: -5</li></ul>";
        
//       document
//         .getElementById("rewards")
//         .innerHTML = message;
//     }

//   // Unobtrusive event binding
//   document.querySelector("#forRewards")
//     .addEventListener("click", xpCalc);

//   }
// );

