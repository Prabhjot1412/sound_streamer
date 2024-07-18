# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: [1,2,3] }
  end
end
