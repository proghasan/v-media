export function useFileSize(file: File | undefined) {
  const size = Math.floor(Math.log(<number>file?.size) / Math.log(1024));

  return { size };
}
