# Disclaimer
I already know that some people are going to get butthurt over this site saying that Lua isn't that bad and I agree, it has it's qualities and I'm not saying that it's *the worst language ever*. I just disagree with some design choices they made and PHP's site doesn't have that much intuitive room for improvement. No offense is at all intended to the great [@Lua team](https://github.com/lua)

# Lua site: Remade
The current Lua site sucks, honestly nobody can disagree with that. For a computer science assignment where we had to take a company's site and make it better, we used the Lua site (because it sucks in it current state I mean look at this https://www.lua.org/). For this we had to tackle some interesting dilemmas, the biggest one being my brain and how perfectionist it is. 
* For the JavaScript I chose to use a framework for cookies because I'm not that great at string manipulation and we started working on the site a day before the deadline
* All the libraries/frameworks for dark mode were and are terrible so I chose to make my own (I just decided to switch the CSS file which works beautifully when the site is freshly cached). In the future I would change this up to use the mechanic that IDs override classes, meaning I would be able to just de-hook the ID and let the CSS hook to the class in order to make it not space out when loading or switching to dark/light mode.
* We started a day before the deadline so you know... planning

## Screenshots
I'm just gonna put screenshots of the homepage here because I mean no.

Light mode - ![Light Mode](https://i.imgur.com/lD3kkZK.png)

Dark mode - ![Dark Mode](https://i.imgur.com/s8LYofc.png)

# Easter eggs
* If you click on Lua's logo on any page, the website will be put in dark mode, and will remain in dark mode until you turn it off by clicking the logo again.
* In the shell, if you type a 0, it comes with the text
	> We found a "0" in your query and we could not find any results. Did you mean: 1?
* In the footer, if you click on it (anywhere in the footer, not just the "link" (it's made in JavaScript, that made the CSS easier because otherwise all the margins and paddings would be broken)), you will be redirected to Rick Astley's video "Never Gonna Give You Up".
* In the news page there is a ¹⁄₁₀₀th (in plain language just 1%) chance for each element of the original RSS feed from Lua.org to be replaced with the news article "BREAKING: USE OF ANY PROGRAMMING LANGUAGE BESIDES LUA NOW RESTRICTED". If you click on it, you will be redirected to the (in my opinion great) song by Rick Astley called "Never Gonna Give You Up".
* In the shell of the homepage there is a command called "skid", if you enter this 1000 zeros or ones will appear

I want to thank [@LilyKhan](https://github.com/Lilykhan786) so much for all her help on this project, she basically did all the light theme CSS and design for it, making literally any of the JavaScript and the entire website possible. I really could not have done any of this without you, so thanks so much.

### We got our grade back for this project, we got a 10/10 (so my average for the computer science subject is 10 ;) )

<sub>I'm honestly kinda sad that the Lua team hasn't put their website on GitHub, my teacher dared me to make a pull request with this site because it's so satiric haha</sub>
