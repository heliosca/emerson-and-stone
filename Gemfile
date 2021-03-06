source 'https://rubygems.org'
ruby '2.4.0'

git_source(:github) do |repo_name|
  repo_name = '#{repo_name}/#{repo_name}' unless repo_name.include?('/')
  'https://github.com/#{repo_name}.git'
end

gem 'rails', '~> 5.0.2'

gem 'administrate', '~> 0.3.0'
gem 'autoprefixer-rails'
gem 'bcrypt', '~> 3.1.7'
gem 'bourbon' # added to prevent high voltage bourbon unreadable error
gem 'font-awesome-rails'
gem 'high_voltage'
gem 'jquery-rails'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'slim'
gem 'sprockets-rails'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


# Add this if you're using rbenv
# gem 'capistrano-rbenv', '~> 2.1'

group :development, :test do
  gem 'bundler-audit', require: false
  gem 'dotenv-rails'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'rspec-rails'
end

group :development do
  gem 'bullet'
  gem 'capistrano', '~> 3.7', '>= 3.7.1'
  gem 'capistrano-rails', '~> 1.2'
  gem 'capistrano-passenger', '~> 0.2.0'
  gem 'capistrano-rbenv', '~> 2.1'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'codeclimate-test-reporter', '~> 1.0.0'
  gem 'factory_girl_rails'
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'rake'
  gem 'simplecov'
  gem 'webmock'
end
