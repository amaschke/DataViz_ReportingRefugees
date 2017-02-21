/**
 * @author Alena Maschke
 */
/* This variable is a number, which is the total number of Afghans discplaced between 1979-2013*/
var total_displaced_1979_2013 = 117748113;
/* This variable is a string, namely the name of the country my page is focused on*/
var country_name = "Afghanistan";
/* This is a boolean variable, telling us whether UNHCR considers repatriation a safe strategy 
 * for this refugee population yet */
var safe_repatration_possible = false;
/* This variable is an array of the main host countries for Afghan refugees */
var main_host_countries = ["Pakistan", "Iran", "Germany", "Austria", "Sweden"];
/* This variable is an object, which -in form of a boolean- informs us whether the host 
 * countries are signatories of the Geneva convention & whether UNHCR operates within their borders */
/* This variable is an object, which informs us whether the host countries are signatories of the Geneva 
 * convention, which continents they are hosted on, whether they are being resettled and whether 
 * they could be repatriated safely */
var host_countries = {
	"Geneva_Convention" : Signees = {
		"Pakistan" : true,
		"Iran" : false,
		"Germany" : true,
		"Austria" : true,
		"Sweden" : true
	},
	"Continents" : ["Asia", "Europe"],
	"Resettlement" : "Yes",
	"Repatriation_Recommendation" : "No"
}

/* To keep streamlining the website I initially created, I transferred the information of all articles posted above into the objects below*/

var afghan_refugee_news = [{

	/* All objects below follow the same structure, to make them easy to loop through*/

	"storytitle" : "Afghan translator now in Denver vetted for 2 years before special visa was approved",

	"storypub" : "thedenverchannel",

	"country" : "united states",

	"fullstorylink" : "http://www.thedenverchannel.com/news/local-news/afghan-translator-now-in-denver-vetted-for-2-years-before-special-visa-was-approved",

	"storyimage" : "http://media.thedenverchannel.com/photo/2017/01/31/tamim%20ziaye%20crop_1485922230037_54369067_ver1.0_640_480.jpg",

	"summarytext" : "Afghan Refugee Tamim Ziyae came to the U.S. on a special immigrant visa or SIV, because he worked as a translator for the U.S. Army and Marine Corps in his native Afghanistan. Ziyae is now living in Denver, CO, but his way into the United States was not easy, despite his service to the country's troops ."

	/* I also added a 'country' property, designating the country which the article is set in, not published*/

}, {

	"storytitle" : "Serbia introduces lockdown for migrants in Belgrade center",

	"storypub" : "yahoonews",

	"country" : "serbia",

	"fullstorylink" : "https://sg.news.yahoo.com/serbia-introduces-lockdown-migrants-belgrade-center-153152336.html",

	"storyimage" : "https://s.yimg.com/ny/api/res/1.2/68q1eeBXIuwb9rIfag5b1Q--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTIxMDtoPTc1MjtpbD1wbGFuZQ--/http://media.zenfs.com/en_us/News/ap_webfeeds/4f2c7e9550664bf594b68a25ce49043e.jpg",

	"summarytext" : "Serbian Authorities have placed 550 refugees, most of them from Pakistan and Afghanistan on lockdown in former army barracks turned into a refugee camp in Belgrade. The lockdown followed an alleged attack on a female pedestrian, however, refugees have previously decried discriminatory and violent treatment in the Balkan region."

	/* This is story #3, from the stories above*/
}, {

	"storytitle" : "Only a third of Americans think Trump’s travel ban will make them more safe",

	"storypub" : "todayonline",

	"country" : "united states",

	"fullstorylink" : "http://www.todayonline.com/world/only-third-americans-think-trumps-travel-ban-will-make-them-more-safe",

	"storyimage" : "http://www.todayonline.com/sites/default/files/styles/photo_gallery_image/public/photos/43_images/28680275.JPG?itok=JcY0qBwig",

	"summarytext" : "President Trump presented his temporary travel ban as a safety measure. But only a third of American feel like the executive action is actually going to make them safer."
	/* And this is story #3.*/
}, {

	"storytitle" : "The refugees hunted and attacked by regimes for rapping",

	"storypub" : "dazedmag",

	"country" : "germany",

	"fullstorylink" : "http://www.dazeddigital.com/music/article/34498/1/berlin-syria-afghanistan-refugee-rap-paradise-diverse",

	"storyimage" : "http://dazedimg.dazedgroup.netdna-cdn.com/454/azure/dazed-prod/1200/0/1200764.jpg",

	"summarytext" : "In her home country Afghanistan, Paradise Sorouri was attacked. She points to her career as the country's first female rapper as a reason for the attack. Now, her and her partner are pursuing their creative dreams in Berlin."

}];

/* Here, I'm using a for loop to go through the list and find out which stories are about refugees in Germany */
function StoriesGermany(ArticleCollection) {

	for (var counter = 0; counter < ArticleCollection.length; counter++) {
		/*Above, is everything I want to actually happen to the list*/
		/*Here, I'm creating a variable for the result*/
		var currentArticle = ArticleCollection[counter];
		/*If the loop comes up with an article set in Germany, I want the console to log it*/
		if (currentArticle.country == "germany") {
			console.log(ArticleCollection[counter]);
		} else {
			console.log("Not about refugees in Germany");
			/*And: I want it to log the amount of articles that are not about refugees in Germany, 
			 * titles with the string above*/
		}
	}
	console.log("The loop was executed succesfully")
}

/*Calling my function to action!*/
StoriesGermany(afghan_refugee_news); 