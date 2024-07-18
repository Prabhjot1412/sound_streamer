module Image
  class FetchComments
    def self.call(image_id:)
      ImageDetail.where(image_id: image_id)
    end
  end
end
