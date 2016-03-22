class WelcomeController < ApplicationController
  def index
  	@cont = Victim.count()
  end
  def victimas
    if current_user.id=1
      @vict= Victim.all
      else
      @vict= Victim.where("swusu like '#{current_user.id}'")
    end
  end
  def ataques
    
  end
  def servicios
  end
end
 