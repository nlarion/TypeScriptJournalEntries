/// <reference path="journal-interface.ts" />
/// <reference path="journal-author.ts" />


var authors = Journal.author;

var entries = [];
entries.push(new Journal.Entry("This is a title","This is a body", authors.thor));

$(document).ready(function(){
  listEntries();
  for (var key in authors){
    $('#author').append("<option value='"+ key +"'>"+key+"</option>");
  }



  $('#submit').click(function(){
    var title = $('#title').val();
    var body = $('#body').val();
    var author = $('#author').val();
    entries.push(new Journal.Entry(title,body,authors[author]));
    listEntries();
  });
});

var listEntries = function(){
  $('#listEntries').html('');
  for (var i = 0; i < entries.length; i++) {
    //console.log(entries[i]);

    $('#listEntries').append('<div id="entry' + i + '"  ><br>Title: '+entries[i].title+'<br>Entry Text: '+entries[i].body+ '<br>Word Count: ' +entries[i].wordCount()+ '<br>Author: '+entries[i].assignedTo.name+'<br>Votes: '+entries[i].votes);

    $('#entry' + i).append('<span class="glyphicon glyphicon-arrow-up" id="up'+i+'" up="'+i+'" aria-hidden="true"></span>');

    $('#entry' + i).append('<span class="glyphicon glyphicon-arrow-down" id="down'+i+'" down="'+i+'" aria-hidden="true"></span>');

    $('#up' + i).click(function(){
      entries[$(this).attr("up")].upVote();
      console.log($(this).attr("up"));
      listEntries();
    });

    $('#down' + i).click(function(){
      entries[$(this).attr("down")].downVote();
      console.log($(this).attr("down"));
      listEntries();
    });

    // +<span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span><br></div>');
  }
  // $('.glyphicon-arrow-up').click(function(){
  //   console.log(this.id);
  // })
//   entries.forEach(function(entry){
//     console.log(entry);
//     $('#listEntries').prepend('<div class="entry"><br>Title: '+entry.title+'<br>Entry Text: '+entry.body+ '<br>Word Count: ' +entry.wordCount()+ '<br>Author: '+entry.assignedTo.name+'<br>Votes: '+entry.votes+'<br></div>');
//   });
}
