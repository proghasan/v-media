import { ref } from "vue";
import type Rules from "@/types/Rules";
import type Result from "@/types/Result";

export function useAttachment() {
  const selectedFiles = ref<Result[]>([]);
  const selectedFile = ref<Result>({});

  function convertKB(byte: number | undefined) {
    return Math.floor(<number>byte / 1000);
  }

  function setAttachment(files: FileList | undefined, rules: Rules) {
    selectedFiles.value = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        selectedFile.value = {};
        selectedFile.value.id = randomNumber();
        selectedFile.value.fileSize = convertKB(files[i].size);
        const file = files[i];
        if (
          selectedFile.value.fileSize > rules.maxSizeInKB ||
          !rules.accept.includes(file.type)
        ) {
          selectedFile.value.isError = true;
        }
        selectedFile.value.fileName = file.name.split(".").pop();
        selectedFile.value.file = file;
        selectedFile.value.fileSrc = URL.createObjectURL(file);
        selectedFiles?.value.push(selectedFile.value);
      }
    }
  }

  function randomNumber() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  function remove(id: string) {
    if (selectedFiles.value) {
      selectedFiles.value = selectedFiles.value.filter((file) => file.id != id);
    }
  }

  return {
    setAttachment,
    selectedFiles,
    remove,
  };
}
