ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' # Set up gems listed in the Gemfile.
require 'bootsnap/setup' # Speed up boot time by caching expensive operations.

require 'dotenv'

powenv_file_path = ".powenv"
if File.exists?(powenv_file_path)
  Dotenv.load(powenv_file_path)
end