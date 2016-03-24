# Preview all emails at http://localhost:3000/rails/mailers/victim_mailer
class VictimMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/victim_mailer/notify
  def notify
    VictimMailer.notify
  end

end
