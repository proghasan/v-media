import { reactive, toRefs } from "vue";
import type Rules from "@/types/Rules";
import type Result from "@/types/Result";

export function useAttachment() {
  const state = reactive({
    selectedFiles: <Result[]>[],
  });

  const previewAble = ["image"];

  function remove(index: number) {
    if (state.selectedFiles) {
      state.selectedFiles = state.selectedFiles.filter(
        (attachment) => attachment.id !== index
      );
    }
  }

  function setAttachment(
    files: FileList | Array<string> | undefined,
    rules: Rules
  ) {
    state.selectedFiles = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const selectedFile = <Result>{};
        const file = files[i];
        const fileType = getFileType(file);
        selectedFile.id = i;
        selectedFile.fileName = getFileName(file);
        selectedFile.fileType = fileType;
        selectedFile.isPreviewAble = previewAble.includes(fileType);
        selectedFile.file = file;

        if (typeof file !== "string") {
          selectedFile.fileSize = convertKB(file.size);
          if (
            selectedFile.fileSize > rules.maxSizeInKB ||
            !rules.accept.includes(file.type)
          ) {
            selectedFile.isError = true;
          }
          selectedFile.fileSrc = selectedFile.isPreviewAble
            ? URL.createObjectURL(file)
            : getIcon(fileType);
        } else {
          selectedFile.fileSrc = selectedFile.isPreviewAble
            ? file
            : getIcon(fileType);
        }

        state.selectedFiles.push(selectedFile);
      }
    }
  }

  function convertKB(byte: number | undefined) {
    return Math.floor(<number>byte / 1000);
  }

  function getIcon(type: string) {
    if (type === "image") {
      return "/src/assets/icons/image.png";
    } else if (type === "pdf") {
      return "/src/assets/icons/pdf.png";
    } else if (type === "video") {
      return "/src/assets/icons/video.png";
    } else if (type === "doc") {
      return "/src/assets/icons/doc.png";
    }
  }

  function getFileType(file: File | string) {
    if (typeof file === "string") {
      const url = new URL(file);
      const ext = url.pathname.substr(url.pathname.lastIndexOf(".") + 1);
      switch (ext) {
        case "bmp":
        case "gif":
        case "jpeg":
        case "jpg":
        case "png":
        case "svg":
        case "webp":
          return "image";
        case "pdf":
          return "pdf";
        case "mp3":
        case "mp4":
        case "mkv":
        case "avi":
        case "webm":
          return "video";
        case "doc":
        case "docx":
          return "word";
        case "ppt":
        case "pptx":
          return "ppt";
        case "xls":
        case "xlsx":
          return "excel";
        case "key":
          return "key";
        case "pages":
          return "pages";
        default:
          return "doc";
      }
    } else {
      switch (file.type) {
        case "image/apng":
        case "image/bmp":
        case "image/gif":
        case "image/jpeg":
        case "image/png":
        case "image/svg+xml":
        case "image/tiff":
        case "image/webp":
        case "image/x-icon":
          return "image";
        case "video/mp4":
        case "video/mpeg":
        case "video/ogg":
        case "video/x-msvideo":
          return "video";
        case "application/pdf":
          return "pdf";
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          return "excel";
        default:
          return "doc";
      }
    }
  }

  function getFileName(file: File | string) {
    return typeof file === "string"
      ? new URL(file).pathname.substr(
          new URL(file).pathname.lastIndexOf("/") + 1
        )
      : file.name.split(".").pop();
  }

  return {
    ...toRefs(state),
    setAttachment,
    remove,
  };
}
