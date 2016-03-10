/**
 * Created by Julius Hernandez on 2/17/2016.
 */
"use strict";

google.load("feeds", "1");

var zsolution = true;

var solveProblem = function(){
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/TEDTalks_video");
  feed.setNumEntries(24);
  feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);

  feed.load(function(result){

    if(!result.error){
      console.log(result, typeof result);
      var container = document.getElementById("feed");

      for(var i = 0; i < result.feed.entries.length; i++){
        var entry     = result.feed.entries[i],
            div       = document.createElement("div"),
            divInner1 = document.createElement("div"),
            divInner2 = document.createElement("div"),
            divInner3 = document.createElement("div");

        divInner1.appendChild(document.createTextNode(entry.title));
        divInner2.appendChild(document.createTextNode(entry.publishedDate));
        divInner3.appendChild(document.createTextNode(entry.contentSnippet));

        div.appendChild(divInner1);
        div.appendChild(divInner2);
        div.appendChild(divInner3);

        var divClass = document.createAttribute("class");
        divClass.value = "ted-vid";
        div.setAttributeNode(divClass);
        div.addEventListener("click", function(){
          //window.location.href = entry.link;
          window.open(entry.link);
        });

        container.appendChild(div);
      }
    }
  });
};

var solveProblem2 = function(){
  console.log("solveProblem2 called");
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/TEDTalks_video");
  feed.setNumEntries(4);
  feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);

  feed.load(function(result){
    if(!result.error){
      var container = document.getElementById("feed");
      for(var i = 0; i < result.feed.entries.length; i++){
        var entry = result.feed.entries[i];
        var div   = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div);
      }
    }
  });
};

google.setOnLoadCallback(zsolution ? solveProblem : solveProblem2);

