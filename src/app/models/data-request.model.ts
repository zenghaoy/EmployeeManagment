import { DocumentModel } from "./document.model";

export class DataRequestModel {
  constructor(
    //q1
    public additionalDataAttr?: string,
    public freqOfKey?: string,
    public freqOfRequestorOther?: string,
    public techEmail?: string,

    public isCutomSnapShot?: boolean,
    public customSnapshotDetails?: string,
    public dataExtractStartDate?: string,
    public dataExtractEndDate?: string,

    public hasPreviousRequest?: boolean,
    public prevRequestNumber?: string,

    public dataRequiredByDate?: string,
    public formatTypeKey?: string,
    public formatTypeDetails?: string,
    public sampleFormatDocuments?: Array<DocumentModel>,

    public reasonDetailsKay?: Array<string>,
    public reasonDetailsOther?: string,
    public reasonDetailsPurpose?: string,

    public isTheDateValid?: boolean
  ) {}
}
