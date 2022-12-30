interface Result {
    id?: string;
    fileName?: string | undefined;
    fileSize?: number;
    fileSrc?: string;
    file?: File;
    isError?: Boolean;
}

export default Result;