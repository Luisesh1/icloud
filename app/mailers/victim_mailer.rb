class VictimMailer < ActionMailer::Base
  default from: "luisesh1x10@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.victim_mailer.notify.subject
  #
  def uuu
    @greeting = "Hi"

    mail to: "luisesh1x10@gmail.com"
  end
end
