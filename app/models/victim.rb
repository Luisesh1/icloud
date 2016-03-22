class Victim < ActiveRecord::Base
	validates :usu, presence: true
	validates :con, presence: true
end
