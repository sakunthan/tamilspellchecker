var err = initInstall("Tamil Spell Checker", "ta-TA@dictionaries.addons.mozilla.org", "0.1");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "ta-TA@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();