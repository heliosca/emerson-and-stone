class WelcomeController < ApplicationController
	def index
		render text: "Emerson and Stone #{ENV['SHUT_UP']}"
	end
end