
// The export statement makes these settings available to other files in 11ty

//<script src="//unpkg.com/alpinejs" defer></script>;
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("_includes");

  //gen_name is function shortcode, requiring element name
  eleventyConfig.addShortcode("gen_name", function(name){
     //`<div x-data="{name:['Shane', 'Jane', 'Ilya', 'Lily', 'Svetlana', 'Hayden', 'Cliff', 'Rose', 'Yuna', 'David']}"></div>`;
     
    `<div class="gen_name">
      <div class="generated">${name}</div>
    </div>`;    
  return name[0];
  });
  eleventyConfig.addShortcode("test", function(){
    window.alert("This is a test")
  });
};


//create variable to be used as output with 'let'
//use Math() funct to choose a random num 0-9 
//set variable to the rand num
//gen_name displays name associated with that place in 'name' matrix