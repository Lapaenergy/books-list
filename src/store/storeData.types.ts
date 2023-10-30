export interface PreparedBook {
  id: string;
  preview: string;
  title: string;
  publicName: string;
  price: string;
}

export interface InitialBook {
  id: string;
  price: string;
  title: string;
  author: {
    details: {
      publicName: string;
    };
  };
  firstPreviewImage: {
    watermarked: string;
  };
}
