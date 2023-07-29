import type {
  IReceiveSharingIntent,
  SharedFile,
} from './ReceiveSharingIntent.interfaces';
declare class ReceiveSharingIntentModule implements IReceiveSharingIntent {
  private isIos;
  private utils;
  private isClear;
  getReceivedFiles(
    handler: (files: SharedFile[]) => void,
    errorHandler: (error: any) => any,
    protocol?: string
  ): void;
  clearReceivedFiles(): void;
  protected getFileNames(
    handler: Function,
    errorHandler: Function,
    url: string
  ): void;
}
export default ReceiveSharingIntentModule;
