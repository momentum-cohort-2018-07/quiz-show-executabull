class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.references :quiz, foreign_key: true
      t.string :q_text

      t.timestamps
    end
  end
end
