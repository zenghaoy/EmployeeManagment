export class PrivacyModel {
  constructor(
    public hasAuthorityToUseData?: boolean,
    public legSectionKey?: string,
    public legSectionOtherText?: string,
    public requiredRetainData?: boolean,
    public isLeasing?: boolean,
    public thirdParty?: string,
    public lengthOfIntended?: string
  ) {}
}
