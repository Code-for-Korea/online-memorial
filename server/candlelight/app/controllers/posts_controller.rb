class PostsController < ApplicationController
  def index
    # @posts = Post.all
    @posts = Post.order('id desc').page(params[:page]).per(params[:per_page] || 5)
    render json: { posts: @posts, meta: meta_data(@posts) }
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:name, :body)
  end
end