import { ChangeEvent, useState } from "react";

import SVG from "react-inlinesvg";

import { getIconPath } from "@src/utils/helpers";

import {
  AvatarWrapper,
  FileUploader,
  InputFile,
  PreviewPhoto,
  SelectYourPhoto,
} from "./avatar.styled";

const Avatar = () => {
  const [base64Photo, setBase64Photo] = useState("");

  const handlePhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || (e.target.files || []).length === 0) {
      return;
    }

    const rawPhoto = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(rawPhoto);

    fileReader.addEventListener("load", () => {
      const base64Photo = fileReader.result as string;

      if (!base64Photo.startsWith("data:image/")) {
        alert("Invalid file type");
        return;
      }

      setBase64Photo(base64Photo);
    });
  };

  const renderPreviewPhoto = () => {
    if (!base64Photo) {
      return null;
    }

    return <PreviewPhoto style={{ backgroundImage: `url(${base64Photo})` }} />;
  };

  const renderFileUploader = () => {
    return (
      <FileUploader htmlFor="file-uploader" hidden={!!base64Photo}>
        <SVG width={32} height={32} src={getIconPath("camera.svg")} />
        <SelectYourPhoto>
          {base64Photo ? "Change your photo" : "Select your photo"}
        </SelectYourPhoto>
        <InputFile
          id="file-uploader"
          type="file"
          accept="image/*"
          onChange={handlePhotoSelect}
        />
      </FileUploader>
    );
  };

  return (
    <AvatarWrapper>
      {renderPreviewPhoto()}
      {renderFileUploader()}
    </AvatarWrapper>
  );
};

export default Avatar;
