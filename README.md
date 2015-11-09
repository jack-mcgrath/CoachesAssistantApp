# Coaches Assistant
## Index <a id="Index"></a>
1. [Index](#Index)
2. [What is it?](#What)
3. [The Web API](#WebAPI)
  1. [Dependencies](#WebDependencies)
  2. [Future Additions](#WebAdditions)
4. [The Application](#App)
  1. [Dependencies](#AppDependencies)
  2. [Future Additions](#AppAdditions)
5. [Looking Ahead](#StretchGoals)


####What is it?<a id="What"></a>

Coaches Assistant is an application that solves a problem with Fencing Time Results, a widely used application in the fencing world.
The problem specifically, with fencing time, lies in it's publish to web interface, as there exists to way to filter results, leaving fencers
to scroll through hundreds of results before finding their own. 

Coaches Assistant Seeks to solve this problem through two applications: 

===

##### A [A Web API](https://github.com/drdesai/CoachesAssistantServer/ "Coaches Assistant Server") that will scrape results, store results, allowing the results to be universally available via a request
##### B. [An Application](https://github.com/drdesai/CoachesAssistantApp/ "Coaches Assistant App") that will perform requests on the web API to provide coaches with the information.

The Web API: <a id="WebAPI"></a>
---


######Dependencies <a id="WebDependencies"></a>

===

1. [Python 3.4.x+](https://www.python.org)
2. [Cherrypy](http://www.cherrypy.org)

===
######Future of the Web API <a id="WebAdditions"></a>

Currently, the webserver is built on cherrypy using it's method dispatch handler to service requests, an utilizes a cron job to periodically update
the SQLITE Database. This is fine for limited testing, but not capable for a large scale system, due to SQLITE's Database level locking as more and more data is entered.
To enhance scalability, there a number of additions to the web api that must be done:

* Move the Web API Off of a Raspberry Pi and put it on an actual server
* Move off of SQLITE to MySQL to allow table or row level locking as compared to database level locking
* Utilize SQLAlchemy to provide the queries to databse
* Allow Requests from Multiple URLs (Currently filtered through one URL) to reduce requests on a single URL
* Direct Elimination Results
* Different Tournament Formats (Brazillian, Team)
* Multi-Threading and Processing for Web Scraping

Eventually, the application may need to be moved off from python to a faster language, but at the moment, python seems to be fine to fit the needs of the
application.

===

The Applciation: <a id="App"></a>
---

######Dependencies <a id="AppDependencies"></a>

===

1. [Ionic Framework](http://ionicframework.com/)
2. [AngularJS 1.4.x +](https://angularjs.org/)
3. [Adobe Phonegap](http://phonegap.com/)

===
######Future of the Application <a id="AppAdditions"></a>

The applcation is somewhat more complete. Custom CSS Stylesheets and a splash screen would go a long way to give it a sense of polish.
There are also slight UI bugs and features that need to be implemented in accordance to the [Long Term Goals](#StretchGoals). Ultiamtely,
the core features that need to be altered or implemented are:

* Fix Pool Display to Be Normalized
* Lump Fencer data into one list item, with sublists for the individual events on the list view.
* Settings Screen
* Proper AngularUI Routing
* Direct Elimination View
* Use a Request to retrieve available tournaments as opposed to hard coding tournaments in the application itself


===

Long-Term Goals <a id="StretchGoals"></a>
---

Ultimately, I have a large number of long-term goals that fit the theme of Coaches Assistant. After the prior features are implemented,
ideally, these features would enhance the functionality and make it a better theme for individuals that utilize the application or the webapi.

* Use a QR Reading Library to implemenet addition of tournaments via QR Code in the Application
* Introduce Video Recording that you can associate with bouts
  * Allow users to draw on the video that was recording for video analysis. (Similar to Coaches Eye)
* Web Interface for interacting with the Web API on desktops, for tournament stats, etc.
* Additional Sources of Information (AskFRED, FIE Results, etc.)
* Total Replacement for Fencing Time, which includes post to Coaches Assistant, allowing scores to be input directly via the app with referees,
allowing the bout commitee to push notifications to referees to assign pools, and increase effiency at large-scale tournaments by reducing walking time.

Ultimately, the longest-term goal of this project is utilizing the data collected by the application and web-interface to create a model
to predict what is fact and what is fiction in regards to Fencing.

What I mean by that, is that we, as athletes, in general take a lot of things for granted. For example, when we say someone is a good coach,
well is it the coach that is good, or the fencer? Or does practicing several hours a day actually improve your skills at a faster rate than practicing
only 30 minutes a day? Ultimately, I want to confirm that is fact and what is fiction, and see if there is a model to predict the future champions of USFencing
based on their results utilizing Machine Learning.

