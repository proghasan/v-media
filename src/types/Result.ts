interface Result {
  id?: number;
  fileName?: string | undefined;
  fileSize?: number;
  fileType?: string;
  fileSrc?: string;
  file?: File | string;
  isError?: Boolean;
  isPreviewAble?: Boolean;
}

export default Result;
