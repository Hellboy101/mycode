module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nggettext_extract: {
            pot: {
                files: {'po/template.pot': ['**/*.html']}
            }
        },
        nggettext_compile: {
            all: {
                files: {
                    'public/app/translations/translation.js': ['po/*.po']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-gettext');
};