class Api::ContactsController < ApplicationController

  def index 
    @contacts = Contact.all 
    render json: @contacts
  end

  def show 
    @contact = Contact.find(params[:id])
    render json: @contact
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else 
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def updated
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end 

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    render json: { message: 'Contact is deleted.'}
  end

  private 

    def contact_params
      params.require(:contact).permit( :name, :email, :phone, :comment )
    end
end
