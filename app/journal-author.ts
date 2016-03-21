/// <reference path="journal-interface.ts"/>

module Journal {
  var diane: Journal.IAuthor = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: Journal.IAuthor = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: Journal.IAuthor = {
    name: "God of mischief",
    email: "loki@geocities.com"
  }
  var person: Journal.IAuthor = {
    name: "Person",
    email: "person@geocities.com"
  }

  export var author = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
    "person": person
  };
}
