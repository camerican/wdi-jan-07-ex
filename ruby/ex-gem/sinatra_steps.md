

## Steps to start-up a Sinatra Application

Sinatra applications are launched through a single file, typically.  We'll often call the file `main.rb` or `app.rb`.

To get started, try the following first step of making sure Sinatra is installed:

```bash
touch Gemfile
```

Edit the Gemfile to include the following:

```
# Gemfile
source "http://rubygems.org"

gem "sinatra"
# plus any other gems
```

We could optionally include the ruby version number we're working with, but often it's fine to just leave that out.

Once we set up our Gemfile, we'll want to run `bundle install` (or `bundle exec install`) to set the gems up.  If you don't yet have bundler, run `gem install bundler` but you only have to do that once.

## Building our app

We'll want to require the sinatra gem inside of our main application file.  And then we can just run that file to start the webserver up.

```ruby
# main.rb
require 'sinatra'

get '/' do
  erb :index
end
```

We'll want to set up our template now...  We can create an `index.erb` file within the `views` directory.  

```bash
mkdir views
touch views/index.erb
```

```html
<!-- index.erb -->
<html>
  <head></head>
  <body><h1>Homepage</h1></body>
</html>
```

## To launch our server

To launch, we simply have to run our `main.rb` file where sinatra is being required.  `ruby main.rb`  By default, this will be on port 4567.  To stop the webserver, we can type CTRL+C.





