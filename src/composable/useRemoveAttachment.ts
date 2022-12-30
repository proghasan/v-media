import { useAttachment } from "@/composable/useAttachment";

export function useRemoveAttachment() {
  const { selectedFiles } = useAttachment();

  console.log("selectedFiles", selectedFiles);

  function remove(id: string) {
    console.log(selectedFiles.value);
    selectedFiles.value = selectedFiles.value.filter((file) => file.id != id);
  }

  return { remove };
}
