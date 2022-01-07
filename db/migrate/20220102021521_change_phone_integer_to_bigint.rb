class ChangePhoneIntegerToBigint < ActiveRecord::Migration[6.1]
  def change
    change_column :contacts, :phone, :bigint
  end
end
