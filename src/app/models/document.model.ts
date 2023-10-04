export class DocumentModel {
  constructor(
    public name?: string,
    public mimeType?: string,
    public extension?: string,
    public data?: string,
    public size?: number
  ) {}
}
