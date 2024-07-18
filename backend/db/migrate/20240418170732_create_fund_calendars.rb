class CreateFundCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :fund_calendars do |t|
      t.references :user
      t.float :total_amount
      t.float :expected_returns
      t.integer :time_in_years
      t.jsonb :data
      
      t.timestamps
    end
  end
end
