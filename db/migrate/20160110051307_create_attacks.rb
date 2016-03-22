class CreateAttacks < ActiveRecord::Migration
  def change
    create_table :attacks do |t|
      t.string :link
      t.string :alias
      t.text :foto
      t.text :estracto
      t.integer :idusuario
      t.timestamps
    end
  end
end
