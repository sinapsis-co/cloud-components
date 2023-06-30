import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';

import { LandingModel } from '../model/landing';
import { LandingZoneTable } from '../store/table-landing';

export const repoLanding = repository<LandingZoneTable, LandingModel>(LandingZoneTable, {
  type: 'landing',
  tableName: 'landing-zone',
  keySerialize: (key: LandingModel['Key']) => {
    return {
      PK: key.id,
    };
  },
});
