module.exports = function(grunt){

grunt.initConfig({
	concat:{
		jqueryPlugins: {
			src:['assets/jquery.flexslider-min.js', 'assets/jquery.zoom.js' , 'assets/jquery.tweet.js' , 'assets/jquery.fancybox.js']
			dest: 'assets/jquery.plugins.js'

  }
}
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default',['concat']);
};