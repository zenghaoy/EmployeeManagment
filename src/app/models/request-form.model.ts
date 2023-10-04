import { DataRequestModel } from './data-request.model';
import { PrivacyModel } from './privacy.model';
import { RequestorDetailModel } from './requestor-detail.model';

export class RequestFormModel {
  constructor(
    public dataRequest?: DataRequestModel,
    public requestorDetails?: RequestorDetailModel,
    public privacy?: PrivacyModel
  ) {}
}
