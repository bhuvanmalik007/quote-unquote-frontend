vm=new Vue({
el: 'body',
  data: {
    i:0,
    img: 'http://winteriscoming.net/wp-content/uploads/2016/02/Hall-of-Faces-Season-6-Teaser-810x455.png',
    quote:"",
    characterarray:{
      "Cersei Lannister": "http://lovelace-media.imgix.net/uploads/14/ccddf260-d590-0132-4605-0ebc4eccb42f.jpg?",
      "Tywin Lannister":"http://66.media.tumblr.com/84beca6640ebfd1cb8145f205f5756b8/tumblr_inline_o648fwMg1O1slrvm0_1280.jpg",
      "Ramsay Snow":"https://nyoobserver.files.wordpress.com/2015/05/upqspikox-g2xukcrgmaivxn9qq.png",
      "Eddard Stark":"http://images4.fanpop.com/image/photos/18600000/Eddard-Ned-Stark-game-of-thrones-18621833-1280-720.jpg",
      "Tyrion Lannister":"http://www.adventuresinpoortaste.com/wp-content/uploads/2015/05/s05e07_0_tyrion.jpg",
      "Ygritte":"https://s-media-cache-ak0.pinimg.com/736x/7b/ba/d6/7bbad656edc750e538be0520e228d441.jpg",
      "Hodor":"http://winteriscoming.net/wp-content/uploads/2010/07/hodor.jpg",
      "Melisandre":"http://pixel.nymag.com/imgs/daily/vulture/2015/06/18/18-melisandre-game-of-thrones.w1200.h630.jpg",
      "Robert Barathean":"http://i.stack.imgur.com/uwi3K.jpg",
      "Jaime Lannister":"http://vignette1.wikia.nocookie.net/villainstournament/images/2/21/Jaime_lannister.jpg/revision/latest?cb=20140703200540",
      "Samwell Tarly":"https://upload.wikimedia.org/wikipedia/it/c/ca/Samwell_Tarly.jpg"
    },
    styleObject1:{
     display: 'none',
     visibility: 'hidden'
   },
    styleObject:{

      visibility: 'visible'
    },

   si:null,
  },

  methods:{

    end: function(){
      clearInterval(this.si);
      this.styleObject1={

        display: 'none',
        visibility: 'hidden'
      };

      this.styleObject={

        visibility: 'visible'
      };

    },

  	begin: function(){

      this.styleObject={
          display: 'none',
          visibility: 'hidden'
        };
        this.styleObject1={

          visibility: 'visible'
        };

      this.$http({url:'https://quoteunquote.herokuapp.com/scrape', method:'GET'}).then(function (response) {


                // get status
                console.log("status : "+response.status);
                console.log(response.data);

                vm.writeNext(vm.i++,response);

                  this.si=setInterval(function(){

                    vm.writeNext(vm.i++,response)
                  }, 5000);

            }, function (error) {


              console.log('oh snap! error('+error.status+')');
                // error callback
            }

          );

       },

       writeNext : function(i, response) {

       if(i == response.data.length)
           {return;}

       this.quote=response.data[i].quote;
       this.img=this.characterarray[response.data[i].character];
     }



  }

})
