import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function DojoCardCover({coverImage}) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    setImageURL(`data:image/jpeg;base64,${coverImage}`);
  }, [coverImage]);

  return (
    <div>
      {imageURL && <Image src={imageURL} alt="Cover" width={286} height={270} />}
    </div>
  );
}
