class Contact < ApplicationRecord
  validates :name, :email, :phone, :comment, presence: true 
  
end
