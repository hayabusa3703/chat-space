class UsersController < ApplicationController

  def index
    @user = User.where('name LIKE(?)', "%#{paramas[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end


def search
    @products = Product.where('title LIKE(?)', "%#{params[:keyword]}%").limit(20)
  end

# モデルクラス名.where('検索するカラム名 LIKE(?)', "検索するキーワード")
