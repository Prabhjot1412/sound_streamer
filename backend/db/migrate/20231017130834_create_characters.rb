class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :profile

      t.string :name, null: false
      t.string :avatar_name, default: Character::DEFAULT_AVATAR
      t.string :char_class
      t.integer :level, default: 1
      t.float :hp, default: 100.00
      t.float :mp, default: 100.00
      t.float :current_hp
      t.float :current_mp
      t.float :attack, default: 0
      t.float :magic_attack, default: 0
      t.float :defense, default: 0
      t.float :magic_defense, default: 0

      t.timestamps
    end
  end
end
