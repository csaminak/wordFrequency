(function(){
    'use strict';

    function wordFrequency(string){
        var stringArray = string.replace(/\'s|\'|\.|\,|\"|\;|\:|\(|\)|\*|\^|\&|\# /g,'');
        stringArray = stringArray.toLowerCase().split(' ');

        var words = {};

        stringArray.forEach(function(word){
            if(word.length > 1) {
                if (words[word]) {
                    words[word]++;
                } else {
                    words[word] = 1;
                }
            }
        });

    }

    wordFrequency('string');

})();
