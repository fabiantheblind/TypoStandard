﻿// basic javascript snippets for indesign cs 4// written by fabiantheblind// http://www.the-moron.net// first of all open basicDoc.idml or use script buildDocument.jsx// to build the doc we are using// check you setupcheckSetup();//this runs the functionmain();// this is the functionfunction main(){// setup some variablesvar theDoc = app.activeDocument; // active docvar thePage = theDoc.pages.item(0); // first pagevar theTextFrame = thePage.textFrames.item(0); // the one textframe that is there// now we can loop thru the textfor(var i = 0;i < theTextFrame.words.length; i++){	var theValue = Math.random()*23;		if(theValue < 4.9){			theValue = 5;			}	// the next line loops thru all words in the text	theTextFrame.words.item(i).pointSize = theValue;	}}function checkSetup(){				if(app.documents.length < 1){			alert("You need a document with a page and a textframe with some text\nYour document is missing\nUse \"buildDocument.jsx\"!");			exit();			}		if(app.documents.item(0).pages.item(0).textFrames.length < 1){			alert("You need a document with a page and a textframe with some text\nYour textframe is missing\nUse \"buildDocument.jsx\"!");			exit();			}		if(app.documents.item(0).pages.item(0).textFrames.item(0).characters.length < 1){			alert("You need a document with a page and a textframe with some text\nYour textframe has no content\nUse \"buildDocument.jsx\"!");			exit();			}			}