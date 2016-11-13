require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
#http_path = (environment == :production) ? "/wp-content/themes/fp/" : "/"
http_path = "/"
css_dir = "css"
sass_dir = "stylesheets"
images_dir = "images"
javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = (environment == :production) ? false : true

preferred_syntax = :sass
