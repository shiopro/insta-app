class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user, notice: 'プロフィールが更新されました'
    else
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:avatar)
  end
end